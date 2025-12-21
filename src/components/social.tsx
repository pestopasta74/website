"use client";

import { Suspense, useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { Skeleton } from "./ui/skeleton";

export function SocialComponent({ type, url, width }: { type: "instagram"; url: string; width: number }) {
    const [isMounted, setIsMounted] = useState(false);
    const [displayContent, setDisplayContent] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsMounted(true), 0);
        setTimeout(() => setDisplayContent(true), 400);
    }, []);

    return (
        <div
            style={{
                width: `${width || 300}px`,
                height: `${(width || 300) + 50}px`,
                marginBottom: -50,
            }}
            className="overflow-hidden"
        >
            <Suspense fallback={null}>
                {isMounted && type === "instagram" && (
                    <InstagramEmbed url={url} className="h-full w-full z-0 absolute -top-13.5" />
                )}
            </Suspense>
            {!displayContent && <Skeleton className="h-full w-full absolute top-0 left-0 z-10" />}
        </div>
    );
}
