import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useState, type ChangeEvent } from "react";
import AccessibilityReport from "./components/AccessibilityReport";
import SignatureForm from "./components/SignatureForm";
import SignaturePreview from "./components/SignaturePreview";
import { initialFormData, type SignatureFormData } from "./types/signature";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

function App() {
  const [formData, setFormData] = useState<SignatureFormData>(initialFormData);
  const [darkPreview, setDarkPreview] = useState(false);
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

  return (
    <ThemeProvider theme={theme}>
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
              <Typography variant="h3" component="h1" gutterBottom>
                ClearSignature
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Clear signatures. Accessible by design.
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClearAll}
            >
              Reset
            </Button>
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
    </ThemeProvider>
  );
}

export default App;
