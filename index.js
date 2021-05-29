document.getElementById("mybutton").addEventListener("click", res);
async function res(){
    // to assign the value entered by the user into variable name1
    let name1 = document.getElementById('cname').value;
    // to convert the value into upercase
    let name2 = name1.toUpperCase();
    const data=await fetch("https://api.exchangerate-api.com/v4/latest/" + name2);
    d= await data.json();
    console.log(d);
    // to assign the value entered by the user into variable name3
    let name3 = document.getElementById('cname1').value;
    // to convert the value into upercase
    let name4 = name3.toUpperCase();
    const data1=await fetch("https://api.exchangerate-api.com/v4/latest/" + name4);
    function myFunction() {
        var x = document.getElementById("cname1");
        x.value = x.value.toUpperCase();
      }
      document.getElementById("res").innerHTML=d.rates[name4];
}