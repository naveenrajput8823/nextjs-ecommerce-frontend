<div align="center">

# 🛍️ eCommerce Frontend

**A modern, responsive eCommerce frontend built with Next.js 16, React 19 and Tailwind CSS 4**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## 📖 Overview

This project is the frontend of an eCommerce platform built with the **Next.js App Router**. It includes a polished dark-themed landing page, fully validated **register** and **login** forms, a global authentication context, and mock REST API routes so the whole flow can be tested without a separate backend.

## ✨ Features

- Modern dark landing page with gradient and glass effects
- Responsive navbar with mobile menu and auth-aware state
- Register and login pages with schema validation (**React Hook Form + Zod**)
- Global authentication state using React Context and a custom `useAuth` hook
- Toast notifications using **React Toastify**
- Next.js Route Handlers acting as a mock backend (`/api/v1/...`)
- Route groups for clean separation of auth pages
- Custom 404 page
- Icons from **Lucide React**
- Fully typed with **TypeScript**

## 🧰 Tech Stack

| Category        | Technology                      |
|-----------------|---------------------------------|
| Framework       | Next.js 16 (App Router)         |
| UI Library      | React 19                        |
| Language        | TypeScript                      |
| Styling         | Tailwind CSS 4                  |
| Forms           | React Hook Form                 |
| Validation      | Zod 4                           |
| Notifications   | React Toastify                  |
| Icons           | Lucide React                    |
| Linting         | ESLint                          |

## 🏗️ Project Structure

```
├── app
│   ├── (auth)
│   │   ├── login/page.tsx        # Login page
│   │   └── register/page.tsx     # Register page
│   ├── _components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── api/v1
│   │   ├── auth
│   │   │   ├── login/route.tsx       # POST /api/v1/auth/login
│   │   │   ├── register/route.tsx    # POST /api/v1/auth/register
│   │   │   └── user.tsx              # In-memory user store
│   │   └── users/route.tsx           # GET, POST /api/v1/users
│   ├── about/page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx                  # Landing page
│   └── globals.css
├── context
│   └── AuthContextWrapper.tsx    # Auth provider (login / logout state)
├── hooks
│   └── useAuth.tsx               # Custom auth hook
├── public                        # Static assets
├── next.config.ts
├── package.json
└── tsconfig.json
```

## ✅ Prerequisites

- **Node.js 20.9** or higher
- **npm** (comes with Node.js)
- **Git**

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/naveenrajput8823/nextjs-ecommerce-frontend.git
cd nextjs-ecommerce-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

## 📜 Available Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm start`     | Run the production build             |
| `npm run lint`  | Run ESLint                           |

## 🗺️ Pages

| Route        | Description                  |
|--------------|------------------------------|
| `/`          | Landing page                 |
| `/register`  | Create a new account         |
| `/login`     | Sign in to an existing account |
| `/about`     | About page (placeholder)     |

## 📡 Mock API

The API routes below act as a lightweight backend for development.

| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| `POST` | `/api/v1/auth/register` | Register a new user       |
| `POST` | `/api/v1/auth/login`    | Authenticate a user       |
| `GET`  | `/api/v1/users`         | Health check for users API |
| `POST` | `/api/v1/users`         | Echo a created user       |

**Register example**

```json
POST /api/v1/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

> ⚠️ **Note:** Users are stored **in memory** for demo purposes. Data resets whenever the server restarts, and this setup is **not intended for production use**.

## 🔒 Form Validation Rules

**Register**

| Field             | Rule                         |
|-------------------|------------------------------|
| `name`            | 2 to 50 characters           |
| `email`           | Valid email address          |
| `password`        | Minimum 8 characters         |
| `confirmPassword` | Must match password          |

**Login**

| Field      | Rule                 |
|------------|----------------------|
| `email`    | Valid email address  |
| `password` | Minimum 6 characters |

## 🛣️ Roadmap

- [ ] Connect to a real backend (Spring Boot / Node.js) with a database
- [ ] Secure authentication with password hashing and JWT / cookie sessions
- [ ] Protected routes and persistent login
- [ ] Product listing, product details and search
- [ ] Shopping cart and checkout flow
- [ ] Complete About, Services, Pricing and Contact sections
- [ ] SEO metadata and Open Graph tags
- [ ] Unit and end-to-end tests
- [ ] Deployment on Vercel

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 👨‍💻 Author

**Naveen Rajput**

- GitHub: [@naveenrajput8823](https://github.com/naveenrajput8823)

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

</div>
