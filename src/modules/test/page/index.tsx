/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
import { useAppDispatch, useAppSelector } from '../../../core/store/hooks';
import {
  ChatIcon,
  GiftIcon,
  MemberIcon,
  StickerIcon,
  SuperChatIcon,
} from '../../../shared/components/icons/YtTestingIcons';
import {
  MESSAGE_RENDERER,
  YT_CONTAINER_TESTING_ISOLATED,
} from '../../home/html/customStyles';
import ReactHtmlParser from 'react-html-parser';
import { actions } from '../../home/redux/slice';
import { Button } from '@nextui-org/react';

const ButtonIcon = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: any;
}) => {
  const { testingMode } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleTestingMode = () => {
    if (!testingMode) {
      dispatch(actions.setTestingMode(true));
    }
    dispatch(action);
  };

  return (
    <Button
      isIconOnly
      className='mr-1 bg-transparent '
      radius='full'
      onPress={handleTestingMode}
    >
      {children}
    </Button>
  );
};

const buttons = [
  { key: 1, icon: <ChatIcon />, action: actions.addTestingContent('CHAT') },
  {
    key: 2,
    icon: <SuperChatIcon />,
    action: actions.addTestingContent('SUPERCHAT'),
  },
  {
    key: 3,
    icon: <StickerIcon />,
    action: actions.addTestingContent('STICKER'),
  },
  { key: 4, icon: <MemberIcon />, action: actions.addTestingContent('MEMBER') },
  { key: 5, icon: <GiftIcon />, action: actions.addTestingContent('GIFT') },
];

export const TestPage = () => {
  const { testingContent, stylesConfig } = useAppSelector(
    (state) => state.editor
  );

  const customStyles = () => {
    const messageRender = MESSAGE_RENDERER(stylesConfig);

    return messageRender;
  };

  return (
    <>
      <div className='bg-transparent' style={{ background: 'transparent' }}>
        <div className=''></div>

        {/* <div
          dangerouslySetInnerHTML={{
            __html: YT_CONTAINER_TESTING_ISOLATED(
              customStyles(),
              testingContent
            ),
          }}
        /> */}
        {ReactHtmlParser(
          YT_CONTAINER_TESTING_ISOLATED(customStyles(), testingContent)
        )}

        <div className='p-5 py-7 flex justify-center items-end bg-red-200'>
          {buttons.map((button) => (
            <ButtonIcon action={button.action} key={button.key}>
              {button.icon}
            </ButtonIcon>
          ))}
        </div>
      </div>
    </>
  );
};
