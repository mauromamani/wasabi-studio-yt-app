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

        yt-live-chat-text-message-renderer yt-live-chat-author-chip {
          top: 0px !important;
        }

        yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
          top: 12px !important;
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

        yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #purchase-amount-chip.yt-live-chat-paid-sticker-renderer,
        yt-live-chat-paid-sticker-renderer #purchase-amount-chip {
          color: var(--yt-live-chat-disable-highlight-message-author-name-color, rgba(255, 255, 255, 0.7));
        }

        ${customStyles}

        yt-live-chat-text-message-renderer,
        yt-live-chat-membership-item-renderer,
        yt-live-chat-paid-message-renderer,
        yt-live-chat-paid-sticker-renderer,
        ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
          animation: none !important;
        }
      </style>

        <div style="width: 70%">
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

// export const ROOT_STYLES = (config: StylesConfig) => {
//   const scaleX = config.layoutAlign === 'start' ? '1' : '-1';

//   return `
//     :root {
//       --font-family: 'Ibarra Real Nova', serif;

//       /* all */
//       --all-background-message-color: linear-gradient(
//         98deg,
//         rgba(18, 18, 18, 1) 12%,
//         rgba(33, 31, 30, 1) 61%
//       );
//       --all-background-color: #121212;
//       --all-message-color: #ffffff;
//       --all-border-name-color: #dbb092;
//       --all-name-color: #dbb092;
//       --all-badge-color: #ea5272;

//       /* membership */
//       --membership-name-color: #dbb092;
//       --membership-subtext-color: #ea5272;
//       --membership-other-text-color: #ea5272;
//       --membership-message-color: #ffffff;
//       --membership-background-color: #121212;
//       --membership-border-color: #dbb092;
//       --membership-background-message-color: #121212;
//       --membership-border-message-color: #dbb092;
//       /* end-membership */

//       /* sc */
//       --sc-name-color: #ffffff;
//       --sc-amount-color: #ffffff;
//       --sc-message-color: #e36868;
//       --sc-background-color: #e36868;
//       --sc-border-color: #ffffff;
//       --sc-background-message-color: #fffffc;
//       --sc-border-message-color: #e36868;
//       --sc-decoration-color: #ffffff;
//       /* end-sc */

//       /* chat-font-size */
//       --name-font-size: ${config.chatAuthorFontSize}px;
//       --message-font-size: ${config.chatMessageFontSize}px;
//       /* end-chat-font-size */

//       /* profile-toggle */
//       --show-profile-picture: block;
//       /* end-profile-toggle */

//       /* sc-font-size */
//       --sc-name-font-size: ${config.supportCardTitleFontSize}px;
//       --sc-amount-font-size: ${config.supportCardTitleFontSize - 5}px;
//       --sc-message-font-size: ${config.supportCardMessageFontSize}px;
//       /* end-sc-font-size */

//       /* membership-font-size */
//       --membership-name-font-size: ${config.supportCardTitleFontSize}px;
//       --membership-subtext-font-size: ${config.supportCardSubTitleFontSize}px;
//       --membership-other-text-font-size: ${
//         config.supportCardOtherTextFontSize
//       }px;
//       --membership-message-font-size: ${config.supportCardMessageFontSize}px;
//       /* end-membership-font-size */
//     }

//     /*
//     yt-live-chat-text-message-renderer  {
//       margin: 10px ${scaleMessageMarginX(config.layoutScale)} !important;
//     }

//     */

//     /************************** START CHAT LAYOUT **************************/
//     yt-live-chat-text-message-renderer,
//     yt-live-chat-membership-item-renderer,
//     yt-live-chat-paid-message-renderer,
//     yt-live-chat-paid-sticker-renderer,
//     ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
//       animation: ${
//         config.layoutAlign === 'start' ? 'slide-in-left' : 'slide-in-right'
//       } 0.5s ease both !important;

//       margin-top: ${config.layoutMarginY + 20}px !important;
//       margin-bottom: ${config.layoutMarginY}px !important;
//       margin-left: ${config.layoutMarginX}px !important;
//       margin-right: ${config.layoutMarginX}px !important;
//     }

//     yt-live-chat-text-message-renderer {
//       margin-top: ${config.layoutMarginY - 3}px !important;
//       margin-bottom: ${config.layoutMarginY - 3}px !important;
//     }

//     yt-live-chat-text-message-renderer {
//       align-self: ${config.layoutAlign} !important;
//     }

//     yt-live-chat-text-message-renderer #author-name {
//       transform: scaleX(${scaleX}) !important;
//     }

//     yt-live-chat-text-message-renderer #content {
//       transform: scaleX(${scaleX}) !important;
//     }

//     yt-live-chat-text-message-renderer #message {
//       ${
//         config.layoutAlign === 'start' ? 'border-left' : 'border-right'
//       }: 3px solid var(--all-border-name-color) !important;

//       ${config.layoutAlign === 'end' ? 'border-left: none !important;' : ''}
//       transform: scaleX(${scaleX}) !important;
//     }

//     ${
//       config.layoutAlign === 'end'
//         ? `
//           yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
//             display: flex;
//             justify-content: end !important;
//             align-items: center !important;
//             font-family: var(--font-family) !important;
//             color: var(--all-badge-color);
//             content: '';
//             overflow: hidden !important;
//             min-width: 120px;
//             max-width: 120px;
//             height: 100%;
//             width: 100%;
//             font-size: 10px;
//             font-weight: 900;
//             position: absolute;
//             right: -135px !important;
//             top: 0px !important;
//             z-index: 99;
//             transform: scaleX(${scaleX}) !important;
//           }

//           yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
//             display: flex;
//             justify-content: end;
//             align-items: center !important;
//             font-family: var(--font-family) !important;
//             color: var(--all-badge-color);
//             content: '•';
//             font-size: 13px;
//             font-weight: 900;
//             height: 23px;
//             right: -35px;
//             position: absolute;
//             z-index: 99;
//             transform: scaleX(${scaleX}) !important;
//           }
//         `
//         : ''
//     }

//     /************************** END CHAT LAYOUT **************************/

//     /************************** START BADGE DESIGN **************************/
//     yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
//       display: ${config.badgeDisplayBadge ? 'flex' : 'none'} !important;
//       font-size: ${config.badgeFontSize + 3}px !important;
//     }

//     yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
//       display: ${config.badgeDisplayBadge ? 'flex' : 'none'} !important;
//       font-size: ${config.badgeFontSize}px !important;
//     }
//     /************************** END BADGE DESIGN **************************/

//     /************************** START CHAT DESIGN **************************/
//     yt-live-chat-text-message-renderer * {
//       text-transform: ${config.chatAllCaps ? 'uppercase' : 'none'}  !important;
//     }

//     yt-live-chat-text-message-renderer #message > img {
//       width: ${config.chatEmoteSize}px !important;
//       height: ${config.chatEmoteSize}px !important;
//     }

//     /************************** END CHAT DESIGN **************************/

//     /************************** START SUPPORT CARD DESIGN **************************/
//     yt-live-chat-membership-item-renderer *,
//     ytd-sponsorships-live-chat-gift-purchase-announcement-renderer *,
//     yt-live-chat-paid-message-renderer *,
//     yt-live-chat-paid-sticker-renderer * {
//       text-transform: ${
//         config.supportCardAllCaps ? 'uppercase' : 'none'
//       }  !important;
//     }

//     yt-live-chat-membership-item-renderer,
//     ytd-sponsorships-live-chat-gift-purchase-announcement-renderer,
//     yt-live-chat-paid-message-renderer,
//     yt-live-chat-paid-sticker-renderer {
//       ${config.supportCardDisplayCard ? '' : 'display: none !important;'}
//     }

//     yt-live-chat-membership-item-renderer #message > img,
//     yt-live-chat-paid-message-renderer #message > img {
//       width: ${config.supportCardEmoteSize}px !important;
//       height: ${config.supportCardEmoteSize}px !important;
//     }
//     /************************** END SUPPORT CARD DESIGN **************************/

//     @keyframes slide-in-right {
//       0% {
//         transform: translateX(100px);
//         opacity: 0;
//       }

//       100% {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }

//   `;
// };

export const ROOT_STYLES = (config: StylesConfig) => {
  const scaleX = config.layoutAlign === 'start' ? '1' : '-1';

  return `
    :root {
      --font-family: 'Ibarra Real Nova', serif;

      /* all */
      --all-background-message-color: linear-gradient(
        98deg,
        #1f273e 12%,
        #303753 61%
      );
      --all-background-color: #272e4b;
      --all-message-color: #ffffff;
      --all-border-name-color: #e5e2db;
      --all-name-color: #e5e2db;
      --all-badge-color: #93deff;

      --all-gradient-color-1: #272e4b7c;
      --all-gradient-color-2: #272e4b18;

      /* membership */
      --membership-name-color: #e5e2db;
      --membership-subtext-color: #93deff;
      --membership-other-text-color: #93deff;
      --membership-message-color: #ffffff;
      --membership-background-color: #272e4b;
      --membership-border-color: #e5e2db;
      --membership-background-message-color: #272e4b;
      --membership-border-message-color: #e5e2db;
      /* end-membership */

      /* chat-font-size */
      --name-font-size: 20px;
      --message-font-size: 20px;
      /* end-chat-font-size */

      /* sc-font-size */
      --sc-name-font-size: 20px;
      --sc-amount-font-size: 14px;
      --sc-message-font-size: 14px;
      /* end-sc-font-size */

      /* membership-font-size */
      --membership-name-font-size: 20px;
      --membership-subtext-font-size: 15px;
      --membership-other-text-font-size: 15px;
      --membership-message-font-size: 14px;
      /* end-membership-font-size */
    }

    yt-live-chat-text-message-renderer,
    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-paid-sticker-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
      animation: ${
        config.layoutAlign === 'start' ? 'slide-in-left' : 'slide-in-right'
      } 0.5s ease both !important;

      margin-top: ${config.layoutMarginY + 20}px !important;
      margin-bottom: ${config.layoutMarginY}px !important;
      margin-left: ${config.layoutMarginX}px !important;
      margin-right: ${config.layoutMarginX}px !important;
    }

    yt-live-chat-text-message-renderer {
      margin-top: ${config.layoutMarginY - 3}px !important;
      margin-bottom: ${config.layoutMarginY - 3}px !important;
    }

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

    ${
      config.layoutAlign === 'end'
        ? `
          yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
            display: flex;
            justify-content: end !important;
            align-items: center !important;
            font-family: var(--font-family) !important;
            color: var(--all-badge-color);
            content: '';
            overflow: hidden !important;
            min-width: 120px;
            max-width: 120px;
            height: 100%;
            width: 100%;
            font-size: 10px;
            font-weight: 900;
            position: absolute;
            right: -135px !important;
            top: 0px !important;
            z-index: 99;
            transform: scaleX(${scaleX}) !important;
          }

          yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
            display: flex;
            justify-content: end;
            align-items: center !important;
            font-family: var(--font-family) !important;
            color: var(--all-badge-color);
            content: '•';
            font-size: 13px;
            font-weight: 900;
            height: 23px;
            right: -35px;
            position: absolute;
            z-index: 99;
            transform: scaleX(${scaleX}) !important;
          }
        `
        : ''
    }

    yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
      display: ${config.badgeDisplayBadge ? 'flex' : 'none'} !important;
      font-size: ${config.badgeFontSize + 3}px !important;
    }

    yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
      display: ${config.badgeDisplayBadge ? 'flex' : 'none'} !important;
      font-size: ${config.badgeFontSize}px !important;
    }

    yt-live-chat-text-message-renderer * {
      text-transform: ${config.chatAllCaps ? 'uppercase' : 'none'}  !important;
    }

    yt-live-chat-text-message-renderer #message > img {
      width: ${config.chatEmoteSize}px !important;
      height: ${config.chatEmoteSize}px !important;
    }


    yt-live-chat-membership-item-renderer *,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer *,
    yt-live-chat-paid-message-renderer *,
    yt-live-chat-paid-sticker-renderer * {
      text-transform: ${
        config.supportCardAllCaps ? 'uppercase' : 'none'
      }  !important;
    }

    yt-live-chat-membership-item-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-paid-sticker-renderer {
      ${config.supportCardDisplayCard ? '' : 'display: none !important;'}
    }

    yt-live-chat-membership-item-renderer #message > img,
    yt-live-chat-paid-message-renderer #message > img {
      width: ${config.supportCardEmoteSize}px !important;
      height: ${config.supportCardEmoteSize}px !important;
    }

    @keyframes slide-in-right {
      0% {
        transform: translateX(100px);
        opacity: 0;
      }
    
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

  `;
};
