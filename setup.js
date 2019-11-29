
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    //window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

const animes = {}
var handSequence = null

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
    lang : 'warning',
    db : 'primary',
    server : 'success'
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
        }
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

$(()=>{

    const width = $(window).width()
    const height = $(window).height()

    // WARN
    if(height < width){
        $('body').append(`
            <h1 style="
                text-align: center;
                position: absolute;
                top: 50vh;
                left: 50vw;
                width: 50vw;
                z-index: 50;
                font-size: 5vh;
                transform: translate(-50%,-50%);
            "> 
                <i class="fas fa-exclamation-circle"></i> <br>
                Ce site n'est pas encore accessible sur les écrans "paysage". <br>
                ça arrive très bientôt !
            </h1>
        `)
    }

    if(height > width){

//=================================================================
//                                                                 
//  ##   ##  #####  #####    ######  ##   ####    ###    ##      
//  ##   ##  ##     ##  ##     ##    ##  ##      ## ##   ##      
//  ##   ##  #####  #####      ##    ##  ##     ##   ##  ##      
//   ## ##   ##     ##  ##     ##    ##  ##     #######  ##      
//    ###    #####  ##   ##    ##    ##   ####  ##   ##  ######  
//                                                                 
//=================================================================

        handSequence = [
            
        ]

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

    }else{

//========================================================================================
//                                                                                        
//  ##   ##   #####   #####    ##  ######   #####   ##     ##  ######    ###    ##      
//  ##   ##  ##   ##  ##  ##   ##     ##   ##   ##  ####   ##    ##     ## ##   ##      
//  #######  ##   ##  #####    ##    ##    ##   ##  ##  ## ##    ##    ##   ##  ##      
//  ##   ##  ##   ##  ##  ##   ##   ##     ##   ##  ##    ###    ##    #######  ##      
//  ##   ##   #####   ##   ##  ##  ######   #####   ##     ##    ##    ##   ##  ######  
//                                                                                        
//========================================================================================

    }
})