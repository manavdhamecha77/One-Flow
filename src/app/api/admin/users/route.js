import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoUsers = [
    { id: "u1", firstName: "Alice", lastName: "Project", email: "alice@oneflow.com", role: "project_manager", status: "active" },
    { id: "u2", firstName: "Bob", lastName: "Dev", email: "bob@oneflow.com", role: "team_member", status: "active" },
    { id: "u3", firstName: "Charlie", lastName: "Finance", email: "charlie@oneflow.com", role: "sales_finance", status: "active" }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const users = await prisma.user.findMany({
      where: { companyId: user.companyId },
      select: { id: true, firstName: true, lastName: true, email: true, role: true }
    });

    if (users.length <= 1) { // Only admin themselves
        return NextResponse.json({ users: [...users, ...demoUsers] });
    }

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
