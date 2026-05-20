import { PdfInfo } from '../services/pdfService';

interface ConversationHistoryProps {
  conversations: { id: number; user: string; assistant: string; source: PdfInfo | null }[];
  onSelectSource: (source: PdfInfo | null) => void;
}

function ConversationHistory({ conversations, onSelectSource }: ConversationHistoryProps) {
  if (conversations.length === 0) {
    return <p className="empty-state">Aún no hay conversaciones en el historial.</p>;
  }

  return (
    <div className="conversation-history">
      {conversations.map((conversation) => (
        <article key={conversation.id} className="conversation-card">
          <div className="conversation-meta">
            <strong>Usuario:</strong> {conversation.user}
          </div>
          <p>{conversation.assistant}</p>
          <button
            type="button"
            className="source-button"
            onClick={() => onSelectSource(conversation.source)}
          >
            {conversation.source ? `Ver fuente: ${conversation.source.name}` : 'Sin fuente'}
          </button>
        </article>
      ))}
    </div>
  );
}

export default ConversationHistory;
