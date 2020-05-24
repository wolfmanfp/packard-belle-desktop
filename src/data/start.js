import * as icons from "../icons";
import google1999 from "./textFiles/google1999";

const accessories = [
  { title: "Entertainment", icon: icons.folderProgram16, options: [] },
  { title: "Internet Tools", icon: icons.folderProgram16, options: [] },
  { title: "System Tools", icon: icons.folderProgram16, options: [] },
  { title: "Calculator", icon: icons.calculator16, isDisabled: true },
  {
    title: "Minesweeper",
    icon: icons.minesweeper16,
    component: "Minesweeper",
    multiInstance: true
  },
  {
    title: "Notepad",
    icon: icons.notepad16,
    component: "Notepad",
    multiInstance: true
  },
  {
    title: "Paint",
    icon: icons.paint16,
    component: "IframeWindow",
    data: { src: "https://jspaint.app/", creator: "https://github.com/1j01" },
    multiInstance: true
  },
  {
    title: "SkiFree",
    icon: icons.skifree,
    component: "IframeWindow",
    data: {
      src: "https://basicallydan.github.io/skifree.js/"
    },
    multiInstance: true
  }
];

const programs = [
  { title: "Accessories", icon: icons.folderProgram16, options: accessories },
  // { title: "Online Services", icon: icons.folderProgram16, options: [] },
  { title: "StartUp", icon: icons.folderProgram16, options: [] },
  {
    title: "IE4(BROKEN)",
    icon: icons.internetExplorere16,
    component: "InternetExplorer",
    data: { __html: google1999 }
  },
  {
    title: "JS-DOS Prompt",
    icon: icons.msDos16,
    component: "JSDos",
    multiInstance: true
  },
  { title: "Outlook Express", icon: icons.outlook16, isDisabled: true },
  { title: "Windows Explorer", icon: icons.windowsExplorer16, isDisabled: true }
];

const favorites = [
];

export const find = [
  { title: "Files or Folders...", icon: icons.findFiles16, isDisabled: true },
  {
    title: "Computer...",
    icon: icons.findComputer16,
    isDisabled: true
  },
  {
    title: "On the Internet...",
    icon: icons.findOnline16,
    type: "ExternalLink",
    href: "https://google.com"
  },
  {
    title: "People...",
    icon: icons.findPeople16,
    type: "ExternalLink",
    href: "https://facebook.com"
  }
];

export default [
  {
    title: "Programs",
    icon: icons.folderProgram24,
    options: programs
  },
  {
    title: "Favorites",
    icon: icons.folderFavorites24,
    options: favorites,
  },
  {
    title: "Documents",
    icon: icons.folderOpen24,
    options: [
    ]
  }
];
