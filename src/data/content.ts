export const contacts: Contact[] = [
  {
    name: "LinkedIn",
    value: "Camille Abella",
    link: "https://www.linkedin.com/in/camille-abella-a99950176/",
    icon: "fab fa-linkedin",
  },
  {
    name: "Discord",
    value: "Ghom#9700",
    link: "https://discord.gg/3vC2XWK",
    icon: "fab fa-discord",
  },
  {
    name: "Twitter",
    value: "@GhomKrosmonaute",
    link: "https://twitter.com/GhomKrosmonaute",
    icon: "fab fa-twitter-square",
  },
];

export const parcours: Parcours[] = [
  {
    type: ParcoursType.Schooling,
    name: "Période de collège",
    place: "Gustave Violet - Prades",
    description: "Collège de la 6ème à la 4ème sans brevet.",
    duration: ["20080902", "20120702"],
  },
  {
    type: ParcoursType.Working,
    name: "Jobs saisonniers",
    place: "Prades, Vinça, Rhodes",
    description: "Les saisons fruitières autour de Prades.",
    duration: ["20120101", "20150101"],
  },
  {
    type: ParcoursType.Sabbath,
    name: "Période de développement personnel",
    place: "Vinça",
    description: "Période durant laquelle j'ai pu m'améliorrer au code.",
    duration: ["20150101", "20190526"],
  },
  {
    type: ParcoursType.Training,
    name: "Formation WEB & WEB design",
    place: "L'idem - Creative Art School - Le Soler",
    description:
      'Formation "projet PRO" d\'insertion dans le cursus profesionnel.',
    duration: ["20190527", "20190829"],
  },
  {
    type: ParcoursType.Internship,
    name: "Stage en agence Wordpress",
    place: "Agence Point Com - Perpignan",
    description: "J'y ai rencontré des gens supers.",
    duration: ["20190801", "20190830"],
  },
  {
    type: ParcoursType.Training,
    name: "Formation développeur WEB fullstack & APPs mobile",
    place: "Ecole Régionale du Numérique - Le Soler",
    description: "Formation qualifiante et qualitative, j'y suis encore.",
    duration: ["20190909", "20200707"],
  },
  {
    type: ParcoursType.Internship,
    name: "Stage en développement WEB & jeux mobile",
    place: "Play Curious - Perpignan",
    description: "Stage qui m'a ouvert la porte d'un apprentissage.",
    duration: ["20200406", "20200707"],
  },
  {
    type: ParcoursType.Working,
    name: "Développeur WEB & jeux mobile",
    place: "Play Curious - Perpignan",
    description: "Apprentissage en alternance.",
    duration: ["20200901"],
  },
];

export const projects: Project[] = [
  {
    type: ProjectType.Org,
    name: "Les Laboratoires JS",
    description: "Projet d'entraide communautaire autour du JavaScript.",
    link: "https://top.gg/servers/507389389098188820",
    used: ["Discord"],
    preview: "jslabs.gif",
    pro: false,
  },
  {
    type: ProjectType.API,
    name: "Statme",
    description: "Api de statistiques d'activité sur Discord.",
    link: "http://statme-api.tk/",
    used: ["JS", "Discord.js", "Express", "MySQL"],
    preview: "statme-api.png",
    pro: false,
  },
  {
    type: ProjectType.Site,
    name: "JS Labs - Website",
    description: "Début de site web pour les Laboratoires JS.",
    link: "https://github.com/CamilleAbella/JS-Labs-Website",
    used: ["PHP", "JS", "CSS", "PGSQL"],
    preview: "labs-website.PNG",
    pro: false,
  },
  {
    type: ProjectType.Site,
    name: "JS Labs - Admin",
    description: "Début d'interface d'administration pour les Laboratoires JS",
    link: "https://github.com/CamilleAbella/LabsAdmin-Dashboard",
    used: ["JS", "Express", "Bootstrap", "PGSQL"],
    preview: "",
    pro: false,
  },
  {
    type: ProjectType.Site,
    name: "Note Manager",
    description: "Projet réalisé avec l'idem dans le cadre de ma formation",
    link: "https://github.com/CamilleAbella/note-manager",
    used: ["JS", "Webpack", "localStorage"],
    preview: "note-manager.png",
    pro: false,
  },
  {
    type: ProjectType.Bot,
    name: "WakFight",
    description: "Jeu de combat dans l'univers d'Ankama (le Krosmoz)",
    link: "https://github.com/CamilleAbella/wakfight.ts",
    used: ["TypeScript", "NodeJS", "SQLite"],
    preview: "wakfight.png",
    pro: false,
  },
  {
    type: ProjectType.Bot,
    name: "Discard",
    description: "Inter-server card game on Discord",
    link: "https://github.com/CamilleAbella/Discard",
    used: ["JS", "NodeJS", "Canvas", "SQLite"],
    preview: "discard.png",
    pro: false,
  },
  {
    type: ProjectType.Bot,
    name: "Unicorn Trap",
    description:
      "Gestionnaire de dégradés de couleurs pour les rôles dans Discord.",
    link:
      "https://discordapp.com/oauth2/authorize?client_id=467702792350597120&permissions=268435456&scope=bot",
    used: ["JS", "NodeJS", "Discord.js", "Color Engine"],
    preview: "unicorn-trap.PNG",
    pro: false,
  },
  {
    type: ProjectType.Bot,
    name: "Discord JS",
    description:
      "Lien direct entre la documentation Discord JS et Discord. (DJS API docs wrapper)",
    link: "https://top.gg/bot/554108430298775564",
    used: ["JS", "NodeJS", "Discord.js"],
    preview: "discord-js.PNG",
    pro: false,
  },
  {
    type: ProjectType.Game,
    name: "Shooter",
    description: "Shooter simple inspiré de The Binding of Isaac.",
    link: "https://camilleabella.github.io/TypedShooterGame/dist/index.html",
    used: ["HTML", "JS", "p5.js"],
    preview: "shooter.png",
    pro: false,
  },
  {
    type: ProjectType.Game,
    name: "Gario",
    description:
      "Platformer avec une physique inspirée de Mario Bros et un gameplay simple.",
    link: "https://camilleabella.github.io/Gario/",
    used: ["HTML", "JS", "p5.js"],
    preview: "gario.png",
    pro: false,
  },
  {
    type: ProjectType.Game,
    name: "Tetris",
    description: "Petit projet en canvas lors de ma formation à l'Idem.",
    link: "https://camilleabella.github.io/TetrisCanvas/",
    used: ["HTML", "CSS", "JS", "Canvas"],
    preview: "tetris-canvas.png",
    pro: false,
  },
  {
    type: ProjectType.Game,
    name: "Snake",
    description: "Projet démonstratif pour le salon du travail.",
    link: "https://camilleabella.github.io/SnakeGame/",
    used: ["HTML", "JS", "p5.js"],
    preview: "snake.png",
    pro: false,
  },
  {
    type: ProjectType.Lib,
    name: "Krosmap",
    description: "Krosmaga game data wrapper",
    link: "https://github.com/CamilleAbella/Krosmap",
    used: ["JS", "NodeJS", "jsdom", "axios"],
    preview: "krosmap.png",
    pro: false,
  },
  {
    type: ProjectType.Lib,
    name: "Windows.js",
    description: "Un gestionnaire de fenêtres à l'intérieur de votre site !",
    link: "https://camilleabella.github.io/Windows.js/",
    used: ["JS", "CSS"],
    preview: "windows-js.png",
    pro: false,
  },
  {
    type: ProjectType.Lib,
    name: "Typing.js",
    description: "HTML keyboard typing by ID element.",
    link: "https://camilleabella.github.io/Typing.js/",
    used: ["JS"],
    preview: "typing-js.PNG",
    pro: false,
  },
  {
    type: ProjectType.Lib,
    name: "GodEmbed",
    description:
      "Langage de construction d'embed Discord, technologie de templating.",
    link: "https://github.com/CamilleAbella/GodEmbed/tree/master/Module",
    used: ["JS", "NodeJS"],
    preview: "",
    pro: false,
  },
  {
    type: ProjectType.Lib,
    name: "Color Engine",
    description:
      "Color engine for creates color gradients from a few colors and converts RBG colors to HEX and vice versa.",
    link: "https://github.com/CamilleAbella/Color-Engine",
    used: ["JS", "NodeJS"],
    preview: "",
    pro: false,
  },
  {
    type: ProjectType.Lib,
    name: "HoverTree",
    description: "CSS framework for fast and easy menus and sub-menus.",
    link: "https://github.com/CamilleAbella/HoverTree-CSS-Framework",
    used: ["JS", "jQuery"],
    preview: "",
    pro: false,
  },
  {
    type: ProjectType.App,
    name: "Rednit",
    description:
      'Projet ayant gagné la troisième place du <a class="text-info" target="_blank" href="http://communities.techstars.com/france/perpignan/startup-weekend/15095">Startup Weekend Perpignan</a>.',
    link: "#",
    used: ["Python", "JS", "Rasa", "React", "PGSQL"],
    preview: "rednit.png",
    pro: true,
  },
  {
    type: ProjectType.Game,
    name: "CRISPR-Crunch",
    description: "CRISPR Technology vulgarisation game",
    link: "https://playcurious.games/games/crispr-crunch/",
    used: ["HTML", "CSS", "TS", "Webpack", "Booyah", "PixiJS"],
    preview: "crispr-crunch.jpg",
    pro: true,
  },
  {
    type: ProjectType.Lib,
    name: "Booyah",
    description: "HTML5 game engine for mobile & desktop",
    link: "https://github.com/play-curious/booyah",
    used: ["TS", "Webpack", "PixiJS"],
    preview: "booyah.jpg",
    pro: true,
  },
  {
    type: ProjectType.Site,
    name: "Ce Portfolio 😉",
    description: "Mon CV en ligne, vous le lisez actuellement.",
    link: "https://camilleabella.github.io/",
    used: ["HTML", "TS", "SCSS", "Webpack", "Anime.js"],
    preview: "",
    pro: true,
  },
  {
    type: ProjectType.Site,
    name: "Fake Toys'R'Us",
    description: "Projet PHP lors de ma formation WEB à l'Idem.",
    link: "https://github.com/CamilleAbella/ERN-WEB-project-1",
    used: ["PHP", "CSS", "MySQL"],
    preview: "toys-r-us.png",
    pro: true,
  },
];

export const skills: Skill[] = [
  {
    type: SkillType.Language,
    name: "JavaScript",
    icon: "fab fa-js",
    color: "#f7df1e",
  },
  {
    type: SkillType.Language,
    name: "TypeScript",
    icon: "fab fa-js",
    color: "#007acc",
  },
  {
    type: SkillType.Language,
    name: "HTML",
    icon: "fab fa-html5",
    color: "#F16529",
  },
  {
    type: SkillType.Language,
    name: "CSS",
    icon: "fab fa-css3-alt",
    color: "#3C99DC",
  },
  {
    type: SkillType.Language,
    name: "PHP",
    icon: "fab fa-php",
    color: "#787CB5",
  },

  {
    type: SkillType.Database,
    name: "MySQL",
    icon: "fas fa-database",
    color: "#00758F",
  },
  {
    type: SkillType.Database,
    name: "PostgreSQL",
    icon: "fas fa-database",
    color: "#587FAA",
  },
  {
    type: SkillType.Database,
    name: "MongoDB",
    icon: "fas fa-database",
    color: "#4DB33D",
  },
  {
    type: SkillType.Database,
    name: "ArangoDB",
    icon: "fas fa-database",
    color: "#2BA747",
  },

  {
    type: SkillType.Library,
    name: "Discord.js",
    icon: "fab fa-discord",
    color: "#738ADB",
  },
  {
    type: SkillType.Framework,
    name: "React",
    icon: "fab fa-react",
    color: "#00d8ff",
  },
  {
    type: SkillType.Framework,
    name: "Angular",
    icon: "fab fa-angular",
    color: "#B52E31",
  },
  {
    type: SkillType.Framework,
    name: "Wordpress",
    icon: "fab fa-wordpress-simple",
    color: "#00749C",
  },
  {
    type: SkillType.Library,
    name: "Express JS",
    icon: "fab fa-edge",
    color: "#333333",
  },
  {
    type: SkillType.Application,
    name: "Git",
    icon: "fab fa-git-alt",
    color: "#3E2C00",
  },
  {
    type: SkillType.Application,
    name: "Docker",
    icon: "fab fa-docker",
    color: "#0db7ed",
  },
  {
    type: SkillType.Server,
    name: "NodeJS",
    icon: "fab fa-node-js",
    color: "#68A063",
  },
];
