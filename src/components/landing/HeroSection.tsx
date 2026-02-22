import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Users, MapPin } from "lucide-react";

const stats = [
  { icon: Package, value: "+500", label: "منتج رابح" },
  { icon: Users, value: "+2000", label: "وكيل نشط" },
  { icon: MapPin, value: "+30", label: "مدينة" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          منصة المنتجات الرابحة #1 في المنطقة
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          اعثر على{" "}
          <span className="gradient-text">المنتجات الرابحة</span>
          <br />
          وابدأ الربح الآن
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          CodConnect تربطك بأفضل المنتجات الرابحة المتوفرة في مخزون مدينتك.
          اختر منتجك، ابدأ البيع، واحصل على عمولتك فوراً.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gradient-bg gap-2 border-0 px-8 text-lg text-primary-foreground hover:opacity-90"
          >
            ابدأ الآن مجاناً
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/60 px-8 text-lg hover:bg-muted"
          >
            اكتشف المزيد
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-2xl grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6 text-primary" />
              <span className="text-3xl font-bold text-foreground sm:text-4xl">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
