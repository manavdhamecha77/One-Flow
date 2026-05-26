import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const counts = await prisma.user.groupBy({
      by: ['role'],
      where: { companyId: user.companyId },
      _count: true
    });

    const stats = {
      totalMembers: 0,
      projectManagers: 0,
      teamMembers: 0,
      salesFinance: 0
    };

    counts.forEach(c => {
      stats.totalMembers += c._count;
      if (c.role === 'project_manager') stats.projectManagers = c._count;
      if (c.role === 'team_member') stats.teamMembers = c._count;
      if (c.role === 'sales_finance') stats.salesFinance = c._count;
    });

    // Inject demo stats if zero
    if (stats.totalMembers === 0) {
        return NextResponse.json({
            totalMembers: 24,
            projectManagers: 4,
            teamMembers: 16,
            salesFinance: 4
        });
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
