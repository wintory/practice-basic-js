 var object = {
   fullname : 'willy',
   age : 22,
   array : ['a','b','c'],
   method : function(msg) {
     return '<br>return ' + msg
   }
 }

 document.write('<br>'+object.fullname+' '+object.array[1]+'<br>');

object.fullname = 'willy2'
document.write(object.fullname)
document.write(object.method('method')+'<br>')

document.write('------------------------------<br>');
for(var prop in object){
  document.write(prop + '<br>')
}
document.write('------------------------------<br>');
for(var prop in object){
  document.write(object[prop])
  console.log(object[prop]);
}
document.write('<br>------------------------------<br><br>');



var product = [
    {
      name : 'aaa',
      price : 50
    },{
      name : 'bbb',
      price : 80
    },{
      name : 'ccc',
      price : 120
    },{
      name : 'ddd',
      price : 200
    }
]


document.write(product[1]);
document.write(product[0].name);
document.write('<br>------------------------------<br><br>');

var total = 0;
for (var i = 0; i < 4; i++) {
  document.write(product[i].price+"<br>")
  var total = total+product[i].price;
  console.log(total);
}
