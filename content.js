chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPalette") {
    const paletteElements = document.getElementsByClassName("listText");
    const palette = Array.from(paletteElements).map((el) =>
      el.textContent.trim()
    );
    const title = document.querySelector(
      "body > div.palettes > div > div > div.col-xl-9.col-lg-8.col-md-12 > div > div.col-xl-12.col-lg-12.paddingFix > div > div > div > div.col-xl-4 > h2"
    ).innerText;
    sendResponse({ palette: palette, title: title });
  }
});
