
const animes = {}
var handSequence = null

$(()=>{

    const width = $(window).width()

    // WARN
    if(width >= 576){
        $('body').append(`
            <h1 style="
                text-align: center;
                position: absolute;
                top: 50vh;
                left: 50vw;
                width: 50vw;
                z-index: 50;
                font-size: 30px;
                transform: translate(-50%,-50%);
            "> 
                <i class="fas fa-exclamation-circle"></i> <br>
                Le responsive du site n\'est disponible pour le moment que sur les petits écrans ! <br>
                (moins de 576 pixels de large)
            </h1>
        `)
    }

    if(width < 576){

//====================================================
//                                                    
//  ###    ###   #####   #####   ##  ##      #####  
//  ## #  # ##  ##   ##  ##  ##  ##  ##      ##     
//  ##  ##  ##  ##   ##  #####   ##  ##      #####  
//  ##      ##  ##   ##  ##  ##  ##  ##      ##     
//  ##      ##   #####   #####   ##  ######  #####  
//                                                    
//====================================================

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
                    fontSize: '14px',
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
                    fontSize: '18px',
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
                    padding: '0px',
                    fontSize: '9px',
                    height: '8vh',
                    width: '55vw',
                    delay : 100
                })
                anime({
                    targets : '.contact .icon',
                    fontSize: '10px',
                    minWidth: '5vw'
                })
                anime({
                    targets : '.contact .info',
                    padding: '.5vw 0'
                })
            },
            focus : ()=>{
                anime({
                    padding: '15px',
                    targets : '.contact',
                    fontSize: '18px',
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
                    fontSize: '20px',
                    minWidth: '10vw'
                })
                anime({
                    targets : '.contact .info',
                    padding: '2.5vw'
                })
            }
        }

        const toBottom = {
            footer : { top : 90, rotate : -10 },
            skills : { top : 60, rotate : 15 },
            projects : { top : 40, rotate : -15 },
        }

        var delay = 200

        for(classe in toBottom){
        
            delay += 200
            const params = toBottom[classe]
    
            animes[classe] = {
                initial : eval(`(starting) => {
                    anime({
                        targets : 'div.${classe}',
                        top : '${params.top}vh',
                        rotateZ : '${params.rotate}deg',
                        easing : 'easeInOutBack',
                        delay : starting ? ${delay} : 0
                    })
                    anime({
                        targets : 'section.${classe}',
                        top : '${params.top + 2}vh',
                        easing : 'easeInOutBack',
                        delay : starting ? ${delay + 200} : 0
                    })
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
                        })`
                    }).join('\n')}
                }`)
            } catch (error) {
                console.error(error)
            }
        })

    }else if(width < 768){

//================================================
//                                                
//   ####  ###    ###    ###    ##      ##      
//  ##     ## #  # ##   ## ##   ##      ##      
//   ###   ##  ##  ##  ##   ##  ##      ##      
//     ##  ##      ##  #######  ##      ##      
//  ####   ##      ##  ##   ##  ######  ######  
//                                                
//================================================


    }else if(width < 992){

//====================================================
//                                                    
//  ######    ###    #####   ##      #####  ######  
//    ##     ## ##   ##  ##  ##      ##       ##    
//    ##    ##   ##  #####   ##      #####    ##    
//    ##    #######  ##  ##  ##      ##       ##    
//    ##    ##   ##  #####   ######  #####    ##    
//                                                    
//====================================================


    }else if(width < 1200){

//==============================================
//                                              
//  ##        ###    #####     ####    #####  
//  ##       ## ##   ##  ##   ##       ##     
//  ##      ##   ##  #####    ##  ###  #####  
//  ##      #######  ##  ##   ##   ##  ##     
//  ######  ##   ##  ##   ##   ####    #####  
//                                              
//==============================================


    }else{

//======================
//                      
//  ##    ##  ##      
//   ##  ##   ##      
//    ####    ##      
//   ##  ##   ##      
//  ##    ##  ######  
//                      
//======================


    }
})