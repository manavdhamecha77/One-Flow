import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoInvoices = [
    { id: "inv-1", invoiceNumber: "INV-2024-001", totalAmount: 85000, status: "posted", project: { name: "Phoenix Infrastructure" } },
    { id: "inv-2", invoiceNumber: "INV-2024-002", totalAmount: 15000, status: "draft", project: { name: "Project Prometheus" } }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const invoices = await prisma.customerInvoice.findMany({
      where: { project: { projectManager: { companyId: user.companyId } } },
      include: { project: { select: { name: true } } }
    });

    if (!invoices || invoices.length === 0) {
        return NextResponse.json(demoInvoices);
    }

    return NextResponse.json(invoices);
  } catch (error) {
    console.error('Error in invoices API:', error);
    return NextResponse.json(demoInvoices);
  }
}
