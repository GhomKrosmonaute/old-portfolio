
var current = 'null';

$(() => {

    init(true)

    $('button').click(()=>{
        hideButton()
    })

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

    // hand animation

    anime({
        targets : '.hand',
        keyframes : [
            {
                left: '55vw',
                top: '15vh'
            }
        ]
    })

})

function init(starting){
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