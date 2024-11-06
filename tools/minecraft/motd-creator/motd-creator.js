document.addEventListener('DOMContentLoaded', () => {
    const motdInput = document.getElementById('motdInput');
    const motdPreview = document.getElementById('motdPreview');
    const vanillaCode = document.getElementById('vanillaCode');
    const spigotCode = document.getElementById('spigotCode');
    const bungeeCode = document.getElementById('bungeeCode');
    const serverListPlusCode = document.getElementById('serverListPlusCode');
  
    const formattingCodes = {
      bold: '&l',
      italic: '&o',
      underline: '&n',
      strikethrough: '&m',
      reset: '&r',
    };
  
    motdInput.addEventListener('input', updatePreview);
  
    window.addFormatting = (format) => {
      const code = formattingCodes[format];
      insertAtCursor(motdInput, code);
      updatePreview();
    };
  
    window.addColor = (color) => {
      const mcColorCode = `&${color.slice(1)}`;
      insertAtCursor(motdInput, mcColorCode);
      updatePreview();
    };
  
    function insertAtCursor(input, textToInsert) {
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = input.value.slice(0, start) + textToInsert + input.value.slice(end);
      input.setSelectionRange(start + textToInsert.length, start + textToInsert.length);
      input.focus();
    }
  
    function updatePreview() {
      const inputText = motdInput.value;
      const formattedText = inputText
        .replace(/&l/g, '<span class="font-bold">')
        .replace(/&o/g, '<span class="italic">')
        .replace(/&n/g, '<span class="underline">')
        .replace(/&m/g, '<span class="line-through">')
        .replace(/&r/g, '</span>')
        .replace(/&([0-9a-fA-F]{6})/g, (_, color) => `<span style="color:#${color}">`)
        .replace(/\n/g, '<br>') + '</span>'.repeat((inputText.match(/&[lonmr]/g) || []).length);
  
      motdPreview.innerHTML = formattedText;
  
      const vanillaFormat = inputText.replace(/&/g, '\\u00A7').replace(/\n/g, '\\n');
      vanillaCode.value = `motd=${vanillaFormat}`;
  
      const spigotFormat = inputText.replace(/&/g, '\\u00A7').replace(/\n/g, '\\n');
      spigotCode.value = `motd=${spigotFormat}`;
  
      const bungeeFormat = inputText.replace(/\n/g, '\\n');
      bungeeCode.value = `motd: "${bungeeFormat}"`;
  
      const serverListPlusFormat = inputText.replace(/\n/g, '\\n');
      serverListPlusCode.value = `- |-\n  ${serverListPlusFormat}`;
    }
  });
  