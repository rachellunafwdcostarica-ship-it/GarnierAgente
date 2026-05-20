import { PdfInfo } from '../services/pdfService';

interface SourceIndicatorProps {
  source: PdfInfo | null;
}

function SourceIndicator({ source }: SourceIndicatorProps) {
  return (
    <div className="source-indicator">
      <strong>Documento consultado:</strong>
      <span>{source ? source.name : 'Ninguno seleccionado'}</span>
    </div>
  );
}

export default SourceIndicator;
