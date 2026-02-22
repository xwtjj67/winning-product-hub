import { UserPlus, Search, Wallet } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "سجّل مجاناً",
    description: "أنشئ حسابك في أقل من دقيقة وابدأ تصفح المنتجات المتاحة",
  },
  {
    icon: Search,
    number: "02",
    title: "اختر منتجك",
    description: "تصفح كتالوج المنتجات الرابحة واختر ما يناسب جمهورك المستهدف",
  },
  {
    icon: Wallet,
    number: "03",
    title: "ابدأ البيع واربح",
    description: "شارك المنتج مع عملائك واحصل على عمولتك عند كل عملية بيع ناجحة",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-muted/30" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            كيف <span className="gradient-text">يعمل</span>؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ثلاث خطوات بسيطة تفصلك عن بداية الربح
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, description }, index) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-0 top-12 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-l from-primary/50 to-transparent md:block" />
              )}

              <div className="relative mb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 transition-all duration-300 hover:glow-purple">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full gradient-bg text-sm font-bold text-primary-foreground">
                  {number}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
              <p className="max-w-xs text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
