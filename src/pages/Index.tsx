
import React, { useState } from 'react';
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import { ChatProvider } from '@/context/ChatContext';
import { ArrowLeft, HelpCircle, MessageSquare, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { quickServices, QuickService } from '@/data/quickServices';
import QuickServiceModal from '@/components/QuickServiceModal';
import AbsherServicesModal from '@/components/AbsherServicesModal';
import TechnicalIssueModal from '@/components/TechnicalIssueModal';
import TransactionSupportModal from '@/components/TransactionSupportModal';
import { useChat } from '@/hooks/useChat';

const Index = () => {
  const [selectedService, setSelectedService] = useState<QuickService | null>(null);
  const [isQuickServiceModalOpen, setIsQuickServiceModalOpen] = useState(false);
  const [isAbsherServicesModalOpen, setIsAbsherServicesModalOpen] = useState(false);
  const [isTechnicalIssueModalOpen, setIsTechnicalIssueModalOpen] = useState(false);
  const [isTransactionSupportModalOpen, setIsTransactionSupportModalOpen] = useState(false);
  
  const handleServiceClick = (service: QuickService) => {
    setSelectedService(service);
    setIsQuickServiceModalOpen(true);
  };

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
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-right" 
                    size="sm"
                    onClick={() => setIsAbsherServicesModalOpen(true)}
                  >
                    <MessageSquare className="ml-2 h-4 w-4" />
                    استفسار عن خدمات أبشر
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-right" 
                    size="sm"
                    onClick={() => setIsTechnicalIssueModalOpen(true)}
                  >
                    <Bell className="ml-2 h-4 w-4" />
                    الإبلاغ عن مشكلة تقنية
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-right" 
                    size="sm"
                    onClick={() => setIsTransactionSupportModalOpen(true)}
                  >
                    <HelpCircle className="ml-2 h-4 w-4" />
                    طلب المساعدة في إجراء معاملة
                  </Button>
                </div>
              </div>
              
              <div className="glass-card p-4">
                <h2 className="font-bold text-lg mb-3">خدمات سريعة</h2>
                <ul className="space-y-2 text-sm">
                  {quickServices.map((service) => (
                    <li 
                      key={service.id}
                      className="p-2 hover:bg-accent rounded-md cursor-pointer transition-colors flex items-center"
                      onClick={() => handleServiceClick(service)}
                    >
                      <service.icon className="ml-2 h-4 w-4 text-absher" />
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                size="sm"
                onClick={() => window.open('https://www.absher.sa', '_blank')}
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

      {/* Modals */}
      <QuickServiceModal
        service={selectedService}
        isOpen={isQuickServiceModalOpen}
        onClose={() => setIsQuickServiceModalOpen(false)}
      />
      
      <AbsherServicesModal
        isOpen={isAbsherServicesModalOpen}
        onClose={() => setIsAbsherServicesModalOpen(false)}
      />
      
      <TechnicalIssueModal
        isOpen={isTechnicalIssueModalOpen}
        onClose={() => setIsTechnicalIssueModalOpen(false)}
      />
      
      <TransactionSupportModal
        isOpen={isTransactionSupportModalOpen}
        onClose={() => setIsTransactionSupportModalOpen(false)}
      />
    </ChatProvider>
  );
};

export default Index;
