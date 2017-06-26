for(var i = 1; i < 100; i++){ 
var li = document.createElement('li');
li.textContent=i;
if(i%15 == 0){
 li.textContent='FizzBuzz';
}
 eise if(i%5 == 0){
  li.textContent='Buzz';
 }
  eise if(i%3 == 0){
  li.textContent='Fizz';
 }
 else{
  li.textContent=i
 }
  
  document.getElementByid('list').appendChild(li);
  
  
 };

 
