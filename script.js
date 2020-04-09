
let userData = document.userData

function formValidFirstName(){
    let firstName = userData.firstName;
    let getFirstName = document.querySelector('#getFirstName');
    console.log(firstName.value);
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X
    if(firstName.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
    }
    getFirstName.appendChild(newSpan);
}
function formValidLastName(){
    let lastName = userData.lastName;
    let getLastName = document.querySelector('#getLastName');
    console.log(lastName.value);
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X
    if(lastName.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
    }
    getLastName.appendChild(newSpan);
}
function formValidPhoneNum(){
    let phoneNum = userData.phoneNum;
    let altPhoneNum = userData.altrPhoneNum;
    let getPhoneNum = document.querySelector('#getPhoneNum');
    let getAltPhoneNum = document.querySelector('#getAltPhoneNum');
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X

    if(phoneNum.value === altPhoneNum.value){
        newSpan.innerHTML = '&#x2713;'  //V
    }
    getPhoneNum.appendChild(newSpan);
    getAltPhoneNum.appendChild(newSpan);
}
function formValidEmail(){
    let emailAdd = userData.emailAdd;
    let getEmailAdd = document.querySelector('#getEmailAdd');
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X
    if(emailAdd.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
    }
    getEmailAdd.appendChild(newSpan);
}

//유효성 검사
function formValidation(){
    formValidFirstName();
    formValidLastName();
    formValidPhoneNum();
    formValidEmail();
}

//데이터 전송
function submitData(){
    formValidation();
}


let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',submitData);


