import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Mb21WNeR_Ay6T2xYUgRjTKHNTDTqUvT4P");

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Minden mező kitöltése kötelező." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
          Új üzenet a weboldalról
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Feladó neve:</td>
            <td style="padding: 8px 0; color: #1e293b;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email cím:</td>
            <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569;">Tárgy:</td>
            <td style="padding: 8px 0; color: #1e293b;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; font-weight: bold; color: #475569; margin-bottom: 8px;">Üzenet:</p>
          <p style="margin: 0; color: #1e293b; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
          Ez az email a DevDuo Studio weboldalának kapcsolatfelvételi űrlapján keresztül érkezett.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "DevDuo Studio <hajnalka@devduo.eu>",
      to: ["maro.hajnalka@gmail.com"],
      subject: `[DevDuo] ${subject} – ${name}`,
      replyTo: email,
      html,
    });

    if (error) {
      console.error("Resend error details:", JSON.stringify(error));
      return NextResponse.json({ error: `Email küldési hiba: ${JSON.stringify(error)}` }, { status: 500 });
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Szerverhiba." }, { status: 500 });
  }
}
