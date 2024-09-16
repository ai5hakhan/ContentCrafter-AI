/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:NGOjTM24qcDL@ep-green-dawn-a527ii04.us-east-2.aws.neon.tech/AI-content-generator?sslmode=require',
    }
  };