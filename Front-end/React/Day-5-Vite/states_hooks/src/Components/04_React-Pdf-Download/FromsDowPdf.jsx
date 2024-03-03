import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const FromsDowPdf = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const generatePdfForInvoice = (item) => {
        const doc = new jsPDF();
        doc.text(`Invoice ID: ${item.id}`, 10, 10);
        doc.autoTable({
            startY: 20,
            head: [['Name', 'Quantity', 'Price']],
            body: item.fruits.map(fruit => [fruit.name, fruit.quantity, `$${fruit.price.toFixed(2)}`])
        });
        doc.text(`Total Price: $${item.totalprice.toFixed(2)}`, 10, doc.autoTable.previous.finalY + 10);
        return doc;
    };

    const handleDownload = (item) => {
        const doc = generatePdfForInvoice(item);
        doc.save(`${item.id}.pdf`);
    };

    const handlePrint = () => {
        const doc = new jsPDF();
        data.forEach(item => {
            const invoiceDoc = generatePdfForInvoice(item);
            doc.addPage();
            doc.text(`Invoice ID: ${item.id}`, 10, 10);
            doc.addImage(invoiceDoc.output('datauristring'), 'JPEG', 10, 20, 180, 180);
        });
        doc.deletePage(doc.internal.getNumberOfPages());
        doc.save('invoices.pdf');
    };

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <h5>{item.id}</h5>
                    <h5>{item.name}</h5>
                    <button onClick={() => handleDownload(item)}>Download</button>
                    <button onClick={handlePrint}>Print</button>
                </div>
            ))}
            
        </div>
    );
};
