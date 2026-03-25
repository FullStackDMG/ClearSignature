import type { SignatureFormData } from '../types/signature';

export function generatePlainTextSignature(data: SignatureFormData): string {
  const lines: string[] = [];

  // Name block
  if (data.preferredName) lines.push(data.preferredName);
  if (data.pronouns) lines.push(data.pronouns);
  if (data.formalName) lines.push(data.formalName);
  if (data.title) lines.push(data.title);

  // Company
  if (data.companyName) lines.push(data.companyName);
  if (data.departmentName) lines.push(data.departmentName);

  // Contact
  const phones = [data.phone1, data.phone2, data.phone3, data.phone4].filter(Boolean);
  const emails = [data.email1, data.email2, data.email3, data.email4].filter(Boolean);

  if (phones.length) lines.push(`Phone: ${phones.join(' | ')}`);
  if (emails.length) lines.push(`Email: ${emails.join(' | ')}`);

  // Address
  [data.address1, data.address2, data.address3, data.address4]
    .filter(Boolean)
    .forEach((line) => lines.push(line));

  // Links
  const links = [
    [data.link1Label, data.link1Url],
    [data.link2Label, data.link2Url],
    [data.link3Label, data.link3Url],
    [data.link4Label, data.link4Url],
  ];

  links.forEach(([label, url]) => {
    if (label || url) {
      lines.push(`${label || 'Link'}: ${url || ''}`);
    }
  });

  // Social
  const socials = [
    [data.social1Label, data.social1Url],
    [data.social2Label, data.social2Url],
    [data.social3Label, data.social3Url],
    [data.social4Label, data.social4Url],
  ];

  socials.forEach(([label, url]) => {
    if (label || url) {
      lines.push(`${label || 'Social'}: ${url || ''}`);
    }
  });

  // Disclosure
  if (data.disclosure) {
    lines.push('');
    lines.push(data.disclosure);
  }

  // CTA
  if (data.ctaText) {
    lines.push('');
    lines.push(data.ctaText);
  }

  return lines.join('\n');
}