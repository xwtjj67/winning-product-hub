import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

const MOROCCAN_CITIES = [
  "الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير",
  "مكناس", "وجدة", "القنيطرة", "تطوان", "آسفي", "الجديدة",
  "بني ملال", "خريبكة", "سطات", "العيون", "الناظور", "تازة",
];

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "الرجاء إدخال الاسم الكامل";
    if (!form.phone.trim()) {
      newErrors.phone = "الرجاء إدخال رقم الهاتف";
    } else if (!/^\+212[5-7]\d{8}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "الرجاء إدخال رقم مغربي صحيح (مثال: +212600000000)";
    }
    if (!form.city) newErrors.city = "الرجاء اختيار المدينة";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container flex flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">تم استلام طلبك بنجاح</h2>
          <p className="mt-4 text-lg text-muted-foreground">سنتواصل معك قريباً</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            سجل <span className="gradient-text">اهتمامك</span> الآن
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            املأ النموذج وسنتواصل معك في أقرب وقت
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-lg glass">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-background/50"
                  maxLength={100}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف (+212)</Label>
                <Input
                  id="phone"
                  placeholder="+212600000000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-background/50 text-left"
                  dir="ltr"
                  maxLength={13}
                />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">المدينة</Label>
                <select
                  id="city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">اختر مدينتك</option>
                  {MOROCCAN_CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
              </div>

              <Button type="submit" className="w-full gradient-bg gap-2 border-0 text-primary-foreground hover:opacity-90" size="lg">
                <Send className="h-5 w-5" />
                إرسال الطلب
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactFormSection;
