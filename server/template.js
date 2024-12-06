module.exports = ({ customer_name, invoiceno, address, items }) => {
   const today = new Date();
   const getPrice = (items) => items.reduce((total, item) => total + item.item_price, 0); // Function to calculate total price

   return `
   <!doctype html>
   <html>
      <head>
         <meta charset="utf-8">
         <title>PDF Invoice</title>
         <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
         <style>
            body {
               margin: 0;
               padding: 0;
               font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
               display: flex;
               flex-direction: column;
               height: 100%;
               justify-content: space-between;
            }
            .invoice-box {
               max-width: 800px;
               margin: auto;
               padding: 30px;
               border: 1px solid #eee;
               box-shadow: 0 0 10px rgba(0, 0, 0, .15);
               font-size: 12px;
               line-height: 24px;
               color: #555;
               flex-grow: 1;
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               height : 700px;
            }
            .header {
               display: flex;
               justify-content: space-between;
               align-items: center;
               border-bottom: 1px solid #ddd;
                       
               padding-left: 20px;
     
            }
            .header img {
               width: 80px;

            }
            .header .header-text {
               text-align: center;
               padding-left: 20px;
            }
            .header .header-text h1 {
               font-size: 16px;
               margin-top : -35px;
               color: #004aad;
               text-transform: uppercase;
               padding-left: 35px;
            }
            .header .header-text p {
               margin-top : -19px;
               font-size: 9px;
               color: #666;
               padding-left: 40px;
            }
            table {
               width: 100%;
               margin-top: 20px;
               line-height: inherit;
               text-align: left;
               border-collapse: collapse;
            }
            table td {
               padding: 8px;
               vertical-align: top;
            }
            table tr td:nth-child(2) {
               text-align: right;
            }
            table tr.heading td {
               background: #eee;
               border-bottom: 1px solid #ddd;
               font-weight: bold;
            }
            table tr.item td {
               border-bottom: 1px solid #eee;
            }
            table tr.total td:nth-child(2) {
               border-top: 2px solid #eee;
               font-weight: bold;
            }
            .watermark {
               position: absolute;
               top: 50%;
               transform: translate(-50%, -50%);
               font-size: 80px;
               color: rgba(0, 0, 0, 0.05);
               font-weight: bold;
               z-index: 0;
               pointer-events: none;
            }
            .footer {
               width: 100%;
               padding: 10px;
               text-align: center;
               font-size: 12px;
               color: #555;
               border-top: 1px solid #eee;
               position: relative;
               bottom: 0;
            }
            .footer a {
               text-decoration: none;
               color: #004aad;
               margin: 0 10px;
            }
         </style>
      </head>
      <body>
         <div class="invoice-box">
            <div class="header">
               <img src="https://lms.advisionslab.com/assets/logo10.png" alt="Advisions Logo">
               <div class="header-text">
                  <h1>ADVISIONS RESEARCH AND DEVELOPMENT</h1>
                  <p>Gayatri Enclave, Under Flyover NH58, Manglour, Roorkee, Haridwar - 247656, Uttarakhand, India</p>
               </div>
            </div>

            <div class="watermark">AdvisionsLAB</div>

            <table cellpadding="0" cellspacing="0" style="z-index: 1;">
            <tr class="information">
            <td> Receipt Number: ${invoiceno}</td>
               <td style="padding-top: -10px;">
                     Date: ${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}
                  </td>
            </tr>
               <tr class="information" >
                  <td>
                     Customer Name: ${customer_name}
                  </td>
                  <td>
                    Customer Email: ${address} <br>
                  </td>
               </tr>
               <tr class="information">
                  <td colspan="2">
                    
                  </td>
               </tr>

               <tr class="heading">
                  <td>Bought Items</td>
                  <td>Price (Rs.)</td>
               </tr>
               ${items.map(item => `
                  <tr class="item">
                     <td>${item.item_name}</td>
                     <td>Rs. ${item.item_price}</td>
                  </tr>
               `).join('')}
               <tr class="total">
                  <td></td>
                  <td>Total: Rs. ${getPrice(items)}</td>
               </tr>
            </table>
         </div>

         <div class="footer">
            <a href="https://www.advisionslab.com/">https://www.advisionslab.com/</a>
            <a href="mailto:info@advisionslab.com">info@advisionslab.com</a>
         </div>
      </body>
   </html>
   `;
};
