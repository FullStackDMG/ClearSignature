# Data Model

## 🎯 Overview

ClearSignature is designed to avoid storing personal user data.  
The data model focuses only on reusable organizational assets.

---

## 🗄️ Stored Entities

### Company

`json
{
  "id": "uuid",
  "name": "Company A",
  "createdAt": "timestamp"
}`

### Department

`json
{
  "id": "uuid",
  "companyId": "uuid",
  "name": "Department B",
  "createdAt": "timestamp"
}`

### Logo

`json
{
  "id": "uuid",
  "companyId": "uuid",
  "departmentId": "uuid | null",
  "type": "company | department",
  "url": "https://cdn.example.com/logo.png",
  "altText": "Accessible description of logo",
  "usageCount": 0,
  "createdAt": "timestamp"
}`

---

## 🔐 Privacy Constraints
The system MUST NOT store:
- Names
- Emails
- Phone numbers
- Addresses
- Any user-entered personal content

## 🔄 Relationships
- Company → many Departments
- Company → one Company Logo
- Company + Department → one Department Logo


## 📈 Future Enhancements
- isApproved flag for governance
- updatedAt timestamp
- Versioning for logos