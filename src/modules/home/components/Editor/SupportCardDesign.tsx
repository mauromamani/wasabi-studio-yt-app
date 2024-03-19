import { Checkbox, Slider } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { actions } from '../../redux/slice';

export const SupportCardDesign = () => {
  const { stylesConfig } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSliderChange = (value: number | number[], type: string) => {
    const number = Array.isArray(value) ? value[0] : value;

    let key = '';
    switch (type) {
      case 'title':
        key = 'supportCardTitleFontSize';
        break;
      case 'subtitle':
        key = 'supportCardSubTitleFontSize';
        break;
      case 'other':
        key = 'supportCardOtherTextFontSize';
        break;
      case 'message':
        key = 'supportCardMessageFontSize';
        break;
      case 'emote':
        key = 'supportCardEmoteSize';
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

  const disableInput = () => !stylesConfig.supportCardDisplayCard;

  return (
    <div className='pr-4 pl-2 pb-4'>
      <div id='messages-typo' className='space-y-3'>
        {/* DISPLAY BADGE */}
        <div className='flex flex-col space-y-2'>
          <Checkbox
            isSelected={stylesConfig.supportCardDisplayCard}
            onValueChange={(value) =>
              handleChange('supportCardDisplayCard', value)
            }
            color='success'
          >
            Display Cards
          </Checkbox>

          <Checkbox
            isSelected={stylesConfig.supportCardAllCaps}
            onValueChange={(value) => handleChange('supportCardAllCaps', value)}
            color='success'
            isDisabled={disableInput()}
          >
            All Caps
          </Checkbox>
        </div>

        {/* TITLE FONT SIZE */}
        <Slider
          size='sm'
          label='Title Font Size'
          step={1}
          maxValue={32}
          minValue={10}
          defaultValue={10}
          className='w-full'
          value={stylesConfig.supportCardTitleFontSize}
          onChange={(value) => handleSliderChange(value, 'title')}
          getValue={(value) => `${value}px`}
          color='success'
          isDisabled={disableInput()}
        />

        {/* SUBTITLE FONT SIZE */}
        <Slider
          size='sm'
          label='SubTitle Font Size'
          step={1}
          maxValue={32}
          minValue={5}
          defaultValue={10}
          className='w-full'
          value={stylesConfig.supportCardSubTitleFontSize}
          onChange={(value) => handleSliderChange(value, 'subtitle')}
          getValue={(value) => `${value}px`}
          color='success'
          isDisabled={disableInput()}
        />

        {/* OTHER FONT SIZE */}
        <Slider
          size='sm'
          label='Other Font Size'
          step={1}
          maxValue={32}
          minValue={5}
          defaultValue={10}
          className='w-full'
          value={stylesConfig.supportCardOtherTextFontSize}
          onChange={(value) => handleSliderChange(value, 'other')}
          getValue={(value) => `${value}px`}
          color='success'
          isDisabled={disableInput()}
        />

        {/* MESSAGE FONT SIZE */}
        <Slider
          size='sm'
          label='Message Font Size'
          step={1}
          maxValue={32}
          minValue={5}
          defaultValue={10}
          className='w-full'
          value={stylesConfig.supportCardMessageFontSize}
          onChange={(value) => handleSliderChange(value, 'message')}
          getValue={(value) => `${value}px`}
          color='success'
          isDisabled={disableInput()}
        />

        {/* EMOTE FONT SIZE */}
        <Slider
          size='sm'
          label='Emote Font Size'
          step={1}
          maxValue={32}
          minValue={5}
          defaultValue={10}
          className='w-full'
          value={stylesConfig.supportCardEmoteSize}
          onChange={(value) => handleSliderChange(value, 'emote')}
          getValue={(value) => `${value}px`}
          color='success'
          isDisabled={disableInput()}
        />
      </div>
    </div>
  );
};
