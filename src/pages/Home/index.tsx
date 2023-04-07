import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import "./style.scss";

export default function Home() {
    return (
        <Box id="home">
            <Header />

            <section id="cloud-capacity" >
                <Typography variant="h1">
                    Hi User,
                </Typography>
                <Typography variant="h2">
                    you have more <Typography variant="caption">73.5 GB</Typography> available
                </Typography>
                <ProgressBar usedCapacity={36.5} totalCapacity={100} />
            </section>
        </Box>
    );
}