"use strict";

(()=>{
    const m = document.querySelectorAll('div.messages')
    for (let elem of document.querySelectorAll('div.interactelement')) {
        /*
        elem.addEventListener('mouseenter',function(e){
            elem.classList.add('thebigone')
        })
        elem.addEventListener('mouseleave',function(e){
            elem.classList.remove('thebigone')
        })
        elem.addEventListener('touchstart',function(e){
            elem.classList.add('thebigone')
        })
        elem.addEventListener('touchend',function(e){
            elem.classList.remove('thebigone')
        })
        */
        /*
        elem.addEventListener('touchmove',function(e){
            console.log(e.target)
        })
        */
    }
    let currentElement = undefined

    document.body.addEventListener('touchmove',function(e){
        var myLocation = e.changedTouches[0]
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY)

        if (realTarget == undefined || !realTarget.classList.contains("interactelement")) {
            console.log('no target')
            if (currentElement !== undefined) {
                currentElement.classList.remove('thebigone')
            }
            currentElement = undefined
            return
        }
        
        if (currentElement == realTarget) {
            console.log('the same target')
        } else {
            console.log('to other target')
            if (currentElement !== undefined) {
                currentElement.classList.remove('thebigone')
            }
            currentElement = realTarget
            currentElement.classList.add('thebigone')
        }
    })

    document.body.addEventListener('touchend',function(e){
        if (currentElement !== undefined) {
            currentElement.classList.remove('thebigone')
        }
        currentElement = undefined
    })

    document.body.addEventListener('touchstart',function(e){
        var myLocation = e.changedTouches[0]
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY)
        if (!realTarget.classList.contains("interactelement")) {
            return
        }
        if (currentElement !== undefined) {
            currentElement.classList.remove('thebigone')
        }
        currentElement = realTarget
        currentElement.classList.add('thebigone')
    })
    /*
    document.body.addEventListener('mousemove',function(e){
        console.log(e.currentTarget)
    })
    document.body.addEventListener('touchmove',function(e){
        console.log(e)
    })
    console.log('hello')
    document.body.addEventListener('mouseenter',function(e){
        console.log('mouseenter')
    })
    document.body.addEventListener('mouseleave',function(e){
        console.log('mouseleave')
    })
    */
})()
