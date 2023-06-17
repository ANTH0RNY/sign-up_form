document.querySelector('[type="submit"]').onclick=(e)=>{
    const pwd=document.querySelector('#input-3')
    const confpwd=document.querySelector('#input-6')
    if (pwd.value != confpwd.value) {
        // confpwd.setAttribute("isvalid", 'false')
        document.querySelector('#error').innerHTML="Should be matching with password"
        e.preventDefault()
        confpwd.style.border="2px red solid"
    }


}
