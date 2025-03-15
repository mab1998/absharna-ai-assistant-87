
import React from 'react';
import { cn } from '@/lib/utils';
import { Message as MessageType } from '@/types';
import { MessageCircle, User } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl animate-slide-in transition-all",
        isUser ? "flex-row-reverse ml-8" : "mr-8",
        isUser ? "bg-accent/50" : "glass-card"
      )}
    >
      <div 
        className={cn(
          "flex-shrink-0 rounded-full h-10 w-10 flex items-center justify-center",
          isUser ? "bg-primary text-primary-foreground" : "bg-absher text-white"
        )}
      >
        {isUser ? (
          <User className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </div>

      <div className="flex-1 text-right">
        <div className="font-medium mb-1">
          {isUser ? 'أنت' : 'أبشرنا'}
        </div>
        <div className="leading-relaxed text-foreground/90 whitespace-pre-wrap">
          {message.content}
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          {new Date(message.timestamp).toLocaleTimeString('ar-SA', { 
            hour: '2-digit', 
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;
