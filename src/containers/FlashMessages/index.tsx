import React from 'react';
import { useTransition } from 'react-spring';
import { useFlash } from '../../hooks/flash';
import FlashMessage from './FlashMessage';
import { Container } from './styles';

const FlashMessages: React.FC = () => {
  const { messages, removeMessage } = useFlash();

  const transitions = useTransition(messages, item => item.id, {
    from: { top: '-80px', opacity: 0 },
    enter: { top: '0%', opacity: 1 },
    leave: { top: '-80px', opacity: 0 },
  });

  if (messages && messages.length > 0) {
    return <></>;
  }

  return (
    <Container>
      {transitions.map(({ item: message, key, props }) => (
        <FlashMessage
          key={key}
          title={message.title}
          type={message.type}
          style={props}
          onClick={() => removeMessage(message.id)}
        />
      ))}
    </Container>
  );
};

export default FlashMessages;
