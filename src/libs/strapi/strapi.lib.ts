import { strapi } from "@strapi/client";

export const strapiClient = strapi({
    baseURL: 'http://localhost:1337/api',
    auth: 'your-api-token-here',
});