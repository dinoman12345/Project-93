function addUser(){
    x=document.getElementById("user_name").value;
    localStorage.setItem("username",x);
    window.location="kwitter_room.html";
}