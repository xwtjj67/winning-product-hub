import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-secondary/8 blur-[120px]" />
      </div>

      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          شبكة توريد ومنتجات رابحة للتجار
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          بنية تحتية متكاملة{" "}
          <span className="gradient-text">للتوريد والشحن</span>
          <br />
          و COD
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          نوفر للتجار والمسوقين: منتجات رابحة بمخزون محلي، خدمات تخزين، شحن سريع، ونظام عمولات للوكلاء.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gradient-bg gap-2 border-0 px-8 text-lg text-primary-foreground hover:opacity-90"
          >
            انضم لقائمة الانتظار
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/60 gap-2 px-8 text-lg hover:bg-muted"
            asChild
          >
            <a href="https://wa.me/212000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
