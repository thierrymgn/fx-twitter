import { useEffect, useState } from "react"
import * as ReactDOM from "react-dom"

import "./popup.css"

interface PopupProps {}

function IndexPopup() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    function setMessageBasedOnTab() {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0]
        
        if (tab && tab.url) {
          setMessage("You are on a Twitter page!")
        } else {
          setMessage("This extension only works on Twitter pages.")
        }
      })
    }

    setMessageBasedOnTab()
  }, [])

  return (
    <div className="container">
      <h1>FXTwitter Link Replacer</h1>
      <p>
        This extension replaces "twitter.com" links with "fxtwitter.com" links.
      </p>

      <div id="message">{message}</div>
    </div>
  )
}

export default IndexPopup
