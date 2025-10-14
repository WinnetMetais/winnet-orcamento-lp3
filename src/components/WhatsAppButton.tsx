import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os produtos Winnet. Vim através da Landing Page Premium."
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5511978791851&text=${whatsappMessage}`;

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce p-0"
      asChild
      aria-label="Falar no WhatsApp"
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
