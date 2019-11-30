let links = document.querySelectorAll("a[scroll]")
links.forEach(res => {
    let target = res.getAttribute('href')
    res.addEventListener("click", function(e) {
        document.querySelector(target)
        .scrollIntoView({
            behavior: 'smooth'
        })
        e.preventDefault()
    })
})