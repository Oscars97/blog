'use strict'
document.querySelector('#btn-contact').addEventListener('click', contactAppears);

let btnSend = document.querySelector("#btnSend");
btnSend.addEventListener('click', contact)



function contactAppears(){
    var contact = document.getElementById("contact");
    contact.style.display= "block";
};

function contact(){
    let fullName = document.querySelector('#fullName').value;
    let email = document.querySelector('#email').value;
    let companyName = document.querySelector("#company").value;
    let number = document.querySelector("#phoneNumber").value;

    if (fullName.length<10){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We are missing your full name, try again please',
          })
          addAnimation();
    }else if(email.length<10){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We are missing your email address!',
          })
    }else if(companyName.length<2){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We are missing the name or your company/ subject!',
          })
    }else if(isNaN(number)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We are missing your phone number',
          })
        }else{
        document.querySelector("#btnSend").setAttribute('type',"reset")
        Swal.fire('Good job!',
        "I'll be contacting you",
        'success');
    }
    
};
