import { createSlice } from '@reduxjs/toolkit';
import { MessageRendererConfig } from '../interfaces';

interface EditorState {
  messageRenderConfig: MessageRendererConfig;
}

const initialState: EditorState = {
  messageRenderConfig: {
    messageRendererFontSize: 16,
    messageRendererFontWeight: 800,
    authorNameFontSize: 16,
  },
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setMessageRenderConfig: (state, { payload }) => {
      state.messageRenderConfig[payload.key as keyof MessageRendererConfig] =
        payload.value;
    },
  },
});

export const actions = editorSlice.actions;
export default editorSlice;
