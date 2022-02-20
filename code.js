function TCH(){
    var xA = document.getElementById("xA").value;
    var yA = document.getElementById("yA").value;
    var zA = document.getElementById("zA").value;
    var xB = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;
    var zB = document.getElementById("zB").value;
    var xAns = yA*zB-yB*zA;
    var yAns = zA*xB-zB*xA;
    var zAns = xA*yB-xB*yA;
    document.getElementById("printAns").innerHTML = "Tích có hướng: " +"<font color = \"red\">"+xAns+", "+yAns+", "+zAns;
}
function TVH(){
    var xA = document.getElementById("xA").value;
    var yA = document.getElementById("yA").value;
    var zA = document.getElementById("zA").value;
    var xB = document.getElementById("xB").value;
    var yB = document.getElementById("yB").value;
    var zB = document.getElementById("zB").value;
    var Ans = xA*xB+yA*yB+zA*zB
    document.getElementById("printAns").innerHTML = "Tích vô hướng: " +"<font color = \"red\">"+Ans;
}