export const STYLES = `

/* Background colors*/
body {
  overflow: hidden;
  background-color: transparent;
}

/* Transparent background. */
yt-live-chat-renderer {
  /* background-color: transparent !important; */
}

yt-live-chat-text-message-renderer,
yt-live-chat-text-message-renderer[is-highlighted] {
  /* ? */
  width: fit-content;
}

/* Contenedor del elemento mensaje owner */
yt-live-chat-text-message-renderer[author-type='owner'],
yt-live-chat-text-message-renderer[author-type='owner'][is-highlighted] {
  background-color: transparent !important;
  width: fit-content;
}

/* Contenedor del elemento mensaje moderator */
yt-live-chat-text-message-renderer[author-type='moderator'],
yt-live-chat-text-message-renderer[author-type='moderator'][is-highlighted] {
  background-color: transparent !important;
  width: fit-content;
}

/* Contenedor del elemento mensaje member */
yt-live-chat-text-message-renderer[author-type='member'],
yt-live-chat-text-message-renderer[author-type='member'][is-highlighted] {
  background-color: transparent !important;
  width: fit-content;
}

yt-live-chat-text-message-renderer * {
  width: fit-content !important;
}

/* Contenedor del nombre del usuario */
yt-live-chat-author-chip #author-name {
  background-color: transparent important;
}

/* Quitar amarillo */
yt-live-chat-author-chip[is-highlighted]
  #author-name.owner.yt-live-chat-author-chip,
#author-name.owner.yt-live-chat-author-chip {
  background-color: transparent;
}

/* Outlines */
yt-live-chat-renderer * {
  /* text-shadow: -1px -1px #2b2b2b,-1px 0px #2b2b2b,-1px 1px #2b2b2b,0px -1px #2b2b2b,0px 0px #2b2b2b,0px 1px #2b2b2b,1px -1px #2b2b2b,1px 0px #2b2b2b,1px 1px #2b2b2b; */
  font-family: 'Nunito';
}

/* Contenedor del mensaje  */
yt-live-chat-text-message-renderer #content,
yt-live-chat-legacy-paid-message-renderer #content {
  overflow: initial !important;
  /* margin-left: 10px !important; */
}

yt-live-chat-text-message-renderer #content {
  max-width: 100% !important;
  /* min-width: 30vw !important; */
}

/* Hide scrollbar. */
yt-live-chat-item-list-renderer #items {
  overflow: hidden !important;
  /* align right */
  display: flex !important;
  flex-direction: column !important;
}

yt-live-chat-item-list-renderer #item-scroller {
  overflow: hidden !important;
}

/* Hide header and input. */
yt-live-chat-header-renderer,
yt-live-chat-message-input-renderer {
  display: none !important;
}

/* Reduce side padding. */
yt-live-chat-text-message-renderer,
yt-live-chat-legacy-paid-message-renderer {
  padding-left: 4px !important;
  padding-right: 4px !important;
}

yt-live-chat-paid-message-renderer #header {
  padding-left: 4px !important;
  padding-right: 4px !important;
}

#author-photo,
yt-live-chat-membership-item-renderer #author-photo {
  display: none !important;
}

yt-live-chat-text-message-renderer #author-photo {
  display: none !important;
}

yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-legacy-paid-message-renderer #author-photo {
  display: inline !important;
}

/* Hide badges. */
yt-live-chat-text-message-renderer #author-badges {
  vertical-align: text-top !important;
}

/* Timestamps. */
yt-live-chat-text-message-renderer #timestamp,
yt-live-chat-membership-item-renderer #timestamp {
  color: #999999 !important;
  font-family: 'Quicksand';
  font-size: 16px !important;
  line-height: 16px !important;
  display: none !important;
}

/* Badges. */
yt-live-chat-text-message-renderer #chat-badges {
  align-self: center !important;
  z-index: 3 !important;
  order: 2;
}

yt-live-chat-text-message-renderer
  yt-live-chat-author-badge-renderer[type='moderator']
  yt-icon {
  /* padding: 0px !important; */
  /* padding-left: 10px !important; */
  /* margin: 0px !important; */
  width: 15px !important;
  height: 15px !important;
  position: relative !important;
  display: none !important;
}

yt-live-chat-text-message-renderer
  yt-live-chat-author-badge-renderer[type='member']
  * {
  /* padding: 0 0px 0 5px !important; */
  /* margin: 0px !important; */
  position: relative !important;
  width: 15px !important;
  height: 15px !important;
}

/* IMPORTANTE: CHANNEL NAMES */
yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  overflow: visible !important;
  /* margin-right: 20px !important; */
  position: absolute !important;
  z-index: 3 !important;
  border-radius: 0px !important;
  padding: 2px 10px 2px 10px;
  display: flex !important;
  align-items: center !important;
  top: -25px !important;
  left: 10px !important;
  height: 34px !important;

  transform: rotate(-2deg) !important;
}

yt-live-chat-text-message-renderer[author-type='owner']
  yt-live-chat-author-chip {
  background: var(--streamer-username-bg) !important;
  box-shadow: var(--streamer-box-shadow) !important;
}

yt-live-chat-text-message-renderer[author-type='moderator']
  yt-live-chat-author-chip {
  background: var(--mod-username-bg) !important;
  box-shadow: var(--mod-box-shadow) !important;
}

yt-live-chat-text-message-renderer[author-type='member']
  yt-live-chat-author-chip {
  background: var(--member-username-bg) !important;
  box-shadow: var(--member-box-shadow) !important;
}

yt-live-chat-text-message-renderer[author-type=''] yt-live-chat-author-chip {
  background: var(--viewer-username-bg) !important;
  box-shadow: var(--viewer-box-shadow) !important;
}

yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
  content: '';
  position: absolute;
  left: -1px;
  top: -1.7px;
  height: 100px;
  width: 100px;
  transform: scale(1.017);
}

yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
  content: '';
  position: absolute;
  right: -89px;
  top: -1.7px;
  height: 100px;
  width: 100px;
  transform: scale(1.017);
}

yt-live-chat-text-message-renderer[author-type='owner']
  yt-live-chat-author-chip::before {
  background: var(--streamer-left-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='moderator']
  yt-live-chat-author-chip::before {
  background: var(--mod-left-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='member']
  yt-live-chat-author-chip::before {
  background: var(--member-left-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='']
  yt-live-chat-author-chip::before {
  background: var(--viewer-left-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='owner']
  yt-live-chat-author-chip::after {
  background: var(--streamer-right-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='moderator']
  yt-live-chat-author-chip::after {
  background: var(--mod-right-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='member']
  yt-live-chat-author-chip::after {
  background: var(--member-right-header) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='']
  yt-live-chat-author-chip::after {
  background: var(--viewer-right-header) no-repeat;
}

yt-live-chat-text-message-renderer #author-name {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  font-family: var(--font-family-primary) !important;
  font-size: var(--name-font-size) !important;
  font-weight: 500 !important;
  overflow: hidden !important;
  letter-spacing: 0.5px !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  width: 100% !important;
  z-index: 3 !important;
  position: relative !important;
  padding: 0 !important;
  padding-left: 30px !important;
  padding-right: 30px !important;
  margin-bottom: 2px;
  color: var(--all-name-color) !important;
}

yt-live-chat-text-message-renderer #author-name::before {
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 11px;
}

yt-live-chat-text-message-renderer[author-type='owner'] #author-name::before {
  background: var(--streamer-badge);
  background-repeat: no-repeat;
  z-index: 40;
}

yt-live-chat-text-message-renderer[author-type='moderator']
  #author-name::before {
  background: var(--mod-badge);
  background-repeat: no-repeat;
}

yt-live-chat-text-message-renderer[author-type='member'] #author-name::before {
  background: var(--member-badge);
  background-repeat: no-repeat;
}

yt-live-chat-text-message-renderer[author-type=''] #author-name::before {
  background: var(--viewer-badge);
  background-repeat: no-repeat;
}

/* IMPORTANTE ICONOS RESPECTO AL CHANNEL NAME */

/* TYPE MESSAGE */
yt-live-chat-text-message-renderer {
  /* display: none; */
  position: relative !important;
  overflow: visible !important;
  width: fit-content !important;
  min-width: 25% !important;
  margin: 30px 30px;
  margin-left: 80px !important;
  padding: 0 !important;
  contain: none !important;
  animation: slide-in-left 0.5s ease both !important;
}

@keyframes slide-in-left {
  0% {
    transform: translateY(200px) scale(0.3);
    opacity: 0;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

yt-live-chat-text-message-renderer #content {
  border-radius: 0px !important;
  z-index: 1 !important;
  display: flex !important;
  padding: 25px 30px 20px 30px !important;
  position: relative !important;
  order: 0 !important;
  min-width: 22vw !important;
}

yt-live-chat-text-message-renderer::before {
  content: '';
  display: flex;
  position: absolute;
  width: 67px;
  height: 67px;
  border-radius: 100px;
  overflow: hidden;
  top: 45%;
  transform: translateY(-50%);
}

yt-live-chat-text-message-renderer[author-type='moderator']::before {
  background: var(--mod-mascot) no-repeat;
  animation: bottomanimation-mod 0.3s linear both 200ms;
}

yt-live-chat-text-message-renderer[author-type='owner']::before {
  background: var(--streamer-mascot) no-repeat;
  animation: bottomanimation 0.3s linear both 200ms;
}

yt-live-chat-text-message-renderer[author-type='member']::before {
  background: var(--member-mascot) no-repeat;
  animation: bottomanimation 0.3s linear both 200ms;
}

yt-live-chat-text-message-renderer[author-type='']::before {
  background: var(--viewer-mascot) no-repeat;
  animation: bottomanimation 0.3s linear both 200ms;
}

@keyframes bottomanimation {
  0% {
    background-position: 0px 70px;
  }
  100% {
    background-position: 0px 16px;
  }
}

@keyframes bottomanimation-mod {
  0% {
    background-position: 0px 70px;
  }
  100% {
    background-position: 0px 1px;
  }
}

yt-live-chat-text-message-renderer #content::before {
  content: '';
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

yt-live-chat-text-message-renderer #content::after {
  content: '';
  position: absolute;
  right: -70px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
}

@keyframes grow-ear {
  0% {
    transform: scale(0);
    filter: opacity(0);
  }

  80% {
    transform: scale(1.15);
    filter: opacity(1);
  }

  100% {
    transform: scale(1);
    filter: opacity(1);
  }
}

@keyframes brighten {
  0% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.22);
  }

  100% {
    filter: brightness(1);
  }
}

yt-live-chat-text-message-renderer[author-type='owner'] #content {
  background: var(--streamer-background-color) !important;
}

yt-live-chat-text-message-renderer[author-type='owner'] #content::before {
  background: var(--message-border-streamer);
}

yt-live-chat-text-message-renderer[author-type='owner'] #content::after {
  background: var(--streamer-diamond) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='moderator'] #content {
  background: var(--mod-background-color) !important;
}

yt-live-chat-text-message-renderer[author-type='moderator'] #content::before {
  background: var(--message-border-mod);
}

yt-live-chat-text-message-renderer[author-type='moderator'] #content::after {
  background: var(--mod-diamond) no-repeat;
}

yt-live-chat-text-message-renderer[author-type='member'] #content {
  background: var(--member-background-color) !important;
}

yt-live-chat-text-message-renderer[author-type='member'] #content::before {
  background: var(--message-border-member);
}

yt-live-chat-text-message-renderer[author-type='member'] #content::after {
  background: var(--member-diamond) no-repeat;
}

yt-live-chat-text-message-renderer[author-type=''] #content {
  background: var(--viewer-background-color) !important;
}

yt-live-chat-text-message-renderer[author-type=''] #content::before {
  background: var(--message-border-viewer);
}

yt-live-chat-text-message-renderer[author-type=''] #content::after {
  background: var(--viewer-diamond) no-repeat;
}

yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  font-family: var(--font-family-secondary) !important;
  font-size: var(--message-font-size, 20px) !important;
  font-weight: normal !important;
  line-height: 100% !important;
  text-align: start !important;
  word-break: break-all;
  color: var(--all-message-color) !important;
}

yt-live-chat-text-message-renderer #message {
  padding-right: 30px;
  display: block !important;
  max-width: 100% !important;
  position: relative !important;
  overflow: visible !important;
  text-overflow: ellipsis !important;
  z-index: 1 !important;
}

/* temp */
ytd-sponsorships-live-chat-gift-redemption-announcement-renderer,
yt-live-chat-legacy-paid-message-renderer {
  display: none !important;
}

/* yt-live-chat-paid-message-renderer * {
  border: 1px solid red;
} */

/* TYPE SUPERCHAT */
yt-live-chat-paid-message-renderer {
  /* display: none; */
  text-align: center !important;
  padding: 0 !important;
  margin: 0 auto !important;
  margin-bottom: 15px !important;
  margin-top: 15px !important;
  /* width: 90% !important; */
  /* display: flex !important; */
  /* margin-left: auto !important; */
  /* margin-top: 20px !important; */
  /* margin-bottom: 20px !important; */
  /* margin-right: auto !important; */
  padding: 6px 4px !important;
  font-size: unset !important;
  /* padding-bottom: 20px !important; */
  border-radius: 5px !important;
  overflow: visible !important;
  position: relative !important;
  animation: slide-in-left 0.5s ease both !important;
  width: 60vw !important;
}

yt-live-chat-paid-message-renderer #card {
  /* background: var(--yt-live-chat-paid-message-secondary-color) !important; */
  /* background: transparent !important; */
  /* width: 70vw !important; */
  position: relative !important;
  /* padding: 0 !important; */
  /* border-radius: 10px !important; */
  /* background-color: black !important; */
  box-shadow: none !important;
  font-size: unset !important;
  transform-origin: bottom !important;
  z-index: 1 !important;
  animation: none !important;
  border: 3px solid var(--alert-border) !important;
  background: var(--alert-bg) !important;
  padding: 10px 0px !important;
  padding-bottom: 5px !important;
  border-radius: 10px !important;
}

yt-live-chat-paid-message-renderer[show-only-header] #card {
  padding-bottom: 10px !important;
}

yt-live-chat-paid-message-renderer #card::after {
  content: '';
  position: absolute;
  right: -70px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond-right) no-repeat;
}

yt-live-chat-paid-message-renderer #card::before {
  content: '';
  position: absolute;
  left: -10px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond) no-repeat;
}

yt-live-chat-paid-message-renderer #header {
}

yt-live-chat-paid-message-renderer #author-name.yt-live-chat-author-chip {
  display: block !important;
  height: 100% !important;
  align-items: center !important;
  font-family: var(--font-family-primary) !important;
  font-size: var(--sc-name-font-size) !important;
  font-weight: 500 !important;
  /* text-align: center !important; */
  letter-spacing: 0px !important;
  /* font-weight: 700 !important; */
  /* text-transform: uppercase !important; */
  position: relative !important;
  z-index: 100 !important;
  color: var(--membership-name-color) !important;
  margin-bottom: 5px !important;
}

yt-live-chat-paid-message-renderer #author-name {
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  max-width: 90vw !important;
}

yt-live-chat-paid-message-renderer[is-v2-style]
  #purchase-amount-column.yt-live-chat-paid-message-renderer {
  z-index: 100 !important;
  padding-left: 0px !important;
}

yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  max-width: 90vw !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  font-family: var(--font-family-secondary) !important;
  font-size: var(--sc-amount-font-size) !important;
  font-weight: 500 !important;
  position: relative !important;
  color: var(--membership-amount-color) !important;
}

yt-live-chat-paid-message-renderer[show-only-header] #content {
  display: none !important;
}

yt-live-chat-paid-message-renderer #content {
  display: flex;
  justify-content: center !important;
  background: transparent !important;
  z-index: 2;
}

yt-live-chat-paid-message-renderer #message {
  padding: 8px 30px !important;
  border-radius: 10px;
  max-width: 65% !important;
  min-width: 65% !important;
  background: rgba(0, 0, 0, 0.38);
  /* text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
}

yt-live-chat-paid-message-renderer #message,
yt-live-chat-paid-message-renderer #message * {
  text-align: center !important;
  font-family: var(--font-family-secondary) !important;
  color: var(--membership-message-color) !important;
  font-size: var(--sc-message-font-size) !important;
  font-weight: 400 !important;
}

yt-live-chat-paid-message-renderer[is-v2-style]
  #single-line.yt-live-chat-paid-message-renderer {
  display: flex !important;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  height: 100% !important;
}

yt-live-chat-paid-message-renderer[is-v2-style]
  #author-photo.yt-live-chat-paid-message-renderer {
  display: none !important;
}

/* TYPE MEMBERSHIP*/
yt-live-chat-membership-item-renderer {
  /* text-align: center !important; */
  /* margin-left: auto !important; */
  /* margin-top: 20px !important; */
  /* margin-bottom: 20px !important; */
  /* margin-right: auto !important; */
  /* padding: 0 !important; */
  margin: 0 auto !important;
  margin-bottom: 15px !important;
  margin-top: 15px !important;
  padding: 0 !important;
  /* border: 1px solid red; */
  overflow: visible !important;
  position: relative !important;
  animation: slide-in-left 0.5s ease both !important;
  width: 60vw !important;
}

yt-live-chat-membership-item-renderer #card {
  background: transparent !important;
  position: relative !important;
  overflow: visible !important;
  box-shadow: none !important;
  transform-origin: bottom !important;
  z-index: 100 !important;
  /* animation: slide-in-left 0.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both !important; */

  background: var(--alert-bg) !important;
  border: 3px solid var(--alert-border) !important;
  border-radius: 10px !important;
  padding: 10px 0px !important;
}

yt-live-chat-membership-item-renderer #card::after {
  content: '';
  position: absolute;
  right: -70px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond-right) no-repeat;
}

yt-live-chat-membership-item-renderer #card::before {
  content: '';
  position: absolute;
  left: -10px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond) no-repeat;
}

yt-live-chat-membership-item-renderer #header {
  overflow: visible !important;
  position: relative !important;
  overflow: hidden !important;
  background: transparent !important;
}

yt-live-chat-membership-item-renderer[show-only-header]
  #header.yt-live-chat-membership-item-renderer {
  position: relative !important;
  /* padding: 20px 20px 20px 40px !important; */
}

yt-live-chat-membership-item-renderer #header-content {
  text-align: left !important;
  align-items: center !important;
  align-content: center !important;
  display: block !important;
  position: relative !important;
  width: 100% !important;
}

yt-live-chat-paid-message-renderer #header-content-primary-column {
  display: block !important;
  padding: 0 !important;
  width: 100% !important;
}

yt-live-chat-membership-item-renderer #author-photo {
  display: none !important;
  margin-left: 10px !important;
  transform: scale(1) !important;
  top: 20px !important;
  left: 15px !important;
  position: absolute !important;
}

yt-live-chat-membership-item-renderer[show-only-header] #author-photo {
  display: none !important;
  margin-left: 10px !important;
  transform: scale(1) !important;
  top: 20px !important;
  left: 15px !important;
  position: absolute !important;
}

yt-live-chat-membership-item-renderer[has-primary-header-text]:not(
    [dashboard-money-feed]
  )
  yt-live-chat-author-chip.yt-live-chat-membership-item-renderer,
yt-live-chat-membership-item-renderer[has-primary-header-text]:not(
    [dashboard-money-feed]
  )
  #header-subtext.yt-live-chat-membership-item-renderer {
  font-size: 12px;
}

yt-live-chat-membership-item-renderer yt-live-chat-author-chip {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  position: relative !important;
}

yt-live-chat-membership-item-renderer #author-name,
yt-live-chat-membership-item-renderer #author-name * {
  color: var(--membership-name-color) !important;
  font-family: var(--font-family-primary) !important;
  font-size: var(--membership-name-font-size, 20px) !important;
  letter-spacing: 0px !important;
  font-weight: 500 !important;
  width: fit-content !important;
  max-width: 40vw !important;
  position: relative !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  z-index: 20 !important;
}

yt-live-chat-membership-item-renderer #header-primary-text {
  color: var(--membership-name-color) !important;
  font-size: var(--membership-other-text-font-size) !important;
  font-family: var(--font-family-secondary) !important;
  font-weight: 500 !important;
  position: relative !important;
  text-align: center !important;
  /* padding-right: 60px !important; */
  /* padding: 5px 0 !important; */
  z-index: 20 !important;
}

yt-live-chat-membership-item-renderer #header-subtext {
  margin-top: 3px !important;
  color: var(--membership-other-text-color) !important;
  font-size: var(--membership-subtext-font-size) !important;
  font-family: var(--font-family-secondary) !important;
  letter-spacing: 1px !important;
  font-weight: 500 !important;
  position: relative !important;
  /* margin: 0 !important; */
  /* padding-right: 60px !important; */
  /* padding: 5px 0 !important; */
  z-index: 20 !important;
  text-align: center !important;
}

yt-live-chat-membership-item-renderer[show-only-header] #content {
  display: none !important;
}

yt-live-chat-membership-item-renderer #content {
  background: transparent !important;
  font-family: var(--font-family) !important;
  position: relative !important;
  overflow: visible !important;
  padding: 0 !important;
  display: flex;
  justify-content: center !important;
}

yt-live-chat-membership-item-renderer #message {
  padding: 8px 30px !important;
  border-radius: 10px;
  max-width: 65% !important;
  min-width: 65% !important;
  background: rgba(0, 0, 0, 0.38);
}

yt-live-chat-membership-item-renderer #message,
yt-live-chat-membership-item-renderer #message * {
  color: var(--membership-message-color) !important;
  font-family: var(--font-family-secondary) !important;
  font-size: var(--membership-message-font-size, 20px) !important;
  font-weight: 400 !important;
  line-height: normal !important;
  text-align: center !important;
}

/* TYPE GIFT */
ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
  /* margin-top: 20px !important; */
  /* margin-bottom: 20px !important; */
  /* border: 1px solid red; */
  margin: 0 auto !important;
  margin-bottom: 15px !important;
  margin-top: 15px !important;
  padding: 0 !important;
  /* border: 1px solid red; */
  overflow: visible !important;
  position: relative !important;
  animation: slide-in-left 0.5s ease both !important;
  width: 60% !important;
}

ytd-sponsorships-live-chat-header-renderer {
  /* text-align: start !important; */
  /* margin-left: auto !important; */
  /* margin-right: auto !important; */
  /* padding: 0 !important; */
  overflow: visible !important;
  position: relative !important;
}

ytd-sponsorships-live-chat-header-renderer #header {
  /* background: var(--membership-background-color) !important; */
  background: transparent !important;
  position: relative !important;
  overflow: visible !important;
  transform-origin: bottom !important;
  z-index: 1 !important;
}

ytd-sponsorships-live-chat-header-renderer yt-live-chat-author-chip {
  /* background: var(--membership-background-name-color) !important; */
  line-height: normal !important;
  /* padding: 5px 20px !important; */
  /* margin-bottom: 10px !important; */
  /* border-radius: 50px !important; */
  font-size: unset !important;
  position: relative !important;
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
}

ytd-sponsorships-live-chat-header-renderer #author-name,
ytd-sponsorships-live-chat-header-renderer #author-name * {
  color: var(--membership-name-color) !important;
  font-family: var(--font-family-primary) !important;
  font-size: var(--membership-name-font-size, 20px) !important;
  line-height: normal !important;
  letter-spacing: 0px !important;
  font-weight: 500 !important;
  width: fit-content !important;
  max-width: 40vw !important;
  position: relative !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  z-index: 99 !important;
  text-align: center !important;
}

#content.ytd-sponsorships-live-chat-header-renderer {
  display: flex;
  flex-direction: row;
  padding: 0 !important;
  width: 100% !important;
  position: relative !important;
}

ytd-sponsorships-live-chat-header-renderer #content {
  overflow: visible !important;
  position: relative !important;
  padding: 20px 0px !important;
  border-radius: 10px !important;
  border: 3px solid var(--alert-border) !important;
  background: var(--alert-bg) !important;
}

ytd-sponsorships-live-chat-header-renderer #content::after {
  content: '';
  position: absolute;
  right: -70px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond-right) no-repeat;
}

ytd-sponsorships-live-chat-header-renderer #content::before {
  content: '';
  position: absolute;
  left: -10px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond) no-repeat;
}

ytd-sponsorships-live-chat-header-renderer #header-content {
  /* flex-wrap: initial !important; */
  /* text-align: center !important; */
  /* align-items: start !important; */
  /* align-content: start !important; */
  /* overflow: visible !important; */
  position: relative !important;
  width: 100% !important;
  padding: 20px 10px !important;
  /* margin-left: auto !important; */
  /* margin-right: auto !important; */
  /* justify-content: center !important; */
  /* display: flex !important; */
  /* width: 70vw !important; */
  /* align-self: center !important; */
  /* padding: 0px 20px 0px 20px !important; */
}

ytd-sponsorships-live-chat-header-renderer #author-photo {
  display: none !important;
  margin-left: 10px !important;
  transform: scale(1.8) !important;
  bottom: 22px !important;
  left: 15px !important;
  position: absolute !important;
}

ytd-sponsorships-live-chat-header-renderer #header-content-primary-column {
  /* text-align: center !important; */
  /* align-items: center !important; */
  /* align-content: center !important; */
  overflow: visible !important;
  width: 100% !important;
  /* position: relative !important; */
  /* margin-left: auto !important; */
  /* margin-right: auto !important; */
  /* justify-content: center !important; */
  /* width: 90vw !important; */
  /* align-self: center !important; */
  /* margin: 0 !important; */
}
ytd-sponsorships-live-chat-header-renderer #header-content-inner-column {
  /* text-align: center !important; */
  /* align-items: center !important; */
  /* align-content: start !important; */
  /* overflow: visible !important; */
  /* position: relative !important; */
  /* margin-left: auto !important; */
  /* margin-right: auto !important; */
  /* justify-content: start !important; */
  /* width: 100% !important; */
  /* align-self: center !important; */
  /* margin: 0 !important; */
}

ytd-sponsorships-live-chat-header-renderer #content {
  overflow: visible !important;
  position: relative !important;
  /* padding: 0 !important; */
  /* margin: 0 !important; */
}

ytd-sponsorships-live-chat-header-renderer #primary-text {
  /* display: flex !important; */
  position: relative !important;
  overflow: visible !important;
  color: var(--membership-name-color) !important;
  font-family: var(--font-family-secondary) !important;
  font-weight: 500 !important;
  font-size: var(--membership-other-text-font-size) !important;
  line-height: normal !important;
  background: transparent !important;
  white-space: unset !important;
  letter-spacing: 0.4px;
  /* padding: 0 !important; */
  /* margin: 0 !important; */
  max-height: fit-content !important;
  /* padding-right: 60px !important; */
  z-index: 100;
  text-align: center !important;
}
#header.ytd-sponsorships-live-chat-header-renderer {
  box-shadow: none !important;
}

.rhs-image.ytd-sponsorships-live-chat-header-renderer {
  display: none !important;
  /* display: block !important;
  position: absolute !important;
  bottom: -20px !important;
  right: -20px !important; */
  transform-origin: bottom left !important;
  /* animation: scale-in-bl-logo 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.3s both; */
}

.rhs-image.ytd-sponsorships-live-chat-header-renderer #img {
  transform: scale(0.7) !important;
  object-fit: cover !important;
}

ytd-sponsorships-live-chat-header-renderer #header #content #img {
  display: block !important;
}

[hidden] {
  display: none !important;
}

/* TYPE STICKER */
yt-live-chat-paid-sticker-renderer {
  /* text-align: center !important; */
  margin: 0 auto !important;
  margin-bottom: 15px !important;
  margin-top: 15px !important;
  /* padding: 0 !important; */
  /* border: 1px solid red; */
  overflow: visible !important;
  position: relative !important;
  animation: slide-in-left 0.5s ease both !important;
  width: 60% !important;
}

yt-live-chat-paid-sticker-renderer.yt-live-chat-item-list-renderer {
  padding: 0px !important;
}

yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #card.yt-live-chat-paid-sticker-renderer {
  background: transparent !important;
  overflow: visible !important;
  box-shadow: none !important;
  position: relative;
  transform-origin: bottom !important;
  z-index: 10 !important;
  display: flex !important;
  flex-direction: column !important;
  padding: 0 !important;
}

yt-live-chat-paid-sticker-renderer #author-photo {
  display: none !important;
}

yt-live-chat-paid-sticker-renderer #author-info {
  position: relative !important;
  overflow: visible !important;
  z-index: 2 !important;
  padding: 20px 0px !important;
  padding-left: 150px !important;
  padding-top: 35px !important;
  border-radius: 10px !important;
  border: 3px solid var(--alert-border) !important;
  background: var(--alert-bg) !important;
}

yt-live-chat-paid-sticker-renderer #author-info::after {
  content: '';
  position: absolute;
  right: -70px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond-right) no-repeat;
}

yt-live-chat-paid-sticker-renderer #author-info::before {
  content: '';
  position: absolute;
  left: -10px;
  bottom: -55px;
  width: 100px;
  height: 100px;
  animation: grow-ear 0.4s linear both 0.3s, brighten 3s infinite 0.6s;
  transform-origin: 30% 50%;
  background: var(--alert-diamond) no-repeat;
}

yt-live-chat-paid-sticker-renderer #content {
  position: relative !important;
  overflow: visible !important;
  align-self: center !important;
  z-index: 0;
  display: flex !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}

#content-primary-column.yt-live-chat-paid-sticker-renderer {
  display: flex !important;
  justify-content: center !important;
  flex-direction: column !important;
  align-items: start !important;
  width: 100% !important;
  padding: 0 !important;
}

yt-live-chat-paid-sticker-renderer #author-name-chip {
  position: relative !important;
  padding: 0 !important;
  text-align: center !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  z-index: 100 !important;
}

yt-live-chat-paid-sticker-renderer yt-live-chat-author-chip {
  /* background: var(--sc-background-name-color) !important; */
  /* padding: 5px 20px !important; */
  /* margin-bottom: 10px !important; */
  /* border-radius: 50px !important; */
  position: relative !important;
  /* z-index: -1 !important; */
  z-index: 100 !important;
}

yt-live-chat-paid-sticker-renderer #author-name {
  display: flex !important;
  align-items: center !important;
  margin-bottom: 6px;
  margin-right: 8px !important;
  height: 100% !important;

  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  max-width: 23vw !important;
}

yt-live-chat-paid-sticker-renderer #author-name,
yt-live-chat-paid-sticker-renderer #author-name * {
  font-family: var(--font-family-primary) !important;
  font-size: var(--sc-name-font-size, 20px) !important;
  text-align: center !important;
  font-weight: 500 !important;
  line-height: normal !important;
  width: fit-content !important;
  position: relative !important;
  z-index: 100 !important;
  color: var(--membership-name-color) !important;
}

yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #price-column.yt-live-chat-paid-sticker-renderer {
  justify-self: start;
  display: flex !important;
  justify-content: center !important;
  padding: 0 !important;
  width: 100% !important;
}

yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #purchase-amount-chip.yt-live-chat-paid-sticker-renderer {
  /* display: block !important;   */
  /* font-size: 15px; */
  /* padding-right: 8px; */
  /* width: 100% !important; */
  /* margin-left: auto !important; */
}
yt-live-chat-paid-sticker-renderer #price-column {
  margin-top: 10px !important;
  height: 100% !important;
}

yt-live-chat-paid-sticker-renderer #purchase-amount-chip {
  font-family: var(--font-family-secondary) !important;
  font-size: var(--sc-amount-font-size) !important;
  color: var(--membership-amount-color) !important;
  font-weight: 500 !important;
  /* padding: 10px 0px 10px 0px !important; */
  z-index: 100 !important;
  position: relative !important;
  /* margin-top: -15px !important; */
  /* width: 70vw !important; */
  width: 100% !important;
  display: flex !important;
  justify-content: left !important;
}

yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #sticker-container.yt-live-chat-paid-sticker-renderer {
  /* margin: 0; */
  /* margin-left: auto; */
}

yt-live-chat-paid-sticker-renderer #sticker-container {
  /* position: absolute !important; */
  /* bottom: 10px !important; */
  /* left: 50% !important; */
  width: 40% !important;
  height: 100%;
  /* position: absolute !important; */
  display: flex !important;
  justify-content: center !important;
  position: absolute !important;
  right: 40px !important;
  /* transform: translate(50%, 0%) !important; */
  z-index: 99 !important;
  animation: slide-in-bottom 0.4s ease both !important;
}

yt-live-chat-paid-sticker-renderer #sticker-container img {
  height: 55px !important;
  width: 55px !important;
  object-fit: contain;
}

#inline-action-button-container.yt-live-chat-paid-sticker-renderer {
  position: absolute;
  top: -4px;
  right: 0;
  bottom: -4px;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
}

#menu.yt-live-chat-paid-sticker-renderer {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  transform: translateX(100px);
  display: none !important;
}

ytd-sponsorships-live-chat-header-renderer #chat-badges {
  white-space: nowrap;
}

ytd-sponsorships-live-chat-header-renderer
  #chat-badges
  yt-live-chat-author-badge-renderer {
  margin: 0 0 0 2px;
  vertical-align: sub;
}

yt-live-chat-author-badge-renderer {
  display: none !important;
}

yt-live-chat-text-message-renderer[author-type='moderator']
  yt-live-chat-author-badge-renderer {
  display: none !important;
}

yt-live-chat-text-message-renderer[author-type='member']
  yt-live-chat-author-badge-renderer {
  position: absolute;
  right: 20px;
  top: 6px;
  display: none !important;
}

yt-live-chat-text-message-renderer[author-type='member']
  yt-live-chat-author-badge-renderer
  img {
  width: 18px !important;
  height: 18px !important;
}

#menu {
  display: none !important;
}

yt-live-chat-membership-item-renderer #menu,
ytd-sponsorships-live-chat-gift-purchase-announcement-renderer #menu {
  display: none !important;
}

yt-live-chat-moderation-message-renderer {
  display: none !important;
}

/* yt-live-chat-paid-message-renderer {
  margin: 4px 0 !important;
  padding-left: 10px !important;
} */

yt-live-chat-legacy-paid-message-renderer {
  background-color: transparent !important;
  margin: 4px 0 !important;
}

yt-live-chat-legacy-paid-message-renderer {
  width: 60% !important;
}

/* 
yt-live-chat-text-message-renderer a,
yt-live-chat-legacy-paid-message-renderer a {
  text-decoration: none !important;
} */

yt-live-chat-text-message-renderer[is-deleted],
yt-live-chat-legacy-paid-message-renderer[is-deleted] {
  display: none !important;
}

yt-live-chat-ticker-renderer {
  background-color: transparent !important;
  box-shadow: none !important;
}

yt-live-chat-ticker-renderer {
  display: none !important;
}

yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
  color: #ffffff !important;
  font-family: 'Quicksand';
}

yt-live-chat-mode-change-message-renderer,
yt-live-chat-viewer-engagement-message-renderer,
yt-live-chat-restricted-participation-renderer {
  display: none !important;
}

yt-live-chat-banner-manager {
  display: none !important;
}

yt-live-chat-action-panel-renderer,
yt-live-chat-renderer #action-panel {
  display: none !important;
}

#reaction-control-panel-overlay {
  display: none !important;
}

/* new */
yt-live-chat-item-bumper-view-model,
#lower-bumper,
#input-container,
#footer,
#buy-flow-button,
#inline-action-button-container,
#creator-heart-button {
  display: none !important;
}
/* ----- */

#panel-pages {
  border: none !important;
}

#separator {
  display: none !important;
}

#menu {
  display: none !important;
}

/* LIKES */
#action-buttons.yt-live-chat-paid-message-renderer {
  display: none !important;
}

/* FOTOS DE SP */
#author-photo.yt-live-chat-paid-message-renderer {
  height: 32px;
  width: 32px;
  display: none !important;
}

#author-photo.yt-live-chat-paid-message-renderer {
  display: none !important;
}

#single-line.yt-live-chat-paid-message-renderer {
  display: flex !important;
  flex-direction: column !important;
}

#single-line #author-name-chip {
  text-align: left;
}

#like-button {
  display: none !important;
}

#author-photo.yt-live-chat-paid-message-renderer {
  display: none !important;
}

#single-line.yt-live-chat-paid-message-renderer {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

#single-line #author-name-chip {
  text-align: left;
}

#like-button {
  display: none !important;
}

`;
