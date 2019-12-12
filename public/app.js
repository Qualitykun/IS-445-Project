const dbcollection = firebase.firestore().collection('contacts')
const conlist = document.getElementById('listcon')
const returnmsg = document.getElementById('message')
const button = document.getElementById('submit')

button.addEventListener('click', submit)
conlist.addEventListener('click', handleClick)


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
                createcontact(name, email, phone);
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

function createcontact(name, email, phone) {
    let newsublist = document.createElement('ul')
    let newlistname = document.createElement('li');
    let newlistemail = document.createElement('li');
    let newlistphone= document.createElement('li');
    let listname = document.createTextNode(name);
    let listemail = document.createTextNode(email);
    let listphone = document.createTextNode(phone);
    let listclose = document.createElement('li');
    newlistname.appendChild(listname);
    newlistemail.appendChild(listemail);
    newlistphone.appendChild(listphone);
    const span = document.createElement('SPAN')
    const txt = document.createTextNode('Delete')
    span.className = 'close';
    span.appendChild(txt);
    listclose.appendChild(span);
    newsublist.appendChild(newlistname);
    newsublist.appendChild(newlistemail);
    newsublist.appendChild(newlistphone);
    newsublist.appendChild(listclose);
    listcon.appendChild(newsublist);

function handleClick(event) {
    const target = event.target;
    if (target.tagname==='span') {
        const item = target.parentelement
        while (item.firstchild) {
            item.removechild(item.firstchild); 
        }
    }
  }
}

    /*
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
    conlist.innerHTML = ''
    const data = doc.data();
 
})
*/