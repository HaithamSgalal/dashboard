function activelink() {

    $('.navigation li').removeClass('hovered');
    this.classList.add('hovered');
}

$('.navigation li').on('click', activelink);


/** ========================== Navigation ====================== */

function navControl() {

    $('.navigation').toggleClass('active');
    $('.main').toggleClass('active');
}

$('.toggle').on('click', navControl);




