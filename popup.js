const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("change", function() {
  const color = colorPicker.value;
  chrome.tabs.executeScript({
    code: `document.body.style.backgroundColor = '${color}'`
  });
});