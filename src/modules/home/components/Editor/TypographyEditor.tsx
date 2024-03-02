import { Slider } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { actions } from '../../redux/slice';

export const TypographyEditor = () => {
  const { messageRenderConfig } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSliderChange = (value: number | number[], type: string) => {
    const number = Array.isArray(value) ? value[0] : value;

    const key =
      type === 'message' ? 'messageRendererFontSize' : 'authorNameFontSize';

    dispatch(
      actions.setMessageRenderConfig({
        key,
        value: number,
      })
    );
  };

  return (
    <div className='pr-4'>
      <div id='messages-typo' className=''>
        <Slider
          size='sm'
          label='Message Font Size'
          step={1}
          maxValue={32}
          minValue={10}
          defaultValue={16}
          className='w-full'
          value={messageRenderConfig.messageRendererFontSize}
          onChange={(value) => handleSliderChange(value, 'message')}
          onBlurCapture={() => console.log('onBeforeInputCapture')}
          getValue={(value) => `${value}px`}
          color='success'
        />

        <Slider
          size='sm'
          label='Author Font Size'
          step={1}
          maxValue={32}
          minValue={10}
          defaultValue={16}
          className='w-full mt-2'
          value={messageRenderConfig.authorNameFontSize}
          onChange={(value) => handleSliderChange(value, 'author')}
          getValue={(value) => `${value}px`}
          color='success'
        />
      </div>
    </div>
  );
};
