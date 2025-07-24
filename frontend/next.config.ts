import type { NextConfig } from "next";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const nextConfig: NextConfig = {
  env: {
    SERVER_API_URL: process.env.SERVER_API_URL,
  },
};

export default nextConfig;
