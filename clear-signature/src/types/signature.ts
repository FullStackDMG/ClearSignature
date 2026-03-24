export type SignatureFormData = {
  preferredName: string;
  formalName: string;
  pronouns: string;
  title: string;
  companyName: string;
  departmentName: string;
  phone1: string;
  email1: string;
  disclosure: string;
  fontFamily: string;
  textColor: string;
  accentColor: string;
};

export const initialFormData: SignatureFormData = {
  preferredName: '',
  formalName: '',
  pronouns: '',
  title: '',
  companyName: '',
  departmentName: '',
  phone1: '',
  email1: '',
  disclosure: '',
  fontFamily: 'Arial, Helvetica, sans-serif',
  textColor: '#111111',
  accentColor: '#005ea2',
};