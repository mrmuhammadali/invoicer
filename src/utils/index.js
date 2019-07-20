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

export const makeUID = (): string =>
  'xyxxx-xyxx4xxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8

    return v.toString(16)
  })
