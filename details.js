const fullNameInput = document.getElementById("fullName");
        const emailInput = document.getElementById("email");
        const phoneNumberInput = document.getElementById("phoneNumber");
        const addressInput = document.getElementById("address");
        const genderInput = document.getElementById("gender");

        const summaryFullName = document.getElementById("summaryFullName");
        const summaryEmail = document.getElementById("summaryEmail");
        const summaryPhoneNumber = document.getElementById("summaryPhoneNumber");
        const summaryAddress = document.getElementById("summaryAddress");
        const summaryGender = document.getElementById("summaryGender");

        fullNameInput.addEventListener("input", updateSummary);
        emailInput.addEventListener("input", updateSummary);
        phoneNumberInput.addEventListener("input", updateSummary);
        addressInput.addEventListener("input", updateSummary);
        genderInput.addEventListener("input", updateSummary);

        function updateSummary() {
            summaryFullName.textContent = fullNameInput.value;
            summaryEmail.textContent = emailInput.value;
            summaryPhoneNumber.textContent = phoneNumberInput.value;
            summaryAddress.textContent = addressInput.value;
            summaryGender.textContent = genderInput.value;
        }

        window.addEventListener('load', function() {
            // Initialize the plugin
            const phoneNumber = document.getElementById('phoneNumber');
            const iti = window.intlTelInput(phoneNumber, {
              separateDialCode: true,
              utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js", // Link to the utils.js file
            });
        
            // Set the default country (Optional)
            iti.setCountry("us");
          });

          continueButton.addEventListener("click", function() {
           window.location.href = "payment.html"; 

            


          var full_name = document.getElementById("fullName").value;
          // Store the full name in local storage
          localStorage.setItem("FullName", JSON.stringify(full_name));

          
          var email = document.getElementById("email").value;
          // Store the email in local storage
          localStorage.setItem("Email", JSON.stringify(email));

          phone_number=parseInt(document.getElementById("phoneNumber").value);
          localStorage.setItem("PhoneNumber", JSON.stringify(phone_number));

          var address = document.getElementById("address").value;
          //store the address in local storage
          localStorage.setItem("Address", JSON.stringify(address));

          var gen = document.getElementById("gender").value;
          //store the gender in local storage
          localStorage.setItem("Gender", JSON.stringify(gen))

          });




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
            
            var total = localStorage.getItem("total-paypal");
            document.getElementById("ticketCost").innerHTML=total;
           } );
