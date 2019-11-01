


document.addEventListener( 'DOMContentLoaded', async (event) => {

    // Create typing instance and link it to HTML element.
    const typing = new Typing({
        time : 80,      // latence of typing
        id : 'typing'   // #id of output HTMLElement
    })

    await typing.write('Try to typing !')

    document.getElementById('input').addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        if(event.keyCode === 13){
            typing.write(document.getElementById("input").value)
        }
    })
})