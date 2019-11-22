

$( () => {

    //===============================================
    //                                               
    //    ###    ##     ##  ##  ###    ###  #####  
    //   ## ##   ####   ##  ##  ## #  # ##  ##     
    //  ##   ##  ##  ## ##  ##  ##  ##  ##  #####  
    //  #######  ##    ###  ##  ##      ##  ##     
    //  ##   ##  ##     ##  ##  ##      ##  #####  
    //                                               
    //===============================================


    const BOTTOM = {
        footer : { top : 90, rotate : -10 },
        skills : { top : 60, rotate : 15 },
        projects : { top : 40, rotate : -15 }
    }

    var delay = 200

    for(classe in BOTTOM){
        
        delay += 200
        const animation = BOTTOM[classe]

        anime({
            targets : 'div.' + classe,
            top : animation.top + 'vh',
            rotateZ : animation.rotate + 'deg',
            easing : 'easeInOutBack',
            delay : delay
        })

        anime({
            targets : 'p.' + classe,
            top : (animation.top + 2) + 'vh',
            easing : 'easeInOutBack',
            delay : delay + 100
        })
    }

    // HEADER

    anime({
        targets : 'div.header',
        top : '-90vh'
    })
    anime({
        targets : 'p.header',
        top : '3vh',
        delay : 50
    })

    // INFOS

    setTimeout(()=>{
        anime({
            targets : 'div.infos',
            left : '50vw'
        })
        anime({
            targets : 'div.infos img',
            rotateZ : '360deg',
            easing : 'easeInOutBack'
        })
        anime({
            targets : 'p.infos',
            left : '60vw',
            delay : 100
        })
    },1500)

    // INDEXES

    const indexCount = Math.ceil($(document).height() / ($(document).width() * .03))
    for(var i=0; i<indexCount; i++){
        $('.indexes').append('<li style="top:' + (i * 3) + 'vw;">' + (i + 1) + '</li>')
    }

    setTimeout(()=>{
        anime({
            targets: '.indexes, .indexes > li',
            left: 0,
            delay: anime.stagger(10)
        });
    },1500)

    //=======================================================================
    //                                                                       
    //  #####     ###    #####    ######  ##   ####  ##      #####   ####  
    //  ##  ##   ## ##   ##  ##     ##    ##  ##     ##      ##     ##     
    //  #####   ##   ##  #####      ##    ##  ##     ##      #####   ###   
    //  ##      #######  ##  ##     ##    ##  ##     ##      ##        ##  
    //  ##      ##   ##  ##   ##    ##    ##   ####  ######  #####  ####   
    //                                                                       
    //=======================================================================

    

})