function clickCount(){
  var clickCount = document.getElementById("clickCount");

  function count(){
    if(clickCount.innerHTML == 0){
      counter = 0;
    }
    counter=counter+1;
    document.getElementById("clickCount").innerHTML =counter;
  }
  myBox.addEventListener("click", count, false);
}

