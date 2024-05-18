

function addContacts(){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;

    let members = localStorage.getItem("contacts");

    let contacts;
    
    if(members == null){
        contacts = [];
        localStorage.setItem("contacts",JSON.stringify(contacts));
    }
    else{
        contacts = JSON.parse(members);
    }

    console.log("contacts",contacts);

   contacts.push(
        {
             name: name,
             email: mail
        }
   );
    localStorage.setItem("contacts",JSON.stringify(contacts));
    showContacts();
}

function showContacts(){

    let members = localStorage.getItem("contacts");

    let contacts;

    if( members == null){
        contacts = [];
        localStorage.setItem("contacts",JSON.stringify(contacts));
    }
    else{
        contacts = JSON.parse(members);
    }

    let html = "";

    if(contacts.length > 0){
        contacts.forEach(element => {
            html +=  ` <div id="result"> <h3>
                    ${element.name} </h3>
            <p>
                    ${element.email}
                    </p>
            </div>`
        });

        document.querySelector("#result").innerHTML = html;
        
    }
    
    
   
} 

