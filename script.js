window.onload = function(){
  document.getElementById('results').focus();
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        execute();
    }
    if (e.keyCode === 8) {  //checks whether the pressed key is "Delete"
      console.log("yes");
      setTimeout(function () {
        document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 36) + 'px';
      }, 1);
    }

});

function execute(){

  var input = document.getElementById("results").value;

  console.log(input);

  setTimeout(function () {
    document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 36) + 'px';
  }, 1);

  document.getElementById("results").value = math.eval(input);

}

function buttonInput(x){

  if(isNaN(x)){

  } else {
    symbolInput();
  }

  console.log(x);

  var caret_start = document.getElementById("results").selectionStart
  var caret_end = document.getElementById("results").selectionEnd

  var current = document.getElementById("results").value;

  var result_start = current.slice(0, caret_start);
  var result_end = current.slice(caret_end, current.length) ;

  console.log(result_start);
  console.log(result_end);
  console.log(current.length);

  console.log(((document.getElementById("results").value.length + 1) * 36) + 'px');
  document.getElementById("results").style.width = ((document.getElementById("results").value.length + 1) * 36) + 'px';
  document.getElementById("results").value = result_start + x + result_end;
}

function symbolInput(){
  var caret_start = document.getElementById("results").selectionStart;
  var caret_end = document.getElementById("results").selectionEnd;
  console.log(caret_start);
  setTimeout(function () {
    document.getElementById('results').focus();document.getElementById('results').setSelectionRange(caret_start + 1,caret_end + 1);
  }, 1);
}
