document.addEventListener("DOMContentLoaded", function() {
    const selectedDateInput = document.getElementById("selected-date");
    const ticketsTable = document.getElementById("tickets-table");
    const totalPayable = document.getElementById("total-paypal");
    const continueButton = document.getElementById("continue-button");
    //to clear local storage
    localStorage.clear();
  
    // Sample pricing data
    const prices = {
      "Foreigner Adult": { normal: 10, peak: 13 },
      "Foreigner Child": { normal: 5, peak: 8 },
      "SL Adult": { normal: 4, peak: 6 },
      "SL Child": { normal: 2, peak: 3 },
      "Infant": { normal: 0, peak: 0 } //infants are free
    };
  
    // Sample peak hours
    const peakHours = [3, 4, 5]; // Adjust the peak hours accordingly
  
    // Function to update tickets table and total payable
    function updateSummary() {
      const date = selectedDateInput.value;
      const duration = parseInt(document.getElementById("duration").value);
     const time=document.getElementById("duration").options[duration - 1].text;
     localStorage.setItem("time",JSON.stringify(time));
        
  
      const ticketData = [
        // Format: [Ticket Category, Quantity]
        ["Foreigner Adult", parseInt(document.getElementById("foreigner-adult").value)],
        ["Foreigner Child", parseInt(document.getElementById("foreigner-child").value)],
        ["SL Adult", parseInt(document.getElementById("sl-adult").value)],
        ["SL Child", parseInt(document.getElementById("sl-child").value)],
        ["Infant", parseInt(document.getElementById("infant").value)]
        // Add other ticket categories here
      ];
  
      const tableBody = document.getElementById("tickets-table");
      tableBody.innerHTML = "";
  
      // Calculate total payable
      let total = 0;
  
      // Create and populate the tickets table
      for (const [category, quantity] of ticketData) {
        if (quantity > 0) {
          const row = tableBody.insertRow();
          const cellCategory = row.insertCell();
          const cellDate = row.insertCell();
          const cellTime = row.insertCell();
          const cellDuration = row.insertCell();
          const cellQuantity = row.insertCell();
          const cellPrice = row.insertCell();
  
          const normalPrice = prices[category].normal * quantity * duration;
          const peakPrice = peakHours.includes(duration) ? prices[category].peak * quantity * duration : 0;
          const price = normalPrice + peakPrice;
  
          cellCategory.innerHTML = category;
          cellDate.innerHTML = date;
          cellTime.innerHTML = document.getElementById("duration").options[duration - 1].text;
          cellDuration.innerHTML = "1 hour";
          cellQuantity.innerHTML = quantity;
          cellPrice.innerHTML = `$${price}`;
  
          total += price;
        }
      }
  
      totalPayable.innerHTML = `$${total}`;
      continueButton.disabled = total === 0;
      // Enable the "Continue with purchase" button if total payable is greater than 0
    }
  
    // Add event listeners
    selectedDateInput.addEventListener("change", updateSummary);
    document.getElementById("duration").addEventListener("change", updateSummary);
    document.getElementById("foreigner-adult").addEventListener("change", updateSummary);
    document.getElementById("foreigner-child").addEventListener("change", updateSummary);
    document.getElementById("sl-adult").addEventListener("change", updateSummary);
    document.getElementById("sl-child").addEventListener("change", updateSummary);
    document.getElementById("infant").addEventListener("change", updateSummary);
    
  
    continueButton.addEventListener("click", function() {
      window.location.href = "details.html";
      
       date=selectedDateInput.value;
       localStorage.setItem("date",JSON.stringify(date));

          fore_adult=parseInt(document.getElementById("foreigner-adult").value);
        localStorage.setItem("fore_adult", JSON.stringify(fore_adult));

        fore_child=parseInt(document.getElementById("foreigner-child").value);
        localStorage.setItem("fore-child", JSON.stringify(fore_child));

        sl_adult=parseInt(document.getElementById("sl-adult").value);
        localStorage.setItem("sl-adult", JSON.stringify(sl_adult));

        sl_child=parseInt(document.getElementById("sl-child").value);
        localStorage.setItem("sl-child", JSON.stringify(sl_child));

        infant=parseInt(document.getElementById("infant").value);
        localStorage.setItem("infant", JSON.stringify(infant));

        duration=1;
        localStorage.setItem("duration", JSON.stringify(duration));

        total=totalPayable.innerHTML;
        localStorage.setItem("total-paypal", JSON.stringify(total))
        

        
        
        total:totalPayable.innerHTML


      Userd(input);
      function Userd(input){
        localStorage.setItem("input",JSON.stringify(input));
      }
    });
  
    // Update summary initially
    updateSummary();
  });
