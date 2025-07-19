// import React, { useEffect, useState } from 'react'

// function API () {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://api.restful-api.dev/objects')
//         .then((res) => {
//             if (!res.ok) throw new Error('failed to fetch data');
//             return res.json();
//         })
//         .then((data) => {
//             setData(data);
//             setLoading(false);
//         })
//         .catch((err) => {
//             setError(err.message);
//             setLoading(false);
//         });
//     },[]);

//     if (loading) return <p>Loading  data..</p>
//     if (error) return <p style={{color: 'red'}}>Error : {error}</p>

//   return (
//     <div>
//         <h2>Data List</h2>
//         <ul>
//             {data.map((datas)=> {
//                 return (
//                 <li key={datas.id}>
//                     <strong>{datas.name}</strong> - {JSON.stringify (datas.data)}
//                 </li>
//                 );
//             })}
//         </ul>
//     </div>
//   )
// }

// export default API


// import React, { useEffect, useState } from 'react';

// function API() {
//   const [invoices, setInvoices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://addon.octfis.com/Download/interview/interview.json')
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch data');
//         return res.json();
//       })
//       .then((data) => {
//         setInvoices(Array.isArray(data.invoices) ? data.invoices : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading data...</p>;
//   if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Invoice Table</h2>
//       <table border="1" cellPadding="8" cellSpacing="0">
//         <thead>
//           <tr>
//             <th>Invoice Number</th>
//             <th>Customer Name</th>
//             <th>Company Name</th>
//             <th>Status</th>
//             <th>Date</th>
//             <th>Shipping Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoices.map((invoice) => (
//             <tr key={invoice.invoice_id}>
//               <td>{invoice.invoice_number}</td>
//               <td>{invoice.customer_name}</td>
//               <td>{invoice.company_name}</td>
//               <td>{invoice.status}</td>
//               <td>{invoice.date}</td>
//               <td>{invoice.shipping_address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default API;



import React, { useEffect, useState } from 'react';

function InvoiceTable() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    fetch('https://addon.octfis.com/Download/interview/interview.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setInvoices(Array.isArray(data.invoices) ? data.invoices : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>All Invoice Details</h2>
      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>▼</th>
            <th>Invoice No</th>
            <th>Customer</th>
            <th>Company</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <React.Fragment key={inv.invoice_id}>
              <tr>
                <td>
                  <button onClick={() => toggleRow(inv.invoice_id)}>
                    {expandedRows.includes(inv.invoice_id) ? '−' : '+'}
                  </button>
                </td>
                <td>{inv.invoice_number}</td>
                <td>{inv.customer_name}</td>
                <td>{inv.company_name}</td>
                <td>{inv.status_formatted}</td>
                <td>{inv.total.toLocaleString()}</td>
                <td>{inv.date}</td>
              </tr>

              {expandedRows.includes(inv.invoice_id) && (
                <tr>
                  <td colSpan="7">
                    <div style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
                      <h4>🧾 Line Items</h4>
                      <table width="100%" border="1" cellPadding="6">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Tax %</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inv.line_items.map((item, idx) => (
                            <tr key={idx}>
                              <td>{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>{item.rate_formatted}</td>
                              <td>{item.tax_percentage}%</td>
                              <td>{item.item_total_formatted}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <h4>🏷️ Taxes & TDS</h4>
                      <ul>
                        {inv.line_items.flatMap(i =>
                          i.line_item_taxes.map((tax, idx) => (
                            // <li key={`tax-${idx}`}>{tax.tax_name}: {tax.tax_amount_formatted}</li>
                            <li key={`${inv.invoice_id}-tax-${idx}`}>{tax.tax_name}</li>

                          ))
                        )}
                        {inv.line_items.flatMap(i =>
                          i.line_item_tds.map((tds, idx) => (
                            <li key={`${inv.invoice_id}-tds-${idx}`}>{tds.tds_name}: {tds.tds_amount_formatted}</li>

                          ))
                        )}
                      </ul>

                      <h4>📬 Billing Address</h4>
                      <p>{inv.billing_address.address}, {inv.billing_address.city}, {inv.billing_address.state}, {inv.billing_address.country}</p>

                      <h4>📦 Shipping Address</h4>
                      <p>{inv.shipping_address.address || 'N/A'}, {inv.shipping_address.city || ''} {inv.shipping_address.state || ''}</p>

                      <h4>📋 Other Info</h4>
                      <p><strong>Salesperson:</strong> {inv.salesperson_name || 'N/A'}</p>
                      <p><strong>Created By:</strong> {inv.created_by}</p>
                      <p><strong>Invoice Type:</strong> {inv.type_formatted}</p>
                      <p><strong>Email:</strong> {inv.email}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTable;


