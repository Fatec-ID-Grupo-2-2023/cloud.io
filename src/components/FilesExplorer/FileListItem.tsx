import { Box, Card, CardActionArea, CardActions, CardContent, Grid, IconButton, Typography } from "@mui/material";
import getFileIcon from "./getFileIcon";
import DotsIcon from "../../assets/dots.svg";

interface IProps {
    fileName: string;
    isList?: boolean;
    extension?: string;
    lastModified?: string;
    size?: number;
}

export function FileListItem({ isList = true, fileName, extension, lastModified, size }: IProps) {

    return (
        <Grid
            item
            className='file-list-item'
            xs={isList ? 12 : 6}
            sm={isList ? 12 : 4}
            md={isList ? 12 : 3}
            lg={isList ? 12 : 2}
            xl={isList ? 12 : 2}
        >
            {isList ? (
                <Card className='card list'>
                    <CardActionArea>
                        <CardContent className='content'>
                            <img className="file-icon" src={getFileIcon(extension)} />
                            <Box className='text'>
                                <Typography variant="h3" >{fileName}</Typography>
                                <Typography variant="h4" >{lastModified}{(lastModified && size) && ' - '}{size}</Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='menu'>
                        <IconButton>
                            <img src={DotsIcon} />
                        </IconButton>
                    </CardActions>
                </Card>
            ) : (
                <Card className='card block'>
                    <CardActions className='menu'>
                        <IconButton>
                            <img src={DotsIcon} />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>
                        <CardContent className='content'>
                            <img className="file-icon" src={getFileIcon(extension)} />
                            <Typography variant="h3" >{fileName}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </Grid>
    );
}