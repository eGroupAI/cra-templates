import { createMuiTheme } from "@material-ui/core";

const fontFamily = [
  '"Segoe UI"',
  "SegoeUI",
  '"Microsoft JhengHei"',
  "微軟正黑體",
  '"SF Pro TC"',
  '"SF Pro Display"',
  '"SF Pro Icons"',
  '"PingFang TC"',
  '"Helvetica Neue"',
  '"Helvetica"',
  '"Arial"',
  "sans-serif",
].join(",");

const theme = createMuiTheme({
  typography: {
    fontFamily,
  },
});

// eslint-disable-next-line no-console
if (process.env.NODE_ENV !== "production") console.log(theme);

export default theme;
