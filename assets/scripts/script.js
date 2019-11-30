function cta(that) {
    that.innerHTML = "otewe..."
    document.location = 'https://www.instagram.com/belajarngewebid'
}

$("#tblMenu").klik(function() {
    $(".menu").muncul()
    $(".atas,.container").pengaya("filter: blur(12px)")
})

$("#xMenu").klik(function() {
    $(".menu").hilang()
    $(".atas,.container").pengaya("filter: blur(0px)")
})

let isTodoOpened = 0
let toDoOpened
let screenWidth = document.body.offsetWidth

function tutupTodo() {
    let detailTodo = document.querySelectorAll('.detailTodo')
    detailTodo.forEach(res => {
        res.classList.remove('bagi-1')
        res.classList.add('bagi-4')

        let a = res.querySelector('.wrap > div')
        let ket = a.querySelector('.keterangan')
        ket.style.display = 'none'

        let ill = res.querySelector('.ilustrasi')
        ill.classList.remove('lebar-30')
        ill.classList.add('lebar-100')

        res.querySelector('.ilustrasi h3').style.display = 'block'
    })
}
function bukaTodo(that) {
    let a = that.querySelector('.wrap > div')
    that.classList.remove('bagi-4')
    that.classList.add('bagi-1')
    
    let ilustrasi = a.querySelector('.ilustrasi')
    let keterangan = a.querySelector('.keterangan')
    let h3 = a.querySelector('.ilustrasi h3')
    h3.style.display = 'none'

    ilustrasi.classList.remove('lebar-100')
    ilustrasi.classList.add('lebar-30')

    keterangan.style.display = "inline-block"
    keterangan.classList.add('lebar-70')
    
    isTodoOpened = 1
    let toScroll = that.getAttribute('id')
    toDoOpened = toScroll

    scrollKe('#'+toScroll)
}

function detailTodo(that) {
    if(screenWidth <= 480) {
        let a = that.querySelector('a')
        if(a) {
            let b = a.getAttribute('href')
            document.location = b
        }
    }
    tutupTodo()

    let toScroll = that.getAttribute('id')
    if(isTodoOpened != 1) {
        bukaTodo(that)
    }else {
        if(toDoOpened == toScroll) {
            tutupTodo()
            isTodoOpened = 0
            scrollKe("#whatYouCanDo")

            toDoOpened = ''
        }else {
            bukaTodo(that)
        }
    }
}