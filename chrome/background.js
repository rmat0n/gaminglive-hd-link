// Copyright (c) 2012 Romain MATON. All rights reserved.
chrome.tabs.onUpdated.addListener(function (tab_id, data, tab) {
    if (tab.url.indexOf("http://www.jeuxvideo.com/videos/gaming-live/") != -1) {
        chrome.pageAction.show(tab_id);
    }
});