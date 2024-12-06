// schemas/schema.js

import { blockContentType } from "./schemaTypes/blockContentType";
import { categoryType } from "./schemaTypes/categoryType"; // If you're using categoryType
import { postType } from "./schemaTypes/postType"; // If you're using postType
import { authorType } from "./schemaTypes/authorType"; // If you're using authorType
import Testimonial from "./schemas/testimonial";
import news from "./schemas/news"; // Import the news schema
import blogCategories from "./schemas/blogCategories"; // Import the blogCategories schema
import client from "./schemas/clients/client-schema";
import careers from "./schemas/careers-schema";


export const schema = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    Testimonial,
    Blogs,
    blogCategories,
    client,
    careers,
  ],
};
