document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        execute();
    }
});

function evil(fn) {
  return new Function('return ' + fn)();
}

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