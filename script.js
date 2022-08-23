//The function that works on the "compute interest" button//
  function compute()
  {
      var principal = document.getElementById("principal").value;
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = principal * years * rate/100;
      var year = new Date().getFullYear()+parseInt(years);
//an if else statement is added to validate the input of the principal amount//
      if (principal == undefined || principal<=0){
          alert("Enter a positive number");
          //below statement returns the user to the input field//
          document.getElementById("principal").focus();
          return 
        
      }
      //the else statement proceeds to display the output if the principal is validated//
      else{
          //the <mark> tag was added here to highlight the figures in rhe output//
        var newprincipal = "If you deposit <mark>" + principal+",</mark><br>"
        var newrate = "at an interest rate of <mark>" + rate+",</mark><br>"
        var newinterest = "you will receive an amount of <mark>" + interest+",</mark><br>"
        var newyear = "in the year <mark>" + year+",</mark><br>"
        
        document.getElementById("result").innerHTML= newprincipal+
        newrate
        +newinterest+
        newyear 

         




      }
      
     
      
  }
          
  
  
  function updateRate(){
      var rateval=document.getElementById("rate").value
      document.getElementById("rate_val").innerText=rateval;
  }
  
  
  
  