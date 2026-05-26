import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoVendorBills = [
    { id: "vb-1", billNumber: "BILL-2024-001", totalAmount: 12500, status: "posted", project: { name: "Phoenix Infrastructure" } },
    { id: "vb-2", billNumber: "BILL-2024-002", totalAmount: 4500, status: "draft", project: { name: "Project Prometheus" } }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const bills = await prisma.vendorBill.findMany({
      where: { project: { projectManager: { companyId: user.companyId } } },
      include: { project: { select: { name: true } } }
    });

    if (bills.length === 0) {
        return NextResponse.json(demoVendorBills);
    }

    return NextResponse.json(bills);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
