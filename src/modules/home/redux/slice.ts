/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { StylesConfig } from '../interfaces';
import { OWNER_CHAT } from '../html/chats/owner';
import { MOD_CHAT } from '../html/chats/mod';
import { MEMBER_CHAT } from '../html/chats/member';
import { VIEWER_CHAT } from '../html/chats/viewer';
import { MEMHO, MEMPM } from '../html/membership/membership';
import { GIFT } from '../html/gift/gift';
import { TIER1_SUPERCHAT } from '../html/superchat/tier1';
import { TIER2_SUPERCHAT } from '../html/superchat/tier2';
import { TIER3_SUPERCHAT } from '../html/superchat/Tier3';
import { TIER4_SUPERCHAT } from '../html/superchat/Tier4';
import { TIER5_SUPERCHAT } from '../html/superchat/Tier5';
import { TIER6_SUPERCHAT } from '../html/superchat/Tier6';
import { TIER7_SUPERCHAT } from '../html/superchat/Tier7';
import { STICKER } from '../html/sticker/sticker';
import { ROOT_STYLES } from '../html/customStyles';
import { STYLES } from '../html/styles';

const chats = [OWNER_CHAT, MOD_CHAT, MEMBER_CHAT, VIEWER_CHAT];
const memberships = [MEMHO, MEMPM];
const superchats = [
  TIER1_SUPERCHAT,
  TIER2_SUPERCHAT,
  TIER3_SUPERCHAT,
  TIER4_SUPERCHAT,
  TIER5_SUPERCHAT,
  TIER6_SUPERCHAT,
  TIER7_SUPERCHAT,
];
const stickers = [STICKER];
const gifts = [GIFT];
interface EditorState {
  chatBoxName: string;
  stylesConfig: StylesConfig;
  testingContent: any[];
  uniqueElement: {
    unique: boolean;
    type: string;
  };
  editorContent: any[];
  stylesToCopy: string;
}

const stylesConfigInitialState: StylesConfig = {
  /**
   * Chat Layout
   */
  layoutScale: 1,
  layoutAlign: 'start',
  /**
   * Badge
   */
  badgeDisplayBadge: true,
  badgeFontSize: 10,

  /**
   * Chat Design
   */
  chatAllCaps: false,
  chatMessageFontSize: 20,
  chatEmoteSize: 20,
  chatAuthorFontSize: 20,

  /**
   * Support Card Design
   */
  supportCardAllCaps: false,
  supportCardDisplayCard: true,
  supportCardTitleFontSize: 20,
  supportCardSubTitleFontSize: 15,
  supportCardOtherTextFontSize: 15,
  supportCardMessageFontSize: 14,
  supportCardEmoteSize: 14,
};

const editorContentInitialState = [
  ...chats,
  ...memberships,
  ...gifts,
  ...superchats,
  ...stickers,
];

const initialState: EditorState = {
  chatBoxName: 'Oriental Chatbox: Obsidian',
  stylesConfig: stylesConfigInitialState,
  testingContent: [],
  editorContent: editorContentInitialState,
  uniqueElement: {
    unique: false,
    type: 'Full Chat',
  },
  stylesToCopy: '',
};

const randomChat = () => {
  return chats[Math.floor(Math.random() * chats.length)];
};

const randomMembership = () => {
  return memberships[Math.floor(Math.random() * memberships.length)];
};

const superchat = () => {
  return superchats[Math.floor(Math.random() * superchats.length)];
};

const sticker = () => {
  return stickers[Math.floor(Math.random() * stickers.length)];
};

const gift = () => {
  return gifts[Math.floor(Math.random() * gifts.length)];
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setStylesConfig: (state, { payload }) => {
      const key: keyof StylesConfig = payload.key;
      const value: number | boolean = payload.value; // Update the type of 'value' to be 'number | boolean'

      state.stylesConfig[key] = value;
    },
    generateStylesToCopy: (state) => {
      const rootStyles = ROOT_STYLES(state.stylesConfig);
      const styles = STYLES;

      const stylesToCopy = `
        ${styles}

        ${rootStyles}
      `;

      state.stylesToCopy = stylesToCopy;
    },
    setStylesFromLocalStorage: (state, { payload }) => {
      state.stylesConfig = payload;
    },
    resetStyles: (state) => {
      state.stylesConfig = stylesConfigInitialState;
    },
    setUniqueElements: (state, { payload }) => {
      if (state.uniqueElement.unique && state.uniqueElement.type === payload) {
        state.editorContent = editorContentInitialState;
        state.uniqueElement.type = 'Full Chat';
        state.uniqueElement.unique = false;
        return;
      }

      let editorContent: (() => void)[] = chats;

      if (payload === 'CHAT') {
        editorContent = chats;
        state.uniqueElement.type = 'CHAT';
      }

      if (payload === 'MEMBER') {
        editorContent = memberships;
        state.uniqueElement.type = 'MEMBER';
      }

      if (payload === 'SUPERCHAT') {
        editorContent = superchats;
        state.uniqueElement.type = 'SUPERCHAT';
      }

      if (payload === 'STICKER') {
        editorContent = stickers;
        state.uniqueElement.type = 'STICKER';
      }

      if (payload === 'GIFT') {
        editorContent = gifts;
        state.uniqueElement.type = 'GIFT';
      }

      state.editorContent = editorContent;
      state.uniqueElement.unique = true;
    },
    addTestingContent: (state, { payload }) => {
      let testingContent: any = randomMembership();

      if (payload === 'CHAT') {
        testingContent = randomChat();
      }

      if (payload === 'MEMBER') {
        testingContent = randomMembership();
      }

      if (payload === 'SUPERCHAT') {
        testingContent = superchat();
      }

      if (payload === 'STICKER') {
        testingContent = sticker();
      }

      if (payload === 'GIFT') {
        testingContent = gift();
      }

      state.testingContent.push(testingContent);
    },
  },
});

export const actions = editorSlice.actions;
export default editorSlice;
