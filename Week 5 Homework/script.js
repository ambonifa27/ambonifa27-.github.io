let isOpen = true;

document.getElementById("menu").addEventListener("click", showHide)

function showHide(){
  let showHideSideBar = document.getElementsByClassName('navStyle')[0];
  let content =  document.getElementsByClassName('container-content')[0];

  if (isOpen) {
    showHideSideBar.style.display = 'none';
      if(window.innerWidth <=1000){
        content.style.position= "absolute";
        content.style.left = "0px";
        content.style.width = "100%";
        isOpen = false;
      }
      else{
        content.style.position= "absolute";
        content.style.left = "250px";
        content.style.width = "calc(100%-250px)";
        isOpen = false;
      }
        
}
else{
  showHideSideBar.style.display = "block";
  if(window.innerWidth <= 1000){
  content.style.position= "absolute";
  content.style.left = "0px"
  content.style.width = "100%";
  isOpen = true;
  }

  content.style.position= "absolute";
  content.style.left = "450px"
  content.style.width = "calc(100%-450px)";
  isOpen = true;
}
}