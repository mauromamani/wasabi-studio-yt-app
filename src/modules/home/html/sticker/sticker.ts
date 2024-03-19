const stickers2 = [
  `
  <div id="card" class="style-scope yt-live-chat-paid-sticker-renderer">
  <div id="author-info" tabindex="0" class="style-scope yt-live-chat-paid-sticker-renderer"><yt-img-shadow
      id="author-photo" class="no-transition style-scope yt-live-chat-paid-sticker-renderer"
      style="background-color: transparent;" loaded=""><!--css-build:shady--><img id="img" draggable="false"
        class="style-scope yt-img-shadow" alt=""
        src=""
        width="40" height="40"></yt-img-shadow><dom-if restamp=""
      class="style-scope yt-live-chat-paid-sticker-renderer"><template is="dom-if"></template></dom-if><dom-if
      class="style-scope yt-live-chat-paid-sticker-renderer"><template is="dom-if"></template></dom-if><dom-if
      restamp="" class="style-scope yt-live-chat-paid-sticker-renderer"><template is="dom-if"></template></dom-if>
    <div id="content" class="style-scope yt-live-chat-paid-sticker-renderer"><span id="timestamp"
        class="style-scope yt-live-chat-paid-sticker-renderer">36.27</span>
      <div id="content-primary-column" class="style-scope yt-live-chat-paid-sticker-renderer">
        <div id="author-name-chip" class="style-scope yt-live-chat-paid-sticker-renderer"><yt-live-chat-author-chip
            disable-highlighting="" single-line=""
            class="style-scope yt-live-chat-paid-sticker-renderer"><!--css-build:shady--><span
              id="prepend-chat-badges" class="style-scope yt-live-chat-author-chip"></span><span id="author-name"
              dir="auto" class="member single-line style-scope yt-live-chat-author-chip">Name<span
                id="chip-badges" class="style-scope yt-live-chat-author-chip"></span></span><span id="chat-badges"
              class="style-scope yt-live-chat-author-chip"><yt-live-chat-author-badge-renderer
                class="style-scope yt-live-chat-author-chip" aria-label="Pelanggan (1 tahun)" type="member"
                shared-tooltip-text="Pelanggan (1 tahun)"><!--css-build:shady-->
                <div id="image" class="style-scope yt-live-chat-author-badge-renderer"><img
                    src="https://res.cloudinary.com/dxcmt3zoc/image/upload/v1680602632/Frame_2_hzxp2b.png"
                    class="style-scope yt-live-chat-author-badge-renderer" alt="Pelanggan (1 tahun)"></div>
              </yt-live-chat-author-badge-renderer></span></yt-live-chat-author-chip></div><span id="price-column"
          class="style-scope yt-live-chat-paid-sticker-renderer"><yt-formatted-string id="purchase-amount-chip"
            class="style-scope yt-live-chat-paid-sticker-renderer">Rp30,000</yt-formatted-string><yt-formatted-string
            id="deleted-state" class="style-scope yt-live-chat-paid-sticker-renderer"
            is-empty=""><!--css-build:shady--><yt-attributed-string
              class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string></span>
      </div>
    </div>
  </div>
  <div id="sticker-container" class="style-scope yt-live-chat-paid-sticker-renderer sticker-loaded"><yt-img-shadow
      id="sticker" notify-on-loaded="" tabindex="0"
      class="style-scope yt-live-chat-paid-sticker-renderer no-transition" style="background-color: transparent;"
      loaded=""><!--css-build:shady--><img id="img" draggable="false" class="style-scope yt-img-shadow"
        alt=""
        src="https://lh3.googleusercontent.com/-21C0x6zYcDxpJVYKl8CCKroyjW2Hdvh2FWBipCTFhonaPy2cSJZWTGvmjsoBJu-LedOHQrw1Qu7TYXxIlxv=s148-rwa"
        width="40" height="40"></yt-img-shadow></div><yt-formatted-string id="dashboard-deleted-state"
    class="style-scope yt-live-chat-paid-sticker-renderer" is-empty=""><!--css-build:shady--><yt-attributed-string
      class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
  <div id="menu" class="style-scope yt-live-chat-paid-sticker-renderer"><yt-icon-button id="menu-button"
      class="style-scope yt-live-chat-paid-sticker-renderer"><!--css-build:shady--><button id="button"
        class="style-scope yt-icon-button" aria-label="Tindakan chat"><yt-icon icon="more_vert"
          class="style-scope yt-live-chat-paid-sticker-renderer"><!--css-build:shady--><yt-icon-shape
            class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
              <div style="width: 100%; height: 100%; fill: currentcolor;"><svg enable-background="new 0 0 24 24"
                  height="24" viewBox="0 0 24 24" width="24" focusable="false"
                  style="pointer-events: none; display: block; width: 100%; height: 100%;">
                  <path
                    d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                  </path>
                </svg></div>
            </icon-shape></yt-icon-shape></yt-icon></button><yt-interaction id="interaction"
        class="circular style-scope yt-icon-button"><!--css-build:shady-->
        <div class="stroke style-scope yt-interaction"></div>
        <div class="fill style-scope yt-interaction"></div>
      </yt-interaction></yt-icon-button></div>
</div>
<div id="buy-flow-button" class="style-scope yt-live-chat-paid-sticker-renderer" hidden=""></div>
<div id="inline-action-button-container" class="style-scope yt-live-chat-paid-sticker-renderer" aria-hidden="true">
  <div id="inline-action-buttons" class="style-scope yt-live-chat-paid-sticker-renderer"></div>
</div>`,
];

function RenderSticker2() {
  const randomItem = stickers2[Math.floor(Math.random() * stickers2.length)];
  const newItem = document.createElement('yt-live-chat-paid-sticker-renderer');
  newItem.setAttribute('class', 'style-scope yt-live-chat-item-list-renderer');
  newItem.setAttribute('id', '123');
  newItem.setAttribute(
    'style',
    '--yt-live-chat-paid-sticker-chip-background-color: rgba(0,229,255,1); --yt-live-chat-paid-sticker-chip-text-color: rgba(0,0,0,1); --yt-live-chat-paid-sticker-background-color: rgba(0,184,212,1); --yt-live-chat-disable-highlight-message-author-name-color: rgba(0,0,0,0.7019607843137254);'
  );
  newItem.innerHTML = randomItem;
  return newItem.outerHTML;
}
export function STICKER() {
  const functions = [RenderSticker2];
  const rndm = Math.floor(Math.random() * functions.length);
  return functions[rndm]();
}
