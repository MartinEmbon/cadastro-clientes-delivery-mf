
let adminLogin = document.getElementById("adminLogin")
let adminForm = document.getElementById("adminForm")
let adminPwd = document.getElementById("adminPwd")
let adminBtn = document.getElementById("adminBtn")



//adminBtn.disabled=true  
adminBtn.addEventListener("click",(e)=>{
    if (adminLogin.value!== "admin" || adminLogin.value==null || adminPwd.value!=="admin" || adminPwd.value==null){  
      e.preventDefault()
    }   
  })
