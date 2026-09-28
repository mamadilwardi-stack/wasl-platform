# WASL · وصل — Global Digital Platform

منصة وساطة عالمية مبنية على **Next.js 16 (App Router) + TypeScript + PostgreSQL (Drizzle ORM)** بهندسة **Clean Architecture**.

الهوية البصرية: **Midnight Navy · Cyan Node · Amber Node**.

---

## هيكل المشروع (إنتاجي)

```text
wasl/
├── docs/
│   └── ARCHITECTURE.md
├── drizzle/                      # مخرجات drizzle-kit (اختياري)
├── public/
│   ├── images/                   # wasl-logo / wasl-mark
│   └── index.html                # واجهة MVP أحادية الملف (تبقى متاحة)
├── src/
│   ├── app/                      # Next.js App Router (pages + API)
│   │   ├── api/                  # REST endpoints
│   │   ├── dashboard/
│   │   ├── revenue/
│   │   ├── settings/
│   │   ├── invoices/
│   │   ├── whatsapp/
│   │   ├── payments/
│   │   ├── orders/
│   │   ├── providers/
│   │   ├── security/
│   │   ├── assistant/
│   │   └── ...
│   ├── application/              # Use-cases (AI assistant, notify coordinator)
│   ├── components/
│   │   ├── layout/               # AppShell, maintenance banner
│   │   ├── brand/
│   │   ├── dashboard/            # Live Ops, Portal Switcher, Revenue
│   │   ├── payments/
│   │   ├── providers/
│   │   ├── disputes/
│   │   ├── invoices/
│   │   ├── whatsapp/
│   │   ├── settings/
│   │   ├── reviews/
│   │   ├── security/
│   │   ├── assistant/
│   │   └── shared/               # UI primitives
│   ├── db/                       # Drizzle client + schema
│   ├── domain/                   # Types, constants, prompts, settings DTO
│   ├── infrastructure/           # WhatsApp, IP inspector, moderation
│   ├── lib/                      # api helpers, utils
│   └── services/                 # Application services
│       ├── escrow/               # orders/payments/disputes/invoices/revenue
│       └── notifications/        # WhatsApp dispatch barrel
├── drizzle.config.ts
├── next.config.ts
├── package.json
└── .env.example
```

### طبقات Clean Architecture

| طبقة | المجلد | المسؤولية |
|------|--------|-----------|
| Domain | `src/domain` | أنواع، ثوابت، Result، إعدادات/عملات، Prompts |
| Application | `src/application` | Use-cases (AI، إشعار المنسق) |
| Infrastructure | `src/infrastructure` | WhatsApp Cloud API، VPN/IP، Content moderation |
| Services | `src/services` | منطق الأعمال + Escrow + Notifications |
| Interface | `src/app` + `src/components` | UI + REST API routes |
| Persistence | `src/db` | PostgreSQL schema عبر Drizzle |

---

## التشغيل المحلي

```bash
cp .env.example .env
npm install
npx drizzle-kit push
npm run dev
```

- التطبيق: [http://localhost:3000](http://localhost:3000)
- MVP ملف واحد (مرجع): [http://localhost:3000/index.html](http://localhost:3000/index.html)
- صحة النظام: `GET /api/health`

### سكربتات مهمة

```bash
npm run typecheck
npm run build
npm run start
npx drizzle-kit push
```

---

## الوحدات الجاهزة

- **Escrow**: تمويل/إفراج/استرداد + رسوم المنصة
- **Portal Switcher**: عميل / مقدم / أمن
- **Live Ops & Revenue Analytics**
- **Disputes & Fair Mediation Sandbox**
- **Digital Invoices & Receipts**
- **WhatsApp Dispatch Center** (Cloud API + Audit logs)
- **Platform Settings & Currency Switcher** (USD/MAD/EUR)
- **Verified Reviews & Success Stories**
- **Security**: VPN/Proxy/Tor + Content moderation
- **AI Assistant** مع `WASL_AI_SYSTEM_PROMPT`

---

## متغيرات البيئة الحرجة

انظر `.env.example`:

- `DATABASE_URL`
- `COORDINATOR_WHATSAPP_NUMBER`
- `WHATSAPP_PROVIDER=meta|generic|mock`
- `WHATSAPP_ACCESS_TOKEN` / `WHATSAPP_PHONE_NUMBER_ID`
- `OPENAI_API_KEY` (اختياري للمساعد)

---

## ملاحظات النشر

1. اضبط `DATABASE_URL` لقاعدة PostgreSQL الإنتاجية.
2. نفّذ `npx drizzle-kit push` (أو migrations) على البيئة.
3. اضبط أسرار واتساب إن لزم الإرسال الحقيقي.
4. `npm run build && npm run start` خلف reverse proxy (أو منصة Node).
5. فعّل `NEXT_PUBLIC_SITE_URL` لروابط Open Graph الصحيحة.

---

## الترخيص

خاص بمنصة وصل / WASL.
