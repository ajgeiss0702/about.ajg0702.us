import {projects} from "$lib/projects.ts";
import {error} from "@sveltejs/kit";

export function load({ params }) {
    let projectName = params.project;

    for (let prj of projects) {
        if(prj.name === projectName) {
            return prj;
        }
    }

    throw error(404, "Project not found")
}