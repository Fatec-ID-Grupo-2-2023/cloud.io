import { Box } from "@mui/material";
import { ReactNode } from 'react';

type IProps = {
  children: ReactNode;
}

export default function App({ children }: IProps) {
  return (
    <Box id="App">
      {children}
    </Box>
  )
}