import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Stack,
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={3}>
          <Box component="header">
            <Typography variant="h3" component="h1" gutterBottom>
              ClearSignature
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Clear signatures. Accessible by design.
            </Typography>
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Live preview of the current signature layout.
                </Typography>
                <SignaturePreview formData={formData} />
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
