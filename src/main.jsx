import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./router";
import { initAnalytics } from "./utils/analytics";
import "./index.css";

// Initialize analytics early (safe: no-op on server, idempotent on client)
initAnalytics();

// vite-react-ssg automatically wraps with HelmetProvider internally
const createRoot = ViteReactSSG({ routes }, undefined, { mock: true });

export default createRoot;
export { createRoot };
