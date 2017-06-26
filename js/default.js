var li = document.createElement('li');
li.textContent = 'アイテム';
document.getElementByid('list').appendChild(li);
for(var i = 1; i < 10; i++){
var li = document.createElement('li');
li.textContent = i +'回目';
document.getElementByid('list').appendChild(li);
document.getElementByid('form').onsubmit = function(){
 window.alert('押されました');
 };
 
