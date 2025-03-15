
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("p-4 border-b", className)}>
      <div className="container max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="bg-absher text-white rounded-full p-1.5 w-10 h-10 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.67 18C9.1 18 7.67 17.47 6.67 16.6L8 14.13C8.67 14.8 9.73 15.27 10.67 15.27C11.6 15.27 12.67 14.8 13.33 14.13L14.67 16.6C13.67 17.47 12.23 18 10.67 18ZM18 13.16L13.24 10.5L14.24 9.5L18 11.43V13.16ZM18 8.49L10.67 13.51L3 8.49V5.9L10.67 10.75L18 5.9V8.49Z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-clip-text text-absher">أبشرنا</h1>
            <p className="text-xs text-muted-foreground">المساعد الذكي لمنصة أبشر</p>
          </div>
        </div>

        <nav className="hidden sm:flex items-center space-x-4 space-x-reverse">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            عن النظام
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            الأسئلة الشائعة
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            التواصل
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
