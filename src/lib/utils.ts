import type {Project} from "./projects";


export function getDownloads(project: Project) {
    return new Promise(resolve => {
        let total = 0;
        let curr = 0;
        let num = 0;

        if(has(project.spigotId)) {
            num++;
            fetch("https://api.spiget.org/v2/resources/"+project.spigotId)
                .then(async (response) => {
                    let json = await response.json();

                    if(has(json.downloads)) {
                        let dl = json.downloads
                        total += dl;
                        console.debug(name+" Spigot has "+dl);
                    }

                })
                .catch(() => {})
                .finally(() => {
                    curr++;
                    if(curr >= num) resolve(total)
                })
        }
        if(has(project.polymartId)) {
            num++;
            fetch("https://api.polymart.org/v1/getResourceInfo/?resource_id="+project.polymartId)
                .then(async (response) => {
                    let json = await response.json();

                    if(has(json.response) && has(json.response.resource) && has(json.response.resource.downloads)) {
                        let dl = Number(json.response.resource.downloads);
                        total += dl;
                        console.debug(name+" Polymart has "+dl);
                    }

                })
                .catch(() => {})
                .finally(() => {
                    curr++;
                    if(curr >= num) resolve(total)
                })
        }
        if(has(project.modrinthId)) {
            num++;
            fetch("https://api.modrinth.com/v2/project/"+project.modrinthId)
                .then(async (response) => {
                    let json = await response.json();

                    if(has(json.downloads)) {
                        let dl = json.downloads
                        total += dl;
                        console.debug(name+" Modrinth has "+dl);
                    }

                })
                .catch(() => {})
                .finally(() => {
                    curr++;
                    if(curr >= num) resolve(total)
                })
        }


        if(num === 0) resolve(0);
    });
}

export function has(arg: any): boolean {
    return typeof arg !== 'undefined';
}


export function commas(x: number) {
    if(typeof x == "undefined") return undefined;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}