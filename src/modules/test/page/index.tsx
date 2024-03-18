/* eslint-disable no-irregular-whitespace */
import { useAppSelector } from '../../../core/store/hooks';
import {
  ROOT_STYLES,
  YT_CONTAINER_TESTING_ISOLATED,
} from '../../home/html/customStyles';
import { BottomBar } from '../components/BottomBar';

export const TestPage = () => {
  const { testingContent, stylesConfig } = useAppSelector(
    (state) => state.editor
  );

  const customStyles = () => {
    const messageRender = ROOT_STYLES(stylesConfig);

    return messageRender;
  };

  return (
    <>
      <div className='bg-transparent' style={{ background: 'transparent' }}>
        <div
          dangerouslySetInnerHTML={{
            __html: YT_CONTAINER_TESTING_ISOLATED(
              customStyles(),
              testingContent
            ),
          }}
        />

        <BottomBar />
      </div>
    </>
  );
};
