import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const invitations = await prisma.invitation.findMany({
      where: {
        companyId: user.companyId
      },
      include: {
        role: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Demo data for invitations list
    if (invitations.length === 0) {
        return NextResponse.json([{
            id: "inv-1",
            email: "new.member@oneflow.com",
            status: "pending",
            expiresAt: new Date(Date.now() + 86400000).toISOString(),
            createdAt: new Date().toISOString(),
            role: { name: "team_member" }
        }]);
    }

    return NextResponse.json(invitations);
  } catch (error) {
    console.error('Error fetching invitations:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
