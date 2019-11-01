
document.addEventListener( 'DOMContentLoaded', async (event) => {

    // Create typing instance and link it to HTML element.
    const typing = new Typing({
        time : 80,      // latence of typing
        id : 'typing'   // #id of output HTMLElement
    })

    const creator = new Typing({
        id : 'creator',
        time : 120
    })

    const download = new Typing({
        id : 'download',
        time : 100
    })

    creator.write('Creator : <a href="../../index.html">Ghom</a>')
    download.write('Download / CDN : <a href="./typing/typing.js">typing.js</a>')

    let id = 1

    async function action(name,value){
        document.getElementById('a'+id).className = 'current'
        await typing[name](value)
        document.getElementById('a'+id).className = ''
        id ++
    }

    // Pitch.
    await action('write','Hello everyone')
    await action('write','Hello World !')

    // Break Xms.
    await action('sleep',500)

    // The write method auto-escape HTML tags.
    await action('write','<span class="pink"> Typing.js </span> is simple to use, and...')

    // Break again and pitch again...
    await action('sleep',500)
    await action('write','<span class="pink"> Typing.js </span> is simple to edit 😉')
    await action('sleep',1000)
    await action('write','<span class="pink"> Typing.js </span> use Promises and he is completely independent.')
    await action('sleep',500)
    await action('write','Thank for using <span class="pink"> Typing.js </span> !')

})