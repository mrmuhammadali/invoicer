/**
 * Checks the request has Okay response else throws exception
 *
 * @export
 * @param {any} response
 * @returns {JSON | Error}
 */
export function handleFetchResponse(response) {
  if (response instanceof Array) {
    return Promise.all(response.map(res => handleFetchResponse(res)))
  }

  if (!response.ok || response.status !== 200) {
    throw response
  }

  return response.json()
}

export function makeUID(): string {
  return 'xyxxx-xyxx4xxxyx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8

    return v.toString(16)
  })
}

function fallbackCopyTextToClipboard(text: string): void {
  var textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    var successful = document.execCommand('copy')
    var msg = successful ? 'successful' : 'unsuccessful'
    console.log('Fallback: Copying text command was ' + msg)
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}

export function copyTextToClipboard(text: string): void {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text)
    return
  }
  navigator.clipboard.writeText(text).then(
    function() {
      console.log('Async: Copying to clipboard was successful!')
    },
    function(err) {
      console.error('Async: Could not copy text: ', err)
    },
  )
}
