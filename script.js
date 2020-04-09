
let userData = document.userData
//firstName 유효성 검사
function formValidFirstName(){
    let firstName = userData.firstName;
    let getFirstName = document.querySelector('#getFirstName');
    console.log(firstName.value);
    let newSpan = document.createElement('span');
    if(firstName.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
        newSpan.className = 'successResult';
        getFirstName.appendChild(newSpan);
    }else{
        let newErrorSpan = document.createElement('span');
        newErrorSpan.innerHTML = 'please give us a vaild name';
        newSpan.innerHTML = '&#x2717;'; //X
        newErrorSpan.className = "failedResult";
        newSpan.className = "failedResult";
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
    
    if(lastName.value.length !== 0){
        newSpan.innerHTML = '&#x2713;'  //V
        newSpan.className = 'successResult';
        getLastName.appendChild(newSpan);
    }else{
        let newErrorSpan = document.createElement('span');
        newErrorSpan.innerHTML = 'please give us a vaild name';
        newSpan.innerHTML = '&#x2717;'; //X
        newErrorSpan.className = "failedResult";
        newSpan.className = "failedResult";
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
    let newSpan2 = document.createElement('span');
    if(phoneNum.value.length !== 0){
        if(phoneNum.value === altPhoneNum.value){
            newSpan.innerHTML = '&#x2713;'  //V
            newSpan2.innerHTML = '&#x2713;'  //V
            newSpan.className = 'successResult';
            newSpan2.className = "successResult";
            getPhoneNum.appendChild(newSpan);
            getAltPhoneNum.appendChild(newSpan2);
        }else{
            let newErrorSpan = document.createElement('span');
            newErrorSpan.innerHTML = 'Those phone numbers don\'t match. Please check and try again';
            newErrorSpan.className = "failedResult";
            newSpan.className = "failedResult";
            getAltPhoneNum.appendChild(newSpan);
            getAltPhoneNum.appendChild(newErrorSpan);
        }
    }else{
        let newErrorSpan = document.createElement('span');
        newSpan2.innerHTML = '&#x2717;'; //X
        newErrorSpan.innerHTML = 'please give us a vaild phone number';
        newErrorSpan.className = "failedResult";
        newSpan.className = "failedResult";
        newSpan2.className = "failedResult";
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
        newSpan.className = 'successResult';
        getEmailAdd.appendChild(newSpan);
    }else{
        let newErrorSpan = document.createElement('span');
        newErrorSpan.innerHTML = 'please give us a vaild email address';
        newErrorSpan.className = "failedResult";
        newSpan.className = "failedResult";
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


