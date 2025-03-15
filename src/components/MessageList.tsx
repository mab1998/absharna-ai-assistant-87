
import React, { useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Message from './Message';
import { Message as MessageType } from '@/types';

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto pb-6 px-4">
      <div className="space-y-6 pt-6">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex items-start gap-3 p-4 glass-card rounded-xl animate-pulse mr-8">
            <div className="flex-shrink-0 rounded-full h-10 w-10 bg-absher text-white flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1 text-right">
              <div className="font-medium mb-1">أبشرنا</div>
              <div className="typing-indicator mb-3">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
