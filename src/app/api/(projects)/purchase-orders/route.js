import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoPurchaseOrders = [
    { id: "po-1", orderNumber: "PO-2024-001", totalAmount: 8500, status: "confirmed", project: { name: "Phoenix Infrastructure" } },
    { id: "po-2", orderNumber: "PO-2024-002", totalAmount: 3200, status: "draft", project: { name: "Project Prometheus" } }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const orders = await prisma.purchaseOrder.findMany({
      where: { project: { projectManager: { companyId: user.companyId } } },
      include: { project: { select: { name: true } } }
    });

    if (orders.length === 0) {
        return NextResponse.json(demoPurchaseOrders);
    }

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
