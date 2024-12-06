// interface IShortUrlsSchema {
//     name: string,
//     title: string,
//     type: "document",
//     fields: Array<{
//         name: string,
//         title: string,
//         type: string
//     }>
// };
const shortUrls = {
    name: "shorturls",
    title: "ShortURL",
    type: "document",
    fields: [
        // Title of your project link : 
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        // Endpoint to your domain : 
        {
            name: "slug",
            title: "Slug",
            type: "slug"
        },
        // Destination or source : 
        {
            name: "source",
            title: "Source",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true // Enables hotspot for editing the image
            }
        }
    ]
};
export default shortUrls;