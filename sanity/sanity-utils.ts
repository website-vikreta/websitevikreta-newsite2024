import { createClient, groq } from "next-sanity";

// ! ===============================================================
// ! Defining global client object
// ! ===============================================================
// #region Global Declarations
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "",
  useCdn: true,
});




export async function getBlogPageData() {
  return client.fetch(
    groq`
        {
           "news": 
              *[_type=="news"] | order(date desc){
                 _id,
                 _createdAt,
                 title,
                 slug,
                 categories[]->,
                 btnIsRedirect,
                 date,
                 isNew,
                 description,
                 "imageURL": image.asset->url,
                 image
              },
           "categories": 
              *[_type=="blogCategories"]{
                 _id,
                 _createdAt,
                 categoryKey,
                 title,
              }
        }`,

  );
}

export async function getArticleData(slug: string) {
  return client.fetch(
    groq`*[_type=="news" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        title,
        slug,
        description,
        "imageURL": image.asset->url,
        image,
        content
     }`,

  );
}

export async function getMiscPageData(slug: string) {
  return client.fetch(
    groq`*[_type=="miscellaneousPage" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        pageTitle,
        slug,
        content
     }`,

  );
}
export async function getBlogData(slug: string) {
  const query = `
    *[_type=='news' && slug.current=='${slug}']{
        "CurrentSlug": slug.current,
          title,
          description,
          content,
          image,
       
           
       }[0]`;
  const data = await client.fetch(query);
  return data;

}


export async function getCareerPageData() {
  return client.fetch(
    groq`
       *[_type == "careers" && isOpeningActive == true] | order(_createdAt desc) {
         _id,
         title,
         location,
         startDate,
         duration,
         stipend,
         applyBy,
         jobType,
         noOfOpenings,
         slug,
         about,
         responsibilities,
         skills,
         eligibility,
         perks,
         "imageURL": image.asset->url,
         isOpeningActive
       }
     `
  );
}

export async function getCareerDetails(slug: string) {
  return client.fetch(
    groq`
       *[_type == "careers" && slug.current == $slug][0] {
         _id,
         title,
         location,
         startDate,
         duration,
         stipend,
         applyBy,
         jobType,
         noOfOpenings,
         slug,
         about,
         responsibilities,
         skills,
         eligibility,
         perks,
         "imageURL": image.asset->url,
         isOpeningActive
       }
     `,
    { slug }
  );
}

export async function getClientPageData() {
  return client.fetch(
    groq`
       *[_type == "client"] | order(_createdAt desc) {
         _id,
         name,
         slug,
         "logoURL": logo.asset->url,
         "logoAlt": logo.alt,
         website,
         description,
         contact {
           phone,
           email
         },
         "projects": projects[]->{
           _id,
           title,
           description
         },
         testimonials[]{
           testimonial,
           author
         }
       }
     `
  );
}

// Fetching short urls : 

export const getShortUrls = async () => {
  try {
    const result = await client.fetch(
      groq`
     *[_type == "shorturls"] {
      title ,
      slug,
      source,
      image
    }
      `
    );
    return result;
  } catch (error) {
    console.error('Error fetching short URLs:', error);
    return [];
  }
};


// #endregion
