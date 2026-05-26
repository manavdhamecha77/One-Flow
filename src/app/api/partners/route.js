import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoPartners = [
    { id: "p1", name: "Acme Corp", type: "customer", email: "contact@acme.com" },
    { id: "p2", name: "Global Cloud Services", type: "vendor", email: "support@gcloud.com" }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const partners = await prisma.partner.findMany({
      where: { companyId: user.companyId }
    });

    if (partners.length === 0) {
        return NextResponse.json(demoPartners);
    }

    return NextResponse.json(partners);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
