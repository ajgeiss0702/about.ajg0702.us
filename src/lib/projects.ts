import * as url from "url";

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
    webpage?: string
}

export let projects: Project[] = [
    {
        name: "ajLeaderboards",
        description: "Create leaderboards for almost anything in minecraft, using PlaceholderAPI.",
        icon: "https://ajg0702.us/pl/icons/ajLeaderboards.png",
        spigotId: "85548",
        polymartId: "2726",
        modrinthId: "C9BKEl8Y",
        github: "ajgeiss0702/ajLeaderboards",
        docs: "ajLeaderboards"
    },
    {
        name: "ajQueue",
        description: "Create queues for servers while they are offline/full (or otherwise unjoinable)",
        icon: "https://ajg0702.us/pl/icons/ajQueue.png",
        spigotId: "78266",
        polymartId: "2535",
        modrinthId: "dzacATni",
        github: "ajgeiss0702/ajQueue",
        docs: "ajQueue"
    },
    {
        name: "ajQueuePlus",
        description: "Paid version of ajQueue with more features (that are especially nice for larger servers)",
        icon: "https://ajg0702.us/pl/icons/ajQueuePlus.png",
        spigotId: "79123",
        polymartId: "2714",
        github: "ajgeiss0702/ajQueue",
        docs: "ajQueue"
    },
    {
        name: "ajAntiXray",
        description: "Get a notification about possible xrayers",
        icon: "https://ajg0702.us/pl/icons/ajAntiXray.png",
        spigotId: "68409",
        gitlab: "ajg0702/ajAntiXray",
        docs: "ajAntiXray"
    },
    {
        name: "ajParkour",
        description: "Randomly generated parkour minigame. Great for any kind of server! Jump and Run!",
        icon: "https://ajg0702.us/pl/icons/ajParkour.png",
        spigotId: "60909",
        gitlab: "ajg0702/ajParkour",
        docs: "ajParkour"
    },
    {
        name: "ajTNTRun",
        description: "A TnTRun plugin with features such as mysql stats, arena signs, bungee mode, and more! ",
        icon: "https://ajg0702.us/pl/icons/ajTNTRun.png",
        spigotId: "70502",
        gitlab: "ajg0702/ajTNTRun",
        docs: "ajTNTRun"
    },
    {
        name: "ajLb REST",
        description: "An addon for ajLeaderboards that allows you to fetch leaderboards via a REST api",
        icon: "https://ajg0702.us/pl/icons/ajLb-REST.png",
        spigotId: "101650",
        github: "ajgeiss0702/ajLb-REST/"
    },
    {
        name: "ajElimination",
        description: "Keep track of how many players are left alive in events!",
        icon: "https://ajg0702.us/pl/icons/ajElimination.png",
        spigotId: "80587",
        gitlab: "ajg0702/ajElimination/"
    },
    {
        name: "ajAFKKick",
        description: "Kick AFK players only when the server is full!",
        icon: "https://ajg0702.us/pl/icons/ajAFKKick.png",
        spigotId: "80288",
    },
    {
        name: "ajStartCommands",
        description: "Run commands when the server starts, or if a player joins.",
        icon: "https://ajg0702.us/pl/icons/ajStartCommands.png",
        spigotId: "31033",
        gitlab: "ajg0702/ajStartCommands/",
        docs: "ajStartCommands"
    },
    {
        name: "NoChatWhileVanished",
        description: "Prevents vanished players from chatting from the bungee side",
        icon: "https://ajg0702.us/pl/icons/NoChatWhileVanished.png",
        spigotId: "75141",
        gitlab: "ajg0702/NoChatWhileVanished/",
    },
    {
        name: "Anti-Build",
        description: "Prevents everyone from building.",
        icon: "https://ajg0702.us/pl/icons/Anti-Build.png",
        spigotId: "9550",
    },
    {
        name: "aj's Global Chat Mute",
        description: "Mute the chat!",
        icon: "https://ajg0702.us/pl/icons/ajGlobalChatMute.png",
        spigotId: "9587",
    },
    {
        name: "Bytebin",
        description: "My fork of Bytebin that has modifications for my self-hosted site.",
        icon: "/img/bytebin.png",
        github: "ajgeiss0702/bytebin/",
        webpage: "https://paste.ajg0702.us/"
    },
    {
        name: "VulcanTopGUI",
        description: "An addon for the Vulcan anticheat that opens a GUI of the top player violations ",
        github: "ajgeiss0702/VulcanTopGUI/",
    },
    {
        name: "ajSupport",
        description: "A discord bot that assists me in my plugins support discord",
        icon: "https://ajg0702.us/pics/bots/ajSupport.png",
        github: "ajgeiss0702/ajSupport/",
    },
    {
        name: "ajLavaRising",
        description: "A lag-less lava rising plugin ",
        github: "ajgeiss0702/ajLavaRising/",
    },
    {
        name: "ajHologramConnector",
        description: "One library for all the major hologram plugin APIs (with bukkit fallback)",
        github: "ajgeiss0702/ajHologramConnector/",
    },
]