import { PdfInfo } from './pdfService';

export async function generateReply(question: string, source: PdfInfo | null): Promise<string> {
  const baseResponse = `Respuesta simulada para: "${question}".`;
  const sourceText = source ? ` Los datos se consultaron en el documento "${source.name}".` : ' No se seleccionó un documento fuente.';

  return new Promise((resolve) => {
    window.setTimeout(() => resolve(baseResponse + sourceText), 350);
  });
}
