var verify = false;
var myvar;
var Mmeal;

function menuTrigger(){
    verify = true;
}

function showTable(meal){
    var textChange1 = document.getElementById("tvname");
    var textChange2 = document.getElementById("theader");
    var imgChange = document.getElementById("tbg");
    
    var t1 = document.getElementById("Atable");
    if (verify == true){
        if (meal == "dessert"){
            imgChange.style.background = "url('/images/dessert1.jpg')";           
            textChange1.innerHTML = "DESSERT";
            textChange2.innerHTML = "DESSERT";
            t1.style.visibility="visible";
            t1.style.display="inline";
            t1.style.transition="all 2s ease-in-out";
            document.getElementById('dessert').style.display="none";
            document.getElementById('pasta').style.display="none";
            document.getElementById('rolls').style.display="none";
            document.getElementById('ramen').style.display="none";
        }
        else if (meal == "pasta"){
            imgChange.style.background = "url('/images/pasta1.jpg')";           
            textChange1.innerHTML = "PASTA";
            textChange2.innerHTML = "PASTA";
            t1.style.visibility="visible";
            t1.style.display="inline";
            t1.style.transition="all 2s ease-in-out";
            document.getElementById('dessert').style.display="none";
            document.getElementById('pasta').style.display="none";
            document.getElementById('rolls').style.display="none";
            document.getElementById('ramen').style.display="none";
        }
        else if (meal == "rolls"){
            imgChange.style.background = "url('/images/rolls1.jpg')";           
            textChange1.innerHTML = "ROLLS";
            textChange2.innerHTML = "ROLLS";
            t1.style.visibility="visible";
            t1.style.display="inline";
            t1.style.transition="all 2s ease-in-out";
            document.getElementById('dessert').style.display="none";
            document.getElementById('pasta').style.display="none";
            document.getElementById('rolls').style.display="none";
            document.getElementById('ramen').style.display="none";
        }
        else if (meal == "ramen"){
            imgChange.style.background = "url('/images/ramen1.jpg')";           
            textChange1.innerHTML = "RAMEN";
            textChange2.innerHTML = "RAMEN";
            t1.style.visibility="visible";
            t1.style.display="inline";
            t1.style.transition="all 2s ease-in-out";
            document.getElementById('dessert').style.display="none";
            document.getElementById('pasta').style.display="none";
            document.getElementById('rolls').style.display="none";
            document.getElementById('ramen').style.display="none";
        }
    }
}

function hideTable(){
    var t1 = document.getElementById("Atable");
    if (verify == true){
        t1.style.display = "none";
        t1.style.transition="all 2s ease-in-out";
        document.getElementById('dessert').style.display="inline";
        document.getElementById('pasta').style.display="inline";
        document.getElementById('rolls').style.display="inline";
        document.getElementById('ramen').style.display="inline";
    }
}