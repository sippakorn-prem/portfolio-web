import html2canvas from 'html2canvas';
import styles from './resume.module.scss';
import dynamic from 'next/dynamic';
import { ReactElement, useRef } from 'react';
import jsPDF from 'jspdf';

const Layout = dynamic(import('@/components/Layout'));
const Typography = dynamic(import('@mui/material/Typography'));

export default function Resume(): ReactElement {
  const containerRef = useRef(null);

  async function genPDF() {
    console.log('Generating');
    const element = containerRef.current;
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF({ orientation: 'landscape' });
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('print.pdf');
    }
  }

  return (
    <Layout title="Resume | Sippakorn Suphapinyo">
      <div ref={containerRef} className={styles.container} onClick={genPDF}>
        <Typography variant="h2">Resume</Typography>
      </div>
    </Layout>
  );
}
