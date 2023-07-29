let insertedPhone = document.querySelector('#insertedPhone');
let insertedSecondPhone = document.querySelector('#insertedSecondPhone');
let insertedThirdPhone = document.querySelector('#insertedThirdPhone');

function validation(phone) {
    let btn1 = document.getElementById("btnInVideoBlock");
    let btn2 = document.getElementById("clickBtnFormBlock");
    let btn3 = document.getElementById("btnSend3");
    if (phone.includes("_")){

        btn1.setAttribute("onclick","");
        btn1.setAttribute("href","#btnInVideoBlock");
        btn2.setAttribute("onclick","");
        btn2.setAttribute("href","#clickBtnFormBlock");
        btn3.setAttribute("onclick","");
        btn3.setAttribute("href","#btnSend3");

        insertedPhone.innerText = insertedPhone.innerText +" -> щось не так з номером :("
        insertedPhone.style.color = "red";

        insertedSecondPhone.innerText = insertedSecondPhone.innerText +" -> щось не так з номером :("
        insertedSecondPhone.style.color = "red";

        insertedThirdPhone.innerText = insertedThirdPhone.innerText +" -> щось не так з номером :("
        insertedThirdPhone.style.color = "red";
        return false;
    }else {
        btn1.setAttribute("onclick","sendEmailFor('phone','name')");
        btn1.setAttribute("href","thank-you.html");
        btn2.setAttribute("onclick","sendEmailFor('form-phone','form-name')");
        btn2.setAttribute("href","thank-you.html");
        btn3.setAttribute("onclick","sendEmailFor('telephone2','none')");
        btn3.setAttribute("href","thank-you.html");

        insertedThirdPhone.style.color = "green";
        insertedSecondPhone.style.color = "green";
        insertedPhone.style.color = "green";
    }
    return true
}

function insertPhone(thisis) {
    insertedPhone.innerText = thisis.previousElementSibling.firstChild.nextSibling.value
    validation(thisis.previousElementSibling.firstChild.nextSibling.value)
}
function insertSecondPhone(thisis) {
    insertedSecondPhone.innerText = thisis.previousElementSibling.firstChild.nextSibling.value
    validation(thisis.previousElementSibling.firstChild.nextSibling.value)
}
function insertThirdPhone(thisis) {
    insertedThirdPhone.innerText = document.querySelector('#telephone2').value
    validation(document.querySelector('#telephone2').value)
}
$(document).ready(function () {
    $("#form-phone").inputmask({"mask": "+38 (099) 999-99-99"});
});
$(document).ready(function () {
    $("#phone").inputmask({"mask": "+38 (099) 999-99-99"});
});
$(document).ready(function () {
    $("#telephone2").inputmask({"mask": "+38 (099) 999-99-99"});
});
function clickMediumChildren(){
    $('#mediumBtn').trigger('click');
}
function clickBigChildren(){
    $('#bigBtn').trigger('click');
}
function clickSmallChildren(){
    $('#smallBtn').trigger('click');
}