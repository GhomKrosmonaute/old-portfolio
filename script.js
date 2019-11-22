

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
            delay : delay
        })

        anime({
            targets : 'p.' + classe,
            top : (animation.top + 2) + 'vh',
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

    anime({
        targets : 'div.infos',
        left : '50vw',
        delay : 1500
    })
    anime({
        targets : 'p.infos',
        left : '50vw',
        delay : 1600
    })

    // INDEXES

    const indexCount = Math.ceil($(document).height() / ($(document).width() * .03))
    for(var i=0; i<indexCount; i++){
        $('.indexes').append('<li style="top:' + (i * 3) + 'vw;">' + (i + 1) + '</li>')
    }

    anime({
        targets: '.indexes > li',
        left: 0,
        delay: anime.stagger(30)
    });

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