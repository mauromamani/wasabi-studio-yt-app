/* eslint-disable @typescript-eslint/no-explicit-any */
import { StylesConfig } from '../../interfaces';
import { STYLES } from '../styles';

export const YT_CONTAINER_TESTING_ISOLATED = (
  customStyles: string,
  content: any[]
) => {
  return `
  <style>
    ${STYLES}


    html {
      background: transparent !important;
    }

    body {
      background: transparent !important;
    }

    yt-live-chat-text-message-renderer yt-live-chat-author-chip {
      top: 0px !important;
    }

    yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
      top: 10px !important;
    }

    yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
      top: 2px !important;
    }

    yt-live-chat-text-message-renderer #message {
      display: flex !important;
      align-items: center !important;
    }

    yt-live-chat-text-message-renderer #message > img:first-child {
      margin-left: 5px !important;
    }


    yt-live-chat-membership-item-renderer #message,
    yt-live-chat-paid-message-renderer #message {
      display: flex !important;
      justify-content: center !important;
      align-items: end !important;
    }

    yt-live-chat-membership-item-renderer #message > img:first-child,
    yt-live-chat-paid-message-renderer #message > img:first-child {
      margin-left: 5px !important;
      margin-bottom: 2px !important;
      vertical-align: middle !important;
    }

    body {
      overflow: hidden;
    }

    yt-live-chat-paid-message-renderer #card {
      background: var(--yt-live-chat-paid-message-primary-color) !important; 
    }

    yt-live-chat-paid-message-renderer #header {
      z-index: 0 !important;
    }

    yt-live-chat-paid-message-renderer #header #timestamp {
      display: none !important;
    }

    yt-live-chat-paid-message-renderer #header::before {
      z-index: 1 !important;
    }

    yt-live-chat-paid-message-renderer #header::after {
      z-index: 1 !important;
    }

    yt-live-chat-paid-message-renderer #content {
      position: relative !important;
      z-index: 10 !important;
    }

    yt-live-chat-author-chip[disable-highlighting] #author-name.yt-live-chat-author-chip {
      color: var(--yt-live-chat-disable-highlight-message-author-name-color, rgba(255, 255, 255, 0.7));
    }

    yt-live-chat-paid-message-renderer[is-v2-style] #purchase-amount-column.yt-live-chat-paid-message-renderer {
      color: var(--yt-live-chat-disable-highlight-message-author-name-color, rgba(255, 255, 255, 0.7));
      margin-top: 3px !important;
      margin-left: 5px !important;
    }

    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #card.yt-live-chat-paid-sticker-renderer {
      background: var(--yt-live-chat-paid-sticker-background-color) !important;
    }

    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #card.yt-live-chat-paid-sticker-renderer #timestamp {
      display: none !important;
    }


    .container {
      height: 91vh !important;
      background-color: transparent !important;
      width: 100%;
      position: relative;
      overflow: hidden;
      scroll-width: none;
    }

    #items {
      display: flex !important;
      flex-direction: column !important;
      position: absolute !important;
      bottom: 0 !important;
      width: 100% !important;
    }


    ${customStyles}

    yt-live-chat-text-message-renderer,
    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-paid-sticker-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
      animation: none !important;
    }

    #items > :last-child {
      animation: slide-in-left 0.5s ease both !important;
    }
  </style>

  <div class="container">
    <div class="fixed-container">
      <yt-live-chat-app>
        <div id="contents" class="style-scope yt-live-chat-app">
            <yt-live-chat-renderer class="style-scope yt-live-chat-app" hide-timestamps="" darker-dark-theme="" has-ticker="" has-input-action-panel="">
                <iron-pages id="content-pages" class="style-scope yt-live-chat-renderer">
                    <div id="chat-messages" class="style-scope yt-live-chat-renderer iron-selected">
                        <div id="contents" class="style-scope yt-live-chat-renderer">
                            <div id="chat" class="style-scope yt-live-chat-renderer">
                                <div id="item-list" class="style-scope yt-live-chat-renderer">
                                    <yt-live-chat-item-list-renderer class="style-scope yt-live-chat-renderer" allow-scroll="" id="live-chat-item-list-panel">
                                        <div id="contents" class="style-scope yt-live-chat-item-list-renderer">
                                            <div id="item-scroller" class="style-scope yt-live-chat-item-list-renderer animated">
                                                <div id="item-offset" class="style-scope yt-live-chat-item-list-renderer">
                                                    <div id="items" class="style-scope yt-live-chat-item-list-renderer widget-wrapper">
                                                      ${content
                                                        .map((c) => c())
                                                        .join('')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </yt-live-chat-item-list-renderer>
                                </div>
                            </div>
                        </div>
                    </div>
                </iron-pages>
            </yt-live-chat-renderer>
        </div>
      </yt-live-chat-app>
    </div>
  </div>
`;
};

export const YT_CONTAINER_EDITOR = (customStyles: string, content: any[]) => `
      <style>
        ${STYLES}

        ${customStyles}
        /* TODO LO DE ABAJO ES CSS PARA VISUALIZAR EN EL EDITOR, NO TIENE QUE AFECTAR AL PRODUCTO FINAL */
        yt-live-chat-app > * {
          overflow: visible !important;
        }

        yt-live-chat-text-message-renderer yt-live-chat-author-chip {
          height: 43px !important;
        }

        yt-live-chat-text-message-renderer #message {
          display: flex !important;
          align-items: center !important;
        }

        yt-live-chat-text-message-renderer #message > img:first-child {
          margin-left: 5px !important;
        }

        yt-live-chat-membership-item-renderer #message,
        yt-live-chat-paid-message-renderer #message {
          display: flex !important;
          justify-content: center !important;
          align-items: end !important;
        }

        yt-live-chat-membership-item-renderer #message > img:first-child,
        yt-live-chat-paid-message-renderer #message > img:first-child {
          margin-left: 5px !important;
          margin-bottom: 2px !important;
          vertical-align: middle !important;
        }
        
        yt-live-chat-paid-message-renderer #header #timestamp {
          display: none !important;
        }

        yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #card.yt-live-chat-paid-sticker-renderer #timestamp {
          display: none !important;
        }

        yt-live-chat-paid-sticker-renderer #price-column {
           margin-top: -6px !important;
           margin-left: -6px !important;
        }

        yt-live-chat-paid-sticker-renderer #sticker-container {
          align-items: center !important;
        }

        yt-live-chat-paid-sticker-renderer #author-info {
          padding: 20px 0px !important;
          padding-top: 18px !important;
        }

        yt-live-chat-text-message-renderer,
        yt-live-chat-membership-item-renderer,
        yt-live-chat-paid-message-renderer,
        yt-live-chat-paid-sticker-renderer,
        ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
          animation: none !important;
        }

        yt-live-chat-text-message-renderer #content::before {
          animation: none !important;
        }

        yt-live-chat-paid-message-renderer #content,
        yt-live-chat-paid-sticker-renderer #content,
        yt-live-chat-membership-item-renderer #content,
        yt-live-chat-text-message-renderer #content {
          animation: none !important;
        }


      </style>

        <div style="width: 70%;">
          <yt-live-chat-app>
            <div id="contents" class="style-scope yt-live-chat-app">
                <yt-live-chat-renderer class="style-scope yt-live-chat-app" hide-timestamps="" darker-dark-theme="" has-ticker="" has-input-action-panel="" style="--scrollbar-width: 17px;">
                    <iron-pages id="content-pages" class="style-scope yt-live-chat-renderer">
                        <div id="chat-messages" class="style-scope yt-live-chat-renderer iron-selected">
                            <div id="contents" class="style-scope yt-live-chat-renderer">
                                <div id="chat" class="style-scope yt-live-chat-renderer">
                                    <div id="item-list" class="style-scope yt-live-chat-renderer">
                                        <yt-live-chat-item-list-renderer class="style-scope yt-live-chat-renderer" allow-scroll="" id="live-chat-item-list-panel">
                                            <div id="contents" class="style-scope yt-live-chat-item-list-renderer">
                                                <div id="item-scroller" class="style-scope yt-live-chat-item-list-renderer animated">
                                                    <div id="item-offset" class="style-scope yt-live-chat-item-list-renderer">
                                                        <div id="items" class="style-scope yt-live-chat-item-list-renderer widget-wrapper" style="transform: translateY(0px)">
                                                          ${content
                                                            .map((c) => c())
                                                            .join('')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </yt-live-chat-item-list-renderer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </iron-pages>
                </yt-live-chat-renderer>
            </div>
          </yt-live-chat-app>
        </div>
`;

export const ROOT_STYLES = (config: StylesConfig) => {
  const scaleX = config.layoutAlign === 'start' ? '1' : '-1';

  return `
    :root {
      --font-family-primary: 'Pridi', serif;
      --font-family-secondary: 'Lato', serif;

      /* All */
      --all-username-bg: #5b3629;
      --all-message-border: #361c12;
      --all-background-color: #5b3629;
      --all-message-color: #ceb699;
      --all-name-color: #ceb699;

      /* All Alerts */
      --alert-bg: linear-gradient(
          90deg,
          rgba(158, 205, 235, 0.83) 0%,
          rgba(199, 138, 249, 0.83) 121.03%
        ),
        #fff;
      --alert-border: #f5efff;

      /* membership */
      --membership-name-color: #ceb699;
      --membership-subtext-color: #ceb699;
      --membership-other-text-color: #ceb699;
      --membership-message-color: #ffffff;
      --membership-background-color: #5b3629;
      --membership-border-color: #361c12;
      --membership-background-message-color: #343049;
      --membership-border-message-color: #e5e2db;
      --membership-amount-color: #ceb699;
      /* end-membership */

      /* chat-font-size */
      --name-font-size: ${config.chatAuthorFontSize}px;
      --message-font-size: ${config.chatMessageFontSize}px;
      /* end-chat-font-size */

      /* sc-font-size */
      --sc-name-font-size: ${config.supportCardTitleFontSize}px;
      --sc-amount-font-size: ${config.supportCardTitleFontSize - 2}px;
      --sc-message-font-size: ${config.supportCardMessageFontSize}px;
      /* end-sc-font-size */

      /* membership-font-size */
      --membership-name-font-size: ${config.supportCardTitleFontSize}px;
      --membership-subtext-font-size: ${config.supportCardSubTitleFontSize}px;
      --membership-other-text-font-size: ${
        config.supportCardOtherTextFontSize
      }px;
      --membership-message-font-size: ${config.supportCardMessageFontSize}px;
      /* end-membership-font-size */

      --streamer-badge: url('data:image/svg+xml,<svg width="${
        config.badgeFontSize + 7
      }" height="${
    config.badgeFontSize + 7
  }" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.39056 1.95154L10.6828 5.23176L14.7749 6.46022L12.2241 9.73711L12.7774 14.4796L8.50913 12.6616L4.12234 14.3215L4.47802 9.73711L1.90918 6.33834L6.01933 5.3108L8.39056 1.95154Z" stroke="url(%23paint0_radial_86_3)" stroke-width="2"/><defs><radialGradient id="paint0_radial_86_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.7914 17.3211) rotate(-141.896) scale(25.7557 2.91146)"><stop offset="0.775" stop-color="%23AAAAAA"/><stop offset="0.95" stop-color="%23D9D9D9"/></radialGradient></defs></svg>');
      --mod-badge: url('data:image/svg+xml,<svg width="${
        config.badgeFontSize + 5
      }" height="${
    config.badgeFontSize + 6
  }" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.25091 1.66577L5.03477 8.4049L3.23185 8.3713L3.67703 10.0094L1.5332 12.5126L3.24827 14.1813L5.53499 11.7745L7.19961 12.1474L7.03567 10.3304L13.5386 5.83761V1.66577H9.25091Z" stroke="url(%23paint0_radial_86_4)" stroke-width="2"/><defs><radialGradient id="paint0_radial_86_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.2865 17.0199) rotate(-139.984) scale(24.6932 2.83084)"><stop offset="0.775" stop-color="%23AAAAAA"/><stop offset="0.95" stop-color="%23D9D9D9"/></radialGradient></defs></svg>');
    }

    yt-live-chat-text-message-renderer {
      margin-top: ${config.layoutMarginY + 20}px !important;
      margin-bottom: ${config.layoutMarginY}px !important;
      margin-left: ${config.layoutMarginX}px !important;
      margin-right: ${config.layoutMarginX}px !important;
    }

    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-paid-sticker-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
      margin-top: ${config.layoutMarginY + 20}px !important;
      margin-bottom: ${config.layoutMarginY}px !important;
    }

    /* BADGES */
    yt-live-chat-text-message-renderer #author-name::before {
      position: absolute;
      content: '';
      display: ${config.badgeDisplayBadge ? 'flex' : 'none'} !important;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      z-index: 200;
    }

    yt-live-chat-text-message-renderer[author-type='owner'] #author-name::before {
      ${
        config.layoutAlign === 'end'
          ? 'right: -42px !important;'
          : 'left: -28px !important;'
      }
      top: ${config.badgeFontSize > 13 ? '15%' : '28%'};
    }
    
    yt-live-chat-text-message-renderer[author-type='moderator']
      #author-name::before {
      ${
        config.layoutAlign === 'end'
          ? 'right: -42px !important;'
          : 'left: -28px !important;'
      }
      top: ${config.badgeFontSize > 13 ? '15%' : '28%'};
    }

    /*  MEMBER BADGES */
    yt-live-chat-text-message-renderer[author-type='member']
      yt-live-chat-author-badge-renderer {
      position: absolute;
      left: 8px;
      top: ${config.badgeFontSize > 13 ? '15%' : '28%'};
      display: ${config.badgeDisplayBadge ? 'block' : 'none'} !important;
    }

    yt-live-chat-text-message-renderer[author-type='member']
      yt-live-chat-author-badge-renderer
      img {
      width: ${config.badgeFontSize + 8}px !important;
      height: ${config.badgeFontSize + 8}px !important;
    }

    /* HACER MAS CHICO EL CONTENEDOR CUANDO NO HAY BADGE */
    ${
      config.badgeDisplayBadge
        ? ''
        : `
      yt-live-chat-text-message-renderer yt-live-chat-author-chip {
        padding: 0px 20px 0px 20px;
      }
    `
    }

    /* EMOTE SIZE */
    yt-live-chat-text-message-renderer #message > img {
      width: ${config.chatEmoteSize}px !important;
      height: ${config.chatEmoteSize}px !important;
    }

    yt-live-chat-membership-item-renderer #message > img,
    yt-live-chat-paid-message-renderer #message > img {
      width: ${config.supportCardEmoteSize}px !important;
      height: ${config.supportCardEmoteSize}px !important;
    }

    /* UPPERCASE - LOWERCASE */
    yt-live-chat-text-message-renderer * {
      text-transform: ${config.chatAllCaps ? 'uppercase' : 'none'}  !important;
    }

    yt-live-chat-membership-item-renderer *,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer *,
    yt-live-chat-paid-message-renderer *,
    yt-live-chat-paid-sticker-renderer * {
      text-transform: ${
        config.supportCardAllCaps ? 'uppercase' : 'none'
      }  !important;
    }

    /* SHOW CARDS */
    yt-live-chat-membership-item-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-paid-sticker-renderer {
      ${config.supportCardDisplayCard ? '' : 'display: none !important;'}
    }

    /* ALIGNMENT */

    yt-live-chat-text-message-renderer {
      align-self: ${config.layoutAlign} !important;
    }

    yt-live-chat-text-message-renderer #author-name {
      transform: scaleX(${scaleX}) !important;
    }

    yt-live-chat-text-message-renderer #content {
      transform: scaleX(${scaleX}) !important;
    }

    yt-live-chat-text-message-renderer #message {
      ${
        config.layoutAlign === 'start' ? 'border-left' : 'border-right'
      }: 3px solid var(--all-border-name-color) !important;

      ${config.layoutAlign === 'end' ? 'border-left: none !important;' : ''}
      transform: scaleX(${scaleX}) !important;
    }

    yt-live-chat-text-message-renderer #content::before {
      transform: scaleX(${scaleX}) !important;
      left: ${config.layoutAlign === 'end' ? '-48px' : '-28px'};
    }

    yt-live-chat-text-message-renderer[author-type=''] #content::before {
      transform: scaleX(${scaleX}) !important;
      left: ${config.layoutAlign === 'end' ? '-36px' : '-28px'};
    }

    /* Animaciones */
    yt-live-chat-text-message-renderer #content::before {
      animation: none;
      animation: ${
        config.layoutAlign === 'end'
          ? 'rotate-assets-end 1s linear both'
          : 'rotate-assets 1s linear both'
      };
    }

    @keyframes rotate-assets-end {
      0% {
        transform: rotate(14deg) scaleX(${scaleX});
      }
    
      50% {
        transform: rotate(-14deg) scaleX(${scaleX});
      }
    
      100% {
        transform: rotate(0deg) scaleX(${scaleX});
      }
    }
  `;
};
