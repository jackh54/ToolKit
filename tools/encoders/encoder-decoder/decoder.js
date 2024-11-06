function decodeText() {
    const input = document.getElementById("decoderInput").value;
    let decoded = "";
  
    try {
      if (isBase64(input)) {
        decoded = atob(input); // Base64 decoding
      } else if (isHex(input)) {
        decoded = input.match(/.{1,2}/g) // Split into byte pairs
          .map(byte => String.fromCharCode(parseInt(byte, 16)))
          .join(""); // Hexadecimal decoding
      } else if (isUrlEncoded(input)) {
        decoded = decodeURIComponent(input); // URL decoding
      } else {
        decoded = "Unrecognized encoding format.";
      }
    } catch (error) {
      decoded = "Error decoding text.";
    }
  
    document.getElementById("decodedOutput").value = decoded;
  }
  
  // Utility functions for encoding detection
  
  function isBase64(str) {
    try {
      return btoa(atob(str)) === str; // Valid Base64 check
    } catch (e) {
      return false;
    }
  }
  
  function isHex(str) {
    return /^[0-9a-fA-F]+$/i.test(str) && str.length % 2 === 0;
  }
  
  function isUrlEncoded(str) {
    return decodeURIComponent(str) !== str;
  }
  