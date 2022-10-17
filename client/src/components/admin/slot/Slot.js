// @ts-nocheck
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsTooltips(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { slot: props.slotName } });
  const [company, setCompany] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    try {
      const response = await axios.get("/api/companies/getCompanyList");
      console.log(response.data);
      setCompanyList([...response.data]);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => setOpen(false);
  const onSubmit = async (formData) => {
    try {
      await axios.post("/api/companies/bookSlot", formData);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Tooltip
        TransitionComponent={Zoom}
        title={`${props.booked ? props.company : "Book now"}`}
      >
        <Button
          onClick={handleOpen}
          style={{
            backgroundColor: `${props.booked ? "blue" : "red"}`,
            height: "110px",
            width: "100%",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {props.slotName}
        </Button>
      </Tooltip>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={style}>
          <Box
            display='flex'
            alignItem='center'
            justifyContent='space-between'
            sx={{ mb: 3 }}
          >
            <Typography
              id='keep-mounted-modal-title'
              variant='h6'
              component='h2'
            >
              Book Slot
            </Typography>
            <Button
              color='error'
              sx={{ fontWeight: "bold" }}
              onClick={handleClose}
            >
              X
            </Button>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ minWidth: 120, marginBottom: "20px" }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Select company
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={company}
                  error={errors.company}
                  helperText={errors.company && errors.message}
                  {...register("company", {
                    required: true,
                    message: "Select company",
                  })}
                  label='Select company'
                  onChange={handleChange}
                >
                  {companyList.map((company) => (
                    <MenuItem value={company._id}>
                      {company.companyName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button type='submit' variant='contained' color='primary'>
              Book slot
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
