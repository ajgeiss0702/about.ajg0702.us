import {text, type RequestHandler} from "@sveltejs/kit";

export const GET = (async () => {
    const json = await fetch(
        "https://api.spigotmc.org/simple/0.2/index.php?action=getResource&id=60909",
        {
            headers: {
                "User-Agent": "ajUpdater/1.0"
            }
        }
    )
        .then(r => r.json())

    return text(json.current_version);
}) satisfies RequestHandler