
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
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

          <h1 className="text-3xl font-bold mb-6 text-absher">عن نظام أبشرنا</h1>
          
          <div className="prose prose-lg max-w-none text-right">
            <p>
              "أبشرنا" هو نظام ذكي مبني على نموذج Allam لإدارة شكاوى واستفسارات مستخدمي منصة أبشر، البوابة الرقمية لوزارة الداخلية. 
              يهدف النظام إلى تحسين تجربة المستخدمين ورفع كفاءة الخدمات من خلال تقنيات الذكاء الاصطناعي المتطورة.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">التقنيات المستخدمة</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>نموذج لغوي عربي متقدم (ALLaM-7B-Instruct) لفهم دقيق للاستفسارات</li>
              <li>تقنية RAG لاسترجاع المعلومات وتقديم حلول مخصصة</li>
              <li>نظام Agent ذكي لإدارة الحوار وتوجيه المستخدمين</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">قنوات الاتصال</h2>
            <p>يوفر نظام "أبشرنا" قنوات اتصال متعددة، تشمل:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>واجهة نصية عبر موقع وتطبيق أبشر</li>
              <li>قناة واتساب للتواصل الفوري</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">الفوائد المتوقعة</h2>
            <p>من المتوقع أن يحقق "أبشرنا" فوائد كبيرة، مثل:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>تحسين رضا المستخدمين</li>
              <li>زيادة كفاءة معالجة الاستفسارات</li>
              <li>توفير الموارد التشغيلية</li>
              <li>تقديم رؤى بياناتية قيمة لتحسين خدمات وزارة الداخلية بشكل مستمر</li>
            </ul>
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

export default About;
