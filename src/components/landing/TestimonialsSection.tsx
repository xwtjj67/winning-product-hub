import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد بنعلي",
    role: "وكيل تجارة إلكترونية - الدار البيضاء",
    initials: "أب",
    content: "بفضل CodConnect حققت أرباحاً ممتازة في أول شهر. المنتجات فعلاً رابحة والمخزون دائماً متوفر!",
    rating: 5,
  },
  {
    name: "سارة المنصوري",
    role: "بائعة أونلاين - مراكش",
    initials: "سم",
    content: "المنصة سهلة الاستخدام والدعم الفني ممتاز. أنصح كل من يريد بدء التجارة الإلكترونية بالانضمام.",
    rating: 5,
  },
  {
    name: "يوسف الحسني",
    role: "صاحب متجر إلكتروني - فاس",
    initials: "يح",
    content: "العمولات مجزية جداً مقارنة بالمنصات الأخرى. والتوصيل السريع يجعل العملاء راضين دائماً.",
    rating: 5,
  },
  {
    name: "فاطمة الزهراء",
    role: "وكيلة مبيعات - طنجة",
    initials: "فز",
    content: "أفضل منصة للمنتجات الرابحة في المغرب. التنوع في المنتجات والجودة العالية هي ما يميز CodConnect.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-muted/30" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ماذا يقول <span className="gradient-text">وكلاؤنا</span>؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            آراء حقيقية من وكلاء يحققون أرباحاً يومية
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-primary/30">
                    <AvatarFallback className="bg-primary/10 text-sm font-bold text-primary">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
