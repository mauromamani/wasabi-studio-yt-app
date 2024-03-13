/* eslint-disable no-irregular-whitespace */
import { useContext } from 'react';
import { Button, ScrollShadow } from '@nextui-org/react';
import { LightModeIcon } from '../../../../shared/components/icons/LightModeIcon';
import { useAppSelector } from '../../../../core/store/hooks';
import { ROOT_STYLES, YT_CONTAINER_EDITOR } from '../../html/customStyles';
import { ThemeContext } from '../../../../shared/context/themes/index.theme';
import { DarkModeIcon } from '../../../../shared/components/icons/DarkModeIcon';

export const Preview = () => {
  const { stylesConfig, editorContent } = useAppSelector(
    (state) => state.editor
  );
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChangeMode = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  const customStyles = () => {
    const messageRender = ROOT_STYLES(stylesConfig);
    return messageRender;
  };

  return (
    <ScrollShadow className='w-full h-[calc(100vh-80px)]'>
      <article
        id='preview'
        className={`${
          theme === 'dark' ? 'bg-preview' : 'bg-preview-light'
        } flex-1  py-8 px-20 min-h-[calc(100vh-81px)]`}
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>Chat Preview</h2>
          <Button
            isIconOnly
            className='bg-transparent'
            radius='full'
            onClick={handleChangeMode}
          >
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </div>

        <div
          className={`${
            theme === 'dark' ? 'bg-chat-preview' : 'bg-chat-preview-light'
          } p-2 py-10 rounded-2xl mt-5 flex flex-col items-center justify-center pointer-events-none`}
          style={{ userSelect: 'none' }}
          dangerouslySetInnerHTML={{
            __html: YT_CONTAINER_EDITOR(customStyles(), editorContent),
          }}
        />
      </article>
    </ScrollShadow>
  );
};
