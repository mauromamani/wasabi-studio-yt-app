import { Select, SelectItem, Slider } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { actions } from '../../redux/slice';

export const ChatLayoutDesign = () => {
  const { stylesConfig } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSliderChange = (value: number | number[], type: string) => {
    const number = Array.isArray(value) ? value[0] : value;

    let key = '';
    switch (type) {
      case 'scale':
        key = 'layoutScale';
        break;
      case 'marginY':
        key = 'layoutMarginY';
        break;
      case 'marginX':
        key = 'layoutMarginX';
        break;
    }

    dispatch(
      actions.setStylesConfig({
        key,
        value: number,
      })
    );
  };

  const handleChange = (key: string, value: string) => {
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
        <Select
          label='Display Mode'
          labelPlacement='outside'
          placeholder='Select Display Mode'
          className='w-full'
          variant='bordered'
          radius='sm'
          disallowEmptySelection
          selectedKeys={[stylesConfig.layoutAlign]}
          onChange={({ target: { value } }) =>
            handleChange('layoutAlign', value)
          }
        >
          <SelectItem key={'start'} value={'start'}>
            Left
          </SelectItem>

          <SelectItem key={'end'} value={'end'}>
            Right
          </SelectItem>
        </Select>

        {/* SCALE */}
        {/* <Slider
          size='sm'
          label='Scale'
          step={0.01}
          maxValue={1.3}
          minValue={0.5}
          defaultValue={1}
          className='w-full'
          value={stylesConfig.layoutScale}
          onChange={(value) => handleSliderChange(value, 'scale')}
          getValue={(value) => `${value}%`}
          color='success'
        /> */}

        {/* MARGIN Y */}
        <Slider
          size='sm'
          label='Margin Y'
          step={1}
          maxValue={30}
          minValue={0}
          defaultValue={1}
          className='w-full'
          value={stylesConfig.layoutMarginY}
          onChange={(value) => handleSliderChange(value, 'marginY')}
          getValue={(value) => `${value}px`}
          color='success'
        />

        {/* MARGIN X */}
        <Slider
          size='sm'
          label='Margin X'
          step={1}
          maxValue={100}
          minValue={15}
          defaultValue={1}
          className='w-full'
          value={stylesConfig.layoutMarginX}
          onChange={(value) => handleSliderChange(value, 'marginX')}
          getValue={(value) => `${value}px`}
          color='success'
        />
      </div>
    </div>
  );
};
