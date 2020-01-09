
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
        duration: 1000,
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

    $('.infos').click(()=>{
        if(current != 'null' && current != 'infos' && !popup){
            animes[current].initial()
            animes.infos.focus()
        }
    })

    setTimeout(()=>{
        for(type in projects){
            projects[type].forEach(( project, index ) => {
                $(`.project-${type}-${index}`).click(
                    eval(`()=>{
                        $('.popup').html(\`
                            <a href="${project.link}" target="_blank"> <h3> <i class="fas fa-paperclip"></i> ${project.name} </h3> </a>
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
                            left : '50vw',
                            easing : 'easeInOutBack',
                            duration : 600
                        })
                        showButton()
                    }`)
                )
            })
        }
    },4000)

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
            left : '150vw',
            easing : 'easeInOutBack',
            duration : 1000
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
                table.append(`
                    <tr class="project-${type}-${index}">
                        <td class="text-right">
                            <span class="badge badge-${typeColors[project.type]}"> ${project.type} </span>
                        </td>
                        <td style="
                            background-image: linear-gradient(
                                to left, var(--${typeColors[project.type]}), transparent 70%
                            );
                            border-radius: 2vw;
                        "> ${project.name} </td>
                    </tr>
                `)
            })
        }

        // SKILLS
        let table = $('.skills table')
        competences.forEach(comp => {
            table.append(`
                <tr>
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
                </tr>
            `)
        })

        // PARCOURS
        let switcher = true
        div = $('.footer > div')
        parcours.sort((a,b) => {
            return moment(a.duration[0], "YYYYMMDD").format('x') - moment(b.duration[0], "YYYYMMDD").format('x')
        }).forEach(one => {
            switcher = !switcher
            div.append(`
                <div class="${switcher ? 'left' : 'right'} parcours" style="border-color: var(--${typeColors[one.type]})">
                    <span class="head"> ${one.name} </span>
                    <div class="text-muted">
                        <span> ${moment(one.duration[0], 'YYYYMMDD').fromNow()}, </span>
                        <span> ${one.place}, </span>
                        <span> pendant ${moment(one.duration[0], 'YYYYMMDD').from(one.duration[1], 'YYYYMMDD')} </span>
                    </div>
                    <div> ${one.description} </div>
                </div>
            `)
        })

        // INDEXES & SIDE CODE
        const regex = new RegExp(ghomLetters.join('|'),'gi')
        const indexCount = Math.ceil($(window).height() / ($(window).width() * (landscape ? 0.015 : 0.05)))
        const indexes = $('.indexes')
        const sideCodeElement = $('.side-code')
        for(var i=0; i<indexCount; i++){
            indexes.append('<li style="top:' + (i * (landscape ? 1.5 : 5)) + 'vw;">' + (i + 1) + '</li>')
            if(landscape && i < sideCode.length){
                sideCodeElement.append(`
                    <li style="top:${ i * (landscape ? 1.5 : 5) }vw;">
                        <pre>${sideCode[i].replace(regex, m => {
                            return `<span class="ghom-letter-${m.toLowerCase()}">${m}</span>`
                        })}</pre>
                    </li>
                `)
            }
        }

        setTimeout(()=>{
            anime({
                targets: '.indexes, .indexes > li',
                left: 0,
                delay: anime.stagger(10)
            });
            if(landscape){
                anime({
                    targets : '.side-code > li',
                    left: '2vw',
                    delay: anime.stagger(50)
                })
                setInterval(()=>{
                    const letter = ghomLetters[Math.floor(Math.random()*ghomLetters.length)]
                    $(`.ghom-letter-${letter}`).toggleClass('highlight')
                },100)
            }
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