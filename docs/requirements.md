# Functional Requirements

## 🧾 Signature Builder

### Required Inputs
- Preferred Name
- Email Address
- Phone Number

### Optional Inputs
- Pronouns
- Formal Name
- Title
- Company Name
- Department Name
- Multiple phone numbers (up to 4)
- Multiple emails (up to 4)
- Address lines (up to 4)
- Links (up to 4)
- Social links (up to 4)
- CTA / Banner
- Legal disclaimer (dropdown selection)

---

## 🖼️ Logo System

- Users can upload logos
- Logos are stored with:
  - Company name
  - Department name
- Company logos appear when company is selected
- Department logos appear only when company + department match

---

## 🎨 Styling

- Font options:
  - Arial
  - Helvetica
  - Times New Roman
- User-defined colors
- Layout is fixed in MVP

---

## ♿ Accessibility Checker

The system must:
- Validate color contrast
- Require alt text for images
- Evaluate link clarity
- Flag accessibility risks

### Output Status
- Pass
- Pass with warnings
- Needs review

---

## 🌙 Preview

- Light mode preview
- Simulated dark mode preview

---

## 📤 Export

### HTML Export
- Table-based layout
- Inline CSS
- Email client compatibility

### Plain Text Export
- Replace images with alt text
- Convert links to full URLs

### Copy/Paste
- Pre-rendered HTML snippet

---

## 🔐 Privacy

- Do not store personal user data
- Only store:
  - Company name
  - Department name
  - Logos