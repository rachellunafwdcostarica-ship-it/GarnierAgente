import { useMemo, useState } from 'react';
import ChatPanel from '../components/ChatPanel';
import ConversationHistory from '../components/ConversationHistory';
import SourceIndicator from '../components/SourceIndicator';
import { generateReply } from '../services/chatService';
import { PdfInfo } from '../services/pdfService';

function ChatPage() {
  const [history, setHistory] = useState<{ user: string; assistant: string; source: PdfInfo | null }[]>([]);
  const [activeSource, setActiveSource] = useState<PdfInfo | null>(null);

  const conversationList = useMemo(
    () => history.map((item, index) => ({ ...item, id: index })),
    [history]
  );

  const handleSend = async (message: string) => {
    const reply = await generateReply(message, activeSource);
    setHistory((current) => [
      ...current,
      { user: message, assistant: reply, source: activeSource }
    ]);
  };

  const handleSourceChange = (source: PdfInfo | null) => {
    setActiveSource(source);
  };

  return (
    <div className="page-grid">
      <section className="chat-panel-shell">
        <h2>Chat Interactivo</h2>
        <ChatPanel onSend={handleSend} />
        <SourceIndicator source={activeSource} />
      </section>
      <aside className="history-shell">
        <h2>Historial de conversaciones</h2>
        <ConversationHistory conversations={conversationList} onSelectSource={handleSourceChange} />
      </aside>
    </div>
  );
}

export default ChatPage;
