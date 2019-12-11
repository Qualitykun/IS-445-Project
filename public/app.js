const dbcollection = firebase.firestore().collection('contacts')
const conlist = document.getElementById('listcon')
const returnmsg = document.getElementById('message')
const button = document.getElementById('submit')

button.addEventListener('click', submit)

function submit() {
    var form = document.getElementById('uinput')
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    usersubmit(name, email, phone);
    form.reset();
}

function usersubmit(name, email, phone) {
    if (name=='') {
        returnmsg.innerHTML="Name can not be blank";
        returnmsg.style.color= "red";
        document.getElementById('message').style.display= "block";
        console.log(returnmsg.innerHTML)
    } else{
        if (email.length>0 && email.includes('@')==true) {
            if (phone.length==10 && phone.charat(0)!=0 && phone.charat(0)!=1) {
                addcontact(name, email, phone);
                returnmsg.innerHTML="Contact added";
                returnmsg.style.color= "green";
                document.getElementById('message').style.display= "block";
                console.log(returnmsg.innerHTML)
            } else{
                returnmsg.innerHTML="Must be a real phone number not starting in 0 or 1";
                returnmsg.style.color= "red";
                document.getElementById('message').style.display= "block";
                console.log(returnmsg.innerHTML)
            }
        } else{
            returnmsg.innerHTML="Must be a real email";
            returnmsg.style.color= "red";
            document.getElementById('message').style.display= "block";
            console.log(returnmsg.innerHTML)
            }
        }
}

function addcontact(name, email, phone) {
    dbcollection
        .add({
            name: name,
            email: email,
            phone: phone,
        })
        .then(function(docRef) {
            console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
            console.error('Error adding document: ', error)
        })
}

dbcollection.onSnapshot( docs => {
    const data = doc.data();
    document.write(data.name)
})