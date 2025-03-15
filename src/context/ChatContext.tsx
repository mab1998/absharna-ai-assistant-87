
import React, { createContext, useState, useCallback } from 'react';
import { ChatContextType, ChatState, Message } from '@/types';
import { fetchChatCompletion } from '@/services/apiService';
import { toast } from '@/components/ui/use-toast';
import { quickServices } from '@/data/quickServices';

// Initial state for the chat
const initialChatState: ChatState = {
  messages: [],
  isLoading: false,
  error: null
};

// Create the context
export const ChatContext = createContext<ChatContextType>({
  chatState: initialChatState,
  sendMessage: async () => {},
  clearChat: () => {}
});

// Create a provider component
export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chatState, setChatState] = useState<ChatState>(initialChatState);

  // Add welcome message on first render
  React.useEffect(() => {
    if (chatState.messages.length === 0) {
      const welcomeMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: 'مرحباً بك في نظام أبشرنا. كيف يمكنني مساعدتك اليوم؟',
        timestamp: new Date()
      };
      setChatState(prev => ({
        ...prev,
        messages: [welcomeMessage]
      }));
    }
  }, []);

  // Check if the message matches any predefined scenario
  const checkForScenarioMatch = (content: string): { matched: boolean; response?: string } => {
    for (const service of quickServices) {
      for (const scenario of service.scenario) {
        if (scenario.userQuestions.some(q => 
          content.toLowerCase().includes(q.toLowerCase()) || 
          q.toLowerCase().includes(content.toLowerCase())
        )) {
          return { 
            matched: true, 
            response: scenario.botResponses[0] 
          };
        }
      }
    }
    return { matched: false };
  };

  // Function to send a message
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Create a new user message
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date()
    };

    // Update state with user message and loading state
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null
    }));

    try {
      // Check if this message matches a predefined scenario
      const scenarioMatch = checkForScenarioMatch(content);
      
      let responseContent = '';
      
      if (scenarioMatch.matched && scenarioMatch.response) {
        // Use the predefined response for this scenario
        responseContent = scenarioMatch.response;
      } else {
        // Get all messages for context
        const allMessages = [...chatState.messages, userMessage];
        
        // Call API to get response
        responseContent = await fetchChatCompletion(allMessages);
      }
      
      // Create assistant message from response
      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };

      // Update state with assistant message
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, userMessage, assistantMessage],
        isLoading: false
      }));
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Update state with error
      setChatState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.'
      }));

      // Show error toast
      toast({
        title: "خطأ في الاتصال",
        description: "حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    }
  }, [chatState.messages]);

  // Function to clear the chat
  const clearChat = useCallback(() => {
    const welcomeMessage: Message = {
      id: generateId(),
      role: 'assistant',
      content: 'تم مسح المحادثة. كيف يمكنني مساعدتك اليوم؟',
      timestamp: new Date()
    };
    
    setChatState({
      messages: [welcomeMessage],
      isLoading: false,
      error: null
    });
  }, []);

  // Generate unique IDs for messages
  const generateId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  return (
    <ChatContext.Provider value={{ chatState, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};
