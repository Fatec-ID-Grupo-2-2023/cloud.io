import EmptyDocIcon from '../../assets/empty-doc.svg';
import PDFIcon from '../../assets/pdf.svg';
import ExcelIcon from '../../assets/excel.svg';
import WordIcon from '../../assets/word.svg';
import PPTIcon from '../../assets/ppt.svg';
import TXTIcon from '../../assets/txt.svg';
import ZipIcon from '../../assets/zip.svg';
import CodeIcon from '../../assets/code.svg';
import FolderIcon from '../../assets/folder.svg';
import ImageIcon from '../../assets/image.svg';
import VideoIcon from '../../assets/video.svg';
import MusicIcon from '../../assets/music.svg';
import { ICloudioType } from '../../models/cloud';

export default function getFileIcon(type: ICloudioType): string {
    if (!type) return EmptyDocIcon;

    if (type === 'pdf') return PDFIcon;
    if (type === 'spreadsheet') return ExcelIcon;
    if (type === 'document') return WordIcon;
    if (type === 'presentation') return PPTIcon;
    if (type === 'text') return TXTIcon;
    if (type === 'zip') return ZipIcon;
    if (type === 'code') return CodeIcon;
    if (type === 'folder') return FolderIcon;
    if (type === 'image') return ImageIcon;
    if (type === 'video') return VideoIcon;
    if (type === 'audio') return MusicIcon;

    return EmptyDocIcon;
}