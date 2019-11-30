class pressKey {
    constructor(props) {
        this.press(props)
    }
    press(props) {
        let keys = Object.keys(props)
        let action = props[keys]
        document.addEventListener('keydown', (e) => {
            keys.forEach(key => {
                let ctrl = key.split(' ')
                if(ctrl[0].toLowerCase() == 'ctrl') {
                    if(e.key == ctrl[1] && e.ctrlKey) {
                        props[key](e)
                    }
                } else if(ctrl[0].toLowerCase() == 'shift') {
                    if(e.key == ctrl[1] && e.shiftKey) {
                        props[key](e)
                    }
                } else if(ctrl[0].toLowerCase() == 'alt') {
                    if(e.key == ctrl[1] && e.altKey) {
                        props[key](e)
                    }
                } else {
                    if(e.key == key) {
                        props[key](e)
                    }
                }
            })
        })
    }
}

new pressKey({
    'ctrl y': (e) => {
        console.log(e)
    },
    'b': () => {
        alert('b pressed')
    }
})