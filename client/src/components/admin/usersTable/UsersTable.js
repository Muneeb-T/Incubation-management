// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import axios from "axios";
import { EditUserContext } from "../../../context/UserContext";

export default function BasicTable() {
  const [usersList, setUsersList] = useState([]);
  const { setUserDetails } = useContext(EditUserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const users = await axios.get("/api/users/getUsers");
      setUsersList([...users.data]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/delete/${userId}`);
      const deletedList = usersList.filter((user) => user._id !== userId);
      setUsersList(deletedList);
    } catch (error) {
      console.log(error);
    }
  };

  const blockOrUnblockUser = async (userId) => {
    try {
      await axios.patch(`/api/users/block-unblock/${userId}`);
      const blockOrUnblockedList = usersList.map((user) => {
        if (user._id === userId) {
          return { ...user, isBlocked: !user.isBlocked };
        }
        return { ...user };
      });
      setUsersList(blockOrUnblockedList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography fontWeight='bold'>S.No</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight='bold'>Username</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight='bold'>Email address</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight='bold'>Phone number</Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight='bold'>Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {index + 1}
              </TableCell>
              <TableCell component='th' scope='row'>
                {user.username}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Box textAlign='center' sx={{ display: "inline-flex" }}>
                  <Button
                    sx={{ mx: 1 }}
                    variant='contained'
                    size='small'
                    color='error'
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    variant='contained'
                    size='small'
                    onClick={() => {
                      setUserDetails(user);
                      navigate(`/admin/users/edit/${user._id}`);
                    }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>

                  <Button
                    sx={{ mx: 1 }}
                    variant='contained'
                    size='small'
                    startIcon={<BlockIcon />}
                    onClick={() => blockOrUnblockUser(user._id)}
                    color={user.isBlocked ? "error" : "success"}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
