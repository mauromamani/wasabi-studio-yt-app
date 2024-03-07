/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { TypographyEditor } from './TypographyEditor';
import {
  ChatIcon,
  GiftIcon,
  MemberIcon,
  StickerIcon,
  SuperChatIcon,
} from '../../../../shared/components/icons/YtTestingIcons';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { actions } from '../../redux/slice';

interface Items {
  title: string;
  content: React.ReactNode;
}

const items: Items[] = [
  { title: 'Chat Layout', content: <TypographyEditor /> },
  { title: 'Badge', content: <TypographyEditor /> },
  { title: 'Chat Design', content: <TypographyEditor /> },
  { title: 'Support Card Design', content: <TypographyEditor /> },
];

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

export const Editor = () => {
  const { testingMode } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleTestingMode = () => {
    if (testingMode) {
      dispatch(actions.setTestingMode(false));
    }
  };

  return (
    <article id='editor' className='w-1/4'>
      <div className='p-5 py-7 flex justify-center items-end'>
        {buttons.map((button) => (
          <ButtonIcon action={button.action} key={button.key}>
            {button.icon}
          </ButtonIcon>
        ))}
      </div>
      <hr className='shrink-0 bg-divider border-none h-divider' />
      <Accordion className='px-0'>
        {items.map((item) => (
          <AccordionItem
            classNames={{ title: 'text-sm font-semibold' }}
            key={item.title}
            title={item.title}
            className='pl-3 pr-2'
            onPress={handleTestingMode}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
};
