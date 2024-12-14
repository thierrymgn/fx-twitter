document.addEventListener("copy", (e: ClipboardEvent) => {
  const copiedText = window.getSelection()?.toString() || ""

  if (isTwitterLink(copiedText)) {
    const modifiedText = copiedText.replace(/https?:\/\/x\.com/g, "https://fxtwitter.com")

    e.clipboardData.setData("text/plain", modifiedText)

    e.preventDefault()
  }
})

function isTwitterLink(text: string): boolean {
  return /https?:\/\/x\.com/.test(text)
}