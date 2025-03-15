
import React from 'react';
import { X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useChat } from '@/hooks/useChat';

interface AbsherServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const commonQuestions = [
  "كيف يمكنني تجديد الهوية الوطنية؟",
  "ما هي خطوات تجديد جواز السفر؟",
  "كيف أستعلم عن المخالفات المرورية؟",
  "كيف يمكنني تسجيل عمالة منزلية؟",
  "ما هي خدمات أبشر أفراد؟",
  "كيف أحصل على تأشيرة زيارة عائلية؟"
];

const AbsherServicesModal: React.FC<AbsherServicesModalProps> = ({ isOpen, onClose }) => {
  const { sendMessage } = useChat();

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">استفسار عن خدمات أبشر</DialogTitle>
          <DialogDescription>
            يمكنك الاستفسار عن أي من خدمات منصة أبشر. اختر من الأسئلة الشائعة أدناه أو اكتب استفسارك الخاص.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <h3 className="font-bold text-base">الأسئلة الشائعة:</h3>
          <div className="space-y-2">
            {commonQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-right"
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button variant="ghost" onClick={onClose}>
            <X className="ml-2 h-4 w-4" />
            إغلاق
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AbsherServicesModal;
