# Geo World

Geo World is an interactive web application that allows users to explore and learn about countries worldwide. It provides features such as country search, sorting, pagination, and the ability to save countries to wishlists and visited lists. This project is built with modern web technologies, ensuring a responsive and user-friendly experience. It is deployed on Vercel at [anelsahovic-geo-world.vercel.app](https://anelsahovic-geo-world.vercel.app/)

## Features

- **Landing Page**: A visually appealing introduction to the application.
- **Country Listing**: Displays a list of countries with essential details.
- **Country Search**: Search countries by name or native name.
- **Country Details**: View detailed information about a selected country.
- **Sorting**: Sort countries based on various criteria.
- **Pagination**: Navigate through countries efficiently.
- **Wishlist & Visited Lists**: Save countries to your wishlist or mark them as visited.
- **Responsive Design**: Ensures seamless use across devices of all sizes.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (with Turbopack for development)
- **Frontend**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with additional plugins for animations and custom styling.
- **Maps**: [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
- **3D Elements**: [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Icons**: [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/)

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anelsahovic/geo-world.git
   cd geo-world
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   pnpm run dev
   ```

4. **Build for production**:

   ```bash
   pnpm run build
   ```

5. **Start the production server**:

   ```bash
   pnpm start
   ```

## Scripts

- `pnpm run dev`: Starts the development server with Turbopack.
- `pnpm run build`: Builds the application for production.
- `pnpm run start`: Runs the production server.
- `pnpm run lint`: Lints the codebase.

## Dependencies

### Production Dependencies

- **[@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot)**: For UI composition.
- **[@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)**: For integrating Google Maps.
- **[@react-three/drei](https://www.npmjs.com/package/@react-three/drei)**: Helper components for Three.js.
- **[@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber)**: React renderer for Three.js.
- **[@react-three/postprocessing](https://www.npmjs.com/package/@react-three/postprocessing)**: Postprocessing effects for Three.js.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer)**: CSS vendor prefixing.
- **[class-variance-authority](https://www.npmjs.com/package/class-variance-authority)**: For managing conditional classes.
- **[clsx](https://www.npmjs.com/package/clsx)**: Utility for constructing className strings.
- **[framer-motion](https://www.npmjs.com/package/framer-motion)**: Animation library.
- **[lucide-react](https://www.npmjs.com/package/lucide-react)**: Icon library.
- **[react-icons](https://www.npmjs.com/package/react-icons)**: Additional icons.
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: Merges Tailwind classes intelligently.
- **[tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)**: For hiding scrollbars.
- **[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)**: Animation utilities for Tailwind.
- **[three](https://www.npmjs.com/package/three)**: For 3D graphics.

### Development Dependencies

- **[@eslint/eslintrc](https://www.npmjs.com/package/@eslint/eslintrc)**: ESLint configuration.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: TypeScript types for Node.js.
- **[@types/react](https://www.npmjs.com/package/@types/react)**: TypeScript types for React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: TypeScript types for React DOM.
- **[@types/three](https://www.npmjs.com/package/@types/three)**: TypeScript types for Three.js.
- **[eslint](https://www.npmjs.com/package/eslint)**: Linter for JavaScript and TypeScript.
- **[eslint-config-next](https://www.npmjs.com/package/eslint-config-next)**: ESLint configuration for Next.js.
- **[postcss](https://www.npmjs.com/package/postcss)**: CSS processing.
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)**: Utility-first CSS framework.
- **[typescript](https://www.npmjs.com/package/typescript)**: TypeScript language support.

## Future Improvements

- Add user authentication for personalized experiences.
- Integrate additional APIs for real-time data (e.g., weather, news).
- Enhance 3D visualizations with more dynamic elements.
- Implement offline mode with caching.

## Author

Developed by [Anel Sahovic](https://github.com/anelsahovic).

---

Feel free to contribute by submitting issues or pull requests!
