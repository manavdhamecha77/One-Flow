import { getUserFromRequest } from "@/lib/roleGuard";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const demoProducts = [
    { id: "p1", name: "Cloud Strategy Consulting", description: "Hourly consultation for cloud architecture.", price: 250 },
    { id: "p2", name: "Frontend Development", description: "Per-unit development services.", price: 180 }
];

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const products = await prisma.product.findMany({
      where: { companyId: user.companyId }
    });

    if (products.length === 0) {
        return NextResponse.json(demoProducts);
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
