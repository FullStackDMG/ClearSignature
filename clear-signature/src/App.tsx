import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  Snackbar,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState, type ChangeEvent } from "react";
import AccessibilityReport from "./components/AccessibilityReport";
import SignatureForm from "./components/SignatureForm";
import SignaturePreview from "./components/SignaturePreview";
import { darkTheme, lightTheme } from "./styles/theme";
import { initialFormData, type SignatureFormData } from "./types/signature";
import { downloadFile } from "./utils/downloadFile";
import { generateHtmlSignature } from "./utils/exportHtml";
import { generatePlainTextSignature } from "./utils/exportPlainText";

function App() {
  const [formData, setFormData] = useState<SignatureFormData>(initialFormData);
  const [darkAppTheme, setDarkAppTheme] = useState(false);
  const [darkPreview, setDarkPreview] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleTextChange =
    (field: keyof SignatureFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSelectChange =
    (field: keyof SignatureFormData) =>
    (event: { target: { value: string } }) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleClearAll = () => {
    setFormData(initialFormData);
    setDarkPreview(false);
  };

  const handleExportPlainText = async () => {
    try {
      const text = generatePlainTextSignature(formData);
      await navigator.clipboard.writeText(text);
      setSnackbarMessage("Plain text signature copied to clipboard.");
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage("Clipboard copy failed.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleExportHtml = () => {
    const html = generateHtmlSignature(formData);
    downloadFile("clear-signature.html", html, "text/html;charset=utf-8");
    setSnackbarMessage("HTML signature downloaded.");
    setSnackbarOpen(true);
  };

  return (
    <ThemeProvider theme={darkAppTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Box
            component="header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                color="primary.main"
              >
                ClearSignature
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Clear signatures. Accessible by design.
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              flexWrap="wrap"
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={darkAppTheme}
                    onChange={(event) => setDarkAppTheme(event.target.checked)}
                    inputProps={{ "aria-label": "Toggle app theme" }}
                  />
                }
                label="Dark app theme"
              />

              <Button
                variant="contained"
                color="secondary"
                onClick={handleClearAll}
              >
                Reset
              </Button>
            </Stack>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Build
                </Typography>
                <SignatureForm
                  formData={formData}
                  onTextChange={handleTextChange}
                  onSelectChange={handleSelectChange}
                />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Preview
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Live preview of the current signature layout.
                  </Typography>

                  <FormControlLabel
                    control={
                      <Switch
                        checked={darkPreview}
                        onChange={(event) =>
                          setDarkPreview(event.target.checked)
                        }
                        inputProps={{
                          "aria-label": "Toggle dark mode preview",
                        }}
                      />
                    }
                    label="Dark mode preview"
                  />
                </Stack>
                <SignaturePreview formData={formData} darkMode={darkPreview} />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 2, display: "block" }}
                >
                  Preview simulates common dark mode behavior. Some email
                  clients may override colors differently.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  sx={{ mt: 2 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleExportPlainText}
                  >
                    Copy Plain Text Signature
                  </Button>

                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleExportHtml}
                  >
                    Download HTML Signature
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          <Paper sx={{ p: 3 }} elevation={2}>
            <Typography variant="h5" component="h2" gutterBottom>
              Accessibility report
            </Typography>
            <AccessibilityReport formData={formData} />
          </Paper>
        </Stack>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
