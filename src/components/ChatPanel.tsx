import { FormEvent, useState } from 'react';

interface ChatPanelProps {
  onSend: (message: string) => void;
}

function ChatPanel({ onSend }: ChatPanelProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    onSend(message.trim());
    setMessage('');
  };

  return (
    <form className="chat-panel" onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Escribe tu pregunta o comentario aquí..."
        rows={5}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ChatPanel;
