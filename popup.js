document.getElementById("generate_btn").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {action: "getPalette"}, (response) => {
        if (response && response.palette) {
          const command = generateCommand(response.palette);
          document.getElementById("command_output").value = command;
          navigator.clipboard.writeText(command);
        }
      });
    });
  });
  
  function generateCommand(palette) {
    const items = palette.slice(0, 9).map((block, index) => {
        return `{id:"minecraft:${block.toLowerCase().replace(/ /g, '_')}",Count:1b,Slot:${index}b}`;
      }).join(',');
    return `/give @p minecraft:shulker_box{BlockEntityTag:{Items:[${items}]}}`;
  }