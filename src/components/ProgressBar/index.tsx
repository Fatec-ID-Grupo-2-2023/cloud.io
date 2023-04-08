import "./style.scss";
import { Box, LinearProgress, Typography } from "@mui/material";

type IProps = {
    usedCapacity: number;
    totalCapacity?: number;
}

export default function ProgressBar({ usedCapacity, totalCapacity }: IProps) {
    const progress = totalCapacity ? (usedCapacity / totalCapacity) * 100 : usedCapacity;

    return (
        <Box className="progress-bar">
            <LinearProgress
                color="primary"
                variant="determinate"
                className="progress"
                value={progress}
            />

            {totalCapacity && (
                <Box className="labels">
                    <Typography
                        variant="caption"
                        fontSize={10}
                        fontWeight={'medium'}
                    >
                        {usedCapacity.toFixed(2)} GB
                    </Typography>
                    <Typography
                        variant="caption"
                        fontSize={10}
                        fontWeight={'medium'}
                    >
                        {totalCapacity.toFixed(2)} GB
                    </Typography>
                </Box>
            )}
        </Box>
    );
}