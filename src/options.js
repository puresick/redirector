const saveOptions = event => {
	browser.storage.local.set({
		instance: document.querySelector("#invidious-instance").value
	})
}

const restoreOptions = async () => {
	try {
		const setInstance = ({ instance }) => {
			document.querySelector("#invidious-instance").value = instance || ""
		}

		let optionInstance = await browser.storage.local.get("instance")
		setInstance(optionInstance)
	} catch (error) {
		console.error(error)
	}
}

document.addEventListener("DOMContentLoaded", restoreOptions)
document.querySelector("#save-instance").addEventListener("click", saveOptions)
