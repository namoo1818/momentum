const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click",resetUserInfo);


function resetUserInfo(){
    console.log("reset");
    localStorage.clear();
    location.reload();
}