# redirector - a web extension redirecting youtube video links to invidio.us

This add on redirects youtube video links (like:
https://www.youtube.com/watch?v=VIDEOID) to invidio.us - an alternative youtube
frontend being more minimalistic and private [https://github.com/omarroth/invidious](https://github.com/omarroth/invidious)

## Installation

The add-on can be found on AMO:
[https://addons.mozilla.org/en-US/firefox/addon/redirector-watch-yt-invidious/](https://addons.mozilla.org/en-US/firefox/addon/redirector-watch-yt-invidious/)

## Development

The easiest way to test the extension locally for development is by using
`web-ext`, a Node.js tool written by Mozilla to streamline the web extension
development ([https://github.com/mozilla/web-ext](https://github.com/mozilla/web-ext)).

Running following command spwans a new Firefox instance with the add-on enabled:
`web-ext run`

Building it locally is being achieved by:
`web-ext build`

To install the add-on manually, refer to the instructions in this support
article:
[https://support.mozilla.org/en-US/kb/find-and-install-add-ons-add-features-to-firefox#w_how-do-i-find-and-install-add-ons](https://support.mozilla.org/en-US/kb/find-and-install-add-ons-add-features-to-firefox#w_how-do-i-find-and-install-add-ons)


## Roadmap

Right now, redirector is being far from feature complete. There are some obvious
features I am planning to add in the future aiming for a 1.0 stable release:

- De-/activating via add-on icon in browser toolbar
- Supporting all possible youtube locales (currently only us and de)
- Being able to redirect to other invidio.us instances
