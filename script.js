let successMsg='Successfully submited';
let errorMsg='please fix the error';
let invalidMsg='invalid input, check again';



function showToast(msg){
    let toastBox=document.getElementById('toastBox');

    let toast=document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastBox.appendChild(toast);


}