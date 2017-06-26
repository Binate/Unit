var div_width = 230;

window.onload = function(){
  document.getElementById('results').focus();
}

document.addEventListener("keydown", function (e){
  setTimeout(function () {
    textScale();
  }, 10);

    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        buttonEnter();
    }
    if (e.keyCode === 8) {  //checks whether the pressed key is "Delete"
      setTimeout(function () {
        document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
      }, 1);
    }
});

function resizedResults(){

  textScale();

  console.log(div_width);
  console.log("resized");
}

function textScale(){

    var text_width = (document.getElementById("results").value.length) * 24;
    div_width = document.getElementById('title').offsetWidth - 20;
    var text_length = document.getElementById("results").value.length;
    var theoretical_width = div_width / text_length;
    var theoretical_height = theoretical_width * (5 / 3);

    console.log(text_width + "TXTW");
    console.log(div_width + "DW");
    console.log(text_length + "TL");
    console.log(theoretical_width + "TW");

    if(text_width > div_width){
      console.log(theoretical_height + "px 'Source Code Pro'");
      document.getElementById("results").style.font = theoretical_height + "px 'Source Code Pro'";
    } else {
      document.getElementById("results").style.font = "40px 'Source Code Pro'";
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

  if(current.length < 50){
    document.getElementById("results").value = result_start + x + result_end;
    document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';
  } else {
    console.log("textarea full");
  }

  textScale();

  symbolEnter();

}

function buttonPercent(){

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

  textScale();

}

function buttonDelete(){

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

  textScale();

}

function buttonClear(){

  symbolEnter();

  document.getElementById("results").value = null;
  document.getElementById("results").style.width = ((document.getElementById("results").value.length) * 24) + 'px';

  textScale();

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

function addExpressionsButtons(){

  removeExpressionsButtons();

  var newItem = document.createElement("div");       // Create a <li> node
  var textnode = document.createTextNode("Water");   // Create a text node
  newItem.setAttribute("id", "expressions");         // Set ID to expressions
  newItem.setAttribute("class", "row");              // Set class to row
  //newItem.innerHTML("<div class='button func' onclick='buttonInput(\"+\")'>+</div><div class='button func' onclick='buttonInput(\"-\")'>-</div><div class='button func' onclick='buttonInput(\"*\")'>*</div><div class='button func' onclick='buttonInput(\"/\")'>/</div>");

  var list = document.getElementById("container");   // Get the <ul> element to insert a new node
  list.insertBefore(newItem, list.childNodes[0]);    // Insert <li> before the first child of <ul>

  document.getElementById("expressions").innerHTML = "<div class='button func' onclick='buttonInput(\"(\")'>(</div><div class='button func' onclick='buttonInput(\")\")'>)</div><div class='button func' onclick='buttonInput(\"^\")'>^</div><div class='button func' onclick='buttonInput(\"sqrt(\")'>√</div>";

}

function removeExpressionsButtons() {
  if(document.getElementById("expressions") != null){
    var parent = document.getElementById("container");
    var child = document.getElementById("expressions");
    parent.removeChild(child);
  }
}
