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

export default function getFileIcon(extension?: string): string {
    if (!extension) return EmptyDocIcon;

    if (['pdf'].includes(extension)) return PDFIcon;
    if (['xls', 'xlsx'].includes(extension)) return ExcelIcon;
    if (['doc', 'docx'].includes(extension)) return WordIcon;
    if (['ppt', 'pptx'].includes(extension)) return PPTIcon;
    if (['txt'].includes(extension)) return TXTIcon;
    if (['zip', 'rar'].includes(extension)) return ZipIcon;
    if (['py', 'java', 'js', 'cpp', 'cs', 'php', 'rb', 'swift', 'kt', 'm', 'go', 'rs', 'scala', 'pl', 'lua', 'ts', 'sql', 'html', 'css'].includes(extension)) return CodeIcon;
    if (['folder'].includes(extension)) return FolderIcon;
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'].includes(extension)) return ImageIcon;
    if (['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm', '3gp', 'm4v', 'vob', 'ogv', 'ogg'].includes(extension)) return VideoIcon;
    if (['mp3', 'wav', 'wma', 'aac', 'flac', 'm4a', 'ogg', 'oga', 'mka', 'aiff', 'ape', 'opus'].includes(extension)) return MusicIcon;

    return EmptyDocIcon;
}