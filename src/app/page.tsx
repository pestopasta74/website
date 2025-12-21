import { SocialComponent } from "@/components/social";

export default function Home() {
    const links = [
        "https://www.instagram.com/p/DPPDyPfDEZ6/",
        "https://www.instagram.com/p/DNBaazSom6L/",
        "https://www.instagram.com/p/DLuxvT7oCVp/",
        "https://www.instagram.com/p/DLM0vcPIu0h/",
        "https://www.instagram.com/p/C63pIq-oN3J/",
        "https://www.instagram.com/p/Ct7U__JsJEY/",
    ];
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold text-center py-4">Welcome to the Home Page</h1>
                <p className="text-center">This is the main landing page of the website.</p>
            </div>
            <div className="flex flex-row gap-2 justify-center py-8 h-175 flex-wrap">
                {links.map((link, index) => (
                    <SocialComponent key={index} type="instagram" url={link} width={500} />
                ))}
            </div>
        </>
    );
}
