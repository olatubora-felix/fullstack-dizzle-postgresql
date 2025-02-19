import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export async function GET() {
  try {
    const data = await db.select().from(users);
    if (!data)
      return NextResponse.json(
        { message: "No data found", success: false },
        { status: 404 }
      );

    return NextResponse.json({
      message: "Data fetched successfully",
      success: true,
      data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Some went wrong" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Please provide all the fields", sucess: false },
      { status: 400 }
    );
  }

  try {
    const data = await db
      .insert(users)
      .values({ name, email, password, id: uuidv4() });
    if (!data)
      return NextResponse.json(
        { message: "Data not inserted", success: false },
        { status: 500 }
      );
    return NextResponse.json({
      message: "Data inserted successfully",
      success: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Some went wrong" }, { status: 500 });
  }
}
