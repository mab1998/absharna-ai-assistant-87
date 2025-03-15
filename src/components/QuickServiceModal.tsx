
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
import { QuickService } from '@/data/quickServices';
import { useChat } from '@/hooks/useChat';

interface QuickServiceModalProps {
  service: QuickService | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickServiceModal: React.FC<QuickServiceModalProps> = ({ 
  service, 
  isOpen, 
  onClose 
}) => {
  const { sendMessage } = useChat();

  if (!service) return null;

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
    onClose();
  };

  const Icon = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="bg-absher h-8 w-8 flex items-center justify-center rounded-full text-white">
              <Icon className="h-4 w-4" />
            </div>
            {service.title}
          </DialogTitle>
          <DialogDescription>
            {service.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <h3 className="font-bold text-base">أسئلة شائعة حول هذه الخدمة:</h3>
          <div className="space-y-2">
            {service.scenario.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-right"
                onClick={() => handleQuestionClick(item.userQuestions[0])}
              >
                {item.userQuestions[0]}
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

export default QuickServiceModal;
