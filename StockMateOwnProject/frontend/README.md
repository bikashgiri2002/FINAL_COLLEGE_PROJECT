# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 

 # Responsive Breakpoints:
Mobile (<640px):
The default settings apply, like text-3xl, mt-[80px], px-8, etc.

Small Screens (sm:): This applies when the screen width is greater than or equal to 640px. It adjusts the text to 4xl and increases the margins to ensure everything still fits and looks good.

Medium Screens (md:): This applies when the screen width is greater than or equal to 768px (tablets and up). The text size becomes 5xl, and larger margins are used for proper spacing.

Large Screens (lg: and above): We could add additional tweaks if needed for large desktop screens, though in this case, the layout already looks good.