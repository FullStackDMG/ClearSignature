# ClearSignature
**Clear signatures. Accessible by design.**

Simple to create. Reliable everywhere.

**ClearSignature** is an accessibility-first email signature generator that creates WCAG-aware, cross-client compatible signatures for modern email platforms.

Built for individuals, teams, and organizations, ClearSignature prioritizes **accessibility, privacy, and real-world email compatibility**—without requiring user accounts or storing personal data.

---

## 🚀 Why ClearSignature?

Most email signature tools focus on appearance.  
ClearSignature focuses on **clarity, accessibility, and compatibility**.

- ♿ Accessibility-first (WCAG-aware)
- 📧 Works across major email clients (Outlook, Gmail, Apple Mail)
- 🔒 Privacy-first (no personal data stored)
- 📱 Mobile-friendly web experience
- 🏢 Smart reuse of company and department branding

---

## ✨ Features (MVP)

### 🧾 Signature Builder
- Create signatures for yourself or teammates
- Required fields:
  - Preferred name
  - Email
  - Phone number
- Optional fields:
  - Pronouns, formal name, title
  - Company and department
  - Multiple phone numbers and emails
  - Address lines
  - Links and social links
  - CTA / banner
  - Legal disclaimers (predefined dropdown)

---

### 🖼️ Logo & Branding System
- Upload company and department logos
- Logos are reused when the same **company + department combination** is selected
- Users can define brand colors and fonts
- Supported fonts:
  - Arial
  - Helvetica
  - Times New Roman

---

### ♿ Accessibility Checker
Built-in accessibility validation with clear feedback:

- Color contrast checks (WCAG-aware)
- Alt text required for images
- Link clarity checks
- Font size recommendations
- Detection of risky patterns (e.g., image-only signatures)

**Status levels:**
- ✅ Pass  
- ⚠️ Pass with warnings  
- ❌ Needs review  

---

### 🌙 Dark Mode Preview
- Preview signatures in:
  - Light mode
  - Simulated dark mode

> Note: Email clients may override styles differently in dark mode.

---

### 📤 Export Options

#### HTML Export
- Email-safe (table-based + inline styles)
- Compatible with Outlook, Gmail, Apple Mail

#### Plain Text Export
- Images converted to alt text
- Links converted to full URLs
- Clean, readable format

#### Copy/Paste
- One-click copy for direct use in email clients

---

### 🔐 Privacy-First Design

ClearSignature does **not store personal user data**.

We only store:
- Company name
- Department name
- Associated logos (for reuse)

> This improves future signature creation while protecting user privacy.

---

## 🏗️ Tech Stack (Planned)

- Frontend: React (mobile-first)
- Backend: Node.js / API (or serverless)
- Storage: Cloud storage (e.g., S3) for logos
- Database: Lightweight store for company/department/logo relationships

---

## 📊 Analytics (MVP)

- Signatures created
- Export type (HTML, text, copy)
- Accessibility warnings triggered
- Dark mode preview usage
- Logo reuse vs. uploads

---

## 🧠 Design Principles

- Accessibility is not optional
- Email compatibility over visual complexity
- Privacy by default
- Mobile-first experience
- Clear, readable, professional output

---

## 🛣️ Roadmap

### MVP (Current)
- Single locked template
- Accessibility checker
- Dark mode preview
- Export system
- Logo reuse system

### Backlog
- Multiple templates
- Layout customization
- Admin/governance controls
- Enterprise features (branding enforcement, approvals)
- FedRAMP-ready deployment
- Mobile app version

---

## 🤝 Contributing

We welcome contributions—especially in:

- Accessibility improvements
- Email client compatibility
- Template enhancements
- Performance and UX improvements

`CONTRIBUTING.md` coming soon.

---

## 📄 License

This project is licensed under the Apache License 2.0.

See the [LICENSE](LICENSE) file for details.

---

## 💡 Vision

ClearSignature aims to become the **standard for accessible email signatures**, helping individuals and organizations communicate clearly, professionally, and inclusively across all platforms.
