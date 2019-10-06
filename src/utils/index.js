// @flow
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
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.focus()
  input.select()

  try {
    const successful = document.execCommand('copy')
    document.body.removeChild(input)
    if (successful) {
      return Promise.resolve('Copying to clipboard was successful!')
    }

    return Promise.reject(Error('Could not copy text to clipboard.'))
  } catch (err) {
    document.body.removeChild(input)
    return Promise.reject(err)
  }
}

export function copyTextToClipboard(text: string): void {
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text)
  }

  return navigator.clipboard
    .writeText(text)
    .then(
      () => Promise.resolve('Copying to clipboard was successful!'),
      err => Promise.reject(err),
    )
}
