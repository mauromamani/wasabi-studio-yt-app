import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import { TypographyEditor } from './TypographyEditor';
import {
  ChatIcon,
  GiftIcon,
  MemberIcon,
  StickerIcon,
  SuperChatIcon,
} from '../../../../shared/components/icons/YtTestingIcons';

interface Items {
  key: number;
  title: string;
  content: React.ReactNode;
}

const items: Items[] = [
  { key: 1, title: 'Colors', content: <TypographyEditor /> },
  { key: 2, title: 'Typography', content: <TypographyEditor /> },
];

const ButtonIcon = ({ children }: { children: React.ReactNode }) => (
  <Button isIconOnly className='bg-transparent mr-1' radius='full'>
    {children}
  </Button>
);

const buttons = [
  { key: 1, icon: <ChatIcon />, onClick: () => {} },
  { key: 2, icon: <SuperChatIcon />, onClick: () => {} },
  { key: 3, icon: <StickerIcon />, onClick: () => {} },
  { key: 4, icon: <MemberIcon />, onClick: () => {} },
  { key: 5, icon: <GiftIcon />, onClick: () => {} },
];

export const Editor = () => {
  return (
    <article id='editor' className='w-1/4'>
      <div className='p-5 py-7 flex justify-center items-end'>
        {buttons.map((button) => (
          <ButtonIcon key={button.key}>{button.icon}</ButtonIcon>
        ))}
      </div>
      <hr className='shrink-0 bg-divider border-none h-divider' />
      <Accordion className='px-0'>
        {items.map((item) => (
          <AccordionItem
            classNames={{ title: 'text-sm font-semibold' }}
            key={item.key}
            title={item.title}
            className='pl-3'
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
};
