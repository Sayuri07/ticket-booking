const cardNumberInput = document.getElementById("cardNumber");
        const expiryDateInput = document.getElementById("expiryDate");
        const cvvInput = document.getElementById("cvv");
        const nameOnCardInput = document.getElementById("nameOnCard");

        const summaryCardNumber = document.getElementById("summaryCardNumber");
        const summaryExpiryDate = document.getElementById("summaryExpiryDate");
        const summaryCVV = document.getElementById("summaryCVV");
        const summaryNameOnCard = document.getElementById("summaryNameOnCard");

        cardNumberInput.addEventListener("input", updateSummary);
        expiryDateInput.addEventListener("input", updateSummary);
        cvvInput.addEventListener("input", updateSummary);
        nameOnCardInput.addEventListener("input", updateSummary);

        function updateSummary() {
            summaryCardNumber.textContent = cardNumberInput.value;
            summaryExpiryDate.textContent = expiryDateInput.value;
            summaryCVV.textContent = cvvInput.value;
            summaryNameOnCard.textContent = nameOnCardInput.value;
        }

        continueButton.addEventListener("click", function() {
            window.location.href = "confirmation.html";

          /*  const payment={
                card_number:parseInt(document.getElementById("cardNumber").value),
                expire_date:parseInt(document.getElementById("expiryDate").value),
                cvv:parseInt(document.getElementById("cvv")),
                name_oncard:(document.getElementById("nameOnCard")),
            };

            Pay(payment);
            function Pay(payment){
                localStorage.setItem("input",JSON.stringify(payment));
            }
          });*/
          

           var card_number = document.getElementById("cardNumber").value;
            localStorage.setItem("CardNumber", JSON.stringify(card_number));

            var expire_date = document.getElementById("expiryDate").value;
            localStorage.setItem("ExpiryDate", JSON.stringify(expire_date));

            var cvv = document.getElementById("cvv").value;
            localStorage.setItem("CVV", JSON.stringify(cvv));

            var name_oncard = document.getElementById("nameOnCard").value;
            localStorage.setItem("NameOnCard", JSON.stringify(name_oncard));
            

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

            var total = localStorage.getItem("total-paypal");
            document.getElementById("ticketCost").innerHTML=total;
           } );