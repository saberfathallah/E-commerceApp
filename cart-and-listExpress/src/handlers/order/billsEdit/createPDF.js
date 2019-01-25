import pdf from 'html-pdf';
import ArrayBufferToBase64 from './ArrayBufferToBase64';

async function createPDF(html) {
  const options = {
    format: 'letter',
    border: {
      top: '0.4in',
      right: '0.43in',
      bottom: '0.4in',
      left: '0.43in',
    },
    type: 'pdf',
  };

  const createPdfFile = () => new Promise((res, err) => {
    pdf.create(html, options).toBuffer((error, buffer) => {
      if (error) return err(console.log(error));
      return res(ArrayBufferToBase64(buffer));
    });
  });

  return createPdfFile();
}

export default createPDF;
