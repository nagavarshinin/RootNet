import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

export const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isListening) {
      timeout = setTimeout(() => setIsListening(false), 2500);
    }
    return () => clearTimeout(timeout);
  }, [isListening]);

  return (
    <div className="bg-gradient-to-r from-accent-primary/20 to-accent-primary/5 p-[1px] rounded-card overflow-hidden">
      <div className="bg-bg-surface p-5 rounded-card flex flex-col gap-4">
        <div className="flex justify-between items-center">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
             <span className="text-text-primary text-xs font-bold uppercase tracking-wider">RootNet AI</span>
           </div>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-h-[40px] flex flex-col justify-center">
             <p className={`font-semibold transition-colors ${isListening ? 'text-accent-primary text-lg' : 'text-text-primary'}`}>
               {isListening ? 'Listening...' : 'How can I assist you?'}
             </p>
             {isListening && (
               <div className="flex gap-1 mt-1 h-3 items-end">
                 <div className="w-1 bg-accent-primary rounded-full h-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-1 bg-accent-primary rounded-full h-1/2 animate-bounce" style={{ animationDelay: '100ms' }}></div>
                 <div className="w-1 bg-accent-primary rounded-full h-3/4 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                 <div className="w-1 bg-accent-primary rounded-full h-1/4 animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
             )}
          </div>
          
          <button 
            onClick={() => setIsListening(true)}
            disabled={isListening}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all flex-shrink-0 relative focus:outline-none ${
              isListening 
                ? 'bg-accent-primary text-bg-primary scale-110' 
                : 'bg-bg-primary text-accent-primary border border-accent-primary/30 hover:bg-accent-primary/10'
            }`}
          >
            {isListening && <div className="absolute inset-0 rounded-full border-2 border-accent-primary animate-ping opacity-75"></div>}
            <Mic className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
