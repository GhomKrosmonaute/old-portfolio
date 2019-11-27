
var current = 'null';

$(() => {

    const loaderText = $('.loader-text')
    const temp = {
        percent: loaderText.html()
    }

    anime({
        targets: temp,
        percent: '100%',
        easing: 'linear',
        round: 1,
        duration: 2500,
        update: () => loaderText.html(temp.percent),
        complete: () => {
            loaderText.html('Good')
            anime({
                targets: '.loader-top, .loader-text, .loader',
                delay: 500,
                top: '-50vh',
                duration: 5000
            })
            anime({
                targets: '.loader-bottom',
                delay: 400,
                top: '50vh',
                duration: 5000
            })
            setTimeout(()=>{
                init(true)
            },500)
        }
    })

    // onClick listeners
    
    $('button').click(()=>{
        hideButton()
    })

    $('.infos').click(()=>{
        if(current != 'null' && current != 'infos'){
            animes[current].initial()
            animes.infos.focus()
        }
    })

    for(classe in animes){
        const element = animes[classe]
        if(element.focus){
            $('.'+classe).click(eval(`()=>{
                if(current == 'null'){
                    animes.${classe}.focus()
                    showButton('${classe}')
                }
            }`))
        }
    }

})

function showButton( name ){
    current = name
    anime({
        targets : 'button',
        left : '90vw',
        begin: ()=>{
            if(current != 'null')
            $('button').show()
        },
        duration: 1000
    })
}

function hideButton(){
    if(current != 'null'){
        init()
    }
    current = 'null'
    anime({
        targets : 'button',
        left : '115vw',
        complete: ()=>{
            if(current == 'null')
            $('button').hide()
        },
        duration: 1000
    })
}

function init(starting){

    if(starting){

        // INDEXES
        const indexCount = Math.ceil($(window).height() / ($(window).width() * .03))
        const indexes = $('.indexes')
        for(var i=0; i<indexCount; i++){
            indexes.append('<li style="top:' + (i * 5) + 'vw;">' + (i + 1) + '</li>')
        }

        setTimeout(()=>{
            anime({
                targets: '.indexes, .indexes > li',
                left: 0,
                delay: anime.stagger(10)
            });
        },1500)

        // HAND
        if(handSequence){
            anime({
                targets : '.hand',
                keyframes : handSequence
            })
        }

        // LIGHTS
        anime({
            targets : '.light.blue',
            left : '-20vw',
            top : '150vh',
            duration : 5000,
            delay : 1500
        })
        anime({
            targets : '.light.purple',
            left : '120vw',
            top : '-50vh',
            duration : 5000,
            delay : 1500,
            complete : ()=>$('.light').hide()
        })

    }

    for(classe in animes){
        animes[classe].initial(starting)
    }
}