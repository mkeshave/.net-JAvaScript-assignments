
function checkName()
{
	  var name=document.getElementById("un").value;
	  
	 
	  for(i=0;i<name.length;i++)
		  {
		    var ch=name.charAt(i);
		    //alert(ch);
		    if( (ch <= 'Z' && ch >='A') || (ch <= 'z' && ch >='a'))
		    	{
		      	document.getElementById("ne").innerHTML="";
		    	}
		  
		    else
		    	{
		    	document.getElementById("ne").innerHTML="Invalid Character";
		    	}
		  }

}

function checkEmptyFields()
{
	  var name=document.getElementById("un").value;
	  var email=document.getElementById("eml").value;
	  
	  var namePresent=true;
	  var emailPresent=true;
	  
	  //alert(name+" "+email);
	  if(name==null || name.length<=0)
		  namePresent=false;
	  
	  if(email==null || email.length<=0)
		  emailPresent=false;
	  
	  if(!namePresent || !emailPresent)
		  {
		   document.getElementById("mem").innerHTML="* marked fields are mandatory";
		   return false;		  
		  }
	  
	  else
		  {
		   return true;
		  }
}

function formatPage(){
    window.document.bgColor="aliceblue";
    document.getElementById("heading").style.backgroundColor="blue";
    document.getElementById("heading").style.color="white";
    
}

function validateform(){
	
	 var name=document.formReg.firstname.value;
	 var date_Of_Birth=document.formReg.dob.value;
	 var mobile=document.formReg.mobile.value;
	 var email=document.formReg.email.value;
	 var grad=document.formReg.grad.value;
	 var training=document.formReg.training.value;


	 
        
        var htmlString="<html><head></head><body>";
         htmlString+="<h1>Preview your form</h1>";
         htmlString+="<p>Name : "+name+"</p>";
         htmlString+="<p>Date of Birth : "+date_Of_Birth+"</p>";
         htmlString+="<p>Mobile : "+mobile+"</p>";
         htmlString+="<p>Email : "+email+"</p>";
		 htmlString+="<p>Graduation Level : "+grad+"</p>";
		 htmlString+="<p>Highest Qualification : "+training+"</p>";
		 htmlString+="</body></html>";
		 alert("successfull");
        var newWindow=window.open("","Preview","width=500px,height=500px");
        newWindow.document.write(htmlString);
}

