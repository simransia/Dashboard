import React from 'react';
import MUIDataTable from "mui-datatables";
import IosShareIcon from '@mui/icons-material/IosShare';
import data from "../../../../Data/Data.json";
import "./RecentTransactions.scss"

function RecentTransactions() {

  const columns = [
    {
      name: "invoiceID",
      label: "Invoice ID",
      options: {
        sort: true,
      }
    },
    {
      name: "date",
      label: "Date",
      options: {
        sort: true,
      }
    },
    {
      name: "description",
      label: "Description",
      options: {
        sort: true,
      }
    },
    {
      name: "status",
      label: "Status",
      options: {
        sort: true,
        customBodyRender: () => {
            return (
                <button onClick={() => console.log("clicked")} className="complete-btn">
                    Complete
                </button>
            )
        }
      }
    },
    {
      name: "price",
      label: "Price",
      options: {
        sort: false,
      }
    },
  ];

  return (
    <div className="table-container">
    <MUIDataTable
      title={<h2 style={{ }}>Recent Transactions</h2>}
      data={data}
      columns={columns}
      options={{
          responsive: 'simple',
          filter: false,
          search: false,
          print: false,
          viewColumns: false,
          download: false,
          jumpToPage: true,
          customToolbar: () => (
            <>
            <button className='export-btn'>
              <IosShareIcon className='icon' />Export
            </button>
            <div className='table-nav'>
              <a className='active'>Incomming</a><a>Invoices</a>
            </div>
          </>)
        }}
    />
  </div>
  );
}


export default RecentTransactions
