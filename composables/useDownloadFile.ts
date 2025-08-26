export const useDownloadFile = () => {
	const downloadFile = (filePath: string, fileName: string, openInNewTab = false): void => {
		if (openInNewTab) {
			window.open(filePath, '_blank')
		} else {
			const link = document.createElement('a')
			link.href = filePath
			link.download = fileName
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		}
	}
	return { downloadFile }
}
