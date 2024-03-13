/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { StylesConfig } from '../interfaces';
import { OWNER_CHAT } from '../html/chats/owner';
import { MOD_CHAT } from '../html/chats/mod';
import { MEMBER_CHAT } from '../html/chats/member';
import { VIEWER_CHAT } from '../html/chats/viewer';
import { MEMHO, MEMPM } from '../html/membership/membership';
import { GIFT } from '../html/gift/gift';

interface EditorState {
  stylesConfig: StylesConfig;
  testingMode: boolean;
  testingContent: any[];
  editorContent: any[];
}

const initialState: EditorState = {
  stylesConfig: {
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
    chatAuthorFontSize: 20,

    /**
     * Support Card Design
     */
    supportCardAllCaps: false,
    supportCardTitleFontSize: 20,
    supportCardSubTitleFontSize: 15,
    supportCardOtherTextFontSize: 15,
    supportCardMessageFontSize: 14,
  },
  testingMode: false,
  testingContent: [],
  editorContent: [
    OWNER_CHAT,
    MOD_CHAT,
    MEMBER_CHAT,
    VIEWER_CHAT,
    MEMHO,
    MEMPM,
    GIFT,
  ],
};

const randomChat = () => {
  const chats = [OWNER_CHAT, MOD_CHAT, MEMBER_CHAT, VIEWER_CHAT];
  return chats[Math.floor(Math.random() * chats.length)];
};

const randomMembership = () => {
  const memberships = [MEMHO, MEMPM];
  return memberships[Math.floor(Math.random() * memberships.length)];
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setStylesConfig: (state, { payload }) => {
      const key = payload.key as keyof StylesConfig;
      const value = payload.value as number | boolean;

      state.stylesConfig[key] = value;
    },
    setTestingMode: (state, { payload }) => {
      state.testingMode = payload;
    },
    addTestingContent: (state, { payload }) => {
      let testingContent: any = randomMembership();
      if (payload === 'CHAT') {
        testingContent = randomChat();
      }

      state.testingContent.push(testingContent);
    },
  },
});

export const actions = editorSlice.actions;
export default editorSlice;
