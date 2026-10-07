import { NextResponse } from "next/server";

// Заявки поки що лише логуються на сервері.
// Щоб отримувати їх у Telegram чи на пошту — додайте відправку тут.
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Некоректний запит" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim().slice(0, 80);
  const phone = String(data.phone ?? "").trim().slice(0, 20);
  const message = String(data.message ?? "").trim().slice(0, 1000);

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Заповніть усі поля" }, { status: 400 });
  }

  console.log("[НОВА ЗАЯВКА]", { name, phone, message });
  return NextResponse.json({ ok: true });
}
