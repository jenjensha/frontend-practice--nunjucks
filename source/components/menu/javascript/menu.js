// export function OpenMenuButton(element) {
//     console.log(element);
//     console.log('Menu() constructor');

//     element.addEventListener('click', handleClick);

//     function handleClick() {
//         console.log('Clicked menu button');
//         var overlay = document.getElementById('menu-overlay');

//         // overlay.style.display = "block";
//         overlay.classList.add('Overlay-open');
//         console.log(overlay);
//     }
// }

// export function CloseMenuButton(element) {
//     element.addEventListener('click', handleClick);

//     function handleClick() {
//         console.log('close menu');

//         var overlay = document.getElementById('menu-overlay');

//         overlay.classList.remove('Overlay-open');
//         console.log(overlay);
//     }
// }
function Menu(element) {
    console.log(element);

    var openButton = element.querySelector('[js-open-menu-button]');

    openButton.addEventListener('click', handleClickOpenButton);

    function handleClickOpenButton() {
        var overlay = document.querySelector('[js-menu-overlay]');
        overlay.classList.add('Overlay-open');
        console.log('click to open');
    }

    var closeButton = element.querySelector('[js-close-menu-button]');

    closeButton.addEventListener('click', handleCloseButton);
    function handleCloseButton() {
        var overlay = document.querySelector('[js-menu-overlay]');
        overlay.classList.remove('Overlay-open');
        console.log('click to close');
    }
}

export default Menu;
