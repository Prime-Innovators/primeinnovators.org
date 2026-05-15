import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./router";
import "./index.css";

// Export default for vite-react-ssg to call during SSG
const createRoot = ViteReactSSG({ routes }, undefined, { mock: true });

export default createRoot;
export { createRoot };
