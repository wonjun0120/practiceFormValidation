
let userData = document.userData
//firstName 유효성 검사
function formValidFirstName(){
    let firstName = userData.firstName;
    let getFirstName = document.querySelector('#getFirstName');
    console.log(firstName.value);
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X
    if(firstName.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
        getFirstName.appendChild(newSpan);
    }else{
        let newErrorSpan = document.createElement('span');
        newErrorSpan.innerHTML = 'please give us a vaild name';
        getFirstName.appendChild(newSpan);
        getFirstName.appendChild(newErrorSpan);
    }
}
//lastName유효성 검사
function formValidLastName(){
    let lastName = userData.lastName;
    let getLastName = document.querySelector('#getLastName');
    console.log(lastName.value);
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X
    if(lastName.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
        getLastName.appendChild(newSpan);
    }else{
        let newErrorSpan = document.createElement('span');
        newErrorSpan.innerHTML = 'please give us a vaild name';
        getLastName.appendChild(newSpan);
        getLastName.appendChild(newErrorSpan);
    }
}
//전번 유효성 검사
function formValidPhoneNum(){
    let phoneNum = userData.phoneNum;
    let altPhoneNum = userData.altrPhoneNum;
    let getPhoneNum = document.querySelector('#getPhoneNum');
    let getAltPhoneNum = document.querySelector('#getAltPhoneNum');
    let newSpan = document.createElement('span');
    //console.log(typeof(getPhoneNum.value));
    newSpan.innerHTML = '&#x2717;'; //X
    if(phoneNum.value.length !== 0){
        if(phoneNum.value === altPhoneNum.value){
            newSpan.innerHTML = '&#x2713;'  //V
            getAltPhoneNum.appendChild(newSpan);
        }else{
            let newErrorSpan = document.createElement('span');
            newErrorSpan.innerHTML = 'Those phone numbers don\'t match. Please check and try again';
            getAltPhoneNum.appendChild(newSpan);
            getAltPhoneNum.appendChild(newErrorSpan);
        }
    }else{
        let newErrorSpan = document.createElement('span');
        let newSpan2 = document.createElement('span');
        newSpan2.innerHTML = '&#x2717;'; //X
        newErrorSpan.innerHTML = 'please give us a vaild phone number';
        getPhoneNum.appendChild(newSpan);
        getPhoneNum.appendChild(newErrorSpan);
        getAltPhoneNum.appendChild(newSpan2);
    }

}
//이메일 유효성 검사
function formValidEmail(){
    let emailAdd = userData.emailAdd;
    let getEmailAdd = document.querySelector('#getEmailAdd');
    let newSpan = document.createElement('span');
    newSpan.innerHTML = '&#x2717;'; //X
    if(emailAdd.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
        getEmailAdd.appendChild(newSpan);
    }else{
        let newErrorSpan = document.createElement('span');
        newErrorSpan.innerHTML = 'please give us a vaild email address';
        getEmailAdd.appendChild(newSpan);
        getEmailAdd.appendChild(newErrorSpan);
    }
   
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


