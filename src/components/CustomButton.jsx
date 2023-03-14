import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: lightBlue[300],
  "&:hover": {
    backgroundColor: lightBlue[700],
  },
}));

export default CustomButton;
