const datucha = document.getElementById('brother_div1');
const brotherBox = document.querySelectorAll('.brotherBox');

const deleteOtherPics = (clickedElement) => {
  for(let i=0; i < clickedElement.length; i++){
    clickedElement[i].addEventListener('click', ()=> {
      for(let d = 0; d < clickedElement.length; d++){
        if(d !== i){
          clickedElement[d].style.display = 'none';
        }
      }
      // clickedElement[i].style.display = 'none');
      console.log('zaza')
    });
  }
}

deleteOtherPics(brotherBox);