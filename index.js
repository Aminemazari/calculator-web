let  result = localStorage.getItem('result');
if (!result) {
    result='';
} ;
display();
function calculator (value){
    result += value ; 
    localStorage.setItem('result', result);
 console.log(Number(result));
    display();
}; 
function display(){
  document.querySelector('.input').innerHTML=result ; 
}
function reset(){
    localStorage.removeItem('result');
    document.querySelector(".input").innerHTML="";
    result='';
    
}
