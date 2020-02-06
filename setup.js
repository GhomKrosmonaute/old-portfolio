
moment.locale('fr')
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    //window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

var handSequence, landscape, width, height

const ghomLetters = 'ghomcasei'.split('')
const animes = {}
const parcours = [
    {
        type : 'schooling',
        name : 'Période de collège',
        place : 'Gustave Violet - Prades',
        description : 'Collège de la 6ème à la 4ème sans brevet.',
        duration : ['20080902','20120702']
    },
    {
        type : 'working',
        name : 'Jobs saisonniers',
        place : 'Prades, Vinça, Rhodes',
        description : 'Les saisons fruitières autour de Prades.',
        duration : ['20120101','20150101']
    },
    {
        type : 'sabbath',
        name : 'Période sabbatique',
        place : 'Vinça',
        description : 'Période durant laquelle j\'ai pu m\'améliorrer au code.',
        duration : ['20150101','20190526']
    },
    {
        type : 'training',
        name : 'Formation WEB & WEB design',
        place : 'L\'idem - Creative Art School - Le Soler',
        description : 'Formation "projet PRO" d\'insertion dans le cursus profesionnel.',
        duration : ['20190527','20190829']
    },
    {
        type : 'internship',
        name : 'Stage en agence Wordpress',
        place : 'Agence Point Com - Perpignan',
        description : 'J\'y ai rencontré des gens supers.',
        duration : ['20190801','20190830']
    },
    {
        type : 'training',
        name : 'Formation développeur WEB fullstack & APPs mobile',
        place : 'Ecole Régionale du Numérique - Le Soler',
        description : 'Formation qualifiante et qualitative, j\'y suis encore.',
        duration : ['20190909']
    }
]
const contactLinks = [
    {
        name : 'LinkedIn',
        value : 'Camille Abella',
        link : 'https://www.linkedin.com/in/camille-abella-a99950176/',
        icon : 'fab fa-linkedin'
    },
    {
        name : 'Discord',
        value : 'Ghom#9700', 
        link : 'https://discord.gg/3vC2XWK',
        icon : 'fab fa-discord'
    },
    {
        name : 'Twitter',
        value : '@GhomKrosmonaute',
        link : 'https://twitter.com/GhomKrosmonaute',
        icon : 'fab fa-twitter-square'
    }
]
const typeColors = {
    org : 'warning',
    bot : 'primary',
    app : 'danger',
    lib : 'info',
    game : 'success',
    site : 'dark',
    api : 'light',
    lang : 'warning',
    db : 'primary',
    server : 'success',
    internship : 'success',
    training : 'primary',
    schooling : 'warning',
    working : 'danger',
    sabbath : 'light'
}
const projects = {
    perso : [
        {
            type : 'org',
            name : 'Les Laboratoires JS',
            desc : 'Projet d\'entraide communautaire autour du JavaScript.',
            link : 'https://top.gg/servers/507389389098188820',
            used : ['Discord'],
            preview : 'https://cdn.discordapp.com/icons/507389389098188820/a_41f9f826abc393e3d781634da4eefa0b.gif'
        },
        {
            type : 'api',
            name : 'Statme',
            desc : 'Api de statistiques d\'activité sur Discord.',
            link : 'http://statme-api.tk/',
            used : ['JS','Discord.js','Express','MySQL'],
            preview : './img/preview-statme-api.png'
        },
        {
            type : 'site',
            name : 'JS Labs - Website',
            desc : 'Début de site web pour les Laboratoires JS.',
            link : 'https://github.com/CamilleAbella/JS-Labs-Website',
            used : ['PHP','JS','CSS','PGSQL'],
            preview : './img/preview-labs-website.PNG'
        },
        {
            type : 'site',
            name : 'JS Labs - Admin',
            desc : 'Début d\'interface d\'administration pour les Laboratoires JS',
            link : 'https://github.com/CamilleAbella/LabsAdmin-Dashboard',
            used : ['JS','Express','Bootstrap','PGSQL'],
            preview : ''
        },
        {
            type : 'site',
            name : 'Note Manager',
            desc : 'Projet réalisé avec l\'idem dans le cadre de ma formation',
            link : 'https://github.com/CamilleAbella/note-manager',
            used : ['JS','Webpack','localStorage'],
            preview : 'https://raw.githubusercontent.com/CamilleAbella/note-manager/master/src/assets/img/screenshot.png'
        },
        {
            type : 'bot',
            name : 'Discard',
            desc : 'Inter-server card game on Discord',
            link : 'https://github.com/CamilleAbella/Discard',
            used : ['JS','NodeJS','Canvas','SQLite'],
            preview : 'https://media.discordapp.net/attachments/669251520138838056/669850258288672768/unknown.png'
        },
        {
            type : 'bot',
            name : 'Unicorn Trap',
            desc : 'Gestionnaire de dégradés de couleurs pour les rôles dans Discord.',
            link : 'https://discordapp.com/oauth2/authorize?client_id=467702792350597120&permissions=268435456&scope=bot',
            used : ['JS','NodeJS','Discord.js','Color Engine'],
            preview : './img/preview-unicorn-trap.PNG'
        },
        {
            type : 'bot',
            name : 'Discord JS',
            desc : 'Lien direct entre la documentation Discord JS et Discord. (DJS API docs wrapper)',
            link : 'https://top.gg/bot/554108430298775564',
            used : ['JS','NodeJS','Discord.js'],
            preview : './img/preview-discord-js.PNG'
        },
        {
            type : 'game',
            name : 'Gario',
            desc : 'Platformer avec une physique inspirée de Mario Bros et un gameplay simple.',
            link : 'https://camilleabella.github.io/Gario/',
            used : ['HTML','JS','p5.js'],
            preview : './img/preview-gario.png'
        },
        {
            type : 'game',
            name : 'Tetris en Canvas',
            desc : 'Petit projet en canvas lors de ma formation à l\'Idem.',
            link : 'https://camilleabella.github.io/TetrisCanvas/',
            used : ['HTML','CSS','JS','Canvas'],
            preview : './img/preview-tetris-canvas.png'
        },
        {
            type : 'lib',
            name : 'Krosmap',
            desc : 'Krosmaga game data wrapper',
            link : 'https://github.com/CamilleAbella/Krosmap',
            used : ['JS','NodeJS','jsdom','axios'],
            preview : 'https://camo.githubusercontent.com/ae833fae172c5e8b12994f3a76069e4de46d4f0d/68747470733a2f2f7374617469632e616e6b616d612e636f6d2f672f6d6f64756c65732f6d6173746572706167652f626c6f636b2f6865616465722f6e61766261722f6b726f736d6167612f6c6f676f5f6d642e706e67'
        },
        {
            type : 'lib',
            name : 'Windows.js',
            desc : 'Un gestionnaire de fenêtres à l\'intérieur de votre site !',
            link : 'https://camilleabella.github.io/Windows.js/',
            used : ['JS','CSS'],
            preview : './img/preview-windows-js.png'
        },
        {
            type : 'lib',
            name : 'Typing.js',
            desc : 'HTML keyboard typing by ID element.',
            link : 'https://camilleabella.github.io/Typing.js/',
            used : ['JS'],
            preview : './img/preview-typing-js.PNG'
        },
        {
            type : 'lib',
            name : 'GodEmbed',
            desc : 'Langage de construction d\'embed Discord, technologie de templating.',
            link : 'https://github.com/CamilleAbella/GodEmbed/tree/master/Module',
            used : ['JS','NodeJS'],
            preview : ''
        },
        {
            type : 'lib',
            name : 'Color Engine',
            desc : 'Color engine for creates color gradients from a few colors and converts RBG colors to HEX and vice versa.',
            link : 'https://github.com/CamilleAbella/Color-Engine',
            used : ['JS','NodeJS'],
            preview : ''
        },
        {
            type : 'lib',
            name : 'HoverTree',
            desc : 'CSS framework for fast and easy menus and sub-menus.',
            link : 'https://github.com/CamilleAbella/HoverTree-CSS-Framework',
            used : ['JS','jQuery'],
            preview : ''
        },
        
    ],
    pro : [
        {
            type : 'app',
            name : 'Rednit',
            desc : 'Projet ayant gagné la troisième place du <a class="text-info" target="_blank" href="http://communities.techstars.com/france/perpignan/startup-weekend/15095">Startup Weekend Perpignan</a>.',
            link : '#',
            used : ['Python','JS','Rasa','React','PGSQL'],
            preview : './img/preview-rednit.png'
        },
        {
            type : 'site',
            name : 'Ce Portfolio 😉',
            desc : 'Mon CV en ligne, vous le lisez actuellement.',
            link : 'https://camilleabella.github.io/',
            used : ['HTML','JS','CSS','jQuery','Bootstrap','Anime.js'],
            preview : ''
        },
        {
            type : 'site',
            name : 'Fake Toys\'R\'Us',
            desc : 'Projet PHP lors de ma formation WEB à l\'Idem.',
            link : 'https://github.com/CamilleAbella/ERN-WEB-project-1',
            used : ['PHP','CSS','MySQL'],
            preview : './img/preview-toys-r-us.png'
        }
    ]
}
const competences = [

    {
        type : 'lang',
        name : 'Javascript',
        icon : 'fab fa-js',
        color : '#f7df1e'
    },
    {
        type : 'lang',
        name : 'HTML',
        icon : 'fab fa-html5',
        color : '#F16529'
    },
    {
        type : 'lang',
        name : 'CSS',
        icon : 'fab fa-css3-alt',
        color : '#3C99DC'
    },
    {
        type : 'lang',
        name : 'PHP',
        icon : 'fab fa-php',
        color : '#787CB5'
    },

    {
        type : 'db',
        name : 'MySQL',
        icon : 'fas fa-database',
        color : '#00758F'
    },
    {
        type : 'db',
        name : 'PostgreSQL',
        icon : 'fas fa-database',
        color : '#587FAA'
    },
    {
        type : 'db',
        name : 'MongoDB',
        icon : 'fas fa-database',
        color : '#4DB33D'
    },
    {
        type : 'db',
        name : 'ArangoDB',
        icon : 'fas fa-database',
        color : '#2BA747'
    },

    {
        type : 'lib',
        name : 'Discord.js',
        icon : 'fab fa-discord',
        color : '#738ADB'
    },
    {
        type : 'lib',
        name : 'Angular',
        icon : 'fab fa-angular',
        color : '#B52E31'
    },
    {
        type : 'lib',
        name : 'Wordpress',
        icon : 'fab fa-wordpress-simple',
        color : '#00749C'
    },
    {
        type : 'lib',
        name : 'Express.js',
        icon : 'fab fa-edge',
        color : '#333333'
    },

    {
        type : 'app',
        name : 'Git',
        icon : 'fab fa-git-alt',
        color : '#3E2C00'
    },
    {
        type : 'app',
        name : 'Docker',
        icon : 'fab fa-docker',
        color : '#0db7ed'
    },

    {
        type : 'server',
        name : 'NodeJS',
        icon : 'fab fa-node-js',
        color: '#68A063'
    }
]
const sideCode = `// Getters
get x(){
    if(this.parent)
    return this.parent.x + this._x
    return this._x
}
get y(){
    if(this.parent)
    return this.parent.y + this._y
    return this._y
}
get scale(){
    if(this.parent)
    return this.parent.scale * this._scale
    return this._scale
}
get width()     { return this._width * this.scale }
get height()    { return this._height * this.scale }
get left()      { return this.x - this.width / 2 }
get right()     { return this.x + this.width / 2 }
get top()       { return this.y - this.height / 2 }
get bottom()    { return this.y + this.height / 2 }

// Functions
reset(){ 
    for(const reset of this.resets) reset() 
    if(this.children) for(const child of this.children) child.reset()
}
move( x, y ){
    this._x += x
    this._y += y
}
place( x, y ){
    this._x = x
    this._y = y
}
scale( scale ){
    this._scale = scale
}
draw(){
    if(this.isDraw && this.onDraw){
        this.onDraw()
        this.debug()
    }
}
debug(){
    if(this.isDebug && this.onDebug)
    this.onDebug()
}`.split('\n')

$(()=>{

    width = $(window).width()
    height = $(window).height()
    landscape = width > height

//=============================================
//                                             
//  ###    ###  ##   ##  ##      ######  ##  
//  ## #  # ##  ##   ##  ##        ##    ##  
//  ##  ##  ##  ##   ##  ##        ##    ##  
//  ##      ##  ##   ##  ##        ##    ##  
//  ##      ##   #####   ######    ##    ##  
//                                             
//=============================================

    animes.header = {
        initial : async starting => {
            if(starting) 
            await new Promise(resolve => setTimeout(resolve,500))
            anime({
                targets : 'div.header',
                top : '-90vh'
            })
            anime({
                targets : 'section.header',
                top : '3vh',
                delay : 50
            })
        }
    }

    const toBottom = {
        footer : { top : 85, rotate : -10 },
        skills : { top : 60, rotate : 15 },
        projects : { top : 40, rotate : -15 },
    }

    var delay = 200

    for(classe in toBottom){

        delay += 200
        const params = toBottom[classe]

        animes[classe] = {
            initial : eval(`starting => {
                anime({
                    targets : 'div.${classe}',
                    top : '${params.top}vh',
                    rotateZ : '${params.rotate}deg',
                    easing : 'easeInOutBack',
                    delay : starting ? ${delay} : 0
                })
                anime({
                    targets : 'section.${classe}',
                    top : '${params.top + 50}vh',
                    easing : 'easeInOutBack',
                    delay : starting ? ${delay + 200} : 0
                })
                ${classe == 'projects' || classe == 'footer' ? `
                    anime({
                        targets : 'section.${classe} h2',
                        translateY : '-45vh',
                        delay : starting ? ${delay + 200} : 0
                    })
                ` : `
                    anime({
                        targets : 'section.${classe} h2',
                        translateY : '-40vh',
                        delay : starting ? ${delay + 200} : 0
                    })
                `}
                
            }`)
        }
    }

    const toBottomEntries = Object.entries(toBottom).reverse()

    toBottomEntries.forEach( (entry,index) => {

        const [classe,params] = entry
        const dessus = toBottomEntries.slice(0,index)
        const dessous = toBottomEntries.slice(index+1)

        try {
            animes[classe].focus = eval(`()=>{
                anime({
                    targets : 'div.${classe}',
                    top : '20vh',
                    duration : 1000,
                })
                anime({
                    targets : 'section.${classe}',
                    top : '25vh',
                    duration : 1000,
                })
                anime({
                    targets : 'section.${classe} h2',
                    translateY : '0'
                })
                ${dessus.map(e => {
                    const [c,p] = e
                    return `anime({
                        targets : 'div.${c}',
                        top : '10vh',
                        duration : 1000
                    })
                    anime({
                        targets : 'section.${c}',
                        top : '100vh',
                        duration : 1000
                    })`
                }).join('\n')}
                ${dessous.map(e => {
                    const [c,p] = e
                    return `anime({
                        targets : 'div.${c}',
                        top : '100vh',
                        duration : 1000
                    })
                    anime({
                        targets : 'section.${c}',
                        top : '110vh',
                        duration : 1000
                    })
                    anime({
                        targets : 'section.${c} h2',
                        translateY : '20vh'
                    })`
                }).join('\n')}
            }`)
        } catch (error) {
            console.error(error)
        }
    })


    if(!landscape){

//====================================================================
//                                                                    
//  #####    #####   #####    ######  #####      ###    ##  ######  
//  ##  ##  ##   ##  ##  ##     ##    ##  ##    ## ##   ##    ##    
//  #####   ##   ##  #####      ##    #####    ##   ##  ##    ##    
//  ##      ##   ##  ##  ##     ##    ##  ##   #######  ##    ##    
//  ##       #####   ##   ##    ##    ##   ##  ##   ##  ##    ##    
//                                                                    
//====================================================================


        handSequence = [
            
        ]

        animes.infos = {
            initial : async starting => {
                if(starting) 
                await new Promise(resolve => setTimeout(resolve,500))
                anime({
                    targets : '.infos',
                    top: '18vh',
                    easing : 'easeInOutBack',
                    zIndex: {
                        value: 11,
                        round: true
                    },
                    duration : 1000
                })
                anime({
                    targets : 'div.infos',
                    height: '10vh',
                    width: '70vw',
                    left : '50vw',
                    easing : 'easeInOutBack',
                    duration : 1000
                })
                anime({
                    targets : 'div.infos img',
                    rotateZ : '360deg',
                    easing : 'easeInOutBack',
                    duration : 1000
                })
                anime({
                    targets : 'section.infos',
                    left : '60vw',
                    fontSize: '1.9vh',
                    height: '8vh',
                    width: '40vw',
                    easing : 'easeInOutBack',
                    delay : 100,
                    duration : 1000
                })
            },
            focus : ()=>{
                anime({
                    targets : '.infos',
                    fontSize: '2.5vh',
                    left : '52vw',
                    top : '55vh',
                    width : '80vw',
                    height: '80vh',
                    zIndex: {
                        value: 10,
                        round: true
                    },
                    duration: 1000
                })
                anime({
                    targets : 'section.infos',
                    left: '75vw',
                    duration: 1000
                })
            }
        }

        animes.contact = {
            initial : async starting => {
                if(starting) 
                await new Promise(resolve => setTimeout(resolve,500))
                anime({
                    targets : '.contact',
                    left : '40vw',
                    top : '32vh',
                    zIndex: {
                        value: 1,
                        round: true
                    }
                })
                anime({
                    targets : 'div.contact',
                    height: '12vh',
                    width: '60vw',
                })
                anime({
                    targets : 'section.contact',
                    padding: '0',
                    fontSize: '1.2vh',
                    height: '8vh',
                    width: '55vw',
                    delay : 100
                })
                anime({
                    targets : '.contact .icon',
                    fontSize: '1.3vh',
                    minWidth: '5vw'
                })
                anime({
                    targets : '.contact .info',
                    padding: '.5vw 0'
                })
                anime({
                    targets : '.contact .icons',
                    left : '45vw',
                    top : '4.5vh',
                    fontSize: '10vh'
                })
                $('.contact .hidden').hide()
            },
            focus : ()=>{
                anime({
                    targets : '.contact',
                    padding: '2vh',
                    fontSize: '2.4vh',
                    left : '52vw',
                    top : '55vh',
                    width : '80vw',
                    height: '80vh',
                    zIndex: {
                        value: 12,
                        round: true
                    },
                    duration: 1000
                })
                anime({
                    targets : '.contact .icon',
                    fontSize: '2.7vh',
                    minWidth: '10vw'
                })
                anime({
                    targets : '.contact .info',
                    padding: '2.5vw'
                })
                anime({
                    targets : '.contact .icons',
                    left : '40vw',
                    top : '59vh',
                    fontSize: '30vh'
                })
                $('.contact .hidden').show()
            }
        }

    }else{

//==============================================================================
//                                                                              
//  ##        ###    ##     ##  ####     ####   ####    ###    #####   #####  
//  ##       ## ##   ####   ##  ##  ##  ##     ##      ## ##   ##  ##  ##     
//  ##      ##   ##  ##  ## ##  ##  ##   ###   ##     ##   ##  #####   #####  
//  ##      #######  ##    ###  ##  ##     ##  ##     #######  ##      ##     
//  ######  ##   ##  ##     ##  ####    ####    ####  ##   ##  ##      #####  
//                                                                              
//==============================================================================


        handSequence = [
                    
        ]

        /**
         * INFOS
         */

        animes.infos = {
            initial : async starting => {
                if(starting) 
                await new Promise(resolve => setTimeout(resolve,500))
                anime({
                    targets : '.infos',
                    top: '18vh',
                    easing : 'easeInOutBack',
                    zIndex: {
                        value: 11,
                        round: true
                    },
                    duration : 1000
                })
                anime({
                    targets : 'div.infos',
                    height: '10vh',
                    width: '30vw',
                    left : '50vw',
                    easing : 'easeInOutBack',
                    duration : 1000
                })
                anime({
                    targets : 'div.infos img',
                    rotateZ : '360deg',
                    easing : 'easeInOutBack',
                    duration : 1000
                })
                anime({
                    targets : 'section.infos',
                    left : '55vw',
                    fontSize: '1.9vh',
                    height: '8vh',
                    width: '20vw',
                    easing : 'easeInOutBack',
                    delay : 100,
                    duration : 1000
                })
                anime({
                    targets : 'section.infos .bio',
                    easing : 'easeInOutBack',
                    height : '0',
                    width: '0',
                    duration: 1000
                })
            },
            focus : ()=>{
                anime({
                    targets : '.infos',
                    fontSize: '2.5vh',
                    left : '52vw',
                    top : '55vh',
                    width : '50vw',
                    height: '50vh',
                    zIndex: {
                        value: 10,
                        round: true
                    },
                    duration: 1000
                })
                anime({
                    targets : 'section.infos',
                    left: '50vw',
                    width: '30vw',
                    duration: 1000
                })
                anime({
                    targets : 'section.infos .bio',
                    easing : 'easeInOutBack',
                    height : '40vh',
                    width: '45vw',
                    duration: 1000
                })
            }
        }

        /**
         * CONTACT
         */

        animes.contact = {
            initial : async starting => {
                if(starting) 
                await new Promise(resolve => setTimeout(resolve,500))
                anime({
                    targets : '.contact',
                    left : '30vw',
                    top : '32vh',
                    zIndex: {
                        value: 1,
                        round: true
                    }
                })
                anime({
                    targets : 'div.contact',
                    height: '15vh',
                    width: '25vw',
                })
                anime({
                    targets : 'section.contact',
                    padding: '0',
                    fontSize: '1.2vh',
                    top: '30vh',
                    height: '7vh',
                    width: '25vw',
                    delay : 100
                })
                anime({
                    targets : '.contact .icon',
                    fontSize: '1.5vh',
                    minWidth: '5vw'
                })
                anime({
                    targets : '.contact .icons',
                    left : '21.4vw',
                    top : '6vh',
                    fontSize: '10vh'
                })
                anime({
                    targets : '.contact .info',
                    padding: '.3vw 0'
                })
                $('.contact .hidden').hide()
            },
            focus : ()=>{
                anime({
                    targets : '.contact',
                    padding: '2vh',
                    fontSize: '2.3vh',
                    left : '52vw',
                    top : '55vh',
                    width : '50vw',
                    height: '50vh',
                    zIndex: {
                        value: 12,
                        round: true
                    },
                    duration: 1000
                })
                anime({
                    targets : '.contact .icon',
                    fontSize: '2.5vh',
                    minWidth: '4vw'
                })
                anime({
                    targets : '.contact .info',
                    padding: '.2vw'
                })
                anime({
                    targets : '.contact .icons',
                    left : '25vw',
                    top : '37vh',
                    fontSize: '20vh'
                })
                $('.contact .hidden').show()
            }
        }

        
    }
})