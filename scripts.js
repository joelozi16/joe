 
    const ledgerData =[
    {customerId:'C001',invoiceNumber:'INV001',amount:500,deposit:200},
    {customerId:'C001',invoiceNumber:'INV001',amount:300,deposit:50},
    {customerId:'C001',invoiceNumber:'INV001',amount:1000,deposit:400}
    ];
  
  const tableBody =document.querySelector('#ledgerTable tbody');
  const searchBar =document.querySelector('#searchBar');

   
function updateTable(data) {
  data.foreach(entry=>{
    const balance = entry.amount - entry.deposit;
    const row = document.createElement('tr');
    row.innerHTML ='<td>${entry.customerId}</td><td>${entry.InvoiceNumber}</td><td>${entry.amount}</td><td>${entry.deposit}</td><td>${balance}</td>';
    tableBody.appendChild(row);
  });


  function filterData(query) {
  const filteredData = ledgerData.filter(entry =>
   entry.customerId.toLowerCase().includes(query.toLowerCase()) 
  );
  updateTable(filteredData);
  }
  
  searchBar.addEventListener('input',(event) =>{
  filterData(event.target.value);
  });
  
  //intiail table load
  updateTable(ledgerData);
}
  