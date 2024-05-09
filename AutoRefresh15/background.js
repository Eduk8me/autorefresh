chrome.alarms.create('refresh', { periodInMinutes: 15 });

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'refresh') {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.reload(tabs[0].id);
        });
    }
});

