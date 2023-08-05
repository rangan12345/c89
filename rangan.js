p1_n="";
p2_n=""
function save(){
    p1_n=document.getElementById("player1_ka_name").value;
    p2_n=document.getElementById("player2_ka_name").value;
    localStorage.setItem("player1_ka_name".p1_n);
    localStorage.setItem("player2_ka_name",p2_n);
    window.location="rangan2.html";
}