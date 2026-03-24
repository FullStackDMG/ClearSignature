# API

## 🎯 Overview

The API supports logo storage and company/department lookup.

---

## 📥 Endpoints

### Create Company

POST /companies

`json
{
  "name": "Company A"
}`

### Create Department

POST /departments

`json
{
  "companyId": "uuid",
  "name": "Department B"
}`

### Upload Logo

POST /logos

Multipart upload

Requires:
- companyId
- optional departmentId
- altText

### Get Company Data

GET /companies/:id

Returns:
- company details
- associated departments
- logos

## 🔐 Security

- No authentication required (MVP)
- Rate limiting recommended
- File validation required

# 🧠 Future Enhancements

- Authentication
- Admin approval workflows
- Versioned APIs