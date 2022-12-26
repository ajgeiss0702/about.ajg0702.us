import {projects} from "$lib/projects";
import {error, type LoadEvent} from "@sveltejs/kit";

export function load({ params }: LoadEvent) {
    const projectName = params.project;

    for (const prj of projects) {
        if(prj.name === projectName) {
            return prj;
        }
    }

    throw error(404, "Project not found")
}