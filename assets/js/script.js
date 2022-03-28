window.onscroll=function(){
  let pos_y=Math.floor(document.getElementsByClassName('content')[0].getBoundingClientRect().y);
  if(pos_y<=-50){
    document.getElementsByClassName('content')[0].classList.add('col-lg-12');
    document.getElementsByClassName('content')[0].classList.remove('col-lg-8');
    document.getElementsByClassName('header')[0].classList.add('col-lg-12');
    document.getElementsByClassName('header')[0].classList.remove('col-lg-3');
    document.getElementsByClassName('menu')[0].classList.add('side-pos');
  }
  else{
    document.getElementsByClassName('content')[0].classList.remove('col-lg-12');
    document.getElementsByClassName('content')[0].classList.add('col-lg-8');
    document.getElementsByClassName('header')[0].classList.remove('col-lg-12');
    document.getElementsByClassName('header')[0].classList.add('col-lg-3');
    document.getElementsByClassName('menu')[0].classList.remove('side-pos');
  }
}
