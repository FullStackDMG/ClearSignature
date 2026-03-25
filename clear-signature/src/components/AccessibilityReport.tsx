import { Box, Typography } from '@mui/material';
import type { SignatureFormData } from '../types/signature';

type AccessibilityReportProps = {
  formData: SignatureFormData;
};

function AccessibilityReport({ formData }: AccessibilityReportProps) {
  const issues: string[] = [];
  const warnings: string[] = [];

  if (!formData.preferredName.trim()) {
    issues.push('Preferred name is required.');
  }

  if (!formData.email1.trim()) {
    issues.push('Primary email is required.');
  }

  if (!formData.phone1.trim()) {
    issues.push('Primary phone number is required.');
  }

  if (formData.companyName && !formData.companyLogoAltText.trim()) {
    warnings.push('Add company logo alt text when a company logo is used.');
  }

  if (formData.departmentName && !formData.departmentLogoAltText.trim()) {
    warnings.push('Add department logo alt text when a department logo is used.');
  }

  if (formData.ctaText && formData.ctaText.length < 8) {
    warnings.push('CTA text may be too short to be meaningful.');
  }

  if (issues.length === 0 && warnings.length === 0) {
    return <Typography>Pass: no current issues or warnings.</Typography>;
  }

  return (
    <Box>
      {issues.length > 0 && (
        <Box sx={{ mb: warnings.length > 0 ? 2 : 0 }}>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 700 }}>
            Needs review
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 0 }} color="text.secondary">
            {issues.map((issue) => (
              <li key={issue}>
                <Typography component="span">{issue}</Typography>
              </li>
            ))}
          </Box>
        </Box>
      )}

      {warnings.length > 0 && (
        <Box>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 700 }}>
            Warnings
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 0 }}>
            {warnings.map((warning) => (
              <li key={warning}>
                <Typography component="span">{warning}</Typography>
              </li>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default AccessibilityReport;