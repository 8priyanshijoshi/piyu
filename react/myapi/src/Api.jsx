// import React, { useEffect, useState } from 'react'

// const Api = () => {
//     const [data, setData] = useState('');

// useEffect( () => {
//     const res = ('https://addon.octfis.com/Download/interview/interview.json');
//     if(!res.ok) {
        
//     }
// })


//   return (
//     <div>
//         <table>
//             <thead>
//             <th>Invoices</th>
//             <th>Invoice ID</th>
//             <th>Customer ID</th>
//             <th>Customer Name</th>
//             <th>Company Name</th>
//             <th>Status</th>
//             <th>Email</th>
//             </thead>
//             <tbody>
//                 <tr>
                    
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default Api

import React, { useEffect, useState } from 'react';

function Api() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://addon.octfis.com/Download/interview/interview.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((data) => {
        setInvoices(data.invoices);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.invoice_id}>
            <strong>{invoice.invoice_number}</strong> – {invoice.customer_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
