import { MessageRendererConfig } from '../../interfaces';
import { MEMBER_CHAT } from '../chats/member';
import { MOD_CHAT } from '../chats/mod';
import { OWNER_CHAT } from '../chats/owner';
import { VIEWER_CHAT } from '../chats/viewer';
import { GIFT } from '../gift/gift';
import { MEMHO, MEMPM } from '../membership/membership';
import { STYLES } from '../styles';

export const YT_CONTAINER = (customStyles: string) => `
  <html>
    <head>
      <style>
        ${STYLES}

        yt-live-chat-text-message-renderer yt-live-chat-author-chip {
          top: 10px !important;
        }

        yt-live-chat-text-message-renderer #author-photo {
          margin-top: 30px !important;
        }

        body {
          overflow: hidden;
        }

        yt-live-chat-text-message-renderer {
          animation: none !important;
          width: 100% !important;
        }

        yt-live-chat-membership-item-renderer {
          animation: none !important;
        }

        ${customStyles}
      </style>
    </head>

    <body>
        <div style="width: 80%">
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
                                                        <div id="items" class="style-scope yt-live-chat-item-list-renderer widget-wrapper">
                                                          ${OWNER_CHAT()}
                                                          ${MOD_CHAT()}
                                                          ${MEMBER_CHAT()}
                                                          ${VIEWER_CHAT()}
                                                          ${MEMHO()}
                                                          ${MEMPM()}
                                                          ${GIFT()}
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

    </body>
  </html>
`;

export const MESSAGE_RENDERER = (config: MessageRendererConfig) => `
  /* Author Name */
  yt-live-chat-text-message-renderer #author-name {
    font-family: 'Nunito' !important;
    font-size: ${config.authorNameFontSize}px !important;
    font-weight: 600 !important;
    letter-spacing: 0.5px !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    width: fit-content !important;
    max-width: 40vw !important;
    z-index: 3 !important;
    position: relative !important;
    padding: 0 !important;
  }

  /* Message Renderer */
  yt-live-chat-text-message-renderer #message, yt-live-chat-text-message-renderer #message * {
    font-family: 'Nunito' !important;
    font-size: ${config.messageRendererFontSize}px !important;
    font-weight: ${config.messageRendererFontWeight} !important;
    line-height: 100% !important;
    text-align: start !important;
    word-break: break-all;
  }
`;
