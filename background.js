browser.browserAction.onClicked.addListener(event => {
	const settingActive = browser.storage.sync.get("active")
	console.log(settingActive)
	browser.storage.sync.set({
		active: !settingActive
	})
})

browser.runtime.onInstalled.addListener(event => {
	const active = true

	browser.storage.sync.set({
		active
	})
})
