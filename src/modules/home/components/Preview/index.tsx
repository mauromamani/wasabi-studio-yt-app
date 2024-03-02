/* eslint-disable no-irregular-whitespace */
import { Button, ScrollShadow } from '@nextui-org/react';
import { LightModeIcon } from '../../../../shared/components/icons/LightModeIcon';
import { useAppSelector } from '../../../../core/store/hooks';
import { MESSAGE_RENDERER, YT_CONTAINER } from '../../html/customStyles';
import { useContext } from 'react';
import { ThemeContext } from '../../../../shared/context/themes/index.theme';
import { DarkModeIcon } from '../../../../shared/components/icons/DarkModeIcon';

export const Preview = () => {
  const { messageRenderConfig } = useAppSelector((state) => state.editor);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChangeMode = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  const customStyles = () => {
    const messageRender = MESSAGE_RENDERER(messageRenderConfig);
    return messageRender;
  };

  return (
    <ScrollShadow className='w-full h-[calc(100vh-80px)]'>
      <article
        id='preview'
        className='flex-1 bg-preview py-8 px-20 min-h-[calc(100vh-81px)]'
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>Chat Preview {theme}</h2>
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
          className='bg-chat-preview p-2 py-10 rounded-2xl mt-5 flex flex-col items-center justify-center pointer-events-none'
          style={{ userSelect: 'none' }}
          dangerouslySetInnerHTML={{
            __html: YT_CONTAINER(customStyles()),
          }}
        />
      </article>
    </ScrollShadow>
  );
};
