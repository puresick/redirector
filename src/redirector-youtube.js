const redirectHandler = async () => {
	const { active } = await browser.storage.local.get()
	
	if (active) {
		const { host, pathname, search } = window.location
		
		if (host.includes("youtube")) {
			window.location = `https://invidio.us${pathname}${search}`
		}
	}
}

redirectHandler()
