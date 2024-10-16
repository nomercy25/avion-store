let currentValue = 0;
  
  function updateValue() {
    document.getElementById("value").textContent = currentValue;
  }
  
  function subtract() {
    if (currentValue > 0) {
      currentValue--;
      updateValue();
    }
  }
  
  function add() {
    currentValue++;
    updateValue();
  }