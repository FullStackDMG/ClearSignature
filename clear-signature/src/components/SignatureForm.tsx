import {
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

      <Typography variant="h6" sx={{ pt: 1 }}>
        Identity
      </Typography>

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

      <Typography variant="h6" sx={{ pt: 1 }}>
        Organization
      </Typography>

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

      <Typography variant="h6" sx={{ pt: 1 }}>
        Style
      </Typography>

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

      <Typography variant="h6" sx={{ pt: 1 }}>
        Disclosure
      </Typography>

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
    </Stack>
  );
}

export default SignatureForm;