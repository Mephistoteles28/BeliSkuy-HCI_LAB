function updatePrice() {
    // Get the original price and the selected delivery option
    var originalPrice = 20000;
    var deliveryOption = document.getElementById('delivery-option').value;

    // Calculate the new price based on the delivery option
    var newPrice;
    switch (deliveryOption) {
      case 'standard':
        newPrice = originalPrice;
        break;
      case 'express':
        newPrice = originalPrice * 0.7;
        break;
      case 'next-day':
        newPrice = originalPrice * 1.5;
        break;
      default:
        newPrice = originalPrice;
    }

    // Update the price on the page
    document.getElementById('price').innerHTML = 'Rp' + newPrice.toFixed(2);
    var x = newPrice + 200000;
    document.getElementById('result').innerHTML = x;
  }

  
