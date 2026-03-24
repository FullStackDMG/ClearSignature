import { Box, Typography } from '@mui/material';
import type { SignatureFormData } from '../types/signature';

type AccessibilityReportProps = {
  formData: SignatureFormData;
};

function AccessibilityReport({ formData }: AccessibilityReportProps) {
  const issues: string[] = [];

  if (!formData.preferredName.trim()) {
    issues.push('Preferred name is required.');
  }

  if (!formData.email1.trim()) {
    issues.push('Email is required.');
  }

  if (!formData.phone1.trim()) {
    issues.push('Phone number is required.');
  }

  return issues.length === 0 ? (
    <Typography>Pass: core required fields are present.</Typography>
  ) : (
    <Box component="ul" sx={{ pl: 3, mb: 0 }}>
      {issues.map((issue) => (
        <li key={issue}>
          <Typography component="span">{issue}</Typography>
        </li>
      ))}
    </Box>
  );
}

export default AccessibilityReport;