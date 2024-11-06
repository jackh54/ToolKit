function updateColorFromSliders() {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;

    document.getElementById("redInput").value = red;
    document.getElementById("greenInput").value = green;
    document.getElementById("blueInput").value = blue;
  
    updateColorDisplay(red, green, blue);
  }
  
  function updateColorFromInput() {
    let red = document.getElementById("redInput").value;
    let green = document.getElementById("greenInput").value;
    let blue = document.getElementById("blueInput").value;
  
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));
  
    document.getElementById("red").value = red;
    document.getElementById("green").value = green;
    document.getElementById("blue").value = blue;
  
    updateColorDisplay(red, green, blue);
  }
  
  function updateColorDisplay(red, green, blue) {
    const colorDisplay = document.getElementById("colorDisplay");
    const rgbString = `RGB(${red}, ${green}, ${blue})`;
    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorDisplay.textContent = rgbString;
  }
  
  function copyToClipboard() {
    const colorDisplay = document.getElementById("colorDisplay").textContent;
    navigator.clipboard.writeText(colorDisplay)
      .then(() => alert("RGB color copied to clipboard!"))
      .catch(err => console.error("Failed to copy text: ", err));
  }
  
  function resetColor() {
    document.getElementById("red").value = 128;
    document.getElementById("green").value = 128;
    document.getElementById("blue").value = 128;
    document.getElementById("redInput").value = 128;
    document.getElementById("greenInput").value = 128;
    document.getElementById("blueInput").value = 128;
  
    updateColorDisplay(128, 128, 128);
  }
  