import React from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import MUIDataTable from "mui-datatables";
import { Radio,Form } from "antd";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaTrash } from "react-icons/fa";
import "./Payments.css";

const Payments = () => {
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
              textAlign: "center",
              padding: "10px 8px",
            },
          },
        },
        MuiGridListTile: {
          styleOverrides: {
            root: {
              "&:nth-child(3n)": {
                width: "100% !important",
              },
            },
          },
        },
      },
    });
  const columns = [
    "S.No",
    "Course Title",
    "FEE",
    "SubTotal",
  ];

  const grandtotal = 70
  const data = [
    [
      "1",
      "Structural Pointer Course",
      "$ 70",
      "$ 70"
    ],
    [
      "2",
      "Full Stack Course",
      "$ 70",
      "$ 70"
    ],
    [
      "3",
      "Full Stack Course",
      "$ 70",
      "$ 70"
    ],
    [
      "4",
      "Structural Pointer Course",
      "$ 70",
      "$ 70"
    ],
  ];

  const options = {
    responsive: true,
    filterType: "dropdown",
    selectableRows: false,
    download: false,
    print: false,
    filter:false,
    search: false,
    viewColumns: false,
    pagination:false,
    rowHover: false,
    searchPlaceholder: "Type name to search",
    jumpToPage: false,
    rowsPerPageOptions: false,
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };

  return (
    <>
      <Navbar />
      <div className="payments-container">
        <div className="payments-header">
          <h1>Invoice</h1>
        </div>
        <div className="course-table">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
        <div className="course-total">
        <div className="payment-type">
        <Form.Item
              className="payment-label"
              label="Payment-Type"
              style={{ width: "100%", marginBottom: "-1rem" }}
            >
              <Radio.Group
                // value=''
                name="sponsership_type"
                buttonStyle="solid"
                defaultValue="paypal"
                // onChange={''}
              >
                <Radio.Button value="paypal" style={{ fontWeight: "bold"}}>
                  PayPal
                </Radio.Button>
                <Radio.Button value="paynow" style={{ fontWeight: "bold" }}>
                  PayNow
                </Radio.Button>
                <Radio.Button value="bank_transfer" style={{ fontWeight: "bold" }}>
                  Bank Transfer
                </Radio.Button>
                <Radio.Button value="cash" style={{ fontWeight: "bold" }}>
                  Cash/Nets
                </Radio.Button>
              </Radio.Group>
          </Form.Item>
        </div>
          <h1>Grand Total : ${grandtotal}</h1>
        </div>
       
        <div className="payments-button">
          <Ripples>
            <Link to="/sform/:course" className="link-tab">
              <button type="button" className="payments-btn">
                Cancel
              </button>
            </Link>
          </Ripples>
          <Ripples>
            <Link to="/course" className="link-tab">
              <button className="payments-btn">Add Another Course</button>
            </Link>
          </Ripples>
          <Ripples>
            <Link to="/payments" className="link-tab">
              <button className="payments-btn">Proceed for Payment</button>
            </Link>
          </Ripples>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payments;
