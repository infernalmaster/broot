import theme from "@mdx-deck/themes";

import { syntaxHighlighter } from "mdx-deck/themes";

const my = {
  css: {
    fontSize: "14px",
    textAlign: "center",
    "@media screen and (min-width:56em)": {
      fontSize: "25px"
    },
    "@media screen and (min-width:64em)": {
      fontSize: "40px"
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    },
    "[name=wrapper]": {
      padding: "10vw"
    },
    img: {
      maxWidth: "70vw"
    },
    ul: {
      fontSize: "0.7em"
    },
    ol: {
      fontSize: "0.7em"
    }
  }
};

export default { ...theme, ...syntaxHighlighter, ...my };
