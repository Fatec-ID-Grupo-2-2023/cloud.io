import { Box, Breadcrumbs, Grid, IconButton, Link, Typography } from "@mui/material";
import GridIcon from "../../assets/blocks.svg";
import ListIcon from "../../assets/list.svg";
import useToggle from "../../helpers/useToggle";
import { IPath } from "./model";
import "./style.scss";
import { FileListItem } from "./FileListItem";

interface IProps {
    id?: string;
    path?: IPath[];
    link?: string;
    linkText?: string;
    layout?: boolean;
}

export default function FilesExplorer({ id, path, link, linkText, layout }: IProps) {
    const [currentLayout, toggleLayout] = useToggle("list", "grid");

    return (
        <Box id={id} className="files-explorer">
            <Box className="header">
                <Breadcrumbs maxItems={3}>
                    {path?.map(({ name, link }, index) => (
                        <>
                            {index === path.length - 1 ? (
                                <Typography color="text.primary">{name}</Typography>
                            ) : (
                                <Link
                                    key={index}
                                    underline="hover"
                                    color="inherit"
                                    href={link}
                                >
                                    {name}
                                </Link>
                            )}
                        </>
                    ))}
                </Breadcrumbs>
                <Box className="link-layout" >
                    {(link && linkText) && (
                        <Link
                            href={link}
                            color="secondary"
                        >
                            <Typography>{linkText}</Typography>
                        </Link>
                    )}
                    {layout && (
                        <IconButton className="change-layout" onClick={toggleLayout}>
                            <img src={currentLayout === 'list' ? ListIcon : GridIcon} />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Grid
                container
                spacing={2}
                className="content"
            >
                <FileListItem isList={currentLayout === 'list'} fileName="kk" lastModified="kk" />
                <FileListItem isList={currentLayout === 'list'} fileName="kk" extension="zip" size={20} />
                <FileListItem isList={currentLayout === 'list'} fileName="kk" extension="pdf" lastModified="kk" size={20} />

            </Grid>
        </Box>
    );
}