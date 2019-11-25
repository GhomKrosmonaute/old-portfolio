
var current = 'null'
var frames = {}

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

    // Buttons

    $('button').click(()=>{
        hideButton()
    })

    // Bottom

    const BOTTOM = {
        footer : { top : 90, rotate : -10 },
        skills : { top : 60, rotate : 15 },
        projects : { top : 40, rotate : -15 }
    }

    var delay = 200

    for(classe in BOTTOM){
        
        delay += 200
        const animation = BOTTOM[classe]

        frames[classe] = {
            initial : [
                {
                    targets : 'div.' + classe,
                    top : animation.top + 'vh',
                    rotateZ : animation.rotate + 'deg',
                    easing : 'easeInOutBack',
                    delay : delay
                },
                {
                    targets : 'p.' + classe,
                    top : (animation.top + 2) + 'vh',
                    easing : 'easeOutBack',
                    delay : delay + 200
                }
            ],
            detail : [

            ]
        }

        anime(frames[classe].initial[0])
        anime(frames[classe].initial[1])
    }

    // HEADER

    frames.header = {
        initial : [
            {
                targets : 'div.header',
                top : '-90vh',
                delay : 50
            },
            {
                targets : 'p.header',
                top : '3vh',
                delay : 100
            }
        ],
        detail : [
            
        ]
    }

    anime(frames.header.initial[0])
    anime(frames.header.initial[1])

    // INFOS

    frames.infos = {
        initial : [
            {
                targets : '.infos',
                top: '18vh',
                zIndex: {
                    value: 1,
                    round: true
                },
            },
            {
                targets : 'div.infos',
                height: '10vh',
                width: '70vw',
                left : '50vw'
            },
            {
                targets : 'div.infos img',
                rotateZ : '360deg',
                easing : 'easeInOutBack'
            },
            {
                targets : 'p.infos',
                left : '60vw',
                fontSize: '14px',
                height: '8vh',
                width: '40vw',
                delay : 100
            }
        ],
        detail : [
            {
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
            },
            {
                targets : 'p.infos',
                left: '75vw',
                duration: 1000
            }
        ]
    }

    setTimeout(()=>{
        for(const anim of frames.infos.initial){
            anime(anim)
        }
    },1500)

    // CONTACT

    frames.contact = {
        initial : [
            {
                targets : '.contact',
                left : '40vw',
                zIndex: {
                    value: 1,
                    round: true
                }
            },
            {
                targets : 'div.contact',
                top : '35vh',
                height: '10vh',
                width: '60vw',
            },
            {
                targets : 'p.contact',
                fontSize: '14px',
                top : '35vh',
                height: '8vh',
                width: '55vw',
                delay : 100
            }
        ],
        detail : [
            {
                targets : '.contact',
                fontSize: '20px',
                left : '52vw',
                top : '55vh',
                width : '80vw',
                height: '80vh',
                zIndex: {
                    value: 10,
                    round: true
                },
                duration: 1000
            }
        ]
    }

    setTimeout(()=>{
        anime(frames.contact.initial[0])
        anime(frames.contact.initial[1])
    },1500)

    // INDEXES

    const indexCount = Math.ceil($(window).height() / ($(window).width() * .03))
    const indexes = $('.indexes')
    for(var i=0; i<indexCount; i++){
        indexes.append('<li style="top:' + (i * 3) + 'vw;">' + (i + 1) + '</li>')
    }

    setTimeout(()=>{
        anime({
            targets: '.indexes, .indexes > li',
            left: 0,
            delay: anime.stagger(10)
        });
    },1500)

    // onClick listeners

    frames.footer.onClick = function(){
        if(current == 'null'){
            for(const anim of frames.footer.detail) anime(anim)
            showButton('footer')
        }
    }
    frames.skills.onClick = function(){
        if(current == 'null'){
            for(const anim of frames.skills.detail) anime(anim)
            showButton('skills')
        }
    }
    frames.projects.onClick = function(){
        if(current == 'null'){
            for(const anim of frames.projects.detail) anime(anim)
            showButton('projects')
        }
    }
    frames.infos.onClick = function(){
        if(current == 'null'){
            for(const anim of frames.infos.detail) anime(anim)
            showButton('infos')
        }
    }
    frames.contact.onClick = function(){
        if(current == 'null'){
            for(const anim of frames.contact.detail) anime(anim)
            showButton('contact')
        }
    }
    $('.footer').click(frames.footer.onClick)
    $('.skills').click(frames.skills.onClick)
    $('.projects').click(frames.projects.onClick)
    $('.infos').click(frames.infos.onClick)
    $('.contact').click(frames.contact.onClick)

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

function showButton( name ){
    current = name
    anime({
        targets : 'button',
        width: '10vw',
        height: '10vw',
        begin: ()=>$('button').show(),
        duration: 1000
    })
}

function hideButton(){
    if(current != 'null'){
        for(const anim of frames[current].initial){
            anime(anim)
        }
    }
    current = 'null'
    anime({
        targets : 'button',
        width: '0',
        height: '0',
        complete: ()=>$('button').hide(),
        duration: 1000
    })
}