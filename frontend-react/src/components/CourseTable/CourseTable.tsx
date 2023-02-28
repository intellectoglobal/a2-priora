import React from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./CourseTable.css";

const CourseTable = () => {
  const getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTableBodyRow: {
          styleOverrides: {
            root: {
              "&:nth-child(even)": {
                backgroundColor: "#D9D9D9",
              }
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            root: {
              fontSize: "2pt",
              fontWeight: "bold",
              backgroundColor: "#D9D9D9",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              padding:'10px 8px'
            },
          },
        },
        MuiGridListTile: {
          styleOverrides: {
          root: {
            "&:nth-child(3n)": {
              width: "100% !important"
            }
          }
        }
        }
      },
    });
  const columns = ["S.No", "Name", "FIN/NRIC/Passport_No", "Selected_Course"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "dropdown",
    selectableRows: false,
    download: false,
    print: false,
    viewColumns:false,
    rowHover:false,
    searchPlaceholder:'Type name to search',
    jumpToPage:false,
    rowsPerPageOptions:false,
    pagination:true,
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
      <div className="coursetable-container">
        <div className="course-table">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseTable;
