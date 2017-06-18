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

  document.getElementById("results").value = math.eval(input);

}

function numberInput(x){

  console.log(x);

  var current = document.getElementById("results").value;

  console.log(((document.getElementById("results").value.length + 1) * 36) + 'px');

  document.getElementById("results").style.width = ((document.getElementById("results").value.length + 1) * 36) + 'px';

  document.getElementById("results").value = current + x;



}
