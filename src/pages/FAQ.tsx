
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "ما هو نظام أبشرنا؟",
      answer: "أبشرنا هو نظام ذكي مبني على تقنيات الذكاء الاصطناعي لمساعدة مستخدمي منصة أبشر في التعامل مع استفساراتهم وشكاواهم المتعلقة بخدمات وزارة الداخلية."
    },
    {
      question: "كيف يمكنني استخدام نظام أبشرنا؟",
      answer: "يمكنك استخدام نظام أبشرنا من خلال الدردشة معه مباشرة عبر هذه المنصة. ما عليك سوى كتابة استفسارك أو سؤالك في مربع الرسائل وسيقوم النظام بالرد عليك بشكل فوري."
    },
    {
      question: "هل يمكن لنظام أبشرنا مساعدتي في جميع خدمات أبشر؟",
      answer: "نعم، تم تدريب نظام أبشرنا على معلومات شاملة عن خدمات منصة أبشر المختلفة، ويمكنه مساعدتك في معظم الاستفسارات المتعلقة بخدمات وزارة الداخلية المقدمة عبر منصة أبشر."
    },
    {
      question: "هل المعلومات التي يقدمها النظام دقيقة وموثوقة؟",
      answer: "نعم، تم تدريب النظام على معلومات رسمية ومحدثة من وزارة الداخلية. ومع ذلك، في حال وجود تحديثات جديدة على الإجراءات أو المتطلبات، يُرجى الرجوع إلى الموقع الرسمي لمنصة أبشر."
    },
    {
      question: "ماذا أفعل إذا واجهت مشكلة تقنية في النظام؟",
      answer: "يمكنك الإبلاغ عن أي مشكلة تقنية من خلال الضغط على زر 'الإبلاغ عن مشكلة تقنية' في الصفحة الرئيسية، ووصف المشكلة التي تواجهها بالتفصيل، وسيتم التعامل معها في أقرب وقت ممكن."
    },
    {
      question: "هل يمكنني استخدام النظام على مدار الساعة؟",
      answer: "نعم، نظام أبشرنا متاح على مدار الساعة طوال أيام الأسبوع، ويمكنك استخدامه في أي وقت تحتاج فيه للمساعدة."
    },
    {
      question: "كيف يمكنني الحصول على مزيد من المساعدة إذا لم يستطع النظام الإجابة على استفساري؟",
      answer: "إذا لم يستطع النظام الإجابة على استفسارك بشكل كامل، يمكنك التواصل مع فريق الدعم من خلال الضغط على رابط 'التواصل' في شريط التنقل العلوي، أو يمكنك الاتصال بمركز خدمة العملاء على الرقم 999999."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto py-8 px-4">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate('/')}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للصفحة الرئيسية
          </Button>

          <h1 className="text-3xl font-bold mb-10 text-absher">الأسئلة الشائعة</h1>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                <AccordionTrigger className="text-right px-4 hover:no-underline">
                  <div className="flex flex-1 justify-between items-center">
                    <span className="font-semibold text-base">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-right">
                  <p className="text-base text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <div className="container max-w-5xl mx-auto">
          <p>© وزارة الداخلية - المملكة العربية السعودية - جميع الحقوق محفوظة {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
