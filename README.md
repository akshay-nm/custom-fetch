# Custom Fetch

A wrapper over window.fetch.

This one attaches an abort signal on window.fetch, and adds a timeout (can be configured by passing a timeoutDuration param).

Parameters supported:

- url
- timeoutDuration
- method
- headers
- body
- mode
- credentials
- cache
- redirect
- referrer
- integrity

Returns an object with following properties:

- send: () => Promise
- abort: () => Promise
