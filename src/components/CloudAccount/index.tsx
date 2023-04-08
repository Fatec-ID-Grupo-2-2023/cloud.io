import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import ProgressBar from '../ProgressBar';
import './style.scss';

interface IProps {
    icon: string;
    title: string;
    usage: number;
    limit: number;
}

export default function CloudAccount({ icon, title, usage, limit }: IProps) {
    return (
        <Card className='cloud-account'>
            <CardActionArea>
                <CardContent className='content'>
                    <Box className="box-icon">
                        <span />
                        <img src={icon} />
                    </Box>
                    <Typography variant="h2">
                        {title}
                    </Typography>
                    <ProgressBar
                        usedCapacity={usage}
                        totalCapacity={limit}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}