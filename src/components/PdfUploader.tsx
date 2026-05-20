import { ChangeEvent } from 'react';

interface PdfUploaderProps {
  onUpload: (file: File) => void;
}

function PdfUploader({ onUpload }: PdfUploaderProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
      event.target.value = '';
    }
  };

  return (
    <div className="pdf-uploader">
      <label htmlFor="pdf-upload" className="upload-label">
        Selecciona un PDF para cargar como fuente
      </label>
      <input id="pdf-upload" type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default PdfUploader;
