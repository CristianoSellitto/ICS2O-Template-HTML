// Cristiano
// ICS2O-Unit0-00-HTML
// Date 2022

'use strict'
/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * Alerts "Hello, World!"
 */
function onButtonClick() {
  alert("Hello, World!")
}
