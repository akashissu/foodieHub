# PAP-466 — FoodieHub Architecture & Implementation Plan

## Phase
Architect / PLAN_DESIGN only

## Current Repo Assessment
- Repository is effectively greenfield.
- Present files: `README.md`, `docs/`, `memory-bank/`, and repo metadata.
- No existing frontend, backend, package manifests, database schema, or CI scaffolding detected.

## Product Goal
Build **FoodieHub**, a modern Zomato-inspired full-stack food delivery web app with a premium, mobile-first UX and clear separation between customer, restaurant owner, and admin experiences.

## Recommended Stack
### Frontend
- **Next.js 14+** with **App Router**
- **React 18+**
- **TypeScript**
- **Tailwind CSS** for design system and responsive UI
- **Framer Motion** for entrance/hover/page transitions
- **React Hook Form + Zod** for forms and validation
- **TanStack Query** for server state / caching
- **Zustand** for lightweight cart/session UI state
- **Sonner** or **react-hot-toast** for toast notifications

### Backend
- **Node.js** + **Express.js** REST API
- **TypeScript** on backend as well
- **JWT auth** with refresh-token flow
- **bcrypt** for password hashing
- **Multer / cloud image strategy** placeholder for restaurant/menu uploads

### Database
- **PostgreSQL recommended over MongoDB** for this product because it has strongly relational data:
  users ↔ restaurants ↔ menu items ↔ carts ↔ orders ↔ order items ↔ coupons ↔ statuses
- ORM: **Prisma**

## Monorepo Structure Proposal
```text
foodiehub/
  apps/
    web/          # Next.js frontend
    api/          # Express REST API
  packages/
    ui/           # shared components/tokens (optional phase 2)
    config/       # eslint/tsconfig/shared config (optional phase 1)
  docs/
  memory-bank/
```

## User Roles
1. **Customer**
   - browse restaurants
   - search / filter cuisine
   - manage cart
   - checkout and track orders
   - view order history / profile
2. **Restaurant Owner**
   - manage restaurant profile
   - manage menu items
   - manage incoming orders and status updates
3. **Admin**
   - manage users
   - approve/manage restaurants
   - moderate menu/catalog data

## Primary Pages / Routes
### Public / Customer
- `/` — Home
- `/login`
- `/signup`
- `/restaurants` — listing/search/filter page
- `/restaurants/[slug]` — restaurant details + menu
- `/cart`
- `/checkout`
- `/order/success/[orderId]`
- `/orders/[orderId]/tracking`
- `/profile`
- `/profile/orders`

### Owner Dashboard
- `/owner`
- `/owner/restaurants`
- `/owner/restaurants/[id]/menu`
- `/owner/orders`

### Admin Dashboard
- `/admin`
- `/admin/restaurants`
- `/admin/menu-items`
- `/admin/users`
- `/admin/orders` (optional but recommended)

## Core Frontend Component Map
### Shared Layout / Design
- `Navbar`
- `MobileBottomNav`
- `HeroSearch`
- `SectionHeader`
- `FilterBar`
- `RestaurantCard`
- `MenuItemCard`
- `RatingBadge`
- `PriceTag`
- `CartDrawer` / `CartSummary`
- `QuantityStepper`
- `CouponInput`
- `OrderStatusTimeline`
- `EmptyState`
- `LoadingSkeletons`
- `ToastProvider`

### Customer Flow Components
- home hero / category chips / featured collections
- restaurant grid with sorting + cuisine filters
- restaurant detail tabs: overview / menu / reviews placeholder
- sticky cart summary on mobile and desktop
- checkout form: address, contact, payment method placeholder
- order success confirmation card
- live-ish tracking timeline (polling-ready API contract)
- profile overview + order history list

### Dashboard Components
- `DashboardSidebar`
- `MetricCard`
- `DataTable`
- `RestaurantForm`
- `MenuItemForm`
- `OrderManagementTable`
- `UserManagementTable`
- `StatusPill`

## Design Direction
- White / warm-neutral background with **red/coral accents**
- Large food-forward hero banners and restaurant imagery
- Rounded cards (`rounded-2xl` / `rounded-3xl`)
- Soft shadows, restrained borders, premium spacing
- Smooth Framer Motion reveals and hover lift effects
- Skeleton loaders for lists/cards
- Toast feedback for cart/auth/order actions
- Mobile-first with sticky bottom cart / CTA patterns
- Inspiration from Zomato’s clarity and food-first browsing, without cloning layout/branding

## Suggested Data Model
### users
- id
- name
- email
- password_hash
- role (`customer | owner | admin`)
- phone
- avatar_url
- created_at

### restaurants
- id
- owner_id
- name
- slug
- description
- cover_image_url
- logo_url
- cuisines[]
- average_rating
- delivery_time_min
- delivery_fee
- min_order_amount
- is_active
- address fields
- created_at

### menu_categories
- id
- restaurant_id
- name
- sort_order

### menu_items
- id
- restaurant_id
- category_id
- name
- description
- price
- image_url
- is_veg
- is_available
- rating(optional/display)

### carts
- id
- user_id
- restaurant_id

### cart_items
- id
- cart_id
- menu_item_id
- quantity
- unit_price

### coupons
- id
- code
- type (`flat | percent`)
- value
- min_order_amount
- max_discount
- active
- expires_at

### orders
- id
- user_id
- restaurant_id
- status (`placed | confirmed | preparing | out_for_delivery | delivered | cancelled`)
- subtotal
- delivery_fee
- discount_amount
- total
- coupon_code
- address_snapshot (json)
- payment_method
- placed_at
- updated_at

### order_items
- id
- order_id
- menu_item_id
- name_snapshot
- price_snapshot
- quantity

## REST API Surface
### Auth
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `GET /api/auth/me`

### Restaurants / Discovery
- `GET /api/restaurants`
  - query: `search`, `cuisine`, `sort`, `page`, `limit`
- `GET /api/restaurants/:id`
- `GET /api/restaurants/:id/menu`

### Cart
- `GET /api/cart`
- `POST /api/cart/items`
- `PATCH /api/cart/items/:itemId`
- `DELETE /api/cart/items/:itemId`
- `POST /api/cart/apply-coupon`

### Checkout / Orders
- `POST /api/orders`
- `GET /api/orders/:id`
- `GET /api/orders/:id/tracking`
- `GET /api/me/orders`

### Owner
- `GET /api/owner/restaurants`
- `POST /api/owner/restaurants`
- `PATCH /api/owner/restaurants/:id`
- `GET /api/owner/restaurants/:id/menu-items`
- `POST /api/owner/restaurants/:id/menu-items`
- `PATCH /api/owner/menu-items/:itemId`
- `DELETE /api/owner/menu-items/:itemId`
- `GET /api/owner/orders`
- `PATCH /api/owner/orders/:orderId/status`

### Admin
- `GET /api/admin/users`
- `PATCH /api/admin/users/:id`
- `GET /api/admin/restaurants`
- `PATCH /api/admin/restaurants/:id`
- `DELETE /api/admin/restaurants/:id`
- `GET /api/admin/menu-items`
- `PATCH /api/admin/menu-items/:id`
- `DELETE /api/admin/menu-items/:id`

## Auth / Access Control Plan
- JWT access token + refresh token flow
- HTTP-only cookie for refresh token recommended
- Route guards by role on frontend middleware/layout boundaries
- Backend middleware:
  - `requireAuth`
  - `requireRole('admin')`
  - `requireRole('owner')`
- Owner endpoints must validate resource ownership

## State / UX Flows
### Customer
1. Land on home page → search restaurants
2. Filter by cuisine/rating/delivery time
3. Open restaurant → browse menu → add items
4. Adjust quantity in cart
5. Apply coupon
6. Checkout → place order
7. View success page → track order
8. Check past orders in profile

### Owner
1. Login as owner
2. Create/manage restaurant profile
3. Add/edit/remove menu items
4. View incoming orders
5. Update status through delivery lifecycle

### Admin
1. Login as admin
2. Review users/restaurants/menu catalog
3. Activate/deactivate restaurants/menu items
4. Moderate platform data

## Delivery Milestones for Grunt
### Milestone 1 — Foundation
- Scaffold monorepo/apps
- Set up Next.js + Express + shared TypeScript config
- Configure Tailwind, linting, formatting, env handling
- Set up Prisma schema + seed strategy

### Milestone 2 — Auth + Core Layout
- Implement auth API + JWT flow
- Build shared layout, navbar, footer, toasts, loading states
- Implement login/signup pages and protected route scaffolding

### Milestone 3 — Discovery + Restaurant Experience
- Home page
- Restaurant listing with search/filter/sort
- Restaurant details and menu rendering
- Cart state and add/update/remove flows

### Milestone 4 — Checkout + Orders
- Cart page
- Coupon application
- Checkout page
- Order placement, success page, tracking page, order history

### Milestone 5 — Owner Dashboard
- Restaurant CRUD for owner
- Menu item CRUD
- Owner order status management

### Milestone 6 — Admin Dashboard
- User management table
- Restaurant moderation
- Menu catalog management

### Milestone 7 — Polish
- Responsive QA
- animations / skeleton states / empty states
- improved imagery and premium visual refinement
- accessibility pass and error-state cleanup

## Seed / Demo Content Plan
Create realistic demo seed data for:
- 8–12 restaurants
- multiple cuisines (Indian, Italian, Chinese, Burgers, Desserts, Healthy)
- 6–12 menu items per restaurant
- demo customer, owner, and admin accounts
- sample orders across statuses for tracking/dashboard screens

## Non-Functional Requirements
- Mobile-first responsiveness
- Accessible forms and controls
- Reusable typed API contracts
- Clear empty/loading/error states
- Basic input validation on client and server
- Pagination-ready restaurant listing
- Secure password storage and token handling

## Risks / Decisions to Lock Early
1. **DB choice**: recommend PostgreSQL; do not split effort between Mongo + Postgres.
2. **Payments**: keep as mock/manual method in MVP unless specifically requested.
3. **Realtime tracking**: use polling-based status updates in MVP; websocket can be phase 2.
4. **Images/storage**: local placeholders or seeded URLs for MVP; cloud upload can be deferred.
5. **Reviews**: ratings display can be seeded; full review system is optional unless explicitly required.

## Handoff Notes for Grunt
- Treat repo as greenfield and scaffold from scratch.
- Prioritize working end-to-end customer flow before deep dashboard polish.
- Keep backend contracts simple and typed; avoid overengineering.
- Use premium UI tokens consistently: coral/red CTA, rounded cards, soft shadows, motion.
- Leave scribe-facing notes on setup, env vars, and demo credentials once implementation lands.
