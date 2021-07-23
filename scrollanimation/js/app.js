const boxes = document.querySelectorAll('.box');
// console.log(boxes);

function checkboxes(){
     const innerheight = window.innerHeight / 5 * 4;
     // console.log(innerheight);

     boxes.forEach(box => {
          const boxtop = box.getBoundingClientRect().top;

          if(boxtop < innerheight){
               box.classList.add('show');
          }else{
               box.classList.remove('show');
          }
     });
}

checkboxes();

window.addEventListener('scroll', checkboxes);