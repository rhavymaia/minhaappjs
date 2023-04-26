// document.querySelectorAll();
// document.getElementsByTagName();
// document.geteElementsByClassName();
// document.getElementById();
// document.getElementsByName()


let button = document.getElementById('adicionar');

const handleClick = (event) => {
  let elementos = document.querySelectorAll('.amarelo');
  for (let elemento of elementos){
    elemento.classList.add("borda");
  }
}
button.onclick = handleClick;
button.addEventListener('onclick', handleClick);

