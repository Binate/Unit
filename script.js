window.onload = function(){
  document.getElementById('results').focus();
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        buttonEnter();
    }
    if (e.keyCode === 8) {  //checks whether the pressed key is "Delete"
      console.log("yes");
      setTimeout(function () {
        document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
      }, 1);
    }

});

function textScale(){
  var text_width = (document.getElementById("results").value.length) * 24;
  var div_width = document.getElementById("results").width
  if(text_width >= div_width){

  }
}

function buttonEnter(){

  symbolEnter();

  var input = document.getElementById("results").value;

  console.log(input);

  setTimeout(function () {
    document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
  }, 1);

  document.getElementById("results").value = math.eval(input);

}

function buttonInput(x){

  textScale();

  symbolInput();

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
  document.getElementById("results").value = result_start + x + result_end;
  document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
}

function buttonPercent(){

  textScale();

  var caret_start = document.getElementById("results").selectionStart
  var caret_end = document.getElementById("results").selectionEnd

  var current = document.getElementById("results").value;

  var start_of_percent = null;
  var end_of_percent = null;

  console.log(current.charAt(caret_start - 1));
  console.log(current.charAt(caret_end));

  if(isNaN(current.charAt(caret_start - 1))&&current.charAt(caret_start - 1) != "."||current.charAt(caret_start - 1) == "") {
    start_of_percent = caret_start;
  } else if(isNaN(current.charAt(caret_start - 2))&&current.charAt(caret_start - 2) != "."||current.charAt(caret_start - 2) == "") {
    start_of_percent = caret_start - 1;
  } else if(isNaN(current.charAt(caret_start - 3))&&current.charAt(caret_start - 3) != "."||current.charAt(caret_start - 3) == "") {
    start_of_percent = caret_start - 2;
  } else if(isNaN(current.charAt(caret_start - 4))&&current.charAt(caret_start - 4) != "."||current.charAt(caret_start - 4) == "") {
    start_of_percent = caret_start - 3;
  } else if(isNaN(current.charAt(caret_start - 5))&&current.charAt(caret_start - 5) != "."||current.charAt(caret_start - 5) == "") {
    start_of_percent = caret_start - 4;
  } else if(isNaN(current.charAt(caret_start - 6))&&current.charAt(caret_start - 6) != "."||current.charAt(caret_start - 6) == "") {
    start_of_percent = caret_start - 5;
  } else if(isNaN(current.charAt(caret_start - 7))&&current.charAt(caret_start - 7) != "."||current.charAt(caret_start - 7) == "") {
    start_of_percent = caret_start - 6;
  } else if(isNaN(current.charAt(caret_start - 8))&&current.charAt(caret_start - 8) != "."||current.charAt(caret_start - 8) == "") {
    start_of_percent = caret_start - 7;
  } else if(isNaN(current.charAt(caret_start - 9))&&current.charAt(caret_start - 9) != "."||current.charAt(caret_start - 9) == "") {
    start_of_percent = caret_start - 9;
  }

  if(isNaN(current.charAt(caret_end))){
    end_of_percent = caret_end;
  } else if(isNaN(current.charAt(caret_end + 1))&&current.charAt(caret_start + 1) != "."||current.charAt(caret_end + 1) == "") {
    end_of_percent = caret_end + 1;
  } else if(isNaN(current.charAt(caret_end + 2))&&current.charAt(caret_start + 2) != "."||current.charAt(caret_end + 2) == "") {
    end_of_percent = caret_end + 2;
  } else if(isNaN(current.charAt(caret_end + 3))&&current.charAt(caret_start + 3) != "."||current.charAt(caret_end + 3) == "") {
    end_of_percent = caret_end + 3;
  } else if(isNaN(current.charAt(caret_end + 4))&&current.charAt(caret_start + 4) != "."||current.charAt(caret_end + 4) == "") {
    end_of_percent = caret_end + 4;
  } else if(isNaN(current.charAt(caret_end + 5))&&current.charAt(caret_start + 5) != "."||current.charAt(caret_end + 5) == "") {
    end_of_percent = caret_end + 5;
  } else if(isNaN(current.charAt(caret_end + 6))&&current.charAt(caret_start + 6) != "."||current.charAt(caret_end + 6) == "") {
    end_of_percent = caret_end + 6;
  } else if(isNaN(current.charAt(caret_end + 7))&&current.charAt(caret_start + 7) != "."||current.charAt(caret_end + 7) == "") {
    end_of_percent = caret_end + 7;
  } else if(isNaN(current.charAt(caret_end + 8))&&current.charAt(caret_start + 8) != "."||current.charAt(caret_end + 8) == "") {
    end_of_percent = caret_end + 8;
  }

  console.log(start_of_percent);
  console.log(end_of_percent);



  var result_start = current.slice(0, start_of_percent);
  var result_end = current.slice(end_of_percent, current.length);
  var result = current.slice(start_of_percent, end_of_percent);

  computed_result = math.eval(result * .01)

  document.getElementById("results").value = result_start + computed_result + result_end;
  document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
}

function buttonDelete(){

  textScale();

  symbolDelete();

  var caret_start = document.getElementById("results").selectionStart - 1;
  var caret_end = document.getElementById("results").selectionEnd;

  var current = document.getElementById("results").value;

  var result_start = current.slice(0, caret_start);
  var result_end = current.slice(caret_end, current.length) ;

  console.log(result_start);
  console.log(result_end);
  console.log(current.length);

  document.getElementById("results").value = result_start + result_end;
  document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
}

function buttonClear(){

  textScale();

  symbolEnter();

  document.getElementById("results").value = null;
  document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
}

function symbolInput(){
  var caret_start = document.getElementById("results").selectionStart;
  var caret_end = document.getElementById("results").selectionEnd;
  setTimeout(function () {
    document.getElementById('results').focus();document.getElementById('results').setSelectionRange(caret_start + 1,caret_end + 1);
  }, 1);
}

function symbolDelete(){
  var caret_start = document.getElementById("results").selectionStart;
  var caret_end = document.getElementById("results").selectionEnd;
  setTimeout(function () {
    document.getElementById('results').focus();document.getElementById('results').setSelectionRange(caret_start - 1,caret_end - 1);
  }, 1);
}

function symbolEnter(){
  setTimeout(function () {
    document.getElementById('results').focus();document.getElementById('results').setSelectionRange(1000,1000);
  }, 1);
}
