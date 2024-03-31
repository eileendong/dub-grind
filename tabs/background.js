//using https://developer.chrome.com/docs/extensions/reference/api/tabs
chrome.runtime.onInstalled.addListener(({reason}) => {
    if (reason === 'install') {
      chrome.tabs.create({
        url: "https://canvas.uw.edu/"
      });
    }
  });