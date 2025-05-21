import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
// const anoopvrportfolio="0.0.0.0"




// export default defineConfig({


// server: {
//   proxy: {
//     "/api": {
//       target: "http://192.168.1.10:3400", // Replace with your backend IP and port
//       changeOrigin: true, // Necessary to avoid issues with CORS
//       rewrite: (path) => path.replace(/^\/api/, ""), // Optionally rewrite the path if needed
//     },
//   },
// },

//   server: {
//     proxy: "http://anoopvrportfolio.site:3400/",
//     host: "0.0.0.0", // Make the dev server accessible on your local network
//     port: 3400, // You can change the port if you like
//     open: true, // Optionally, open the app in the browser automatically
//   },
//   plugins: [react()],
// });













// server: {
//   host: "0.0.0.0", // Make the dev server accessible on your local network
//   port: 3400, // You can change the port if you like
//   open: true, // Optionally, open the app in the browser automatically
// },
