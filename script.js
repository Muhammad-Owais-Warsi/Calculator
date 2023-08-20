function appendToDisplay(val) {
    document.getElementById("display").value += val;
  }

  function calculate() {
    const exp = document.getElementById("display");
    try {
      exp.value = eval(exp.value);

    }
    catch (error) {
      exp.value = 'error';
    }

  }

  function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
  }