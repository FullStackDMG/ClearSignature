export type SignatureFormData = {
  preferredName: string;
  formalName: string;
  pronouns: string;
  title: string;

  companyName: string;
  departmentName: string;

  phone1: string;
  phone2: string;
  phone3: string;
  phone4: string;

  email1: string;
  email2: string;
  email3: string;
  email4: string;

  address1: string;
  address2: string;
  address3: string;
  address4: string;

  link1Label: string;
  link1Url: string;
  link2Label: string;
  link2Url: string;
  link3Label: string;
  link3Url: string;
  link4Label: string;
  link4Url: string;

  social1Label: string;
  social1Url: string;
  social2Label: string;
  social2Url: string;
  social3Label: string;
  social3Url: string;
  social4Label: string;
  social4Url: string;

  disclosure: string;
  ctaText: string;

  fontFamily: string;
  textColor: string;
  accentColor: string;

  headshotAltText: string;
  companyLogoAltText: string;
  departmentLogoAltText: string;
};

export const initialFormData: SignatureFormData = {
  preferredName: '',
  formalName: '',
  pronouns: '',
  title: '',

  companyName: '',
  departmentName: '',

  phone1: '',
  phone2: '',
  phone3: '',
  phone4: '',

  email1: '',
  email2: '',
  email3: '',
  email4: '',

  address1: '',
  address2: '',
  address3: '',
  address4: '',

  link1Label: '',
  link1Url: '',
  link2Label: '',
  link2Url: '',
  link3Label: '',
  link3Url: '',
  link4Label: '',
  link4Url: '',

  social1Label: '',
  social1Url: '',
  social2Label: '',
  social2Url: '',
  social3Label: '',
  social3Url: '',
  social4Label: '',
  social4Url: '',

  disclosure: '',
  ctaText: '',

  fontFamily: 'Arial, Helvetica, sans-serif',
  textColor: '#111111',
  accentColor: '#005ea2',

  headshotAltText: '',
  companyLogoAltText: '',
  departmentLogoAltText: '',
};