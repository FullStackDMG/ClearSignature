import { alpha, createTheme } from "@mui/material/styles";
import { brand } from "./theme-tokens";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.slateBlue,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: brand.gold,
      contrastText: brand.ink,
    },
    background: {
      default: brand.cream,
      paper: brand.lightPaper,
    },
    text: {
      primary: brand.ink,
      secondary: brand.warmText,
    },
    divider: alpha(brand.slateBlue, 0.14),
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.cream,
          color: brand.ink,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: brand.lightPaper,
          border: `1px solid ${alpha(brand.slateBlue, 0.08)}`,
          boxShadow: "0 8px 24px rgba(32, 43, 51, 0.05)",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: brand.lightPaper,
          border: `1px solid ${alpha(brand.slateBlue, 0.08)}`,
          boxShadow: "none",
          borderRadius: 12,
          overflow: "hidden",
          "&:before": {
            display: "none",
          },
          "& + &": {
            marginTop: 8,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 56,
        },
        content: {
          marginBlock: 12,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: brand.slateBlue,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: brand.slateBlue,
            borderWidth: 2,
          },
        },
        notchedOutline: {
          borderColor: alpha(brand.slateBlue, 0.18),
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: brand.warmText,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: brand.warmText,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1rem",
          minHeight: 42,
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: alpha(brand.slateBlue, 0.92),
          },
        },
        outlinedSecondary: {
          borderColor: alpha(brand.gold, 0.7),
          color: brand.ink,
          "&:hover": {
            borderColor: brand.gold,
            backgroundColor: alpha(brand.gold, 0.12),
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: brand.slateBlue,
          },
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: brand.slateBlue,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          color: brand.ink,
        },
        h6: {
          color: brand.ink,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8EA4B2",
      contrastText: "#122029",
    },
    secondary: {
      main: brand.gold,
      contrastText: "#1D1814",
    },
    background: {
      default: brand.darkBg,
      paper: brand.darkPaper,
    },
    text: {
      primary: "#F5F2EF",
      secondary: "#D7CCC2",
    },
    divider: alpha("#FFFFFF", 0.12),
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.darkBg,
          color: "#F5F2EF",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: brand.darkPaper,
          border: `1px solid ${alpha("#FFFFFF", 0.06)}`,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: brand.darkPaper,
          border: `1px solid ${alpha("#FFFFFF", 0.06)}`,
          boxShadow: "none",
          borderRadius: 12,
          overflow: "hidden",
          "&:before": {
            display: "none",
          },
          "& + &": {
            marginTop: 8,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 56,
        },
        content: {
          marginBlock: 12,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: brand.darkMuted,
          borderRadius: 12,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: brand.gold,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: brand.gold,
            borderWidth: 2,
          },
        },
        notchedOutline: {
          borderColor: alpha("#FFFFFF", 0.16),
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#D7CCC2",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#D7CCC2",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1rem",
          minHeight: 42,
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#9EB2BF",
          },
        },
        outlinedSecondary: {
          borderColor: alpha(brand.gold, 0.7),
          color: "#F5F2EF",
          "&:hover": {
            borderColor: brand.gold,
            backgroundColor: alpha(brand.gold, 0.12),
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: brand.gold,
          },
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: brand.gold,
          },
        },
      },
    },
  },
});
