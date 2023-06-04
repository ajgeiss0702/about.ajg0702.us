import type {RequestHandler} from "@sveltejs/kit";
import {error} from "@sveltejs/kit";
import {dev} from "$app/environment";

export const GET = (async ({url, platform}) => {

    const text = url.searchParams.get("text") ?? "Default text";

    const cache = platform?.env?.CACHE;

    if(!cache) throw error(500, "Missing cache");

    const cached = await cache.get(text, {type: "stream"});

    if(cached) {
        console.log("Serving from cache")
        return new Response(cached);
    }

    const img = await fetch("https://oracle-p.ajg0702.us/header/header.php?text=" + encodeURIComponent(text))
        .then(r => r.arrayBuffer());

    // Cache for 30 days
    await cache.put(text, img, {
        expirationTtl: 30 * 24 * 60 * 60
    });

    return new Response(img);

}) satisfies RequestHandler;
