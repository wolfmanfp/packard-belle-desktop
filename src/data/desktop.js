import * as icons from "../icons";
import readme from "./textFiles/readme";

export default [
  {
    title: "My Computer",
    icon: icons.computer32,
    component: "ExplorerWindow",
    data: {
      content: [
        {
          title: "3 1/2 Floppy (A:)",
          icon: "floppy32",
          failState: {
            message:
              "Did everyone else's computer take ages to load the 'no floppy disc inserted' message or was that just mine?",
            loadTime: 8000
          }
        },
        {
          title: "(C:)",
          icon: "hdd32",
          failState: {
            message: "This is a React App, there is no hard drive.",
            loadTime: 1000
          }
        },
        {
          title: "(D:)",
          icon: "cd32",
          failState: {
            message:
              "This is a React App, there is no CD drive, your laptop probably doesn't have one either.",
            loadTime: 4000
          }
        }
      ]
    }
  },
  {
    title: "Paint",
    icon: icons.paint32,
    component: "IframeWindow",
    data: {
      src: "https://jspaint.app/", creator: "https://github.com/1j01" 
    },
    multiInstance: true
  },
  {
    title: "README",
    icon: icons.htmlFile32,
    component: "InternetExplorer",
    data: {
      __html: readme
    }
  }
];
