import { shadcnPreset } from "./src/lib/shadcnPreset";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [shadcnPreset],
};

export default config;
