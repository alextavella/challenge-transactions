import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface FlashMessage {
  id: string;
  type: 'success' | 'error';
  title: string;
}

interface FlashContextData {
  messages: FlashMessage[];
  addMessage(message: Omit<FlashMessage, 'id'>): void;
  removeMessage(id: string): void;
}

const FlashContext = createContext<FlashContextData>({} as FlashContextData);

const FlashProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<FlashMessage[]>([]);

  const addMessage = useCallback(
    ({ type, title }: Omit<FlashMessage, 'id'>) => {
      const message = {
        id: uuid(),
        type,
        title,
      };

      setMessages(state => [...state, message]);
    },
    [],
  );

  const removeMessage = useCallback((id: string) => {
    setMessages(state => state.filter(m => m.id !== id));
  }, []);

  const flashData = {
    messages,
    addMessage,
    removeMessage,
  };

  return (
    <FlashContext.Provider value={flashData}>{children}</FlashContext.Provider>
  );
};

function useFlash(): FlashContextData {
  const context = useContext(FlashContext);

  if (!context) {
    throw new Error('useFlash must be used within a FlashProvider');
  }

  return context;
}

export { useFlash, FlashProvider };
