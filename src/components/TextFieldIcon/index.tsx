import { Box, TextField } from "@mui/material";
import "./style.scss";

interface IProps {
    icon: string;
    id?: string;
    label?: string | null;
}

export default function TextFieldIcon({ id, icon, label }: IProps) {
    return (
        <Box id={id} className="text-field-icon">
            <img src={icon} />
            <TextField id={id && `text-field-${id}`} label={label} variant="standard" />
        </Box>
    );
}