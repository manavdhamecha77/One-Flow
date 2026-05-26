import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoSalesOrders = [
    { id: "so-1", orderNumber: "SO-2024-001", totalAmount: 45000, status: "confirmed", project: { name: "Phoenix Infrastructure" } },
    { id: "so-2", orderNumber: "SO-2024-002", totalAmount: 12000, status: "draft", project: { name: "Project Prometheus" } }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const orders = await prisma.salesOrder.findMany({
      where: { project: { projectManager: { companyId: user.companyId } } },
      include: { project: { select: { name: true } } }
    });

    if (orders.length === 0) {
        return NextResponse.json(demoSalesOrders);
    }

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
