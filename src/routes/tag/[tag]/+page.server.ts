import type {LoadEvent} from "@sveltejs/kit";
import {error} from "@sveltejs/kit";

export function load({ params }: LoadEvent) {
    if(!params.tag) throw error(400, "Invalid tag")
    return {tag: params.tag.toLowerCase()}
}