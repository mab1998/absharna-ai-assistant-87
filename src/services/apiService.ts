
import { Message } from "@/types";

const API_KEY = "gsk_D2yCOn7wqNoUDr3LGy3BWGdyb3FYPq19yV0xbvJwAechzkaYdyBttttttttJttttttttt"; // Note: In production, use environment variables

interface ChatCompletionRequest {
  messages: {
    role: string;
    content: string;
  }[];
  model: string;
  temperature: number;
  max_completion_tokens?: number;
  top_p?: number;
  stream?: boolean;
  stop?: string[] | null;
}

export const fetchChatCompletion = async (messages: Message[]): Promise<string> => {
  try {
    // Convert our messages to the format expected by Groq API
    const formattedMessages = messages.map(message => ({
      role: message.role,
      content: message.content
    }));

    // Add a system message if it doesn't exist
    if (!formattedMessages.some(msg => msg.role === 'system')) {
      formattedMessages.unshift({
        role: 'system',
        content: 'أنت "أبشرنا"، مساعد ذكي لمنصة أبشر. مهمتك هي مساعدة المستخدمين عبر الإجابة على استفساراتهم ومعالجة شكاواهم المتعلقة بخدمات وزارة الداخلية. يجب أن تكون إجاباتك دقيقة ومهذبة ومفيدة. استخدم اللغة العربية الفصحى البسيطة وكن متعاطفاً مع المستخدمين.'
      });
    }

    const requestBody: ChatCompletionRequest = {
      messages: formattedMessages,
      model: "allam-2-7b", // Using the Allam model
      temperature: 0.7,
      max_completion_tokens: 1024,
      top_p: 0.9,
      stream: false,
      stop: null
    };

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Error communicating with API");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
