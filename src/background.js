browser.browserAction.onClicked.addListener(async event => {
	const { active } = await browser.storage.local.get()
	const newState = !active
	const path = newState
		? "assets/icon-48-normal.png"
		: "assets/icon-48-disabled.png"
	const log = newState
		? "enabled"
		: "disabled"

	await browser.storage.local.set({ active: newState })
	browser.browserAction.setIcon({ path })
	console.log(log)
})

browser.runtime.onInstalled.addListener(async event => {
	const active = true

	await browser.storage.local.set({
		active
	})
})
