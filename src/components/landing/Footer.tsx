import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/20 py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">Cod</span>
              <span className="text-foreground">Connect</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة المنتجات الرابحة الأولى التي تربط بائعي التجارة الإلكترونية بالمخزون المحلي.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="transition-colors hover:text-foreground">المميزات</a></li>
              <li><a href="#how-it-works" className="transition-colors hover:text-foreground">كيف يعمل</a></li>
              <li><a href="#pricing" className="transition-colors hover:text-foreground">التسعير</a></li>
              <li><a href="#faq" className="transition-colors hover:text-foreground">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">الدعم</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">مركز المساعدة</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">سياسة الخصوصية</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">شروط الاستخدام</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">تابعنا</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">فيسبوك</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">إنستغرام</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">تيك توك</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">واتساب</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <p className="text-center text-sm text-muted-foreground">
          © 2026 CodConnect. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
