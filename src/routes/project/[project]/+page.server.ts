import {projects} from "$lib/projects";
import {error, type LoadEvent, redirect} from "@sveltejs/kit";

export function load({ params }: LoadEvent) {
    const projectName = params.project;

    for (const prj of projects) {
        if(prj.name === projectName) {
            return prj;
        } else if(prj.name.toLowerCase() === projectName?.toLowerCase()) {
            throw redirect(302, `/project/${prj.name}/`);
        }
    }

    throw error(404, "Project not found")
}