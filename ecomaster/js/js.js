window.onload = function () {
    var imgArr = document.querySelectorAll('.my__img');
    var modalWindow = document.querySelector('#my__modal');
    var modalImg = document.querySelector('#img01');
    var closeBtn = document.querySelector('#close');
    var modalBlock = document.querySelector('.modal__block');

    for (i = 0; i < imgArr.length; i++) {
        imgArr[i].addEventListener('click', function () {
            openImg(this);
        });
    }

    function openImg(pic) {
        modalWindow.style.display = 'block';
        modalBlock.style.transform = 'translateY(0%)';
        modalImg.src = pic.src;
        modalImg.alt = pic.alt;
        caption.innerHTML = modalImg.alt;
    }

    function close() {
        modalWindow.style.display = 'none';
    }
    closeBtn.addEventListener('click', close);
};