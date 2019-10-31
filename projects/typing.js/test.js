


document.addEventListener( 'DOMContentLoaded', async (event) => {

    // Create typing instance and link it to HTML element.
    const typing = new Typing({
        time : 80,      // latence of typing
        id : 'typing'   // #id of output HTMLElement
    })

    await typing.write('Try to typing !')

    document.getElementById('try').onclick = function(){
        typing.write(document.getElementById("input").value)
    }

})