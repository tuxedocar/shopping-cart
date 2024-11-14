Shopping Cart

This is my Shopping Cart app that enables the user to add products on their cart and check them out and place their orders. This also allows the user to cancel their orders and once their orders were placed, they will be redirected in the homepage.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Here are the steps to run a project example:

npm create vite@latest shopping-cart --template react
cd shopping-cart
npm install
npm install tailwindcss postcss autoprefixer usehooks-ts
npx tailwindcss init
npm install react-router-dom
npm run dev

Libraries Used:

shopping-cart (root project)
├── React (Base library for building UI components)
├── React Router DOM (Library for routing and navigation)
├── Tailwind CSS (Utility-first CSS framework for styling)
│   ├── PostCSS (Tool for transforming CSS)
│   └── Autoprefixer (Plugin for PostCSS to handle vendor prefixes)
├── usehooks-ts (Optional, for enhanced state management and custom hooks)
└── Vite (Development server and build tool)

Image of the Shopping Cart:

![Screenshot 2024-11-14 160641](https://github.com/user-attachments/assets/c036132a-0579-4604-aae0-15edb17fae80)


