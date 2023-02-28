import * as React from "react";
 
import Box from "@mui/material/Box";
 
import Drawer from "@mui/material/Drawer";
 
import AdminNavBar from "../AdminNavBar/AdminNavBar.tsx";
import { Link } from "react-router-dom";
import "./AdminSideBar.css" 
import Ripples from "react-ripples";

const drawerWidth = "10vw";



interface Props {
  window?: () => Window;
}

export default function AdminSideBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
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
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div>
        <Box sx={{ display: "flex" }}>
          <Box
            component="nav"
            sx={{ flexShrink: { sm: 0 }, zIndex: 0 }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  backgroundColor: "#d9d9d9",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </div>
      <AdminNavBar />
    </>
  );
}
