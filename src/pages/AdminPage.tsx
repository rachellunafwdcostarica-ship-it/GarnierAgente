import { useState } from 'react';
import PdfUploader from '../components/PdfUploader';
import { PdfInfo, parsePdfFile } from '../services/pdfService';

function AdminPage() {
  const [uploadedPdfs, setUploadedPdfs] = useState<PdfInfo[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<PdfInfo | null>(null);

  const handleUpload = async (file: File) => {
    const pdfInfo = await parsePdfFile(file);
    setUploadedPdfs((prev) => [pdfInfo, ...prev]);
    setSelectedPdf(pdfInfo);
  };

  return (
    <div className="admin-shell">
      <div className="admin-panel">
        <h2>Panel de administración</h2>
        <p>Carga PDFs para usarlos como fuentes de consulta en el chat.</p>
        <PdfUploader onUpload={handleUpload} />
      </div>
      <div className="admin-list">
        <h3>Documentos cargados</h3>
        {uploadedPdfs.length === 0 ? (
          <p>No hay documentos cargados todavía.</p>
        ) : (
          <ul>
            {uploadedPdfs.map((pdf) => (
              <li key={pdf.id} className={selectedPdf?.id === pdf.id ? 'selected' : ''}>
                <button type="button" onClick={() => setSelectedPdf(pdf)}>
                  {pdf.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedPdf && (
        <div className="admin-details">
          <h3>Fuente activa</h3>
          <p><strong>Nombre:</strong> {selectedPdf.name}</p>
          <p><strong>Tamaño:</strong> {selectedPdf.sizeText}</p>
          <p><strong>Subido:</strong> {selectedPdf.uploadedAt.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
