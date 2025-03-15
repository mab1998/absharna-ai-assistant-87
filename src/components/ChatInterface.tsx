
import React from 'react';
import { useChat } from '@/hooks/useChat';
import MessageList from './MessageList';
import InputArea from './InputArea';

const ChatInterface: React.FC = () => {
  const { chatState, sendMessage, clearChat } = useChat();
  
  return (
    <div className="flex flex-col h-full border rounded-xl overflow-hidden shadow-subtle bg-card/70 backdrop-blur-sm">
      <MessageList 
        messages={chatState.messages} 
        isLoading={chatState.isLoading} 
      />
      <InputArea 
        onSendMessage={sendMessage} 
        onClearChat={clearChat} 
        isLoading={chatState.isLoading} 
      />
    </div>
  );
};

export default ChatInterface;
