# FoodieHub

FoodieHub is a modern full-stack food delivery web application inspired by premium marketplace experiences like Zomato, built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Node.js**, **Express.js**, **JWT-based authentication**, and REST APIs.

This repository delivers a polished, mobile-first customer ordering experience plus role-based admin and restaurant owner dashboards, using seeded demo data to showcase the full product surface.

## PAP-466 Overview

Ticket **PAP-466** delivers a Zomato-style food ordering platform with:

- Premium landing page and discovery experience
- Customer authentication flows
- Restaurant listing and detail pages
- Cart, checkout, order success, and order tracking flows
- User profile and order history surfaces
- Admin dashboard for platform oversight
- Restaurant owner dashboard for order and restaurant management
- Express REST API scaffold with JWT auth middleware and role checks

## What Was Built

### Frontend experience

Implemented pages and UI flows include:

- **Home** — branded hero, featured sections, premium product messaging
- **Login** — customer/admin/owner sign-in entry point
- **Signup** — new account registration flow
- **Restaurant Listing** — restaurant browsing with cuisine/filter surface
- **Restaurant Details** — menu exploration and restaurant overview
- **Cart** — line-item review and quantity management
- **Checkout** — address/payment/order submission flow
- **Order Success** — post-purchase confirmation state
- **Order Tracking** — delivery progress and ETA presentation
- **User Profile** — user account summary and order-related context
- **Admin Dashboard** — platform metrics and management views
- **Owner Dashboard** — restaurant/operator management view

### Platform capabilities

FoodieHub includes documentation-backed support for the following feature set already represented in the implementation:

- Restaurant discovery and cuisine filtering
- Ratings, delivery metadata, and food-first cards
- Menu item browsing with rich imagery
- Add-to-cart and quantity update flows
- Coupon-ready ordering model
- Checkout and order placement flow
- Order tracking and order history support
- Role-based dashboard surfaces for:
  - **Customers**
  - **Restaurant owners**
  - **Admins**
- Backend route structure for auth, restaurants, orders, users, admin, and owner operations

### Backend/API scaffold

The Express API includes:

- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/restaurants`
- `GET /api/restaurants/featured`
- `GET /api/restaurants/:id`
- `GET /api/orders`
- `GET /api/orders/:id`
- `POST /api/orders`
- `GET /api/admin/overview`
- `GET /api/admin/users`
- `GET /api/admin/restaurants`
- `GET /api/owner/dashboard`
- Additional supporting user/auth middleware routes under `src/`

Current data access is powered by seeded/mock data, which makes the app runnable immediately while leaving a clean path for persistence upgrades to **PostgreSQL** or **MongoDB** later.

## Technology Stack

### Web app
- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

### API
- **Node.js**
- **Express 5**
- **Zod** for request validation
- **JWT** with role-aware middleware
- **Helmet**, **CORS**, and **Morgan**

## Project Structure

```text
app/                Next.js App Router pages
components/         Shared UI components
data/               Mock data and seeded domain models
src/                Express API source
  middleware/       Auth and error middleware
  routes/           REST API route modules
docs/               Delivery and implementation notes
```

## Getting Started

### Prerequisites

- **Node.js 20+** recommended
- **npm**

### Install dependencies

```bash
npm install
```

### Run the frontend

```bash
npm run dev
```

Frontend default URL:

- `http://localhost:3000`

### Run the backend API

In a second terminal:

```bash
npm run api:dev
```

Backend default URL:

- `http://localhost:4000`

### Run both together

```bash
npm run dev:full
```

## Production Build

Build the Next.js app:

```bash
npm run build
```

Start the production frontend server:

```bash
npm run start
```

Start the API in non-watch mode:

```bash
npm run api:start
```

## Type Checking

```bash
npm run typecheck
```

## Demo Authentication Notes

The implementation includes seeded demo accounts and data in `data/mockData.ts`.

Representative roles present in the seed data:

- **Customer**
- **Admin**
- **Owner**

This enables local review of customer and dashboard flows without external setup.

## Release Readiness Notes

This ticket delivers a documentation-ready, demo-friendly full-stack experience suitable for:

- PR review
- visual QA
- stakeholder demos
- further persistence integration work

Before a production deployment, recommended next steps are:

1. Replace mock data with a real database layer
2. Hash and store passwords securely in persistent storage
3. Add environment-variable documentation for JWT secrets and database config
4. Expand CRUD coverage for admin/owner operational workflows
5. Add automated tests and deployment configuration

## Related Docs

- `CHANGELOG.md`
- `docs/PAP-466-architecture-plan.md`
- `docs/IMPLEMENTATION_NOTES.md`
<!-- langfuse-trace-test -->
