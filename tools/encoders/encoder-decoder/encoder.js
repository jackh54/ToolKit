function encodeText() {
    const input = document.getElementById("encoderInput").value;
    const encodingType = document.getElementById("encodingType").value;
    let encoded = "";
  
    switch (encodingType) {
      case "base64":
        encoded = btoa(input); // Base64 encoding
        break;
      case "hex":
        encoded = Array.from(input)
          .map(char => char.charCodeAt(0).toString(16))
          .join(""); // Hexadecimal encoding
        break;
      case "url":
        encoded = encodeURIComponent(input); // URL encoding
        break;
    }
  
    document.getElementById("encodedOutput").value = encoded;
  }
  