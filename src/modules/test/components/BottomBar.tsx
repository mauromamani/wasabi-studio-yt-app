/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import {
  ChatIcon,
  GiftIcon,
  MemberIcon,
  StickerIcon,
  SuperChatIcon,
} from '../../../shared/components/icons/YtTestingIcons';
import { actions } from '../../home/redux/slice';
import { useAppDispatch } from '../../../core/store/hooks';
import { useState } from 'react';
import { StylesConfig } from '../../home/interfaces';

const ButtonIcon = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: any;
}) => {
  const dispatch = useAppDispatch();

  const handleTestingMode = () => {
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

export const BottomBar = () => {
  const dispatch = useAppDispatch();
  const [styles, setStyles] = useState('');
  const [message, setMessage] = useState('');
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleOpenModal = () => {
    onOpen();
  };

  const handleReadyToTest = () => {
    console.log('styles', styles);

    const stylesParsed = styles ? (JSON.parse(styles) as StylesConfig) : null;

    if (stylesParsed) {
      dispatch(actions.setStylesFromLocalStorage(stylesParsed));
      setMessage('Code pasted successfully!');
      setTimeout(() => {
        onClose();
      }, 2000);
    }

    if (!stylesParsed || !styles) {
      setMessage('Error in the code provided');
    }
  };

  return (
    <>
      <div className='p-5 py-3 h-28 flex justify-center dark-bg'>
        {buttons.map((button) => (
          <ButtonIcon action={button.action} key={button.key}>
            {button.icon}
          </ButtonIcon>
        ))}

        <Button
          onClick={handleOpenModal}
          variant='bordered'
          className='text-gray-500 border-gray-500'
        >
          Paste Code
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{ zIndex: '10000' }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Paste the code
              </ModalHeader>

              <ModalBody>
                <Textarea
                  label='Code'
                  placeholder='Please paste the code here'
                  labelPlacement='outside'
                  minRows={6}
                  className='w-full'
                  value={styles}
                  onChange={(e) => setStyles(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>

                <Popover placement='top' color='success'>
                  <PopoverTrigger>
                    <Button color='success' onClick={handleReadyToTest}>
                      Ready to test!
                    </Button>
                  </PopoverTrigger>
                  <div className='px-1 py-2'>
                    {message.includes('Error') ? (
                      <>
                        <PopoverContent className='bg-red-600 text-gray-200'>
                          <div className='text-small font-bold'>
                            Code Pasted
                          </div>
                          <div className='text-tiny'>{message}</div>
                        </PopoverContent>
                      </>
                    ) : (
                      <>
                        <PopoverContent className='bg-green-600 text-gray-200'>
                          <div className='text-small font-bold'>
                            Code Pasted
                          </div>
                          <div className='text-tiny'>{message}</div>
                        </PopoverContent>
                      </>
                    )}
                  </div>
                </Popover>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
