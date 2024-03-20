export const STYLES = `
@import url(https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&display=swap);
#author-name.owner.yt-live-chat-author-chip,
body,
yt-live-chat-author-chip[is-highlighted]
  #author-name.owner.yt-live-chat-author-chip {
  background-color: transparent;
}
yt-live-chat-paid-message-renderer #header::after,
yt-live-chat-paid-message-renderer #header::before {
  content: '';
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 1;
  filter: saturate(60%) !important;
}
yt-live-chat-membership-item-renderer #header::after,
yt-live-chat-paid-message-renderer #header::after,
ytd-sponsorships-live-chat-header-renderer #content::after {
  background-image: url('data:image/png;base64,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');
  background-blend-mode: multiply;
  left: 0;
  width: 100%;
  bottom: 0;
  right: 0;
}
yt-live-chat-paid-message-renderer,
yt-live-chat-paid-sticker-renderer,
yt-live-chat-text-message-renderer {
  animation: 0.5s both slide-in-left !important;
  overflow: visible !important;
}
yt-live-chat-membership-item-renderer #author-name,
yt-live-chat-membership-item-renderer #author-name *,
yt-live-chat-paid-message-renderer #author-name.yt-live-chat-author-chip,
yt-live-chat-paid-sticker-renderer #author-name,
yt-live-chat-paid-sticker-renderer #author-name *,
yt-live-chat-text-message-renderer #author-name,
ytd-sponsorships-live-chat-header-renderer #author-name,
ytd-sponsorships-live-chat-header-renderer #author-name * {
  max-width: 40vw !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  position: relative !important;
}
yt-live-chat-legacy-paid-message-renderer,
yt-live-chat-renderer,
yt-live-chat-ticker-renderer {
  background-color: transparent !important;
}
:root {
  --font-family: 'Ibarra Real Nova', serif;
  --all-background-message-color: linear-gradient(
    98deg,
    #2d2940 12%,
    #3a3652 61%
  );
  --all-background-color: #343049;
  --all-message-color: #ffffff;
  --all-border-name-color: #e5e2db;
  --all-name-color: #e5e2db;
  --all-badge-color: #acb8ff;
  --all-gradient-color-1: #3430497c;
  --all-gradient-color-2: #34304918;
  --membership-name-color: #e5e2db;
  --membership-subtext-color: #acb8ff;
  --membership-other-text-color: #acb8ff;
  --membership-message-color: #ffffff;
  --membership-background-color: #343049;
  --membership-border-color: #e5e2db;
  --membership-background-message-color: #343049;
  --membership-border-message-color: #e5e2db;
  --name-font-size: 20px;
  --message-font-size: 20px;
  --sc-name-font-size: 20px;
  --sc-amount-font-size: 14px;
  --sc-message-font-size: 14px;
  --membership-name-font-size: 20px;
  --membership-subtext-font-size: 15px;
  --membership-other-text-font-size: 15px;
  --membership-message-font-size: 14px;
}
body {
  overflow: hidden;
}
yt-live-chat-text-message-renderer,
yt-live-chat-text-message-renderer[is-highlighted] {
  width: fit-content;
}
yt-live-chat-text-message-renderer[author-type='member'],
yt-live-chat-text-message-renderer[author-type='member'][is-highlighted],
yt-live-chat-text-message-renderer[author-type='moderator'],
yt-live-chat-text-message-renderer[author-type='moderator'][is-highlighted],
yt-live-chat-text-message-renderer[author-type='owner'],
yt-live-chat-text-message-renderer[author-type='owner'][is-highlighted] {
  background-color: transparent !important;
  width: fit-content;
}
yt-live-chat-text-message-renderer * {
  width: fit-content !important;
}
yt-live-chat-author-chip #author-name {
  background-color: transparent important;
}
yt-live-chat-renderer * {
  font-family: Nunito;
}
yt-live-chat-legacy-paid-message-renderer #content,
yt-live-chat-text-message-renderer #content {
  overflow: initial !important;
}
yt-live-chat-item-list-renderer #items {
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
}
yt-live-chat-item-list-renderer #item-scroller {
  overflow: hidden !important;
}
#author-photo,
#buy-flow-button,
#creator-heart-button,
#footer,
#inline-action-button-container,
#input-container,
#lower-bumper,
#menu,
#reaction-control-panel-overlay,
#separator,
[hidden],
yt-live-chat-action-panel-renderer,
yt-live-chat-author-badge-renderer,
yt-live-chat-banner-manager,
yt-live-chat-header-renderer,
yt-live-chat-item-bumper-view-model,
yt-live-chat-legacy-paid-message-renderer,
yt-live-chat-legacy-paid-message-renderer[is-deleted],
yt-live-chat-membership-item-renderer #author-photo,
yt-live-chat-membership-item-renderer #menu,
yt-live-chat-membership-item-renderer[show-only-header] #content,
yt-live-chat-message-input-renderer,
yt-live-chat-mode-change-message-renderer,
yt-live-chat-moderation-message-renderer,
yt-live-chat-paid-message-renderer[is-v2-style]
  #author-photo.yt-live-chat-paid-message-renderer,
yt-live-chat-paid-message-renderer[show-only-header] #content,
yt-live-chat-renderer #action-panel,
yt-live-chat-restricted-participation-renderer,
yt-live-chat-text-message-renderer[is-deleted],
yt-live-chat-viewer-engagement-message-renderer,
ytd-sponsorships-live-chat-gift-purchase-announcement-renderer #menu,
ytd-sponsorships-live-chat-gift-redemption-announcement-renderer {
  display: none !important;
}
yt-live-chat-legacy-paid-message-renderer,
yt-live-chat-paid-message-renderer #header,
yt-live-chat-text-message-renderer {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
yt-live-chat-legacy-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo {
  display: inline !important;
}
yt-live-chat-text-message-renderer #author-badges {
  vertical-align: text-top !important;
}
yt-live-chat-membership-item-renderer #timestamp,
yt-live-chat-text-message-renderer #timestamp {
  color: #999 !important;
  font-family: Quicksand;
  font-size: 16px !important;
  line-height: 16px !important;
  display: none !important;
}
yt-live-chat-text-message-renderer #chat-badges {
  align-self: center !important;
  z-index: 3 !important;
  order: 2;
}
yt-live-chat-text-message-renderer
  yt-live-chat-author-badge-renderer[type='moderator']
  yt-icon {
  color: var(--moderator-name-color) !important;
  width: 15px !important;
  height: 15px !important;
  position: relative !important;
  display: none !important;
}
yt-live-chat-text-message-renderer
  yt-live-chat-author-badge-renderer[type='member']
  * {
  position: relative !important;
  width: 15px !important;
  height: 15px !important;
  display: none !important;
}
yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  overflow: visible !important;
  position: relative !important;
  top: -8px !important;
  left: -15px !important;
  z-index: 3 !important;
  height: 40px !important;
  display: flex !important;
  align-items: center !important;
}
yt-live-chat-text-message-renderer #author-name {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  font-family: var(--font-family) !important;
  font-size: var(--name-font-size) !important;
  font-weight: 600 !important;
  overflow: hidden !important;
  letter-spacing: 0.5px !important;
  width: fit-content !important;
  z-index: 3 !important;
  padding: 0 !important;
  color: var(--all-name-color) !important;
}
yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
  display: flex;
  justify-content: start;
  align-items: center !important;
  font-family: var(--font-family) !important;
  color: var(--all-badge-color);
  content: '•';
  font-size: 13px;
  font-weight: 900;
  width: 30px;
  height: 23px;
  right: -35px;
  position: absolute;
  z-index: 99;
}
yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
  display: flex;
  justify-content: start;
  align-items: center !important;
  font-family: var(--font-family) !important;
  color: var(--all-badge-color);
  content: '';
  width: 30px;
  height: 100%;
  font-size: 10px;
  font-weight: 900;
  right: -45px;
  position: absolute;
  top: 0 !important;
  z-index: 99;
}
yt-live-chat-text-message-renderer[author-type='owner']
  yt-live-chat-author-chip::before {
  content: 'STREAMER';
}
yt-live-chat-text-message-renderer[author-type='moderator']
  yt-live-chat-author-chip::before {
  content: 'MOD';
}
yt-live-chat-text-message-renderer[author-type='member']
  yt-live-chat-author-chip::before {
  content: 'MEMBER';
}
yt-live-chat-text-message-renderer[author-type='']
  yt-live-chat-author-chip::before {
  content: 'VIEWER';
}
yt-live-chat-text-message-renderer {
  position: relative !important;
  width: fit-content !important;
  min-width: 25% !important;
  margin: 10px 20px !important;
  padding: 0 !important;
  contain: none !important;
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
yt-live-chat-text-message-renderer #content {
  max-width: 100% !important;
  z-index: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  margin-top: 5px;
  position: relative !important;
  width: 100% !important;
  order: 0 !important;
}
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  font-family: var(--font-family) !important;
  font-size: var(--message-font-size, 20px) !important;
  font-weight: 400 !important;
  line-height: 100% !important;
  text-align: start !important;
  word-break: break-all;
  color: var(--all-message-color) !important;
}
yt-live-chat-text-message-renderer #message {
  display: block !important;
  max-width: 100% !important;
  padding: 10px 25px 10px 15px !important;
  margin-top: -25px !important;
  position: relative !important;
  overflow: visible !important;
  text-overflow: ellipsis !important;
  z-index: 1 !important;
  border-left: 3px solid var(--all-border-name-color);
  background: var(--all-background-message-color);
}
yt-live-chat-paid-message-renderer {
  text-align: center !important;
  margin: 5px 20px !important;
  padding: 6px 4px !important;
  border: 3px solid var(--all-border-name-color) !important;
  font-size: unset !important;
  border-radius: 5px !important;
  position: relative !important;
  background-color: var(--all-background-color) !important;
}
yt-live-chat-paid-message-renderer #card {
  border-radius: 2px !important;
  position: relative !important;
  border: 2px solid var(--all-border-name-color) !important;
  box-shadow: none !important;
  font-size: unset !important;
  transform-origin: bottom !important;
  z-index: 1 !important;
  animation: none !important;
}
yt-live-chat-paid-message-renderer #header {
  padding: 15px 0 !important;
  border-radius: 0 !important;
  background: inherit !important;
}
yt-live-chat-paid-message-renderer #header::before {
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit !important;
}
yt-live-chat-paid-message-renderer #author-name.yt-live-chat-author-chip {
  display: flex !important;
  height: 100% !important;
  align-items: center !important;
  font-family: var(--font-family) !important;
  font-size: var(--sc-name-font-size) !important;
  font-weight: 600 !important;
  letter-spacing: 0 !important;
  overflow: hidden !important;
  z-index: 100 !important;
}
yt-live-chat-paid-message-renderer[is-v2-style]
  #purchase-amount-column.yt-live-chat-paid-message-renderer {
  z-index: 100 !important;
}
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  font-family: var(--font-family) !important;
  font-size: var(--sc-amount-font-size) !important;
  font-weight: 700 !important;
  margin-left: 8px !important;
  position: relative !important;
  bottom: 0 !important;
}
yt-live-chat-paid-message-renderer #purchase-amount::before {
  content: '•';
  position: absolute;
  left: -10px;
  top: -1px;
  font-size: var(--sc-name-font-size);
  margin-right: 5px;
  margin-left: 3px;
}
yt-live-chat-paid-message-renderer #content {
  background-color: var(--all-background-color) !important;
  border-radius: 0 !important;
  padding: 12px 0 !important;
}
yt-live-chat-paid-message-renderer #message,
yt-live-chat-paid-message-renderer #message * {
  text-align: center !important;
  font-family: var(--font-family) !important;
  color: var(--all-message-color) !important;
  font-size: var(--sc-message-font-size) !important;
  font-weight: 400 !important;
}
yt-live-chat-paid-message-renderer[is-v2-style]
  #single-line.yt-live-chat-paid-message-renderer {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  height: 100% !important;
}
yt-live-chat-membership-item-renderer,
ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
  margin: 5px 20px !important;
  padding: 0 !important;
  overflow: visible !important;
  position: relative !important;
  animation: 0.5s both slide-in-left !important;
}
yt-live-chat-membership-item-renderer #card {
  background: var(--membership-background-color) !important;
  border: 3px solid var(--membership-border-color) !important;
  border-radius: 2px !important;
  position: relative !important;
  overflow: visible !important;
  padding: 6px 4px !important;
  box-shadow: none !important;
  transform-origin: bottom !important;
  z-index: 100 !important;
}
yt-live-chat-membership-item-renderer #header {
  border: 2px solid var(--all-border-name-color);
  border-radius: 2px !important;
  background: var(--membership-background-color) !important;
  overflow: visible !important;
  margin: 0 !important;
  padding: 20px 10px !important;
  position: relative !important;
  z-index: 100 !important;
}
yt-live-chat-membership-item-renderer #header::after,
ytd-sponsorships-live-chat-header-renderer #content::after {
  content: '';
  position: absolute;
  height: 100%;
  top: 0;
  filter: brightness(4);
  z-index: 1;
}
yt-live-chat-membership-item-renderer #header::before,
ytd-sponsorships-live-chat-header-renderer #content::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, #343049c4 30%, #34304918 81%),
    linear-gradient(180deg, #e5e2db1e 9%, #e5e2db15 81%);
  z-index: 2;
}
yt-live-chat-membership-item-renderer[show-only-header]
  #header.yt-live-chat-membership-item-renderer {
  position: relative !important;
}
yt-live-chat-membership-item-renderer #header-content {
  text-align: center !important;
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
yt-live-chat-membership-item-renderer #author-photo,
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
  #header-subtext.yt-live-chat-membership-item-renderer,
yt-live-chat-membership-item-renderer[has-primary-header-text]:not(
    [dashboard-money-feed]
  )
  yt-live-chat-author-chip.yt-live-chat-membership-item-renderer {
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
  font-family: var(--font-family) !important;
  font-size: var(--membership-name-font-size, 20px) !important;
  text-align: start !important;
  letter-spacing: 0 !important;
  width: fit-content !important;
  overflow: hidden !important;
  z-index: 20 !important;
}
yt-live-chat-membership-item-renderer #header-primary-text {
  color: var(--membership-other-text-color) !important;
  font-size: var(--membership-other-text-font-size) !important;
  font-family: var(--font-family) !important;
  position: relative !important;
  z-index: 20 !important;
}
yt-live-chat-membership-item-renderer #header-subtext {
  color: var(--membership-subtext-color) !important;
  font-size: var(--membership-subtext-font-size) !important;
  font-family: var(--font-family) !important;
  letter-spacing: 1px !important;
  font-weight: 700 !important;
  position: relative !important;
  z-index: 20 !important;
}
yt-live-chat-membership-item-renderer #content {
  background: 0 0 !important;
  font-family: var(--font-family) !important;
  position: relative !important;
  overflow: visible !important;
  padding: 0 !important;
  margin: 0 !important;
}
yt-live-chat-membership-item-renderer #message {
  background: var(--all-background-color) !important;
  border-radius: 0 0 2px 2px !important;
  border: 2px solid var(--all-border-name-color) !important;
  position: relative;
  padding: 15px 1px !important;
  top: -2px;
}
yt-live-chat-membership-item-renderer #message::before {
  content: '';
  width: 100%;
  border-top: 3px solid var(--all-background-color) !important;
  top: -2px;
  left: 0;
  position: absolute;
  z-index: 100;
}
yt-live-chat-membership-item-renderer #message,
yt-live-chat-membership-item-renderer #message * {
  color: var(--membership-message-color) !important;
  font-family: var(--font-family) !important;
  font-size: var(--membership-message-font-size, 20px) !important;
  font-weight: 500 !important;
  line-height: normal !important;
  text-align: center !important;
}
ytd-sponsorships-live-chat-header-renderer {
  overflow: visible !important;
  position: relative !important;
}
ytd-sponsorships-live-chat-header-renderer #header {
  background: var(--membership-background-color) !important;
  border: 3px solid var(--membership-border-color) !important;
  padding: 6px 4px !important;
  position: relative !important;
  overflow: visible !important;
  transform-origin: bottom !important;
  z-index: 1 !important;
}
ytd-sponsorships-live-chat-header-renderer yt-live-chat-author-chip {
  line-height: normal !important;
  font-size: unset !important;
  position: relative !important;
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
}
ytd-sponsorships-live-chat-header-renderer #author-name,
ytd-sponsorships-live-chat-header-renderer #author-name * {
  color: var(--membership-name-color) !important;
  font-family: var(--font-family) !important;
  font-size: var(--membership-name-font-size, 20px) !important;
  text-align: center !important;
  line-height: normal !important;
  letter-spacing: 0 !important;
  font-weight: 500 !important;
  width: fit-content !important;
  overflow: hidden !important;
  z-index: 99 !important;
}
#content.ytd-sponsorships-live-chat-header-renderer {
  display: flex;
  flex-direction: row;
  padding: 0 !important;
  width: 100% !important;
  position: relative !important;
}
ytd-sponsorships-live-chat-header-renderer #content {
  background: var(--membership-background-color) !important;
  border: 2px solid var(--membership-border-color) !important;
  border-radius: 2px !important;
  padding: 20px 10px !important;
  margin: 0 !important;
  overflow: visible !important;
  position: relative !important;
}
ytd-sponsorships-live-chat-header-renderer #header-content {
  position: relative !important;
  width: 100% !important;
  padding: 20px 10px !important;
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
  overflow: visible !important;
  width: 100% !important;
}
ytd-sponsorships-live-chat-header-renderer #primary-text {
  position: relative !important;
  overflow: visible !important;
  color: var(--membership-other-text-color) !important;
  font-family: var(--font-family) !important;
  font-weight: 500 !important;
  font-size: var(--membership-other-text-font-size) !important;
  line-height: normal !important;
  background: 0 0 !important;
  white-space: unset !important;
  letter-spacing: 0.4px;
  text-align: center !important;
  max-height: fit-content !important;
  z-index: 100;
}
.rhs-image.ytd-sponsorships-live-chat-header-renderer {
  display: none !important;
  transform-origin: bottom left !important;
}
.rhs-image.ytd-sponsorships-live-chat-header-renderer #img {
  transform: scale(0.7) !important;
  object-fit: cover !important;
}
ytd-sponsorships-live-chat-header-renderer #header #content #img {
  display: block !important;
}
yt-live-chat-paid-sticker-renderer {
  margin: 5px 20px !important;
  background: var(--all-background-color) !important;
  border: 3px solid var(--membership-border-color) !important;
  border-radius: 4px !important;
  padding: 6px 4px !important;
  position: relative !important;
}
yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #card.yt-live-chat-paid-sticker-renderer {
  border: 2px solid var(--membership-border-color) !important;
  border-radius: 2px !important;
  overflow: visible !important;
  padding: 20px 10px !important;
  box-shadow: none !important;
  position: relative;
  transform-origin: bottom !important;
  z-index: 10 !important;
}
yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #card.yt-live-chat-paid-sticker-renderer::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit !important;
  filter: saturate(60%) !important;
  z-index: 0 !important;
}
yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #card.yt-live-chat-paid-sticker-renderer::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXCAYAAAB0zH1SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoXSURBVHgBjVdbbxvHFZ7rLpe7S5G6kLRN27KqWI4ct3aZRFDiBGyQtHXrXJpCRtEL0Mf+DPVP5KUPfUiDolaR1klqt2mBEEncxG2UGG6q2IZgCIkVSqJEUrztZXZneoaWZFq2jM4TuTsze67f9x2MYJUQYk5xn+G6brLdxa7ChDmWErWaUX332rUO2lozCFH09NiBgCcMcw2tzC0sdEqlEh1BawkUoLygkuh9lGAVS4V3/+ahEpu+uTYwMeHPzc3Jn54+ke4iMSI7qv3WZzcqsEVtfQqfmRp3TZoYoSwmIZKR6qjWsBu2O+UlMYdQjNGupY0zpsbtpqJDKkEYIsn6O+X59e33s6USu+qvFALCqCFQqJhnEsp7BnOiRExMgWIRRyGVvQNMUEw5/BGMSsz1I9gQJWMcIJNZoSTBhfc/X4bHcsfoZ8aHTcUyiKEw8KLa1JnF9uzszvs7m9AeCyLJHPHlfoaNhMVk7fflm+szMzO0W7mS4jI1GMUxUTyKTcy8SMq2uf9Gd24Oxeghq1RCLI1OOlHQtRmWCQTOE3BCMlE7WVpqgnFqpjSZ8zzlGgZq0/xja5CZB96JXy2NFyKSEKLje1NXwLO7nvei33lidMSyLFfEskM4NlCEDEWY1+mYzdMvzrd2R+L/XednEP3tl+O2wmwwwZBBJA5CFUfgii0F23zryudr6G7p9GyplkbdFHFMFEAWX3x24ggWEeXcwARqCXVE7fz8rSbeOnRmfNxM7ueHenUaQepUVLv48WIL47uX9gcCskKq1SputVq9bELfKMienJ2dVf2G7BgEWUS35h2f8kFqYK7LrUr2fVUulyN05wD+0ZPHBmOkUgaUri8hy0yF+nJcLBbZhBU63UgM6MNwtnH+g8X1c5OTPLRJDpuRFQZ+80l7aX22jKL+D+uLHy8WrYPpjiV9ZeqsSGgAstWoMiZS8ThWIhFaSHi22e2OlpfCWXRvpmYmJw0vH42wkNiERV06slg5fhypT/9+Ks+pb8ehJ7ggdeQlPAAFcU+Nw2Xk8qmJvG1jB0vRiKLINhJJlgjE6u92RXkGUu3dOprB9A4KMa4wNFJMDeLHTIZmwHqGYWZQbHQNGSZMRCIaCawYVoJj0pz7aKGB+hxQCuFzT01mJFdDJA4C3ehSKTfoRPWpl3++AVnb2Xtfc2rjP3nu6D7tuTbEcY3VufJCuz/C5743mREtktFQxVHot+qinYydDkQiRHsvXBodNZ1Rw2E+cSKFuYbcTUCNi1cWW7ivjM5MTaUkaWUtyJrn4dbf5r9YQbvKjJ6dPnpgctyl15cavn5Qgg+sHkwPxCFjimTWLly+umM0vGNvFx/NxUplQqWE6QUbk9+/tf6b85veQrX6UETRa6nRiG4ubXTt3OFOVrbDDkW2xbn7x2yWL3xd7W4bt7i8HJzYPwQoiq0EjqOF2xvNbed/ePpQ5pGxTBp+PDLGEWVhQJoX/72w+uozj+bDMHBiRFYvXVncPoB+WRpNNPxEXmLBSMzrf/7X9Rp6QLMBypByuUR0c+rG1M/ee68c79XMP3hiMmdZylXQ+DUjt7zdlPrd2eLRIWaRQR631+c+ul17+dlvHIwDI0HN0McaWwfjR0eiCNvmJqqJQTlMMG69+cEXlZ3UAbKwQbqfMk6C2K/2O6TXNlQ5gWErqkzwjeqa1+90cxIlI0lVKKK4vRtytYHPF8dSCWZmJUVh959fLJfRDgBgMLaAIwtgOGogAw3hpNH407vXqvRk9lgGqIQRgkxpqSS0VjQsnJX5SqV3OSAOdzNhAQiDcIOsXrh8o9Uf3XT32KA8nM/bmDoR7NFQpSLh4Zh1gI48QkOR4JIAD1iccXelkB44NnRI/eRXK2G5fCcLtyr14BuFdEQVHTBGs8kbX1Wbv976xncnh4JOF6eVgZK9QHRxMH4kx/Erp48d7Y8eZ0QKAMsw9n0ig6ZluBkBpNCoka/LC3ebVMNXnFf7MBBSCPtHOFo/9MKNzl6EpDPLWkXb4R1N5YaGvBoqrPSVBnqldDKNIj+rM17bwK1kFjlUxhBuwrb1jl4QaEGfHTncrA16TZR02ybqeG0hI4fFFGo8aSTslE8JN2UYLPlss7rVgEDLjo87eRUr1vajqnvkVPWNv77vb0fwQWtpCclblUpwYvo7rbC6AhulY0V158iJYW9xsda7Nz+aQEmJbYmwZdvIIQJQM5BCmKjl2vEmGhqqUzes17385p5aZRzq+liBuJaIkgL0CpBq7CmjnkJNz+d2PurEhKKByjvz891dR/EkENeYVWcbBlXpakJeWlzUMHmPU6D+APKMrA2Yfr2BK0cd6SIWpbV+4Sr0RUc2eZjs7gWxexq+vTQpvPD4WMraomQZC0mwpXhDrs71lY6+a2a6kBHKSfWQZ0sx6v0g1ASQafMvH/6n3n/3TLE4IO1uVohQ6f1ar9QMvFEqnev2k80DDX/pucdykBHo/CgabOJwPorEAlAquh/qADpPpKXnDXLDwIBI1TnQNHrf2bNF6PUwD7BBEQsC5LOuhSIhXNCxMeNIGpYANcgV8dupcPXSpcXgjqPTwJKNIZAaEhpZo1XrQd8FVDN4jhqmpDzCjDHaVfc1py78hFBhPXTb/5ifb+6+aHq6YOWUk+tpGoE3vLDux6a9z0QJhLps4+TVq83ZXTqkJ2cbo05kWiMM2LKx5K+ks8JGhjsUgTNWvTeU3FMSJSC7keKYHZJkCnNf9yftt3G7VAigBAsysWnywI4jnpRASkiy2ArCzYkXb9b60ULjtjd9NK8laG/CgYgFa+g21HKAHrKglCzJ3YL+DXlBBNHmffIV1GK0/OlQbJgp6SmMTRnhgHcF8j2nZfhoYSF+4AR05zCibdDKwLkZg4Dig9qz23z99V1jXHBqIkdAkBHQE2/O3yWsYhHxA+3hhG/ul09du+bN9k03r06NH5CcJUE8td+6fM+4hn4GDetxPAyajSrCvagSbH77BkAsuh9iH9qcmmD++/aY28V0iEIbmMisgaKr9UcnXv6kAOnmA65def3da50eVHbjEa2d9Z4Y5swgE1V0Xb/09IQL6JRjzOj0Tzc94QbjWhCpAT1WActuXPjwRnsPmbAVAZiAOjGPLep5PIiC4x/dDmZ3a+WZSSNcDXLAG4mAxPW3yzc3dgaNMyAHNuh+/TvRpsu+Ex/QY91gFlU7HkBxuzMI8RWbJK6mgmRB0z//+PpXOt3bRv8Y9JGWrxFMWVbh5sruEVDveWp6OpGL60liYgNGRUwnCtk8TLAm1LONmZmq7Bt2TxzMkoXb1QBtGbewUI2/+eTznc2VFSPByMCbB7IK3nv6nSaPbz1CQKUm0zDl2zrSrpJrb5QXm9eXVvzjhSzQHnMdSm0CY3Od+19fXGqIbaM+m3osh4hM6UHliTO/WH3ttfLdXoKSPTw0PvyH/EjWQkGaAO2DQQAuCP8PFehdZqzeGosAAAAASUVORK5CYII=');
  background-blend-mode: multiply;
  z-index: 1 !important;
}
yt-live-chat-paid-sticker-renderer #author-photo {
  margin-left: 10px !important;
  transform: scale(1.7) !important;
  bottom: 20px !important;
  left: 15px !important;
  position: absolute !important;
  display: none !important;
}
yt-live-chat-paid-sticker-renderer #author-info {
  display: flex !important;
  width: 100% !important;
  position: relative !important;
  overflow: visible !important;
  z-index: 2 !important;
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
  align-items: center !important;
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
  position: relative !important;
  z-index: 100 !important;
}
yt-live-chat-paid-sticker-renderer #author-name {
  display: flex !important;
  align-items: center !important;
  margin-bottom: 6px;
  margin-right: 8px !important;
  height: 100% !important;
}
yt-live-chat-paid-sticker-renderer #author-name::after {
  display: flex !important;
  align-items: center !important;
  content: '•';
  position: relative;
  left: 0;
  top: -1px;
  height: 100% !important;
  font-size: var(--sc-name-font-size) !important;
  margin-left: 8px !important;
  z-index: 100 !important;
}
yt-live-chat-paid-sticker-renderer #author-name,
yt-live-chat-paid-sticker-renderer #author-name * {
  font-family: var(--font-family) !important;
  font-size: var(--sc-name-font-size, 20px) !important;
  text-align: center !important;
  font-weight: 700 !important;
  line-height: normal !important;
  letter-spacing: 0 !important;
  width: fit-content !important;
  z-index: 100 !important;
}
yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed])
  #price-column.yt-live-chat-paid-sticker-renderer {
  display: flex !important;
  justify-content: center !important;
  padding: 0 !important;
}
yt-live-chat-paid-sticker-renderer #price-column {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
}
yt-live-chat-paid-sticker-renderer #purchase-amount-chip {
  font-family: var(--font-family) !important;
  font-size: var(--sc-amount-font-size) !important;
  font-weight: 700 !important;
  text-align: center !important;
  z-index: 100 !important;
  position: relative !important;
  height: fit-content !important;
}
yt-live-chat-paid-sticker-renderer #sticker-container {
  width: 100% !important;
  position: absolute !important;
  right: -40%;
  top: -20%;
  display: flex !important;
  justify-content: center !important;
  margin-top: 0 !important;
  z-index: 99 !important;
  animation: 0.4s both slide-in-bottom !important;
}
yt-live-chat-paid-sticker-renderer #sticker-container img {
  height: 95px !important;
  width: 95px !important;
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
yt-live-chat-author-badge-renderer[type='member'] {
  color: var(--yt-live-chat-sponsor-color, #107516);
}
yt-live-chat-legacy-paid-message-renderer {
  margin: 4px 0 !important;
  width: 60% !important;
}
yt-live-chat-ticker-renderer {
  box-shadow: none !important;
  display: none !important;
}
yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
  color: #fff !important;
  font-family: Quicksand;
}
#panel-pages {
  border: none !important;
}

`;
