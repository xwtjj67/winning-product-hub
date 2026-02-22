import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "مجاني",
    price: "0",
    description: "للمبتدئين في التجارة الإلكترونية",
    features: [
      "الوصول لـ 10 منتجات",
      "عمولة 5% على المبيعات",
      "دعم عبر البريد الإلكتروني",
      "لوحة تحكم أساسية",
    ],
    popular: false,
  },
  {
    name: "احترافي",
    price: "199",
    description: "للوكلاء الجادين في تحقيق الأرباح",
    features: [
      "الوصول لجميع المنتجات",
      "عمولة 12% على المبيعات",
      "دعم فوري عبر الواتساب",
      "لوحة تحكم متقدمة",
      "أولوية في المنتجات الجديدة",
      "تدريب مجاني",
    ],
    popular: true,
  },
  {
    name: "متقدم",
    price: "499",
    description: "للمحترفين وأصحاب الفرق",
    features: [
      "كل مميزات الاحترافي",
      "عمولة 18% على المبيعات",
      "مدير حساب مخصص",
      "منتجات حصرية",
      "تقارير متقدمة",
      "API للربط مع متجرك",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            خطط <span className="gradient-text">التسعير</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            اختر الخطة المناسبة لطموحاتك
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                plan.popular
                  ? "scale-105 border-primary/60 glow-purple"
                  : "hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-4 py-1 text-sm font-bold text-primary-foreground">
                  الأكثر شعبية
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="mr-1 text-muted-foreground">د.م / شهرياً</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "gradient-bg border-0 text-primary-foreground hover:opacity-90"
                      : "border-border/60"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  ابدأ الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
