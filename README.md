# 🚀 EventEra – Full Stack Event Booking Platform

A powerful full-stack MERN application that enables users to browse events, request bookings with OTP verification, and allows admins to manage events, bookings, and payments — all without third-party integrations.

## 📦 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Authentication & Security
- JWT (JSON Web Tokens)
- bcrypt.js (Password hashing)
- OTP-based Email Verification

### Other Tools
- Nodemailer (Email service)
- Axios (API calls)

---

## ✨ Features

### 🔐 Authentication & Security
- Secure Login & Registration
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (Admin/User)

---

### 📧 2FA OTP Verification
- Email OTP for account activation
- OTP required for booking confirmation
- Prevents unauthorized access & booking abuse

---

### 👥 Role-Based Access

#### 👨‍💼 Admin
- Create, update, delete events
- Confirm/reject booking requests
- Mark bookings as Paid / Not Paid
- Access analytics dashboard
- Restricted via database role validation

#### 👤 User
- Browse all events
- Book tickets using OTP verification
- View personal dashboard
- Cancel bookings

---

### 🎟️ Event Management
- Create free & paid events
- Add:
  - Title
  - Description
  - Category
  - Date
  - Image URL
  - Seating capacity
- Real-time seat tracking

---

### 🧠 Smart Booking System
- OTP-based booking authorization
- All bookings go into Pending state
- Admin approval required
- Prevents:
  - Duplicate bookings
  - Overbooking
- Seat count updates only after confirmation

---

### 📊 Admin Analytics Dashboard
- Total Revenue
- Pending Requests
- Confirmed Paid Users
- Real-time system insights

---

### 📩 Email Notifications
- OTP emails for:
  - Registration
  - Booking
- Booking confirmation email after admin approval

---

### 🎨 UI/UX
- Built with Tailwind CSS
- Clean and responsive design
- Smooth interactions and user flow

---

## 🏗️ Project Structure

EventEra/
│
├── FRONTEND/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.jsx
│
├── BACKEND/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── app.js

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/piyush00868/EventPlatform.git  
cd EventPlatform  

---

### 2. Setup Backend

cd BACKEND  
npm install  

Create `.env` file:

PORT=8000  
MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_secret_key  
EMAIL_USER=your_email  
EMAIL_PASS=your_app_password  

Run backend:

npm run dev  

---

### 3. Setup Frontend

cd FRONTEND  
npm install  
npm run dev  

---

## 🔐 API Endpoints (Overview)

### Auth
POST /api/auth/register  
POST /api/auth/login  
POST /api/auth/verify-otp  

### Events
GET /api/events  
GET /api/events/:id  
POST /api/events (Admin)  
PUT /api/events/:id (Admin)  
DELETE /api/events/:id (Admin)  

### Bookings
POST /api/booking/send-otp  
POST /api/booking  
PUT /api/booking/:id/confirm (Admin)  
GET /api/booking/my  
DELETE /api/booking/:id  

---

## 🧠 Key Learnings

- Full-stack architecture (MERN)
- JWT authentication & role-based access
- OTP-based secure workflows
- REST API design
- State management using Context API
- Debugging real-world issues (routes, auth, async flows)
- Building scalable backend logic

---

## 🚀 Future Improvements

- Payment gateway integration (Stripe/Razorpay)
- Real-time notifications (WebSockets)
- Seat locking system (prevent race conditions)
- Image uploads (Cloudinary)
- Pagination & filtering
- Deployment (Docker + CI/CD)

## 💬 Final Note

This is not just a CRUD app — it includes:
- OTP system  
- Booking engine  
- Role-based backend  
- Admin analytics  

 ## 🔑 Demo Admin Access

Email: admin@eventera.com  
Password: password123
