function submit(){
    let name =  document.getElementById("name")
    let phone = document.getElementById("phone")
    let event = document.getElementById("event")
    
    console.log(name.value)
    console.log(phone.value)
    console.log(event.value)

    let message = `Name: ${name.value}
    Phone Number: ${phone.value}
    Event: ${event.value}`

    if(name.value||phone.value||event.value){

        window.open(`mailto:tsahu5138@gmail.com?subject=Event&body=${message}`)
        alert("Form Submitted")
    }else{
        
        alert("Please Fill the Form")
    }

}
