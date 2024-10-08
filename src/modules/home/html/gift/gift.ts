const gift = [
  `
  <ytd-sponsorships-live-chat-header-renderer id="header"
  class="style-scope ytd-sponsorships-live-chat-gift-purchase-announcement-renderer" whole-message-clickable="">
  <div id="header" class="style-scope ytd-sponsorships-live-chat-header-renderer">
    <div id="content" class="style-scope ytd-sponsorships-live-chat-header-renderer"> <yt-img-shadow id="author-photo"
        height="40" width="40" class="style-scope ytd-sponsorships-live-chat-header-renderer no-transition"
        style="background-color: transparent;" loaded=""> <img id="img" draggable="false"
          class="style-scope yt-img-shadow" alt="" height="40" width="40"
          src="https://yt3.ggpht.com/1KqRN-uj2pOiaJqesu3o_rc2ogQmVc4RnjIf-1zTxO2OmYLPJrYbmP5K1pW6ngX9WTEXI20Q=s88-c-k-c0x00ffffff-no-rj-mo"></yt-img-shadow>
      <dom-if restamp="" class="style-scope ytd-sponsorships-live-chat-header-renderer"><template
          is="dom-if"></template></dom-if> <dom-if
        class="style-scope ytd-sponsorships-live-chat-header-renderer"><template is="dom-if"></template></dom-if>
      <div id="header-content" class="style-scope ytd-sponsorships-live-chat-header-renderer">
        <div id="header-content-primary-column" class="style-scope ytd-sponsorships-live-chat-header-renderer">
          <div id="header-content-inner-column" class="style-scope ytd-sponsorships-live-chat-header-renderer">
            <yt-live-chat-author-chip single-line="" class="style-scope ytd-sponsorships-live-chat-header-renderer">
              <span id="prepend-chat-badges" class="style-scope yt-live-chat-author-chip"></span><span
                id="author-name" dir="auto" class="member single-line style-scope yt-live-chat-author-chip">Member
                Name<span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span></span> <span
                id="chat-badges" class="style-scope yt-live-chat-author-chip"> <yt-live-chat-author-badge-renderer
                  class="style-scope yt-live-chat-author-chip" aria-label="Pelanggan baru" type="member"
                  shared-tooltip-text="Pelanggan baru">
                  <div id="image" class="style-scope yt-live-chat-author-badge-renderer"><img
                      src="https://res.cloudinary.com/dxcmt3zoc/image/upload/v1680602632/Frame_2_hzxp2b.png"
                      class="style-scope yt-live-chat-author-badge-renderer" alt="Pelanggan baru"></div>
                </yt-live-chat-author-badge-renderer> </span> </yt-live-chat-author-chip> <dom-if restamp=""
              class="style-scope ytd-sponsorships-live-chat-header-renderer"><template
                is="dom-if"></template></dom-if>
            <div id="primary-text" class="style-scope ytd-sponsorships-live-chat-header-renderer">Gifted Memberships!
            </div>
          </div>
          <div id="secondary-text" class="style-scope ytd-sponsorships-live-chat-header-renderer"></div>
        </div>
        <div id="header-content-deleted-state" class="style-scope ytd-sponsorships-live-chat-header-renderer"
          hidden="">
          <div id="deleted-primary-text" class="style-scope ytd-sponsorships-live-chat-header-renderer"> </div>
        </div>
      </div>
    </div><yt-img-shadow class="rhs-image style-scope ytd-sponsorships-live-chat-header-renderer no-transition"
      height="104" width="104" style="background-color: transparent;" loaded=""> <img id="img" draggable="false"
        class="style-scope yt-img-shadow" alt="" height="104" width="104"
        src="https://www.gstatic.com/youtube/img/sponsorships/sponsorships_gift_purchase_announcement_artwork.png"></yt-img-shadow>
    <dom-if restamp="" class="style-scope ytd-sponsorships-live-chat-header-renderer"><template
        is="dom-if"></template></dom-if>
    <div id="menu" class="style-scope ytd-sponsorships-live-chat-header-renderer"> <yt-icon-button id="menu-button"
        class="style-scope ytd-sponsorships-live-chat-header-renderer"> <button id="button"
          class="style-scope yt-icon-button" aria-label="Tindakan chat"> <yt-icon icon="more_vert"
            class="style-scope ytd-sponsorships-live-chat-header-renderer"><yt-icon-shape
              class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape">
                <div style="width: 100%; height: 100%; fill: currentcolor;"><svg enable-background="new 0 0 24 24"
                    height="24" viewBox="0 0 24 24" width="24" focusable="false"
                    style="pointer-events: none; display: block; width: 100%; height: 100%;">
                    <path
                      d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                    </path>
                  </svg></div>
              </icon-shape></yt-icon-shape></yt-icon> </button> <yt-interaction id="interaction"
          class="circular style-scope yt-icon-button">
          <div class="stroke style-scope yt-interaction"></div>
          <div class="fill style-scope yt-interaction"></div>
        </yt-interaction> </yt-icon-button> </div>
  </div>
</ytd-sponsorships-live-chat-header-renderer>`,
];

export const GIFT = () => {
  const randomItem = gift[Math.floor(Math.random() * gift.length)];

  const newItem = document.createElement(
    'ytd-sponsorships-live-chat-gift-purchase-announcement-renderer'
  );
  newItem.setAttribute('class', 'style-scope yt-live-chat-item-list-renderer');
  newItem.setAttribute('whole-message-clickable', '');
  newItem.innerHTML = randomItem;

  return newItem.outerHTML;
};
