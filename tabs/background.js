//using https://developer.chrome.com/docs/extensions/reference/api/tabs

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.update(tab.id, { url: "https://canvas.uw.edu/" });
});
