const ViewerChats = [
  `
  <yt-img-shadow id="author-photo" class="no-transition style-scope yt-live-chat-text-message-renderer" height="24"
  width="24" style="background-color: transparent;" loaded=""> <img id="img gmbrImg" draggable="false"
    class="style-scope yt-img-shadow" alt=""
    src="https://storage.googleapis.com/vgen-production-storage/uploads/3de5682b-04e7-4da2-924f-f50fd6d90ca4/71ca1d73-acaa-4b8b-ab6e-5d8c11a1d7a7.webp"
    width="24" height="24"></yt-img-shadow>
<div id="content" class="style-scope yt-live-chat-text-message-renderer"><span id="timestamp"
    class="style-scope yt-live-chat-text-message-renderer">2:30 PM</span> <yt-live-chat-author-chip
    class="style-scope yt-live-chat-text-message-renderer"> <span id="prepend-chat-badges"
      class="style-scope yt-live-chat-author-chip"></span><span id="author-name" dir="auto"
      class="style-scope yt-live-chat-author-chip">Viewer Name<span id="chip-badges"
        class="style-scope yt-live-chat-author-chip"></span></span> <span id="chat-badges"
      class="style-scope yt-live-chat-author-chip"></span> </yt-live-chat-author-chip>​<span id="message" dir="auto"
    class="style-scope yt-live-chat-text-message-renderer">This is a viewer message</span><span id="deleted-state"
    class="style-scope yt-live-chat-text-message-renderer"></span> <a id="show-original" href="#"
    class="style-scope yt-live-chat-text-message-renderer"></a> </div>
<div id="menu" class="style-scope yt-live-chat-text-message-renderer"> <yt-icon-button id="menu-button"
    class="style-scope yt-live-chat-text-message-renderer"> <button id="button" class="style-scope yt-icon-button"
      aria-label="Tindakan chat"><yt-icon icon="more_vert"
        class="style-scope yt-live-chat-text-message-renderer"><yt-icon-shape class="style-scope yt-icon"><icon-shape
            class="yt-spec-icon-shape">
            <div style="width: 100%; height: 100%; fill: currentcolor;"><svg enable-background="new 0 0 24 24"
                height="24" viewBox="0 0 24 24" width="24" focusable="false"
                style="pointer-events: none; display: block; width: 100%; height: 100%;">
                <path
                  d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                </path>
              </svg></div>
          </icon-shape></yt-icon-shape></yt-icon></button> <yt-interaction id="interaction"
      class="circular style-scope yt-icon-button">
      <div class="stroke style-scope yt-interaction"></div>
      <div class="fill style-scope yt-interaction"></div>
    </yt-interaction> </yt-icon-button> </div>
<div id="inline-action-button-container" class="style-scope yt-live-chat-text-message-renderer" aria-hidden="true">
  <div id="inline-action-buttons" class="style-scope yt-live-chat-text-message-renderer"></div>
</div>`,
];
export const VIEWER_CHAT = () => {
  const randomItem =
    ViewerChats[Math.floor(Math.random() * ViewerChats.length)];
  const newItem = document.createElement('yt-live-chat-text-message-renderer');
  newItem.setAttribute('class', 'style-scope yt-live-chat-item-list-renderer');
  newItem.setAttribute('whole-message-clickable', '');
  newItem.setAttribute('id', '123');
  newItem.setAttribute('author-type', '');
  newItem.innerHTML = randomItem;

  return newItem.outerHTML;
};
