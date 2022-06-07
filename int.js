function Result(){
    let elements = document.getElementsByTagName('input');
    var a= 0;
    for(let i=0;i<16;i++){   
    if(elements[i].name === elements[i].value){
        a++;
        elements[i].style.color = 'green';
}else{
    elements[i].style.color = 'red';
}
document.getElementById('mar').innerHTML = a + '/16';
document.getElementById('getmark').innerText = a;
document.getElementById('totalmark').innerText = 16;
elements[i].setAttribute("disabled","true");
document.getElementById('sig').style.display = 'block';
} 
}
function reset(){
    let elements = document.getElementsByTagName('input');
    for(let i=0;i<16;i++){
        elements[i].value="";
        elements[i].removeAttribute("disabled");
        elements[i].style.color = 'black';   
    }
    document.getElementById('sig').style.display = 'none';
    document.getElementById('mar').innerHTML =  ' ';
}
function ans(){
    let elements = document.getElementsByTagName('input');
    for(let i=0;i<16;i++){
        elements[i].value= elements[i].name ;
        elements[i].setAttribute("disabled","true");
        elements[i].style.color = 'black';
        document.getElementById('mar').innerHTML =  ' ';
    }
    
}