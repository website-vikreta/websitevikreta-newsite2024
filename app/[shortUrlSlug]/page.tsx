"use client";
import React, { useEffect, useState } from 'react';
import { getShortUrls } from '../../sanity/sanity-utils';
import ShowClientProject from '../../components/ShowClientProject';

const Page = ({ params }: { params: { shortUrlSlug: string } }) => {
    const { shortUrlSlug } = params;
    const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
    const [matchedURL, setMatchedURL] = useState<any>(null); // Initialize as null

    useEffect(() => {
        const fetchAndRedirect = async () => {
            try {
                const response = await getShortUrls();

                // Find the matching short URL by slug
                const matchedUrl = response.find(
                    (url: { slug: any }) => url.slug.current === shortUrlSlug
                );

                // If slug found, update state
                if (matchedUrl) {
                    setMatchedURL(matchedUrl); // Correctly set the matchedUrl
                    setIsRedirecting(true);
                } else {
                    console.error("Slug not found!");
                }
            } catch (error) {
                console.error("Error fetching short URLs:", error);
            }
        };
        fetchAndRedirect();
    }, [shortUrlSlug]);

    return (
        <div>
            {
                isRedirecting ?
                    <ShowClientProject response={matchedURL} />
                    :
                    <div className="min-h-screen w-full flex justify-center items-center">
                        {/* <p className=''>Loading...</p> */}
                    </div>
            }
        </div>
    );
};

export default Page;
