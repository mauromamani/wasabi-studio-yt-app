import Confetti from 'react-confetti';
import { Button, Image, Link, Tooltip } from '@nextui-org/react';
import { RiTwitterXLine } from 'react-icons/ri';
import { SiKofi } from 'react-icons/si';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/themes/index.theme';

const links = [
  {
    tooltip: 'Twitter ❤️',
    href: 'https://twitter.com/_WasabiStudio_',
    icon: <RiTwitterXLine size={20} />,
  },
  {
    tooltip: 'Ko-fi ❤️',
    href: 'https://ko-fi.com/wasabistudio',
    icon: <SiKofi size={20} />,
  },
  {
    tooltip: 'VGen ❤️',
    href: 'https://vgen.co/WasabiStudio',
    icon: (
      <Image
        width={26}
        src='https://help.vgen.co/hc/article_attachments/13004232167575'
        style={{ filter: 'saturate(0)' }}
      />
    ),
  },
];

export const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const [showConfetti, setShowConfetti] = useState(false);
  const handleShowConfetti = () => {
    setShowConfetti((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          theme === 'dark' ? 'sidebar' : 'sidebar-light'
        } w-20 flex flex-col px-5 py-7 justify-between`}
      >
        <Image
          width={300}
          radius='sm'
          src='https://storage.ko-fi.com/cdn/useruploads/77e8474b-735d-420d-adb0-696b4bcf9dd1_c1bd53f2-b749-4eaf-b982-47b3211980d5.png'
          onClick={handleShowConfetti}
          className='cursor-pointer'
        />

        <div className='px-2 flex flex-col space-y-4 items-center'>
          {links.map((link, index) => (
            <Tooltip
              key={index}
              content={link.tooltip}
              placement='right'
              closeDelay={300}
            >
              <Button
                href={link.href}
                as={Link}
                target='_blank'
                isIconOnly
                className='bg-transparent'
                radius='full'
              >
                {link.icon}
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>

      {showConfetti && (
        <Confetti
          style={{ width: '100%', height: '100%' }}
          gravity={0.4}
          numberOfPieces={800}
          colors={['#b5f95e', '#f95e77', '#fcf7f7', '#b4dccb', '#4e2b31']}
        />
      )}
    </>
  );
};
