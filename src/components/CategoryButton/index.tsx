import { IconButton } from "@mui/material";
import './style.scss';

interface IProps {
    icon: string;
    alt?: string;
}

export default function CategoryButton({ icon, alt }: IProps) {

    return (
        <IconButton className="category-button">
            <img src={icon} alt={alt} />
        </IconButton>
    );
}