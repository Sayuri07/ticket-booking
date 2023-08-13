document.addEventListener("DOMContentLoaded", function() {
    var date = JSON.parse(localStorage.getItem("date"));
    document.getElementById("Date").innerHTML = date;
    

    var fore_adult = localStorage.getItem("fore_adult");
    document.getElementById("fAdult").innerHTML=fore_adult;
    
    
    var fore_child = localStorage.getItem("fore-child");
    document.getElementById("fChild").innerHTML=fore_child;
    

    var sl_adult = localStorage.getItem("sl-adult");
    document.getElementById("sAdult").
    innerHTML=sl_adult;
    

    var sl_child = localStorage.getItem("sl-child");
    document.getElementById("sChild").
    innerHTML=sl_child;
    

    var infant = localStorage.getItem("infant");
    document.getElementById("tinfant").
    innerHTML=infant;

    var duration = localStorage.getItem("duration");
            document.getElementById("Duration").innerHTML=duration;

            var time = localStorage.getItem("time");
            document.getElementById("Time").innerHTML=time;

            var full_name = JSON.parse(localStorage.getItem("FullName"));
            document.getElementById("summaryFullName").innerHTML=full_name;
          
            var email = JSON.parse(localStorage.getItem("Email"));
            document.getElementById("summaryEmail").innerHTML=email;

            var phone_number = JSON.parse(localStorage.getItem("PhoneNumber"));
            document.getElementById("summaryPhoneNumber").innerHTML=phone_number;

            var address = JSON.parse(localStorage.getItem("Address"));
            document.getElementById("summaryAddress").innerHTML=address;

           var gen = JSON.parse(localStorage.getItem("Gender"));
            document.getElementById("summaryGender").innerHTML = gen;
    
            var card_number = JSON.parse(localStorage.getItem("CardNumber"));
            document.getElementById("summaryCardNumber").innerHTML=card_number;

            var expire_date = JSON.parse(localStorage.getItem("ExpiryDate"));
            document.getElementById("summaryExpiryDate").innerHTML=expire_date;

            var cvv = JSON.parse(localStorage.getItem("CVV"));
            document.getElementById("summaryCVV").innerHTML=cvv;

            var name_oncard = JSON.parse(localStorage.getItem("NameOnCard"));
            document.getElementById("summaryNameOnCard").innerHTML=name_oncard;

            var totalam = JSON.parse(localStorage.getItem("total-paypal"));
           
  

  // Display the value on the web page
  document.getElementById("ticket").innerHTML = totalam;

  
  
   } );