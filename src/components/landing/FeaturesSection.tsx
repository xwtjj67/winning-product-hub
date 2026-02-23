import { Card, CardContent } from "@/components/ui/card";
import { Package, MapPin, Truck, Warehouse, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "منتجات رابحة مختارة",
    description: "فريقنا يختار لك أفضل المنتجات المطلوبة في السوق المغربي بعناية",
  },
  {
    icon: MapPin,
    title: "مخزون في مدينتك",
    description: "منتجات متوفرة في مخزون محلي قريب منك لتوصيل سريع وفعال",
  },
  {
    icon: Truck,
    title: "شحن سريع و COD",
    description: "خدمة شحن متكاملة مع الدفع عند الاستلام في جميع المدن",
  },
  {
    icon: Warehouse,
    title: "خدمات تخزين",
    description: "نوفر لك مساحات تخزين احترافية لإدارة مخزونك بكفاءة",
  },
  {
    icon: Users,
    title: "نظام عمولات للوكلاء",
    description: "انضم كوكيل واحصل على عمولتك على كل عملية بيع ناجحة",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "جميع المنتجات مفحوصة ومضمونة الجودة لضمان رضا عملائك",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            لماذا <span className="gradient-text">CodConnect</span>؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            بنية تحتية متكاملة للتوريد والشحن في منصة واحدة
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group glass transition-all duration-300 hover:border-primary/40 hover:glow-teal"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
