import { Box, Stack, Typography } from '@mui/material';
import type { SignatureFormData } from '../types/signature';

type SignaturePreviewProps = {
  formData: SignatureFormData;
};

function SignaturePreview({ formData }: SignaturePreviewProps) {
  return (
    <Box
      sx={{
        p: 2,
        borderLeft: `4px solid ${formData.accentColor}`,
        fontFamily: formData.fontFamily,
        color: formData.textColor,
        bgcolor: '#ffffff',
        borderRadius: 1,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          aria-hidden="true"
          sx={{
            width: 72,
            height: 72,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            display: 'grid',
            placeItems: 'center',
            fontSize: '0.875rem',
            color: 'text.secondary',
            flexShrink: 0,
          }}
        >
          Headshot
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {formData.preferredName || 'Preferred Name'}
          </Typography>

          {formData.pronouns && (
            <Typography variant="body2">{formData.pronouns}</Typography>
          )}

          {formData.formalName && (
            <Typography variant="body2">{formData.formalName}</Typography>
          )}

          {formData.title && (
            <Typography variant="body2">{formData.title}</Typography>
          )}
        </Box>
      </Stack>

      {(formData.companyName || formData.departmentName) && (
        <Box sx={{ mt: 2 }}>
          {formData.companyName && (
            <Typography variant="body2">{formData.companyName}</Typography>
          )}
          {formData.departmentName && (
            <Typography variant="body2">{formData.departmentName}</Typography>
          )}
        </Box>
      )}

      <Box sx={{ mt: 2 }}>
        {formData.phone1 && (
          <Typography variant="body2">{formData.phone1}</Typography>
        )}
        {formData.email1 && (
          <Typography variant="body2">{formData.email1}</Typography>
        )}
      </Box>

      {formData.disclosure && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">{formData.disclosure}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default SignaturePreview;