const toggleClass = (selector, className) => {
    let el = document.querySelector(selector);
    el.className = (el.className === className ? '' : className);
}

const init = () => {
    /// Mobile menu
    let menuButton = document.querySelector('.menu-button')
    menuButton.onclick = () => toggleClass('header','open');

    /// Scroll anchors
    let navlinks = document.querySelectorAll('nav > ul > li > a');
    navlinks.forEach(link => {
        let header = document.querySelector('header');
        link.onclick = (e) => {
            e.preventDefault();
            let target = document.querySelector(link.hash);
            let offset = target.offsetTop;
            if (header.className === 'open') toggleClass('header', 'open');
            window.scrollTo({
                top: offset - header.clientHeight - 20,
                behavior: "smooth"
            });
            return false;
        }

    });
}
document.addEventListener("DOMContentLoaded", function (event) {
    init();
});
