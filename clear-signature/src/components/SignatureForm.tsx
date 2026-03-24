import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { type ChangeEvent } from 'react';
import { disclosureOptions } from '../data/disclosureOptions';
import type { SignatureFormData } from '../types/signature';

type SignatureFormProps = {
  formData: SignatureFormData;
  onTextChange: (
    field: keyof SignatureFormData,
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (
    field: keyof SignatureFormData,
  ) => (event: { target: { value: string } }) => void;
};

function SignatureForm({
  formData,
  onTextChange,
  onSelectChange,
}: SignatureFormProps) {
    return (
    <Stack spacing={2}>
      <Typography variant="h6">Required fields</Typography>

      <TextField
        label="Preferred name"
        value={formData.preferredName}
        onChange={onTextChange('preferredName')}
        required
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        value={formData.email1}
        onChange={onTextChange('email1')}
        required
        fullWidth
      />

      <TextField
        label="Phone number"
        value={formData.phone1}
        onChange={onTextChange('phone1')}
        required
        fullWidth
      />

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Identity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <TextField
              label="Pronouns"
              value={formData.pronouns}
              onChange={onTextChange('pronouns')}
              fullWidth
            />

            <TextField
              label="Formal name"
              value={formData.formalName}
              onChange={onTextChange('formalName')}
              fullWidth
            />

            <TextField
              label="Title"
              value={formData.title}
              onChange={onTextChange('title')}
              fullWidth
            />

            <TextField
              label="Headshot alt text"
              value={formData.headshotAltText}
              onChange={onTextChange('headshotAltText')}
              helperText="Required when a headshot image is added later."
              fullWidth
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Organization</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <TextField
              label="Company name"
              value={formData.companyName}
              onChange={onTextChange('companyName')}
              fullWidth
            />

            <TextField
              label="Department name"
              value={formData.departmentName}
              onChange={onTextChange('departmentName')}
              fullWidth
            />

            <TextField
              label="Company logo alt text"
              value={formData.companyLogoAltText}
              onChange={onTextChange('companyLogoAltText')}
              helperText="Required when a company logo is added later."
              fullWidth
            />

            <TextField
              label="Department logo alt text"
              value={formData.departmentLogoAltText}
              onChange={onTextChange('departmentLogoAltText')}
              helperText="Required when a department logo is added later."
              fullWidth
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Additional contact details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <TextField
              label="Phone 2"
              value={formData.phone2}
              onChange={onTextChange('phone2')}
              fullWidth
            />
            <TextField
              label="Phone 3"
              value={formData.phone3}
              onChange={onTextChange('phone3')}
              fullWidth
            />
            <TextField
              label="Phone 4"
              value={formData.phone4}
              onChange={onTextChange('phone4')}
              fullWidth
            />

            <TextField
              label="Email 2"
              type="email"
              value={formData.email2}
              onChange={onTextChange('email2')}
              fullWidth
            />
            <TextField
              label="Email 3"
              type="email"
              value={formData.email3}
              onChange={onTextChange('email3')}
              fullWidth
            />
            <TextField
              label="Email 4"
              type="email"
              value={formData.email4}
              onChange={onTextChange('email4')}
              fullWidth
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <TextField
              label="Address line 1"
              value={formData.address1}
              onChange={onTextChange('address1')}
              fullWidth
            />
            <TextField
              label="Address line 2"
              value={formData.address2}
              onChange={onTextChange('address2')}
              fullWidth
            />
            <TextField
              label="Address line 3"
              value={formData.address3}
              onChange={onTextChange('address3')}
              fullWidth
            />
            <TextField
              label="Address line 4"
              value={formData.address4}
              onChange={onTextChange('address4')}
              fullWidth
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <TextField
              label="Link 1 label"
              value={formData.link1Label}
              onChange={onTextChange('link1Label')}
              fullWidth
            />
            <TextField
              label="Link 1 URL"
              value={formData.link1Url}
              onChange={onTextChange('link1Url')}
              fullWidth
            />

            <TextField
              label="Link 2 label"
              value={formData.link2Label}
              onChange={onTextChange('link2Label')}
              fullWidth
            />
            <TextField
              label="Link 2 URL"
              value={formData.link2Url}
              onChange={onTextChange('link2Url')}
              fullWidth
            />

            <TextField
              label="Link 3 label"
              value={formData.link3Label}
              onChange={onTextChange('link3Label')}
              fullWidth
            />
            <TextField
              label="Link 3 URL"
              value={formData.link3Url}
              onChange={onTextChange('link3Url')}
              fullWidth
            />

            <TextField
              label="Link 4 label"
              value={formData.link4Label}
              onChange={onTextChange('link4Label')}
              fullWidth
            />
            <TextField
              label="Link 4 URL"
              value={formData.link4Url}
              onChange={onTextChange('link4Url')}
              fullWidth
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Social links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <TextField
              label="Social link 1 label"
              value={formData.social1Label}
              onChange={onTextChange('social1Label')}
              fullWidth
            />
            <TextField
              label="Social link 1 URL"
              value={formData.social1Url}
              onChange={onTextChange('social1Url')}
              fullWidth
            />

            <TextField
              label="Social link 2 label"
              value={formData.social2Label}
              onChange={onTextChange('social2Label')}
              fullWidth
            />
            <TextField
              label="Social link 2 URL"
              value={formData.social2Url}
              onChange={onTextChange('social2Url')}
              fullWidth
            />

            <TextField
              label="Social link 3 label"
              value={formData.social3Label}
              onChange={onTextChange('social3Label')}
              fullWidth
            />
            <TextField
              label="Social link 3 URL"
              value={formData.social3Url}
              onChange={onTextChange('social3Url')}
              fullWidth
            />

            <TextField
              label="Social link 4 label"
              value={formData.social4Label}
              onChange={onTextChange('social4Label')}
              fullWidth
            />
            <TextField
              label="Social link 4 URL"
              value={formData.social4Url}
              onChange={onTextChange('social4Url')}
              fullWidth
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="font-family-label">Font</InputLabel>
              <Select
                labelId="font-family-label"
                value={formData.fontFamily}
                label="Font"
                onChange={onSelectChange('fontFamily')}
              >
                <MenuItem value="Arial, Helvetica, sans-serif">Arial</MenuItem>
                <MenuItem value="Helvetica, Arial, sans-serif">Helvetica</MenuItem>
                <MenuItem value='"Times New Roman", Times, serif'>
                  Times New Roman
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Text color"
              type="color"
              value={formData.textColor}
              onChange={onTextChange('textColor')}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Accent color"
              type="color"
              value={formData.accentColor}
              onChange={onTextChange('accentColor')}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Disclosure and CTA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="disclosure-label">Prescribed text</InputLabel>
              <Select
                labelId="disclosure-label"
                value={formData.disclosure}
                label="Prescribed text"
                onChange={onSelectChange('disclosure')}
              >
                <MenuItem value="">Select one</MenuItem>
                {disclosureOptions.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="CTA or banner text"
              value={formData.ctaText}
              onChange={onTextChange('ctaText')}
              fullWidth
              multiline
              minRows={2}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default SignatureForm;