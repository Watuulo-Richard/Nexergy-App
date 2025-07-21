# Nexergy App

## Overview
Nexergy is a modern, user-friendly web application inspired by TotalEnergies Uganda, designed to streamline product browsing, ordering, and management processes. Built with a robust tech stack, it offers a seamless experience for both customers and administrators, with a focus on simplicity, performance, and scalability.

## Features
- **Intuitive Customer Journey**: A clean landing page with featured products, category-based navigation, and a branch locator for easy access.
- **Streamlined Ordering Process**: Add products to cart, select delivery branches, provide contact details, and receive order confirmations effortlessly.
- **Admin Dashboard**: Comprehensive overview of orders, stock levels, and sales analytics, with tools for product, category, and branch management.
- **Responsive Design**: Mobile-first approach ensures a consistent and accessible experience across all devices.
- **Performance Optimization**: Leverages server-side rendering, image optimization, API route caching, and lazy loading for fast and efficient performance.

## Tech Stack
- **Next.js 14 (App Router)**: For scalable, server-rendered React applications.
- **TypeScript**: Ensures type safety and maintainable code.
- **Prisma ORM & PostgreSQL**: Powers efficient database management and querying.
- **TailwindCSS**: Enables rapid, responsive, and visually appealing UI development.
- **NextAuth.js**: Secure, role-based authentication for seamless user access.
- **Cloudinary**: Reliable media storage and management for product images.

## Project Structure
- **`src/app`**: Core application routes, including:
  - `auth/`: Login, registration, and password recovery pages.
  - `(dashboard)`: Admin and sales representative dashboards.
  - `products/` and `category/`: Product and category management pages.

## Implementation Highlights
- **Authentication**: Role-based access with NextAuth.js for secure login and registration.
- **Product Management**: Full CRUD operations for products, with media uploads via Cloudinary.
- **Order System**: Shopping cart, checkout, and order tracking functionalities.
- **Admin Features**: Inventory management, user management, and branch oversight.
- **Testing & Deployment**: Unit and integration tests, CI/CD pipeline, and production-ready deployment.

## Performance & Usability
- Optimized for SEO with server-side rendering.
- Fast load times with lazy-loaded components and cached API routes.
- Intuitive navigation with large, readable buttons and consistent layouts.
- Visual feedback for user actions to enhance usability.

## Getting Started
1. Clone the repository: `git clone https://github.com/username/nexergy-app.git`
2. Install dependencies: `npm install`
3. Set up environment variables for PostgreSQL, NextAuth.js, and Cloudinary.
4. Initialize the database with Prisma: `npx prisma migrate dev`
5. Run the development server: `npm run dev`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
