"use client";
import React, { useEffect, useState } from "react";
import { urlFor } from "../sanity/sanity-urlFor";
import Image from "next/image";
import { Button } from "./Blogs/Tags";










const ShowClientProject = ({ response }: { response: any }) => {
    const [projectImage, setProjectImage] = useState<string | null>(null);
    const [showPrototype, setProjectPrototype] = useState<string>("");
    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectSlug, setProjectSlug] = useState<string>("");

    useEffect(() => {
        if (response) {
            // Getting image URL
            if (response?.image?.asset?._ref) {
                const imageUrl = urlFor(response?.image?.asset?._ref)?.url();
                setProjectImage(imageUrl);
            }
            // Getting project source URL
            setProjectPrototype(response?.source);

            // Getting project title
            setProjectTitle(response?.title);

            // Getting project slug
            setProjectSlug(response?.slug?.current);
        }
    }, [response]);

    return (
        <div className="flex flex-col items-center justify-center mt-20">

            {/* Title : */}
            <div className="mt-10 mb-5">
                <h2 className="font-extrabold text-4xl ">{projectTitle || "Client Project"}</h2>
            </div>

            {/*  Image : */}
            <div className="">
                {
                    projectImage &&
                    <Image
                        src={projectImage}
                        alt={projectTitle || "Client Project Image"}
                        width={400}
                        height={400}
                        style={{ objectFit: "cover" }}
                        className="px-5  border-yellow-500"
                        layout="intrinsic"
                    />
                }
            </div>

            {/* Button  */}
            <div className="">
                {showPrototype && (
                    <button className="border-yellow-500 font-medium flex gap-3 items-center border px-3 py-3 my-8">
                        <a href={showPrototype}>
                            View Prototype
                        </a>
                        <i className="bi bi-box-arrow-up-right"></i>
                    </button>
                )}
            </div>

        </div>
    );
};

export default ShowClientProject;

{/* <style jsx>{`
    .image-container {
        width: 100%;  // Ensure the container is responsive
        height: auto; // Maintain the image's aspect ratio as the container resizes
    }
    .object-cover {
        object-fit: cover;  // Ensure the image fits correctly
    }
`}</style> */}
