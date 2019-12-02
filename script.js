
var current = 'null'
var popup = false

$(() => {

    const loaderText = $('.loader-text')
    const temp = {
        percent: loaderText.html()
    }

    anime({
        targets: temp,
        percent: '100%',
        easing: 'linear',
        color: '#000',
        round: 1,
        duration: 500,
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

    setTimeout(()=>{
        for(type in projects){
            projects[type].forEach(( project, index ) => {
                $(`.project-${type}-${index}`).click(
                    eval(`()=>{
                        $('.popup').html(\`
                            <a href="${project.link}" target="_blank"> <h3> ${project.name} </h3> </a>
                            <span> ${project.used.map(used=>`<span class="badge badge-secondary"> ${used} </span>`).join(' ')} </span>
                            <p> ${project.desc} </p>
                            ${project.preview ? `
                            <a href="${project.preview}" target="_blank">
                                <div class="preview">
                                    <img src="${project.preview}" alt="preview image">
                                </div>
                            </a>
                            ` : ''}
                        \`)
                        anime({
                            targets : '.popup',
                            left : '50vw'
                        })
                        showButton()
                    }`)
                )
            })
        }
    },5000)

})

function showButton( name ){
    if(!name) popup = true
    else current = name
    anime({
        targets : 'button',
        right : '0vh',
        begin: ()=>{
            if(current != 'null')
            $('button').show()
        },
        duration: 1000
    })
}

function hideButton(){
    if(current != 'null' && !popup){
        init()
    }
    if(popup){
        anime({
            targets : '.popup',
            left : '150vw'
        })
        popup = false
    }else{
        current = 'null'
        anime({
            targets : 'button',
            right : '-20vh',
            complete: ()=>{
                if(current == 'null')
                $('button').hide()
            },
            duration: 1000
        })
    }
}

var contactLinkIndex = 0

function init(starting){

    if(starting){

        // INFOS
        const now = new Date()
        const naissance = new Date(833061600000)
        $('.age').html(now.getFullYear()-naissance.getFullYear())

        // CONTACT
        const icons = $('.contact .icons')
        setInterval(async () => {

            icons.css('color','transparent')

            await new Promise(resolve => setTimeout(resolve,1500))

            icons.html(`<i class="${contactLinks[contactLinkIndex].icon}"></i>`)
            icons.css('color','var(--transparent)')

            contactLinkIndex ++
            if(contactLinkIndex > contactLinks.length - 1)
            contactLinkIndex = 0
        },5000)

        

        // PROJECTS
        for(type in projects){
            const table = $('.projects .' + type)
            projects[type].forEach(( project, index ) => {
                table.append(`<tr class="project-${type}-${index}">
                    <td class="text-right">
                        <span class="badge badge-${typeColors[project.type]}"> ${project.type} </span>
                    </td>
                    <td style="
                        background-image: linear-gradient(
                            to left, var(--${typeColors[project.type]}), transparent 70%
                        );
                        border-radius: 2vw;
                    "> ${project.name} </td>
                </tr>`)
            })
        }

        // SKILLS
        const table = $('.skills table')
        competences.forEach(comp => {
            table.append(`<tr>
                <td class="text-right">
                    <span class="badge badge-${typeColors[comp.type]}"> ${comp.type} </span>
                </td>
                <td class="text-center" style="
                    color: ${comp.color};
                ">
                    <i class="${comp.icon}"></i>
                </td>
                <td class="text-shadow" style="
                    background-image: linear-gradient(
                        to left, ${comp.color}, transparent 80%
                    );
                    border-radius: 2vw;
                "> ${comp.name} </td>
            </tr>`)
        })

        // INDEXES
        const indexCount = Math.ceil($(window).height() / ($(window).width() * (landscape ? 0.02 : 0.05)))
        const indexes = $('.indexes')
        for(var i=0; i<indexCount; i++){
            indexes.append('<li style="top:' + (i * (landscape ? 2 : 5)) + 'vw;">' + (i + 1) + '</li>')
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
        if(landscape){
            anime({
                targets : '.light.blue',
                left : '-20vw',
                top : '150vh',
                duration : 6000,
                delay : 1500,
                direction: 'alternate',
                easing : 'easeInOutExpo',
                loop : true
            })
            anime({
                targets : '.light.purple',
                left : '120vw',
                top : '-50vh',
                duration : 6000,
                delay : 1500,
                direction: 'alternate',
                easing : 'easeInOutExpo',
                loop : true
            })
        }else{
            anime({
                targets : '.light.blue',
                left : '-20vw',
                top : '150vh',
                duration : 6000,
                delay : 1500
            })
            anime({
                targets : '.light.purple',
                left : '120vw',
                top : '-50vh',
                duration : 6000,
                delay : 1500,
                complete : ()=>$('.light').hide()
            })
        }

    }

    for(classe in animes){
        animes[classe].initial(starting)
    }
}