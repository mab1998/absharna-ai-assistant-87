
import React from 'react';
import Header from '@/components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();

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

          <h1 className="text-3xl font-bold mb-6 text-absher">الأسئلة الشائعة</h1>
          
          <div className="bg-card rounded-lg shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-right">ما هو نظام أبشرنا؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  نظام أبشرنا هو نظام ذكي مبني على نموذج علام (ALLaM) من سديم لإدارة شكاوى واستفسارات مستخدمي منصة أبشر، 
                  البوابة الرقمية لوزارة الداخلية. يهدف النظام إلى تحسين تجربة المستخدمين ورفع كفاءة الخدمات 
                  من خلال تقنيات الذكاء الاصطناعي المتطورة.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-right">كيف يمكنني استخدام نظام أبشرنا؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  يمكنك استخدام نظام أبشرنا من خلال الدردشة المباشرة على موقع أبشر، أو من خلال تطبيق الواتساب. 
                  ما عليك سوى كتابة استفسارك أو مشكلتك، وسيقوم النظام بالرد عليك وتوجيهك نحو الحل المناسب.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-right">ما هي التقنيات المستخدمة في نظام أبشرنا؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  يستخدم نظام أبشرنا تقنيات متقدمة منها:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>نموذج علام (ALLaM-7B-Instruct) من سديم، وهو نموذج لغوي عربي متقدم لفهم دقيق للاستفسارات</li>
                    <li>تقنية RAG لاسترجاع المعلومات وتقديم حلول مخصصة</li>
                    <li>نظام Agent ذكي لإدارة الحوار وتوجيه المستخدمين</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-right">ما مدى دقة الإجابات في نظام أبشرنا؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  نظام أبشرنا مبني على نموذج علام من سديم ومدرب على بيانات حقيقية من استفسارات وخدمات أبشر، 
                  مما يجعله قادراً على تقديم إجابات دقيقة في معظم الحالات. ومع ذلك، في بعض الحالات المعقدة، 
                  قد يقوم النظام بتحويلك إلى موظف خدمة عملاء للحصول على مساعدة إضافية.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-right">هل يمكنني الإبلاغ عن مشكلة تقنية من خلال النظام؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  نعم، يمكنك الإبلاغ عن مشكلة تقنية من خلال نظام أبشرنا. ما عليك سوى الضغط على زر "الإبلاغ عن مشكلة تقنية" 
                  وملء النموذج المخصص لذلك. سيقوم الفريق التقني بمراجعة المشكلة والعمل على حلها في أقرب وقت ممكن.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-right">كيف يمكنني طلب المساعدة في إجراء معاملة؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  يمكنك طلب المساعدة في إجراء معاملة من خلال الضغط على زر "طلب المساعدة في إجراء معاملة" وتحديد 
                  نوع المعاملة والتفاصيل المطلوبة. سيقوم النظام بتوجيهك خطوة بخطوة لإتمام المعاملة، أو تحويلك 
                  إلى الجهة المختصة إذا كانت المعاملة تتطلب تدخلاً بشرياً.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-right">هل بيانات المستخدمين محمية في نظام أبشرنا؟</AccordionTrigger>
                <AccordionContent className="text-right">
                  نعم، جميع بيانات المستخدمين في نظام أبشرنا محمية وفقاً لأعلى معايير الأمان والخصوصية. 
                  لا يتم مشاركة أي بيانات شخصية مع أطراف ثالثة، ويتم تشفير جميع البيانات المتبادلة بين المستخدم والنظام.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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

