/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import {
  ChatIcon,
  GiftIcon,
  MemberIcon,
  StickerIcon,
  SuperChatIcon,
} from '../../../../shared/components/icons/YtTestingIcons';
import { actions } from '../../redux/slice';
import { ChatDesign } from './ChatDesign';
import { BadgeDesign } from './BadgeDesign';
import { SupportCardDesign } from './SupportCardDesign';
import { useAppDispatch, useAppSelector } from '../../../../core/store/hooks';
import { ChatLayoutDesign } from './ChatLayoutDesign';

interface Items {
  title: string;
  content: React.ReactNode;
}

const items: Items[] = [
  { title: 'Chat Layout', content: <ChatLayoutDesign /> },
  { title: 'Badge', content: <BadgeDesign /> },
  { title: 'Chat Design', content: <ChatDesign /> },
  { title: 'Support Card Design', content: <SupportCardDesign /> },
];

const ButtonIcon = ({
  children,
  action,
  type,
}: {
  children: React.ReactNode;
  action: any;
  type: string;
}) => {
  const { uniqueElement } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleTestingMode = () => {
    dispatch(action);
  };

  const selectedStyle = () => {
    if (uniqueElement.unique && uniqueElement.type === type) {
      return 'p-2';
    }

    return 'bg-transparent';
  };

  return (
    <Button
      isIconOnly
      className={`mr-1 ${selectedStyle()}`}
      radius='full'
      onPress={handleTestingMode}
    >
      {children}
    </Button>
  );
};

const buttons = [
  {
    key: 'CHAT',
    icon: <ChatIcon />,
    action: actions.setUniqueElements('CHAT'),
  },
  {
    key: 'SUPERCHAT',
    icon: <SuperChatIcon />,
    action: actions.setUniqueElements('SUPERCHAT'),
  },
  {
    key: 'STICKER',
    icon: <StickerIcon />,
    action: actions.setUniqueElements('STICKER'),
  },
  {
    key: 'MEMBER',
    icon: <MemberIcon />,
    action: actions.setUniqueElements('MEMBER'),
  },
  {
    key: 'GIFT',
    icon: <GiftIcon />,
    action: actions.setUniqueElements('GIFT'),
  },
];

export const Editor = () => {
  return (
    <article id='editor' className='w-1/4'>
      <div className='p-5 py-7 flex justify-center items-end'>
        {buttons.map((button) => (
          <ButtonIcon key={button.key} type={button.key} action={button.action}>
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
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
};
