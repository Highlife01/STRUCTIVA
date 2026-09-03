import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Enable JSON request body parsing
  app.use(express.json());

  // Natro SMTP Configuration for mail.kurumsaleposta.com
  const SMTP_HOST = process.env.SMTP_HOST || "mail.kurumsaleposta.com";
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
  const SMTP_USER = process.env.SMTP_USER || "info@structiva.com.tr";
  const SMTP_PASS = process.env.SMTP_PASS || "AdammmM001!!";
  const TARGET_EMAIL = process.env.TARGET_EMAIL || "cebrailkara@gmail.com";

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // API Endpoint: Send Email via Natro SMTP
  app.post("/api/send-email", async (req, res) => {
    try {
      const {
        type = "contact",
        name,
        email,
        phone,
        company,
        country,
        model,
        span,
        length,
        height,
        areaM2,
        accessories,
        message,
      } = req.body;

      const isQuote = type === "quote";
      const subjectType = isQuote ? "Yeni Proje & Teklif Talebi (RFQ)" : "Yeni İletişim Formu Mesajı";
      const subject = `[STRUCTIVA] ${subjectType}: ${name || "Web Ziyaretçisi"}`;

      const htmlBody = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: #09131c; color: #ffffff; border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #0f1d2a 0%, #162638 100%); padding: 24px 30px; border-bottom: 2px solid #f59e0b;">
            <div style="font-size: 22px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin-bottom: 4px;">STRUCTIVA</div>
            <div style="font-size: 11px; text-transform: uppercase; color: #f59e0b; letter-spacing: 1px; font-weight: bold;">
              ${subjectType} · Structiva Tesisleri Adana
            </div>
          </div>

          <!-- Body Content -->
          <div style="padding: 30px;">
            <h2 style="font-size: 18px; color: #ffffff; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); pb-10;">
              Başvuru / İletişim Bilgileri
            </h2>

            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Yetkili İsim:</strong></td>
                <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name || "Belirtilmedi"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>E-posta:</strong></td>
                <td style="padding: 8px 0; color: #38bdf8;">
                  <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email || "Belirtilmedi"}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Telefon / WhatsApp:</strong></td>
                <td style="padding: 8px 0; color: #10b981; font-weight: bold;">
                  <a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone || "Belirtilmedi"}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Şirket / Kuruluş:</strong></td>
                <td style="padding: 8px 0; color: #ffffff;">${company || "Belirtilmedi"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Ülke / Lokasyon:</strong></td>
                <td style="padding: 8px 0; color: #ffffff;">${country || "Belirtilmedi"}</td>
              </tr>
              ${model ? `
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Çelik Modeli:</strong></td>
                <td style="padding: 8px 0; color: #f59e0b; font-weight: bold;">${model}</td>
              </tr>
              ` : ""}
              ${areaM2 ? `
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Ölçüler / Alan:</strong></td>
                <td style="padding: 8px 0; color: #ffffff;">${span}m Açıklık × ${length}m Uzunluk × ${height}m Yükseklik (<strong style="color: #10b981;">${areaM2} m²</strong>)</td>
              </tr>
              ` : ""}
              ${accessories && accessories.length > 0 ? `
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;"><strong>Donanımlar:</strong></td>
                <td style="padding: 8px 0; color: #cbd5e1;">${accessories.join(", ")}</td>
              </tr>
              ` : ""}
            </table>

            <!-- Message Text -->
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 18px; margin-bottom: 24px;">
              <div style="font-size: 11px; text-transform: uppercase; color: #f59e0b; font-weight: bold; margin-bottom: 8px;">Mesaj / Proje Notu:</div>
              <div style="font-size: 13px; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${message || "Mesaj metni girilmedi."}</div>
            </div>

            <!-- Call to action -->
            <div style="text-align: center; margin-top: 24px;">
              <a href="https://structiva.web.app/dashboard" style="display: inline-block; background: #f59e0b; color: #0f1d2a; font-weight: 900; font-size: 12px; text-transform: uppercase; padding: 12px 28px; border-radius: 8px; text-decoration: none; letter-spacing: 1px;">
                Yönetici Panelinde İncele →
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #060d13; padding: 16px 30px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            Bu e-posta natro altyapısı (mail.kurumsaleposta.com) üzerinden <strong>info@structiva.com.tr</strong> tarafından otomatik oluşturulmuştur.
          </div>
        </div>
      `;

      // Send mail via Natro SMTP
      const mailOptions = {
        from: `"STRUCTIVA Web Bildirimi" <${SMTP_USER}>`,
        to: TARGET_EMAIL,
        replyTo: email || SMTP_USER,
        subject,
        html: htmlBody,
        text: `STRUCTIVA ${subjectType}\n\nİsim: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nŞirket: ${company}\nÜlke: ${country}\nModel: ${model || "-"}\nMesaj:\n${message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`[SMTP] Email sent successfully via ${SMTP_HOST}: ${info.messageId}`);

      return res.status(200).json({
        success: true,
        messageId: info.messageId,
      });
    } catch (error: any) {
      console.error("[SMTP Error] Failed to send email via Natro:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Failed to send email",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/ with Natro SMTP (${SMTP_HOST})`);
  });
}

startServer().catch(console.error);
