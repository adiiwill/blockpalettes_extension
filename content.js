chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getPalette") {
      const paletteElements = document.getElementsByClassName("listText");
      const palette = Array.from(paletteElements).map(el => el.textContent.trim());
      sendResponse({palette: palette});
    }
  });