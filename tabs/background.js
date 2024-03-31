//using https://developer.chrome.com/docs/extensions/reference/api/tabs

chrome.runtime.onInstalled.addListener(() => {
    console.log('Spotify AutoPlay extension installed.');
});

chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.update(tab.id, { url: "https://open.spotify.com/playlist/your_playlist_id" });
});
