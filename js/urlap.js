function regForm ()
{
    //ha a var nélkül hozom létre a váloztót, akkor az globális lesz
    //var form=document.getElementsByTagName("input");
    form=document.getElementsByTagName("input");
    return form;
    //ez csak a betöltés után használni!!! body onload a htmlben
 }
function userCheck()
{
    var userName=document.getElementById("username").value;
    /*miután megvan az értéke a felhasználónévnek, eltávolítom
    whitespace karaktereket-->.trim()*/
    userName=userName.trim();
    document.getElementById('userNameError').innerHTML="";
    //otthon kipróbálni ha a trim mögé teszem a getelementet
    console.log("a felhasználónév karaktereinek száma: "+userName.length);
    //alert(typeof(userName));
    if(userName.length>7 && userName.length<26)
    {
       if (isFinite(userName[0]))
       {
         document.getElementById("userNameError").innerHTML=
                 "Nem kezdődhet számmal";
       }       
    }
    else
       {
           document.getElementById('userNameError').innerHTML=
                   "8 és 25 karakter között legyen";
       }
}
function userCheck2(urlap)
{
    console.log(urlap[0].value);
    //alert(urlap[0].value);
}
