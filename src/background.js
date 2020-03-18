const iconPaths = {
	light: "assets/icon-48-light.png",
	dark: "assets/icon-48-dark.png",
	disabled: "assets/icon-48-disabled.png"
}

browser.runtime.onInstalled.addListener(async event => {
	const active = true

	await browser.storage.local.set({ active })
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
