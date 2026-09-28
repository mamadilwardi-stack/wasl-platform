import Link from "next/link";
import Image from "next/image";
import { SeedButton } from "@/components/dashboard/seed-button";
import { Card, Badge } from "@/components/shared/ui";
import { BrandHeroCard } from "@/components/brand/brand-logo";
import { SuccessStoriesSection } from "@/components/reviews/success-stories";
import { SECTORS } from "@/domain/constants";
import { getDashboardStats } from "@/services/dashboard.service";
import { formatMoney } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let stats = {
    users: 0,
    providers: 0,
    orders: 0,
    activeOrders: 0,
    completedOrders: 0,
    escrowHeld: 0,
    escrowReleased: 0,
    securityAlerts: 0,
    revenue: 0,
  };

  try {
    stats = await getDashboardStats();
  } catch {
    // DB may be empty before push
  }

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl brand-navy px-6 py-12 text-white shadow-2xl shadow-wasl-950/40 sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-orange-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/3 top-1/4 h-px w-40 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          <div className="absolute right-1/4 top-1/2 h-px w-32 bg-gradient-to-r from-transparent via-orange-300/40 to-transparent" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.18em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_#22d3ee]" />
              WASL
              <span className="text-white/40">·</span>
              GLOBAL DIGITAL PLATFORM
              <span className="h-1.5 w-1.5 rounded-full bg-amber-glow shadow-[0_0_8px_#fb923c]" />
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              وصل — جسر الثقة بين
              <span className="mt-2 block bg-gradient-to-l from-cyan-300 via-white to-orange-300 bg-clip-text text-transparent">
                العملاء ومقدمي الخدمات
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              منصة وساطة عالمية بهوية تقنية فاخرة: شبكة رقمية تربط طرفين بأمان،
              مع ضمان Escrow، كشف VPN، تصفية محتوى، ومساعد ذكي — تحت شعار
              التقاء الأزرق السماوي بالبرتقالي الدافئ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="btn-primary bg-white text-wasl-950 hover:bg-cyan-50"
              >
                استعرض لوحة التحكم
              </Link>
              <Link
                href="/architecture"
                className="btn-secondary border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                البنية التقنية
              </Link>
              <SeedButton label="زرع بيانات تجريبية" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "المستخدمون", v: stats.users },
                { k: "مقدمو الخدمات", v: stats.providers },
                { k: "الطلبات النشطة", v: stats.activeOrders },
                { k: "في الضمان", v: formatMoney(stats.escrowHeld) },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
                >
                  <p className="text-[11px] text-white/55">{s.k}</p>
                  <p className="mt-1 text-xl font-bold">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <BrandHeroCard className="mx-auto w-full max-w-md shadow-[0_0_60px_rgba(34,211,238,0.12)]" />
        </div>
      </section>

      {/* Brand strip */}
      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Midnight Navy",
            desc: "خلفية داكنة فاخرة تمنح طابعًا تقنيًا واحترافيًا عالميًا.",
            swatch: "from-[#060d1a] to-[#0d1b2a]",
          },
          {
            title: "Cyan Node",
            desc: "إشعاع سماوي يرمز للعميل / الطلب والثقة الرقمية.",
            swatch: "from-cyan-400 to-sky-600",
          },
          {
            title: "Amber Node",
            desc: "دفء برتقالي يرمز لمقدم الخدمة واكتمال الوساطة.",
            swatch: "from-orange-400 to-amber-600",
          },
        ].map((b) => (
          <Card key={b.title} className="overflow-hidden p-0">
            <div className={`h-16 bg-gradient-to-l ${b.swatch}`} />
            <div className="p-4">
              <h3 className="font-bold text-wasl-950">{b.title}</h3>
              <p className="mt-1 text-sm leading-7 text-wasl-700">{b.desc}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Pillars */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            t: "ملفات مقدمي الخدمات",
            d: "مهارات، قطاعات، أسعار، تقييمات، وحالة التوفر حول العالم.",
            href: "/providers",
          },
          {
            t: "دورة حياة الطلب",
            d: "من التفاوض حتى التسليم مع حالات واضحة وانتقالات محكمة.",
            href: "/orders",
          },
          {
            t: "نظام الضمان Escrow",
            d: "حجز الأموال حتى الموافقة، ثم الإفراج مع إشعار واتساب للمنسق.",
            href: "/payments",
          },
          {
            t: "الأمن والامتثال",
            d: "سجلات VPN، كلمات محظورة، تنبيهات احتيال، ومراجعة المشرفين.",
            href: "/security",
          },
        ].map((p) => (
          <Link
            key={p.t}
            href={p.href}
            className="card block p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-wasl-950">{p.t}</h3>
            <p className="mt-2 text-sm leading-7 text-wasl-700/80">{p.d}</p>
          </Link>
        ))}
      </section>

      {/* Sectors */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-wasl-950">القطاعات المدعومة</h2>
            <p className="text-sm text-wasl-700/70">تغطية عالمية لمختلف المهن والحرف</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SECTORS.map((s) => (
            <Card key={s.id} className="p-4 text-center">
              <p className="font-semibold text-wasl-900">{s.ar}</p>
              <p className="mt-1 text-[11px] text-wasl-600">{s.en}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Verified Reviews & Success Stories — between sectors and infrastructure/brand */}
      <SuccessStoriesSection />

      {/* Logo showcase / brand infrastructure */}
      <section className="card overflow-hidden p-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] brand-navy">
            <Image
              src="/images/wasl-logo.png"
              alt="WASL brand logo"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 sm:p-8">
            <Badge tone="info">Brand Identity</Badge>
            <h2 className="mt-3 text-2xl font-black tracking-[0.12em] text-wasl-950">
              WASL
            </h2>
            <p className="mt-1 text-xs font-semibold tracking-[0.28em] text-wasl-600">
              GLOBAL DIGITAL PLATFORM
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-wasl-800">
              <li>• خلفية Midnight Navy فاخرة بطابع تقني</li>
              <li>• شبكة عقد رقمية ترمز للوساطة العالمية</li>
              <li>• توهج سماوي × برتقالي = التقاء العميل بالمقدم</li>
              <li>• كلمة WASL بخط عريض نظيف + وصف المنصة</li>
            </ul>
            <p className="mt-4 text-xs text-wasl-500">
              الملفات: <code className="rounded bg-wasl-50 px-1">/images/wasl-logo.png</code>{" "}
              · <code className="rounded bg-wasl-50 px-1">/images/wasl-mark.png</code>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
