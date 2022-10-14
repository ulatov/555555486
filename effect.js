"use strict";

(()=>{
    
    let currentElement = undefined

    document.body.addEventListener('touchmove',function(e){
        var myLocation = e.changedTouches[0]
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY)

        if (realTarget == undefined || !realTarget.classList.contains("interactelement")) {
            if (currentElement !== undefined) {
                currentElement.classList.remove('thebigone')
            }
            currentElement = undefined
            return
        }
        
        if (currentElement == realTarget) {
        } else {
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
    
})()
