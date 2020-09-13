function showForm(formId)
{
    form1 = document.getElementById("f1");
    form2 = document.getElementById("f2")
    
    button1 = document.getElementById("b1");
    button2 = document.getElementById("b2");
    
    button3 = document.getElementById("b3");

    if(formId === 'f1') {
        form1.style.display = "block";
        form2.style.display = "none";
    }
    else {
        form2.style.display = "block";
        form1.style.display = "none";
    }

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "block";
}

function hideForm() {

    form1 = document.getElementById("f1");
    form2 = document.getElementById("f2")
    
    button1 = document.getElementById("b1");
    button2 = document.getElementById("b2");
    
    button3 = document.getElementById("b3");

    form1.style.display = "none";
    form2.style.display = "none";

    button1.style.display = "block";
    button2.style.display = "block";
    
    // button3.style.display = "none";
}