function hello() {
  console.log('hello');
  console.log('-------------------');
}
hello();



function changeButton() {
  document.getElementsById('button').color = blue;
}



function showText(text1,text2) {
  document.write('showtext ' + text1+''+text2+'<br>');
}


showText('willy','hello');

  document.write('------------------------------<br>');

function showmsg(msg) {
  return 'return' + msg;
}

var msg = showText(123,456);
document.write(msg);


showmsg('willy');
