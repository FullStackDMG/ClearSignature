import type { SignatureFormData } from '../types/signature';

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderTextRow(value: string, styles = ''): string {
  if (!value.trim()) return '';
  return `
    <tr>
      <td style="${styles}">${escapeHtml(value)}</td>
    </tr>
  `;
}

function renderInlineList(label: string, values: string[], color: string): string {
  if (values.length === 0) return '';
  return `
    <tr>
      <td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; color: ${color}; padding: 0 0 4px 0;">
        <strong>${escapeHtml(label)}:</strong> ${values.map(escapeHtml).join(' | ')}
      </td>
    </tr>
  `;
}

function renderLinkRows(
  heading: string,
  items: Array<{ label: string; url: string }>,
  color: string,
  accentColor: string,
): string {
  const filtered = items.filter((item) => item.label.trim() || item.url.trim());
  if (filtered.length === 0) return '';

  const rows = filtered
    .map((item) => {
      const label = item.label.trim() || heading.slice(0, -1);
      const url = item.url.trim();

      if (!url) {
        return `
          <tr>
            <td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; color: ${color}; padding: 0 0 4px 0;">
              ${escapeHtml(label)}: URL pending
            </td>
          </tr>
        `;
      }

      return `
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; color: ${color}; padding: 0 0 4px 0;">
            ${escapeHtml(label)}:
            <a href="${escapeHtml(url)}" style="color: ${accentColor}; text-decoration: underline;">
              ${escapeHtml(url)}
            </a>
          </td>
        </tr>
      `;
    })
    .join('');

  return `
    <tr>
      <td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: bold; line-height: 1.5; color: ${color}; padding: 8px 0 4px 0;">
        ${escapeHtml(heading)}
      </td>
    </tr>
    ${rows}
  `;
}

export function generateHtmlSignature(data: SignatureFormData): string {
  const textColor = data.textColor || '#24313A';
  const accentColor = data.accentColor || '#425664';
  const fontFamily = data.fontFamily || 'Arial, Helvetica, sans-serif';

  const phones = [data.phone1, data.phone2, data.phone3, data.phone4]
    .map((item) => item.trim())
    .filter(Boolean);

  const emails = [data.email1, data.email2, data.email3, data.email4]
    .map((item) => item.trim())
    .filter(Boolean);

  const addresses = [data.address1, data.address2, data.address3, data.address4]
    .map((item) => item.trim())
    .filter(Boolean);

  const links = [
    { label: data.link1Label, url: data.link1Url },
    { label: data.link2Label, url: data.link2Url },
    { label: data.link3Label, url: data.link3Url },
    { label: data.link4Label, url: data.link4Url },
  ];

  const socialLinks = [
    { label: data.social1Label, url: data.social1Url },
    { label: data.social2Label, url: data.social2Url },
    { label: data.social3Label, url: data.social3Url },
    { label: data.social4Label, url: data.social4Url },
  ];

  return `
<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse; width: 100%; max-width: 640px; font-family: ${fontFamily}; color: ${textColor};">
  <tr>
    <td style="border-left: 4px solid ${accentColor}; padding: 16px 0 0 16px;">
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse; width: 100%;">
        <tr>
          <td valign="top" style="width: 88px; padding: 0 16px 0 0;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse;">
              <tr>
                <td style="width: 72px; height: 72px; border: 1px solid #cccccc; text-align: center; vertical-align: middle; font-size: 12px; color: #666666;">
                  Headshot
                </td>
              </tr>
            </table>
          </td>

          <td valign="top">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse; width: 100%;">
              ${renderTextRow(
                data.preferredName,
                `font-family: ${fontFamily}; font-size: 20px; font-weight: bold; line-height: 1.2; color: ${textColor}; padding: 0 0 4px 0;`,
              )}
              ${renderTextRow(
                data.pronouns,
                `font-family: ${fontFamily}; font-size: 14px; line-height: 1.5; color: ${textColor}; padding: 0 0 2px 0;`,
              )}
              ${renderTextRow(
                data.formalName,
                `font-family: ${fontFamily}; font-size: 14px; line-height: 1.5; color: ${textColor}; padding: 0 0 2px 0;`,
              )}
              ${renderTextRow(
                data.title,
                `font-family: ${fontFamily}; font-size: 14px; line-height: 1.5; color: ${textColor}; padding: 0 0 2px 0;`,
              )}
            </table>
          </td>
        </tr>

        ${
          data.companyName.trim()
            ? `
        <tr>
          <td colspan="2" style="padding-top: 16px;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse;">
              <tr>
                <td style="width: 72px; height: 40px; border: 1px solid #cccccc; text-align: center; vertical-align: middle; font-size: 12px; color: #666666;">
                  Company Logo
                </td>
                <td style="padding-left: 12px; font-family: ${fontFamily}; font-size: 14px; font-weight: bold; line-height: 1.5; color: ${textColor};">
                  ${escapeHtml(data.companyName)}
                </td>
              </tr>
            </table>
          </td>
        </tr>`
            : ''
        }

        ${
          data.departmentName.trim()
            ? `
        <tr>
          <td colspan="2" style="padding-top: 8px;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse;">
              <tr>
                <td style="width: 72px; height: 40px; border: 1px solid #cccccc; text-align: center; vertical-align: middle; font-size: 12px; color: #666666;">
                  Dept. Logo
                </td>
                <td style="padding-left: 12px; font-family: ${fontFamily}; font-size: 14px; line-height: 1.5; color: ${textColor};">
                  ${escapeHtml(data.departmentName)}
                </td>
              </tr>
            </table>
          </td>
        </tr>`
            : ''
        }

        <tr>
          <td colspan="2" style="padding-top: 16px;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse; width: 100%;">
              ${renderInlineList('Phone', phones, textColor)}
              ${renderInlineList('Email', emails, textColor)}
              ${addresses
                .map((line) =>
                  renderTextRow(
                    line,
                    `font-family: ${fontFamily}; font-size: 14px; line-height: 1.5; color: ${textColor}; padding: 0 0 4px 0;`,
                  ),
                )
                .join('')}
              ${renderLinkRows('Links', links, textColor, accentColor)}
              ${renderLinkRows('Social links', socialLinks, textColor, accentColor)}

              ${
                data.disclosure.trim()
                  ? `
                <tr>
                  <td style="padding: 12px 0 0 0;">
                    <hr style="border: 0; border-top: 1px solid #d9d9d9; margin: 0;" />
                  </td>
                </tr>
                <tr>
                  <td style="font-family: ${fontFamily}; font-size: 12px; line-height: 1.5; color: ${textColor}; padding: 12px 0 0 0;">
                    ${escapeHtml(data.disclosure)}
                  </td>
                </tr>`
                  : ''
              }

              ${
                data.ctaText.trim()
                  ? `
                <tr>
                  <td style="padding: 12px 0 0 0;">
                    <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse: collapse;">
                      <tr>
                        <td style="background-color: ${accentColor}; color: #ffffff; font-family: ${fontFamily}; font-size: 14px; font-weight: bold; line-height: 1.5; padding: 10px 14px;">
                          ${escapeHtml(data.ctaText)}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`
                  : ''
              }
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  `.trim();
}