
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
            init(true)
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
        }
    })

    

    $('button').click(()=>{
        hideButton()
    })

    // INDEXES

    

    // onClick listeners

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

function init(starting){
    if(starting){

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

        if(handSequence){
            anime({
                targets : '.hand',
                keyframes : handSequence
            })
        }
    }
    for(classe in animes){
        animes[classe].initial(starting)
    }
}

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