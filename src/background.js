const iconPaths = {
	light: "assets/icon-48-light.png",
	dark: "assets/icon-48-dark.png",
	disabled: "assets/icon-48-disabled.png"
}

browser.runtime.onInstalled.addListener(async event => {
	const active = true
	const instance = "https://invidio.us"

	await browser.storage.local.set({ active, instance })
})

browser.runtime.onStartup.addListener(async event => {
	const pathDefaultIcon = handleToolbarIcon()

	browser.browserAction.setIcon({ path })
})

browser.theme.onUpdated.addListener(async event => {
	const browserInfo = await browser.theme.getCurrent()
	const { icons } = browserInfo.colors
	const rgbValue = parseInt(icons.split(",")[1])
	const pathDefaultIcon = (rgbValue > 150)
		? iconPaths.light
		: iconPaths.dark

	browser.browserAction.setIcon({ path })
})

browser.browserAction.onClicked.addListener(async event => {
	const pathDefaultIcon = handleToolbarIcon()
	const { active } = await browser.storage.local.get()
	const newState = !active
	const path = newState
		? pathDefaultIcon
		: iconPaths.disabled

	await browser.storage.local.set({ active: newState })
	browser.browserAction.setIcon({ path })
})

const handleToolbarIcon = () => {
	return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
		? iconPaths.light
		: iconPaths.dark
}

browser.contextMenus.create({
	id: "redirect-to-invidious",
	title: "watch on invidious"
})

browser.contextMenus.onClicked.addListener(async (info, tab) => {
	const { instance } = await browser.storage.local.get()
	const { url } = tab
	const videoIdString = "watch?v="
	const userIdString = "user/"
	const channelIdString = "channel/"

	let path = ""

	if (url.includes(videoIdString)) {
		const videoId = url.split(videoIdString)[1]
		path = `${videoIdString}${videoId}`
	}

	if (url.includes(userIdString)) {
		const videoId = url.split(userIdString)[1]
		path = `${userIdString}${videoId}`
	}

	if (url.includes(channelIdString)) {
		const videoId = url.split(channelIdString)[1]
		path = `${channelIdString}${videoId}`
	}

	browser.tabs.update(tab.id, {
		url: `${instance}/${path}`
	})
})
