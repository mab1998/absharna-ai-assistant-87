
import React, { useState, KeyboardEvent } from 'react';
import { Send, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  onClearChat: () => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, onClearChat, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-4 border-t bg-background/80 backdrop-blur-sm">
      <div className="flex gap-3 items-end">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full flex-shrink-0"
          onClick={onClearChat}
          title="مسح المحادثة"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
        
        <div className="relative flex-1">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="اكتب رسالتك هنا..."
            className="pr-12 resize-none min-h-[60px] max-h-[200px] rounded-xl"
            disabled={isLoading}
          />
          
          <Button
            className="absolute left-2 bottom-2 rounded-full w-8 h-8 p-0"
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="text-center text-xs text-muted-foreground mt-3">
        نظام أبشرنا مبني على نموذج ALLaM-7B-Instruct لتقديم المساعدة باللغة العربية
      </div>
    </div>
  );
};

export default InputArea;
