# Changelog

## [PAP-467] - 2026-06-26

### Added
- Updated `README.md` for the **[Langfuse E2E] Trace tree smoke test** handoff.
- Documented setup via `npm install` and standard local run commands for reviewer validation.
- Recorded the required README marker used by the minimal observability smoke test: `<!-- langfuse-trace-test -->`.
- Added release-facing documentation clarifying that this phase is documentation-only and does not change application source.

### Notes
- Verified the implementation handoff is anchored by a `feat(pap-467): ...` commit in git history.
- This Scribe phase intentionally leaves app/source files untouched and prepares the repository for automated PR completion.

## [PAP-466] - 2026-06-26

### Added
- Delivered **FoodieHub**, a modern full-stack food delivery web application inspired by premium Zomato-style ordering experiences.
- Added a Next.js customer-facing application with pages for:
  - Home
  - Login
  - Signup
  - Restaurant listing
  - Restaurant details
  - Cart
  - Checkout
  - Order success
  - Order tracking
  - User profile
  - Admin dashboard
  - Restaurant owner dashboard
- Added shared UI components for discovery, restaurant presentation, dashboard summaries, motion, and cart flows.
- Added an Express REST API scaffold with route groups for:
  - authentication
  - restaurants
  - orders
  - users
  - admin
  - owner
- Added JWT-based auth utilities and role-aware middleware.
- Added seeded domain data for restaurants, menu items, carts, coupons, users, orders, and dashboard metrics.

### UX / Design
- Implemented a responsive, food-focused interface with coral/red accents, rounded cards, soft shadows, premium imagery, and motion-enhanced presentation.
- Added mobile-first flow coverage for discovery through checkout and tracking.

### Notes
- Current implementation uses mock/seeded in-memory data for demoability and rapid review.
- Persistence upgrades to PostgreSQL or MongoDB can be layered in without changing the overall product scope.
