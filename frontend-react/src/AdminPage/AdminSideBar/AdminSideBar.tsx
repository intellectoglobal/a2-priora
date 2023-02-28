import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
 
import AdminNavBar from "../AdminNavBar/AdminNavBar.tsx";
import { Link } from "react-router-dom";
import "./AdminSideBar.css"
import Ripples from "react-ripples";
const drawerWidth = "8.5vw";

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <AdminNavBar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
              backgroundColor: "#d9d9d9",
              minWidth:"100px",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <div className="sidebar-container">
            <div className="sidebar-links">
              <ul>
                <Ripples>
                  <li>
                    <Link to="/" className="links">
                      About US
                    </Link>
                  </li>
                </Ripples>
                <Ripples>
                  <li>
                    <Link to="/course" className="links">
                      Courses
                    </Link>
                  </li>
                </Ripples>
                <Ripples>
                  <li>
                    <Link to="" className="links">
                      Careers
                    </Link>
                  </li>
                </Ripples>
                <Ripples>
                  <li>
                    <Link to="" className="links">
                      Contact
                    </Link>
                  </li>
                </Ripples>
                <Ripples>
                  <li>
                    <Link to="" className="links">
                      Trainers
                    </Link>
                  </li>
                </Ripples>
              </ul>
            </div>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
}
