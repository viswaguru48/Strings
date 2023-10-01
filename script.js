let len = document.getElementById("lenbtn").onclick = function () {
    len = document.getElementById("length").value;
    document.getElementById("strlen").innerHTML = len.length;
}

let cut = document.getElementById("valuebtn1").onclick = function () {
    cut = document.getElementById("slice").value;
    value1 = document.getElementById("slice1").value;
    value2 = document.getElementById("slice2").value;
    
    if(value2 == ""){
        document.getElementById("strslice").innerHTML = cut.slice(value1);
    }else{
        document.getElementById("strslice").innerHTML = cut.slice(value1, value2);
    }
}

let sub = document.getElementById("valuebtn2").onclick = function () {
    sub = document.getElementById("substring").value;
    value1 = document.getElementById("subs1").value;
    value2 = document.getElementById("subs2").value;
    
    if(value2 == ""){
        document.getElementById("strsub").innerHTML = sub.substring(value1);
    }else{
        document.getElementById("strsub").innerHTML = sub.substring(value1, value2);
    }
}

let ss = document.getElementById("valuebtn3").onclick = function(){
    ss = document.getElementById("substr").value;
    value1 = document.getElementById("ss1").value;
    value2 = document.getElementById("ss2").value;

    if(value2 == ""){
        document.getElementById("substr").innerHTML = sub.substring(value1);
    }else{
        document.getElementById("substr").innerHTML = sub.substring(value1, value2);
    }
}

let change = document.getElementById('valuebtn4').onclick = function(){
    change = document.getElementById('replace').value;
    tochange = document.getElementById("toreplace").value;
    revalue = document.getElementById("revalue").value;
    document.getElementById("strreplace").innerHTML = change.replace(tochange,revalue);
}

let changeAll = document.getElementById('valuebtn5').onclick = function(){
    changeAll = document.getElementById('replaceAll').value;
    tochange = document.getElementById("toreplaceAll").value;
    revalue = document.getElementById("revalueAll").value;
    document.getElementById("strreplaceAll").innerHTML = changeAll.replaceAll(tochange,revalue);
}

let upperCase = document.getElementById('valuebtn6').onclick = function(){
    upperCase = document.getElementById('uppercase').value;
    document.getElementById("strupper").innerHTML = upperCase.toUpperCase();
}

let lowerCase = document.getElementById('valuebtn7').onclick = function(){
    lowerCase = document.getElementById('lowercase').value;
    document.getElementById("strlower").innerHTML = lowerCase.toLowerCase();
}

let plus = document.getElementById("valuebtn8").onclick = function(){
    plus = document.getElementById("concat").value;
    addvalue = document.getElementById("plus").value;
    document.getElementById("strconcat").innerHTML = plus.concat(" ",addvalue);
}

let short = document.getElementById("valuebtn9").onclick = function(){
    short = document.getElementById("trim").value;
    document.getElementById("strtrim").innerHTML = short.trim();
}

let TrimS = document.getElementById("valuebtn10").onclick = function(){
    TrimS = document.getElementById("trimStart").value;
    document.getElementById("strtrimS").innerHTML = TrimS.trimStart();
}

let TrimE = document.getElementById("valuebtn11").onclick = function(){
    TrimE = document.getElementById("trimEnd").value;
    document.getElementById("strtrimE").innerHTML = TrimE.trimEnd();
}

let padS = document.getElementById("valuebtn12").onclick = function(){
    padS = document.getElementById("padStart").value;
    value1 = document.getElementById("padlen1").value;
    value2 = document.getElementById("padS").value;
    document.getElementById("strPadS").innerHTML = padS.padStart(value2, value1);
}

let padE = document.getElementById("valuebtn13").onclick = function(){
    padE = document.getElementById("padEnd").value;
    value1 = document.getElementById("padlen2").value;
    value2 = document.getElementById("padE").value;
    document.getElementById("strPadE").innerHTML = padE.padEnd(value2, value1);
}

let char = document.getElementById("valuebtn14").onclick = function(){
    char = document.getElementById("charAt").value;
    value = document.getElementById("char").value;
    document.getElementById("strchar").innerHTML = char.charAt(value);
}

let value = document.getElementById("valuebtn15").onclick = function(){
    value = document.getElementById("split").value;
    const comma = value.split(",");
    myArray = document.getElementById("spliting").value;
    document.getElementById("strsplit").innerHTML = comma[myArray];
}