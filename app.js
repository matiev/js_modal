let modal = document.createElement('div');
let img = document.createElement('img');
modal.classList.add('modal');
let curImg = '';
window.addEventListener('click', event => {
    if (event.target.closest('body > img')) {
        document.body.append(modal);
        curImg = event.target;
        img.src = curImg.src;
        modal.append(img);
    } else if (!event.target.closest('.modal > img')) {
        modal.parentNode.removeChild(modal);
        // document.body.removeChild(modal);
        // modal.remove();
    }
});