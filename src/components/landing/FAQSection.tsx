import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي منصة CodConnect؟",
    answer: "CodConnect هي شبكة توريد محلية تربط التجار والمسوقين بمنتجات رابحة متوفرة في مخزون محلي، مع خدمات تخزين وشحن متكاملة ونظام عمولات للوكلاء.",
  },
  {
    question: "كيف يمكنني الانضمام؟",
    answer: "املأ نموذج التسجيل أدناه وسيتواصل معك فريقنا لتفعيل حسابك وإرشادك للخطوات التالية.",
  },
  {
    question: "هل الخدمة متوفرة في مدينتي؟",
    answer: "نحن في مرحلة الإطلاق ونعمل على تغطية أكبر عدد من المدن المغربية. سجل اهتمامك وسنخبرك بمجرد توفر الخدمة في مدينتك.",
  },
  {
    question: "كيف يعمل نظام العمولات؟",
    answer: "تحصل على عمولة على كل عملية بيع ناجحة تتم من خلالك. تفاصيل نسب العمولة ستُحدد عند إطلاق المنصة.",
  },
  {
    question: "هل هناك رسوم للتسجيل؟",
    answer: "التسجيل في قائمة الانتظار مجاني تماماً. سيتم الإعلان عن تفاصيل الخطط والأسعار عند الإطلاق الرسمي.",
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
                className="rounded-lg border border-border/50 glass px-6"
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
