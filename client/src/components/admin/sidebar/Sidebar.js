import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Link } from "react-router-dom";
const sideNavButtons = [
  {
    text: "Application list",
    icon: <FormatListNumberedIcon />,
    linkPath: "/admin",
  },
  {
    text: "Record track",
    icon: <ReceiptLongIcon />,
    linkPath: "/admin/record-track",
  },
  {
    text: "Booking slot",
    icon: <AppsOutlinedIcon />,
    linkPath: "/admin/booking-slot",
  },
  { text: "Users", icon: <PeopleAltIcon />, linkPath: "/admin/users" },
];

function Sidebar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <List sx={{ mt: 8 }}>
        {sideNavButtons.map((button, index) => (
          <ListItem key={index} disablePadding>
            <Link to={button.linkPath} style={{ textDecoration: "none", width : '100%' }}>
              <ListItemButton>
                <ListItemIcon
                  sx={{ minWidth: "max-content", color: "primary.main" }}
                >
                  {button.icon}
                </ListItemIcon>
                {!isMatch && (
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: "gray",
                          marginRight: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        {button.text}
                      </Typography>
                    }
                  />
                )}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
