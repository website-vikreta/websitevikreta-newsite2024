import blogCategories from "../components/blogCategories-schema";
import Blogs from "./blogs-schema";
// import news from "./blogs-schema";
import gig from "./gigs";
import careers from "./careers-schema";
import client from "./clients/client-schema";
import shortUrls from "./shortUrls.schema";


const schemas = [
   Blogs,
   // news,
   client,
   careers,
   blogCategories,
   gig,
   shortUrls
];

export default schemas;
