# FoodieHub

FoodieHub is a modern full-stack food delivery web application inspired by premium marketplace experiences like Zomato, built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Node.js**, **Express.js**, **JWT-based authentication**, and REST APIs.

This repository delivers a polished, mobile-first customer ordering experience plus role-based admin and restaurant owner dashboards, using seeded demo data to showcase the full product surface.

## PAP-467 Overview

Ticket **PAP-467** documents the minimal **[Langfuse E2E] Trace tree smoke test** delivery. This repo now includes the explicit README marker required by the smoke test handoff:

- `<!-- langfuse-trace-test -->`

The intent of this ticket is deliberately small: verify the documentation surface reflects the E2E trace-tree smoke-test deliverable and that downstream reviewers can confirm the expected marker is present.

## Setup

```bash
npm install
```

## How to Run

### Development

```bash
npm run dev
```

### If the project exposes a combined app/API dev command

```bash
npm run dev:full
```

### Optional validation

```bash
npm run typecheck
```

## What Was Built for the Langfuse E2E Trace Tree Smoke Test

- Added the required README marker used by the minimal cascade smoke test.
- Preserved application source unchanged for this documentation-only handoff.
- Updated delivery docs so release reviewers can verify scope quickly.

## Review Checklist for PAP-467

- Confirm commit history includes a `feat(pap-467): ...` implementation commit.
- Confirm `README.md` contains `<!-- langfuse-trace-test -->`.
- Confirm changelog and implementation notes reflect the documentation-only nature of this phase.

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
