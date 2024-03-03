function validation () {
    if (document.Formfill.fName.value == "")
    {
        document.getElementById("result").innerHTML="Enter First Name*";
        return false ;
    }

    else if (document.Formfill.fName.value.length<6)
    {
        document.getElementById("result").innerHTML="Atleas 6 leter";
        return false ;
    }

    else if (document.Formfill.sName.value == "")
    {
        document.getElementById("result").innerHTML="Enter Last Name*";
        return false ;
    }

    else if (document.Formfill.sName.value.length<6)
    {
        document.getElementById("result").innerHTML="Atleas 6 leter";
        return false ;
    }

    else if (document.Formfill.email.value == "" )
    {
        document.getElementById("result").innerHTML="Enter Your Email*";
        return false ;
    }

    else if (document.Formfill.password.value == "" )
    {
        document.getElementById("result").innerHTML="Enter Your Password*";
        return false ;
    }
    else if (document.Formfill.password.value.length<6)
    {
        document.getElementById("result").innerHTML="password must be 6 digits";
        return false ;
    }

    else if (document.Formfill.Cpassword.value == "" )
    {
        document.getElementById("result").innerHTML="Enter Your Confirm Password*";
        return false ;
    }



    else if (document.Formfill.password.value!== document.Formfill.Cpassword.value )
    {
        document.getElementById("result").innerHTML="Password does'n matched";
        return false ;
    }

    else if (document.Formfill.password.value == document.Formfill.Cpassword.value )
    {
       popup.classList.add("open-slide")
       return false;
    }

}
var popup=document.getElementById("popup");


