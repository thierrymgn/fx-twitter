document.addEventListener("copy", (e: ClipboardEvent) => {
  const copiedText = window.getSelection()?.toString() || ""

  if (isTwitterLink(copiedText)) {
    const modifiedText = copiedText.replace(/x\.com/g, "fxtwitter.com")

    e.clipboardData.setData("text/plain", modifiedText)

    e.preventDefault()
  }
})

function isTwitterLink(text: string): boolean {
  return /x\.com/.test(text)
}
