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
      margin-top: 6px !important;
      margin-left: 5px !important;
    }

    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #card.yt-live-chat-paid-sticker-renderer {
      background: var(--yt-live-chat-paid-sticker-background-color) !important;
    }

    yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #card.yt-live-chat-paid-sticker-renderer #timestamp {
      display: none !important;
    }

    yt-live-chat-text-message-renderer,
    yt-live-chat-membership-item-renderer,
    yt-live-chat-paid-message-renderer,
    yt-live-chat-paid-sticker-renderer,
    ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
      animation: none !important;
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

    #items > :last-child {
    animation: slide-in-left 0.5s ease both !important;
    }

    ${customStyles}
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

        body {
          overflow: hidden;
        }

        yt-live-chat-text-message-renderer,
        yt-live-chat-membership-item-renderer,
        yt-live-chat-paid-message-renderer,
        yt-live-chat-paid-sticker-renderer,
        ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
          animation: none !important;
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

        ${customStyles}
      </style>

        <div style="width: 60%">
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

export const ROOT_STYLES = (config: StylesConfig) => `
  :root {
    --font-family: 'Ibarra Real Nova', serif;

    /* all */
    --all-background-message-color: linear-gradient(
      98deg,
      rgba(18, 18, 18, 1) 12%,
      rgba(33, 31, 30, 1) 61%
    );
    --all-background-color: #121212;
    --all-message-color: #ffffff;
    --all-border-name-color: #dbb092;
    --all-name-color: #dbb092;
    --all-badge-color: #ea5272;

    /* membership */
    --membership-name-color: #dbb092;
    --membership-subtext-color: #ea5272;
    --membership-other-text-color: #ea5272;
    --membership-message-color: #ffffff;
    --membership-background-color: #121212;
    --membership-border-color: #dbb092;
    --membership-background-message-color: #121212;
    --membership-border-message-color: #dbb092;
    /* end-membership */

    /* sc */
    --sc-name-color: #ffffff;
    --sc-amount-color: #ffffff;
    --sc-message-color: #e36868;
    --sc-background-color: #e36868;
    --sc-border-color: #ffffff;
    --sc-background-message-color: #fffffc;
    --sc-border-message-color: #e36868;
    --sc-decoration-color: #ffffff;
    /* end-sc */

    /* chat-font-size */
    --name-font-size: ${config.chatAuthorFontSize}px;
    --message-font-size: ${config.chatMessageFontSize}px;
    /* end-chat-font-size */

    /* profile-toggle */
    --show-profile-picture: block;
    /* end-profile-toggle */

    /* sc-font-size */
    --sc-name-font-size: ${config.supportCardTitleFontSize}px;
    --sc-amount-font-size: ${config.supportCardTitleFontSize - 3}px;
    --sc-message-font-size: ${config.supportCardMessageFontSize}px;
    /* end-sc-font-size */

    /* membership-font-size */
    --membership-name-font-size: ${config.supportCardTitleFontSize}px;
    --membership-subtext-font-size: ${config.supportCardSubTitleFontSize}px;
    --membership-other-text-font-size: ${config.supportCardOtherTextFontSize}px;
    --membership-message-font-size: ${config.supportCardMessageFontSize}px;
    /* end-membership-font-size */
  }

  /*
  yt-live-chat-text-message-renderer,
  yt-live-chat-membership-item-renderer,
  ytd-sponsorships-live-chat-gift-purchase-announcement-renderer {
    margin-top: 30px !important;
  }

  yt-live-chat-text-message-renderer *,
  yt-live-chat-membership-item-renderer *,
  ytd-sponsorships-live-chat-gift-purchase-announcement-renderer * {
    transform: scale(1.09) !important;
  }*/


  /************************** START BADGE DESIGN **************************/
  yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {
    display: ${config.badgeDisplayBadge ? 'block' : 'none'} !important;
    font-size: ${config.badgeFontSize + 3}px !important;
  }

  yt-live-chat-text-message-renderer yt-live-chat-author-chip::before {
    display: ${config.badgeDisplayBadge ? 'block' : 'none'} !important;
    font-size: ${config.badgeFontSize}px !important;
  }
  /************************** END BADGE DESIGN **************************/

  /************************** START CHAT DESIGN **************************/
  yt-live-chat-text-message-renderer * {
    text-transform: ${config.chatAllCaps ? 'uppercase' : 'none'}  !important;
  }
  /************************** END CHAT DESIGN **************************/

  /************************** START SUPPORT CARD DESIGN **************************/
  yt-live-chat-membership-item-renderer *,
  ytd-sponsorships-live-chat-gift-purchase-announcement-renderer * {
    text-transform: ${
      config.supportCardAllCaps ? 'uppercase' : 'none'
    }  !important;
  }
  /************************** END SUPPORT CARD DESIGN **************************/

`;
