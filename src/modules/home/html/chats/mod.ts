const ModChats = [
  `
  <yt-img-shadow id="author-photo" class="no-transition style-scope yt-live-chat-text-message-renderer" height="24"
  width="24" style="background-color: transparent" loaded=""><!--css-build:shady--><!--css-build:shady--><img id="img"
    draggable="false" class="style-scope yt-img-shadow" alt=""
    src="https://storage.googleapis.com/vgen-production-storage/uploads/3de5682b-04e7-4da2-924f-f50fd6d90ca4/71ca1d73-acaa-4b8b-ab6e-5d8c11a1d7a7.webp"
    width="24" height="24" /></yt-img-shadow>
<div id="content" class="style-scope yt-live-chat-text-message-renderer"> <span id="timestamp"
    class="style-scope yt-live-chat-text-message-renderer">-0.05</span><yt-live-chat-author-chip
    class="style-scope yt-live-chat-text-message-renderer"><!--css-build:shady--><!--css-build:shady--><span
      id="prepend-chat-badges" class="style-scope yt-live-chat-author-chip"></span><span id="author-name" dir="auto"
      class="moderator style-scope yt-live-chat-author-chip style-scope yt-live-chat-author-chip">Moderator name<span
        id="chip-badges" class="style-scope yt-live-chat-author-chip"></span></span><span id="chat-badges"
      class="style-scope yt-live-chat-author-chip"><yt-live-chat-author-badge-renderer
        class="style-scope yt-live-chat-author-chip" aria-label="Moderator" type="moderator"
        shared-tooltip-text="Moderator"><!--css-build:shady--><!--css-build:shady-->
        <div id="image" class="style-scope yt-live-chat-author-badge-renderer"> <yt-icon
            class="style-scope yt-live-chat-author-badge-renderer"><svg viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet" focusable="false"
              style=" pointer-events: none; display: block; width: 100%; height: 100%; " class="style-scope yt-icon">
              <g class="style-scope yt-icon">
                <path
                  d="M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z"
                  class="style-scope yt-icon"></path>
              </g>
            </svg><!--css-build:shady--><!--css-build:shady--></yt-icon> </div>
      </yt-live-chat-author-badge-renderer><yt-live-chat-author-badge-renderer
        class="style-scope yt-live-chat-author-chip" aria-label="Pelanggan baru" type="member"
        shared-tooltip-text="Pelanggan baru"><!--css-build:shady--><!--css-build:shady-->
        <div id="image" class="style-scope yt-live-chat-author-badge-renderer"> <img
            src="https://storage.googleapis.com/vgen-production-storage/uploads/3de5682b-04e7-4da2-924f-f50fd6d90ca4/71ca1d73-acaa-4b8b-ab6e-5d8c11a1d7a7.webp"
            class="style-scope yt-live-chat-author-badge-renderer" alt="Pelanggan baru" /></div>
      </yt-live-chat-author-badge-renderer></span></yt-live-chat-author-chip>​<span id="message" dir="auto"
    class="style-scope yt-live-chat-text-message-renderer">This is a mod message</span><span id="deleted-state"
    class="style-scope yt-live-chat-text-message-renderer"></span><a id="show-original" href="#"
    class="style-scope yt-live-chat-text-message-renderer"></a> </div>
<div id="menu" class="style-scope yt-live-chat-text-message-renderer"> <yt-icon-button id="menu-button"
    class="style-scope yt-live-chat-text-message-renderer"><!--css-build:shady--><!--css-build:shady--><button
      id="button" class="style-scope yt-icon-button" aria-label="Tindakan chat"> <yt-icon icon="more_vert"
        class="style-scope yt-live-chat-text-message-renderer"><svg viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet" focusable="false"
          style=" pointer-events: none; display: block; width: 100%; height: 100%; " class="style-scope yt-icon">
          <g class="style-scope yt-icon">
            <path
              d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
              class="style-scope yt-icon"></path>
          </g>
        </svg><!--css-build:shady--><!--css-build:shady--></yt-icon></button><yt-interaction id="interaction"
      class="circular style-scope yt-icon-button"><!--css-build:shady--><!--css-build:shady-->
      <div class="stroke style-scope yt-interaction"></div>
      <div class="fill style-scope yt-interaction"></div>
    </yt-interaction></yt-icon-button> </div>
<div id="inline-action-button-container" class="style-scope yt-live-chat-text-message-renderer" aria-hidden="true">
  <div id="inline-action-buttons" class="style-scope yt-live-chat-text-message-renderer"></div>
</div>`,
];
export const MOD_CHAT = () => {
  const randomItem = ModChats[Math.floor(Math.random() * ModChats.length)];
  const newItem = document.createElement('yt-live-chat-text-message-renderer');
  newItem.setAttribute('class', 'style-scope yt-live-chat-item-list-renderer');
  newItem.setAttribute('whole-message-clickable', '');
  newItem.setAttribute('id', '123');
  newItem.setAttribute('author-type', 'moderator');
  newItem.setAttribute('menu-visible', '');
  newItem.innerHTML = randomItem;

  return newItem.outerHTML;
};
