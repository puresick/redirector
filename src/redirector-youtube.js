const redirectHandler = async () => {
	const { active, instance } = await browser.storage.local.get()
	
	if (active) {
		const { host, pathname, search } = window.location
		
		if (host.includes("youtube")) {
			window.location = `${instance}${pathname}${search}`
		}
	}
}

redirectHandler()
