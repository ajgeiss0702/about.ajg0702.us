export type Project = {
    name: string,
    description: string,
    icon?: string,
    spigotId?: string,
    polymartId?: string,
    modrinthId?: string,
    github?: string,
    gitlab?: string
    docs?: string,
    webpage?: string,
    tags: ProjectType[]
}

export type ProjectType =
    "plugin" | "plugin-library" | "website" | "discord-bot" | Language

export type Language = "java" | "svelte" | "javascript";
export enum Languages {
    "java",
    "svelte",
    "javascript"
}

export const projects: Project[] = [
    {
        name: "ajLeaderboards",
        description: "Create leaderboards for almost anything in minecraft, using PlaceholderAPI.",
        icon: "https://ajg0702.us/pl/icons/ajLeaderboards.png",
        spigotId: "85548",
        polymartId: "2726",
        modrinthId: "C9BKEl8Y",
        github: "ajgeiss0702/ajLeaderboards",
        docs: "ajLeaderboards",
        tags: ["plugin", "java"]
    },
    {
        name: "ajQueue",
        description: "Create queues for servers while they are offline/full (or otherwise unjoinable)",
        icon: "https://ajg0702.us/pl/icons/ajQueue.png",
        spigotId: "78266",
        polymartId: "2535",
        modrinthId: "dzacATni",
        github: "ajgeiss0702/ajQueue",
        docs: "ajQueue",
        tags: ["plugin", "java"]
    },
    {
        name: "ajQueuePlus",
        description: "Paid version of ajQueue with more features (that are especially nice for larger servers)",
        icon: "https://ajg0702.us/pl/icons/ajQueuePlus.png",
        spigotId: "79123",
        polymartId: "2714",
        github: "ajgeiss0702/ajQueue",
        docs: "ajQueue",
        tags: ["plugin", "java"]
    },
    {
        name: "ajAntiXray",
        description: "Get a notification about possible xrayers",
        icon: "https://ajg0702.us/pl/icons/ajAntiXray.png",
        spigotId: "68409",
        gitlab: "ajg0702/ajAntiXray",
        docs: "ajAntiXray",
        tags: ["plugin", "java"]
    },
    {
        name: "ajParkour",
        description: "Randomly generated parkour minigame. Great for any kind of server! Jump and Run!",
        icon: "https://ajg0702.us/pl/icons/ajParkour.png",
        spigotId: "60909",
        gitlab: "ajg0702/ajParkour",
        docs: "ajParkour",
        tags: ["plugin", "java"]
    },
    {
        name: "ajTNTRun",
        description: "A TnTRun plugin with features such as mysql stats, arena signs, bungee mode, and more! ",
        icon: "https://ajg0702.us/pl/icons/ajTNTRun.png",
        spigotId: "70502",
        gitlab: "ajg0702/ajTNTRun",
        docs: "ajTNTRun",
        tags: ["plugin", "java"]
    },
    {
        name: "ajLb REST",
        description: "An addon for ajLeaderboards that allows you to fetch leaderboards via a REST api",
        icon: "https://ajg0702.us/pl/icons/ajLb-REST.png",
        spigotId: "101650",
        github: "ajgeiss0702/ajLb-REST/",
        tags: ["plugin", "java"]
    },
    {
        name: "ajElimination",
        description: "Keep track of how many players are left alive in events!",
        icon: "https://ajg0702.us/pl/icons/ajElimination.png",
        spigotId: "80587",
        gitlab: "ajg0702/ajElimination/",
        tags: ["plugin", "java"]
    },
    {
        name: "ajAFKKick",
        description: "Kick AFK players only when the server is full!",
        icon: "https://ajg0702.us/pl/icons/ajAFKKick.png",
        spigotId: "80288",
        tags: ["plugin", "java"]
    },
    {
        name: "ajStartCommands",
        description: "Run commands when the server starts, or if a player joins.",
        icon: "https://ajg0702.us/pl/icons/ajStartCommands.png",
        spigotId: "31033",
        gitlab: "ajg0702/ajStartCommands/",
        docs: "ajStartCommands",
        tags: ["plugin", "java"]
    },
    {
        name: "NoChatWhileVanished",
        description: "Prevents vanished players from chatting from the bungee side",
        icon: "https://ajg0702.us/pl/icons/NoChatWhileVanished.png",
        spigotId: "75141",
        gitlab: "ajg0702/NoChatWhileVanished/",
        tags: ["plugin", "java"]
    },
    {
        name: "Anti-Build",
        description: "Prevents everyone from building.",
        icon: "https://ajg0702.us/pl/icons/Anti-Build.png",
        spigotId: "9550",
        tags: ["plugin", "java"]
    },
    {
        name: "aj's Global Chat Mute",
        description: "Mute the chat!",
        icon: "https://ajg0702.us/pl/icons/ajGlobalChatMute.png",
        spigotId: "9587",
        tags: ["plugin", "java"]
    },
    {
        name: "VulcanTopGUI",
        description: "An addon for the Vulcan anticheat that opens a GUI of the top player violations ",
        github: "ajgeiss0702/VulcanTopGUI/",
        tags: ["plugin", "java"]
    },
    {
        name: "About ajgeiss0702",
        icon: "/favicon.png",
        description: "This site!",
        webpage: "/",
        github: "ajgeiss0702/about.ajg0702.us",
        tags: ["website", "svelte"]
    },
    {
        name: "Whenplane",
        icon: "https://whenplane.com/wan.webp",
        description: "Counts down until the next WAN show. Also tracks the start/end times of previous shows",
        webpage: "https://whenplane.com",
        github: "ajgeiss0702/wheniswan",
        tags: ["website", "svelte"]
    },
    {
        name: "Red Clock",
        icon: "https://redclock.fun/red_clock.png",
        description: "Shows the amount of time until the school bell rings",
        webpage: "https://redclock.fun",
        tags: ["website", "svelte"]
    },
    {
        name: "BASIS Peoria Boosters",
        icon: "https://basis-peoria-boosters.pages.dev/favicon.png",
        description: "Informational website for BASIS Peoria Boosters (made entirely myself using SvelteKit)",
        webpage: "https://www.basispeoriaboosters.org",
        github: "BASISPeoriaBoosters/website",
        tags: ["website", "svelte"]
    },
    {
        name: "ajLb Viewer",
        description: "A website that makes viewing exports from ajLeaderboards a lot easier",
        webpage: "https://ajlb-viewer.ajg0702.us/",
        github: "ajgeiss0702/ajlb-viewer",
        tags: ["website", "svelte"]
    },
    {
        name: "ajBuyerVerify frontend",
        icon: "https://verify.ajg0702.us/ajBuyerVerify.webp",
        description: "Frontend for automatic buyer verification for my Discord server",
        webpage: "https://verify.ajg0702.us",
        tags: ["website", "svelte"]
    },
    {
        name: "ajBuyerVerify bot",
        icon: "https://verify.ajg0702.us/ajBuyerVerify.webp",
        description: "Discord bot for my automatic buyer verification system",
        tags: ["discord-bot", "java"]
    },
    {
        name: "ajSupport",
        description: "A discord bot that assists me in my plugins support discord",
        icon: "https://ajg0702.us/pics/bots/ajSupport.png",
        github: "ajgeiss0702/ajSupport/",
        tags: ["discord-bot", "java"]
    },
    {
        name: "ajLavaRising",
        description: "A lag-less lava rising plugin ",
        github: "ajgeiss0702/ajLavaRising/",
        tags: ["plugin", "java"]
    },
    {
        name: "ajHologramConnector",
        description: "One library for all the major hologram plugin APIs (with bukkit fallback)",
        github: "ajgeiss0702/ajHologramConnector/",
        tags: ["plugin-library", "java"]
    },
    {
        name: "Bytebin",
        description: "My fork of Bytebin that has modifications for my self-hosted instance.",
        icon: "/img/bytebin.png",
        github: "ajgeiss0702/bytebin/",
        webpage: "https://paste.ajg0702.us/",
        tags: ["website"]
    },
]