import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/212000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full gradient-bg px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:scale-105"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">تواصل معنا عبر واتساب</span>
    </a>
  );
};

export default WhatsAppButton;
