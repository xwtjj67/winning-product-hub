import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي منصة CodConnect؟",
    answer: "CodConnect هي منصة تربط بائعي التجارة الإلكترونية بالمنتجات الرابحة المتوفرة في المخزون المحلي. نوفر لك منتجات مختارة بعناية مع نظام عمولة مجزي على كل عملية بيع.",
  },
  {
    question: "كيف أبدأ العمل كوكيل؟",
    answer: "سجّل حسابك مجاناً، تصفح المنتجات المتاحة، اختر ما يناسبك، وابدأ مشاركتها مع عملائك. عند كل عملية بيع ناجحة، تحصل على عمولتك.",
  },
  {
    question: "كم تبلغ العمولة؟",
    answer: "تختلف العمولة حسب خطتك. الخطة المجانية تمنحك 5%، الاحترافية 12%، والمتقدمة 18% من سعر كل منتج. كلما ارتقيت في الخطط، زادت أرباحك.",
  },
  {
    question: "هل المنتجات متوفرة في مدينتي؟",
    answer: "نعم! نوفر مخزوناً محلياً في أكثر من 30 مدينة لضمان توصيل سريع وفعال لعملائك. يمكنك التحقق من التغطية عند التسجيل.",
  },
  {
    question: "متى أحصل على أرباحي؟",
    answer: "يتم تحويل أرباحك أسبوعياً إلى حسابك البنكي أو عبر وسائل الدفع المتاحة. يمكنك تتبع أرباحك في لوحة التحكم بشكل مباشر.",
  },
  {
    question: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
    answer: "بالطبع! يمكنك إلغاء اشتراكك أو تغيير خطتك في أي وقت من لوحة التحكم دون أي رسوم إضافية.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            الأسئلة <span className="gradient-text">الشائعة</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            إجابات على أكثر الأسئلة شيوعاً
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border/50 bg-card/50 px-6 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-right text-base font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
