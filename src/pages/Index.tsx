
import React from 'react';
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import { ChatProvider } from '@/context/ChatContext';
import { ArrowLeft, HelpCircle, MessageSquare, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <ChatProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        
        <main className="flex-1 overflow-hidden">
          <div className="container max-w-5xl h-full mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-6">
            {/* Sidebar */}
            <aside className="md:w-64 shrink-0 space-y-4">
              <div className="glass-card p-4">
                <h2 className="font-bold text-lg mb-3">ابدأ محادثة</h2>
                <div className="space-y-2 text-sm">
                  <Button variant="ghost" className="w-full justify-start text-right" size="sm">
                    <MessageSquare className="ml-2 h-4 w-4" />
                    استفسار عن خدمات أبشر
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-right" size="sm">
                    <Bell className="ml-2 h-4 w-4" />
                    الإبلاغ عن مشكلة تقنية
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-right" size="sm">
                    <HelpCircle className="ml-2 h-4 w-4" />
                    طلب المساعدة في إجراء معاملة
                  </Button>
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h2 className="font-bold text-lg mb-3">خدمات سريعة</h2>
                <ul className="space-y-2 text-sm">
                  <li className="p-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                    تجديد رخصة القيادة
                  </li>
                  <li className="p-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                    تحديث معلومات الإقامة
                  </li>
                  <li className="p-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                    الاستعلام عن المخالفات المرورية
                  </li>
                  <li className="p-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                    إصدار تصريح سفر
                  </li>
                </ul>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                size="sm"
              >
                <ArrowLeft className="ml-2 h-4 w-4" />
                العودة إلى أبشر
              </Button>
            </aside>
            
            {/* Chat Interface */}
            <div className="flex-1 h-[calc(100vh-170px)] md:h-[calc(100vh-190px)]">
              <ChatInterface />
            </div>
          </div>
        </main>
        
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          <div className="container max-w-5xl mx-auto">
            <p>© وزارة الداخلية - المملكة العربية السعودية - جميع الحقوق محفوظة {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </ChatProvider>
  );
};

export default Index;
