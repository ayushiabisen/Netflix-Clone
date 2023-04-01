// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var closeBtn=document.getElementsByClassName('closeBtn')[0];

myBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);

function openModal(){
  modal.style.display='block';
}
function closeModal(){
  modal.style.display='none';
}
function outsideClick(e){
  if(e.target == modal){
    modal.style.display='none';
  }
}
