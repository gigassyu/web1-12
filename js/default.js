for(var i = 1; i < 101; i++){ 
var li = document.createElement('li');
li.textContent=i;
if(i%15 == 0){
 li.textContent='FizzBuzz';
}
 else if(i%5 == 0){
  li.textContent='Buzz';
 }
  else if(i%3 == 0){
  li.textContent='Fizz';
 }
 
  
  document.getElementById('list').appendChild(li);
  
  
 }

 
