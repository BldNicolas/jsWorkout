const revealPwd = document.getElementById("revealPwd")
const pwdField = document.getElementById("pwd")

revealPwd.addEventListener("mousedown", (event) => 
    {
        pwdField.type = "string"
    }
)
revealPwd.addEventListener("mouseup", (event) => 
    {
        pwdField.type = "password"
    }
)