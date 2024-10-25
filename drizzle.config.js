/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url:'postgresql://accounts:6cPYNmJ7BkwL@ep-winter-violet-a86vvb0d.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require'
    }
};
