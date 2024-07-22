import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/configs/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://dashboardDb_owner:JyfdkIi5l0Mp@ep-withered-mud-a1w6prxr.ap-southeast-1.aws.neon.tech/DashboardForms?sslmode=require",
  },
});
