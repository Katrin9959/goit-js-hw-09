
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  const dataStartRef = document.querySelector('[data-start]');
  const dataStopRef = document.querySelector('[data-stop]');
  const bodyRef = document.querySelector('body');

  let timerId = 0;

  dataStartRef.addEventListener('click', onStart);
  dataStopRef.addEventListener('click', onStop);
  
  function onStart(){
     timerId = setInterval(getBgColor, 1000);
     dataStartRef.toggleAttribute('disabled');
  }

  function onStop(){
    clearInterval(timerId);
    dataStartRef.removeAttribute('disabled');
  }

  function getBgColor(){
    bodyRef.style.backgroundColor = getRandomHexColor();
  }