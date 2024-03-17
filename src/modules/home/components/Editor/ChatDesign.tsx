import { Checkbox, Slider } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { actions } from '../../redux/slice';

export const ChatDesign = () => {
  const { stylesConfig } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSliderChange = (value: number | number[], type: string) => {
    const number = Array.isArray(value) ? value[0] : value;

    let key = '';
    switch (type) {
      case 'chatMessage':
        key = 'chatMessageFontSize';
        break;
      case 'chatAuthor':
        key = 'chatAuthorFontSize';
        break;
      case 'chatEmote':
        key = 'chatEmoteSize';
        break;
    }

    dispatch(
      actions.setStylesConfig({
        key,
        value: number,
      })
    );
  };

  const handleChange = (key: string, value: boolean) => {
    dispatch(
      actions.setStylesConfig({
        key,
        value,
      })
    );
  };

  return (
    <div className='pr-4 pl-2 pb-4'>
      <div id='messages-typo' className='space-y-3'>
        {/* ALL CAPS */}
        <Checkbox
          isSelected={stylesConfig.chatAllCaps}
          onValueChange={(value) => handleChange('chatAllCaps', value)}
          color='success'
        >
          All Caps
        </Checkbox>

        {/* AUTHOR FONT SIZE */}
        <Slider
          size='sm'
          label='Author Font Size'
          step={1}
          maxValue={32}
          minValue={10}
          defaultValue={16}
          className='w-full'
          value={stylesConfig.chatAuthorFontSize}
          onChange={(value) => handleSliderChange(value, 'chatAuthor')}
          getValue={(value) => `${value}px`}
          color='success'
        />

        {/* MESSAGE FONT SIZE */}
        <Slider
          size='sm'
          label='Message Font Size'
          step={1}
          maxValue={32}
          minValue={10}
          className='w-full'
          value={stylesConfig.chatMessageFontSize}
          onChange={(value) => handleSliderChange(value, 'chatMessage')}
          getValue={(value) => `${value}px`}
          color='success'
        />

        {/* EMOTE FONT SIZE */}
        <Slider
          size='sm'
          label='Emote Font Size'
          step={1}
          maxValue={32}
          minValue={10}
          defaultValue={16}
          className='w-full'
          value={stylesConfig.chatEmoteSize}
          onChange={(value) => handleSliderChange(value, 'chatEmote')}
          getValue={(value) => `${value}px`}
          color='success'
        />
      </div>
    </div>
  );
};
