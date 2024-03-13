import { Checkbox, Slider } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { actions } from '../../redux/slice';

export const BadgeDesign = () => {
  const { stylesConfig } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSliderChange = (value: number | number[], type: string) => {
    const number = Array.isArray(value) ? value[0] : value;

    let key = '';
    switch (type) {
      case 'badge':
        key = 'badgeFontSize';
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
        {/* DISPLAY BADGE */}
        <Checkbox
          isSelected={stylesConfig.badgeDisplayBadge}
          onValueChange={(value) => handleChange('badgeDisplayBadge', value)}
          color='success'
        >
          Display Badges
        </Checkbox>

        {/* BADGE FONT SIZE */}
        <Slider
          size='sm'
          label='Badge Font Size'
          step={1}
          maxValue={32}
          minValue={5}
          defaultValue={10}
          className='w-full'
          value={stylesConfig.badgeFontSize}
          onChange={(value) => handleSliderChange(value, 'badge')}
          getValue={(value) => `${value}px`}
          color='success'
        />
      </div>
    </div>
  );
};
