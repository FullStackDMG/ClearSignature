import { Box, Divider, Stack, Typography } from "@mui/material";
import type { SignatureFormData } from "../types/signature";

type SignaturePreviewProps = {
  formData: SignatureFormData;
  darkMode?: boolean;
};

type LinkItem = {
  label: string;
  url: string;
};

function PlaceholderBox({
  label,
  altText,
  darkMode = false,
}: {
  label: string;
  altText?: string;
  darkMode?: boolean;
}) {
  return (
    <Box
      sx={{
        width: 72,
        height: 72,
        border: "1px solid",
        borderColor: darkMode ? "rgba(255, 255, 255, 0.24)" : "divider",
        borderRadius: 1,
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        px: 1,
        fontSize: "0.75rem",
        color: darkMode ? "#a0a0a0" : "text.secondary",
        backgroundColor: darkMode ? "#2d2d2d" : "#fafafa",
        flexShrink: 0,
      }}
      aria-label={altText || `${label} placeholder`}
    >
      {label}
    </Box>
  );
}

function InlineItems({
  items,
  fallbackLabel,
}: {
  items: string[];
  fallbackLabel?: string;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
      {fallbackLabel ? `${fallbackLabel}: ` : ""}
      {items.join(" | ")}
    </Typography>
  );
}

function LinkList({ heading, items }: { heading: string; items: LinkItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {heading}
      </Typography>

      {items.map((item, index) => (
        <Typography
          key={`${heading}-${item.label}-${item.url}-${index}`}
          variant="body2"
          sx={{ wordBreak: "break-word" }}
        >
          {item.label || heading.slice(0, -1)}: {item.url || "URL pending"}
        </Typography>
      ))}
    </Box>
  );
}

function SignaturePreview({
  formData,
  darkMode = false,
}: SignaturePreviewProps) {
  const phones = [
    formData.phone1,
    formData.phone2,
    formData.phone3,
    formData.phone4,
  ].filter(Boolean);

  const emails = [
    formData.email1,
    formData.email2,
    formData.email3,
    formData.email4,
  ].filter(Boolean);

  const addresses = [
    formData.address1,
    formData.address2,
    formData.address3,
    formData.address4,
  ].filter(Boolean);

  const links: LinkItem[] = [
    { label: formData.link1Label, url: formData.link1Url },
    { label: formData.link2Label, url: formData.link2Url },
    { label: formData.link3Label, url: formData.link3Url },
    { label: formData.link4Label, url: formData.link4Url },
  ].filter((item) => item.label || item.url);

  const socialLinks: LinkItem[] = [
    { label: formData.social1Label, url: formData.social1Url },
    { label: formData.social2Label, url: formData.social2Url },
    { label: formData.social3Label, url: formData.social3Url },
    { label: formData.social4Label, url: formData.social4Url },
  ].filter((item) => item.label || item.url);

  return (
    <Box
      sx={{
        p: 2.5,
        borderLeft: `4px solid ${formData.accentColor}`,
        fontFamily: formData.fontFamily,
        color: darkMode ? "#f5f5f5" : formData.textColor,
        bgcolor: darkMode ? "#1e1e1e" : "#ffffff",
        borderRadius: 1,
        boxShadow: "0 1px 2px rgba(16, 24, 40, 0.06)",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <PlaceholderBox
            label="Headshot"
            altText={formData.headshotAltText}
            darkMode={darkMode}
          />

          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                wordBreak: "break-word",
              }}
            >
              {formData.preferredName || "Preferred Name"}
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
          <Stack spacing={1.5}>
            {formData.companyName && (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PlaceholderBox
                  label="Company Logo"
                  altText={formData.companyLogoAltText}
                  darkMode={darkMode}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, wordBreak: "break-word" }}
                >
                  {formData.companyName}
                </Typography>
              </Stack>
            )}

            {formData.departmentName && (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PlaceholderBox
                  label="Dept. Logo"
                  altText={formData.departmentLogoAltText}
                  darkMode={darkMode}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, wordBreak: "break-word" }}
                >
                  {formData.departmentName}
                </Typography>
              </Stack>
            )}
          </Stack>
        )}

        {(phones.length > 0 || emails.length > 0) && (
          <Box>
            <InlineItems items={phones} fallbackLabel="Phone" />
            <InlineItems items={emails} fallbackLabel="Email" />
          </Box>
        )}

        {addresses.length > 0 && (
          <Box>
            {addresses.map((line, index) => (
              <Typography key={`${line}-${index}`} variant="body2">
                {line}
              </Typography>
            ))}
          </Box>
        )}

        <LinkList heading="Links" items={links} />
        <LinkList heading="Social links" items={socialLinks} />

        {formData.disclosure && (
          <>
            <Divider />
            <Typography
              variant="body2"
              sx={{ fontSize: "0.8125rem", wordBreak: "break-word" }}
            >
              {formData.disclosure}
            </Typography>
          </>
        )}

        {formData.ctaText && (
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1,
              backgroundColor: formData.accentColor,
              color: "#ffffff",
              border: darkMode ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, wordBreak: "break-word" }}
            >
              {formData.ctaText}
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
}

export default SignaturePreview;
