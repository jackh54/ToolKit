function encodeText() {
    const input = document.getElementById("encoderInput").value;
    const encoded = btoa(input); // Base64 encoding
    document.getElementById("encodedOutput").value = encoded;
  }
  