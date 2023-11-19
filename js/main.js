
var ul = document.querySelector('.navbar-container ul');
var menuBtn = document.querySelector('.btn-menu i');

/*
* Se o elemento <ul> conter a classe CSS '.open'
* remova esta classe senão adicione-a
*/

function menuShow() {

    if(ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }

}