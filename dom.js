
var h2 = document.getElementById('h2');
h2.innerHTML = "hellowilly";

function chgColor() {
  document.getElementById('button1').style.color = 'blue';

  var a = document.getElementById('h2');
  a.innerHTML = '<strong>change</strong>';
  alert(a.innerHTML)
}
