import { Box, Divider, Stack, Typography } from '@mui/material';
import type { SignatureFormData } from '../types/signature';

type SignaturePreviewProps = {
  formData: SignatureFormData;
};

function SignaturePreview({ formData }: SignaturePreviewProps) {
  const phones = [formData.phone1, formData.phone2, formData.phone3, formData.phone4].filter(Boolean);
  const emails = [formData.email1, formData.email2, formData.email3, formData.email4].filter(Boolean);
  const addresses = [formData.address1, formData.address2, formData.address3, formData.address4].filter(Boolean);

  const links = [
    { label: formData.link1Label, url: formData.link1Url },
    { label: formData.link2Label, url: formData.link2Url },
    { label: formData.link3Label, url: formData.link3Url },
    { label: formData.link4Label, url: formData.link4Url },
  ].filter((item) => item.label || item.url);

  const socialLinks = [
    { label: formData.social1Label, url: formData.social1Url },
    { label: formData.social2Label, url: formData.social2Url },
    { label: formData.social3Label, url: formData.social3Url },
    { label: formData.social4Label, url: formData.social4Url },
  ].filter((item) => item.label || item.url);

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

        <Box sx={{ minWidth: 0 }}>
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

      {(phones.length > 0 || emails.length > 0) && (
        <Box sx={{ mt: 2 }}>
          {phones.length > 0 && (
            <Typography variant="body2">
              {phones.join(' | ')}
            </Typography>
          )}
          {emails.length > 0 && (
            <Typography variant="body2">
              {emails.join(' | ')}
            </Typography>
          )}
        </Box>
      )}

      {addresses.length > 0 && (
        <Box sx={{ mt: 2 }}>
          {addresses.map((line) => (
            <Typography key={line} variant="body2">
              {line}
            </Typography>
          ))}
        </Box>
      )}

      {links.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Links
          </Typography>
          {links.map((link, index) => (
            <Typography key={`${link.label}-${link.url}-${index}`} variant="body2">
              {link.label || 'Link'}: {link.url || 'URL pending'}
            </Typography>
          ))}
        </Box>
      )}

      {socialLinks.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Social
          </Typography>
          {socialLinks.map((link, index) => (
            <Typography key={`${link.label}-${link.url}-${index}`} variant="body2">
              {link.label || 'Social link'}: {link.url || 'URL pending'}
            </Typography>
          ))}
        </Box>
      )}

      {formData.disclosure && (
        <>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">{formData.disclosure}</Typography>
        </>
      )}

      {formData.ctaText && (
        <Box
          sx={{
            mt: 2,
            p: 1.5,
            borderRadius: 1,
            backgroundColor: formData.accentColor,
            color: '#ffffff',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {formData.ctaText}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default SignaturePreview;