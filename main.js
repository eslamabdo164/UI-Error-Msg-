var cont = document.querySelector('#mainContainer');
var btn = document.querySelector('.delItem');
function openPOP(){
    cont.style.transform = 'scale(1)';
    btn.style.display='none';
}
function closePOP(){
    cont.style.transform = 'scale(0)';
    btn.style.display='block';
}