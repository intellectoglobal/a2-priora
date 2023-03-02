import React from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminCertificates.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const AdminCertificates = () => {
  const getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTableBodyRow: {
          styleOverrides: {
            root: {
              "&:nth-child(even)": {
                backgroundColor: "#D9D9D9",
              },
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#D9D9D9",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              fontSize: "1vw",
              textAlign: "center",
              padding: "10px 8px",
            },
          },
        },
      },
    });
  const columns = [
    "S.No",
    "Reg Date",
    "Name",
    "Fin No.",
    "Contact No.",
    "Email",
    "Payment Method",
    "Cert Status",
  ];

  const data = [
    [
      1,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
    ],
    [
      2,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Sent",
    ],
    [
      3,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayCashPal",
      "Payment Pending",
    ],
    [
      4,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
    ],
    [
      5,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Payment Pending",
    ],
    [
      6,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Cash",
      "Sent",
    ],
    [
      7,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
    ],
    [
      8,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
    ],
    [
      9,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Sent",
    ],
    [
      10,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Cash",
      "Payment Pending",
    ],
  ];

  const options = {
    filterType: "dropdown",
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
    rowHover: false,
    searchPlaceholder: "Type name to search",
    jumpToPage: false,
    rowsPerPageOptions: false,
    pagination: true,
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };
  return (
    <div>
      <AdminSideBar />
      <div className="table-container">
        <div className="table">
          <ul>
            <TextField
              id="outlined-selet-currency"
              select
              label="Select Course"
              sx={{
                width: "15vw",
              }}
            />
            <TextField
              id="outlined-selet-currency"
              select
              label="Run"
              sx={{
                width: "5vw",
              }}
            ></TextField>

            <TextField
              id="outlined"
              label="Start Date"
              sx={{
                width: "15vw",
              }}
            />
            
           
                <Link to="" className="link">
                  <li>Go to Payment</li>
                </Link>
             
             
          </ul>

          <div className="tabldfve-btn-links "></div>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              data={data}
              editMode="row"
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
export default AdminCertificates;
