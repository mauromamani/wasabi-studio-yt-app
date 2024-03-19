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
  useDisclosure,
} from '@nextui-org/react';
import { ReloadIcon } from '../icons/ReloadIcon';
import { SaveIcon } from '../icons/SaveIcon';
import { CopyBlock, dracula } from 'react-code-blocks';
import { MdContentCopy } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../core/store/hooks';
import { actions } from '../../../modules/home/redux/slice';
import { StylesConfig } from '../../../modules/home/interfaces';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themes/';

export const Navbar = () => {
  const { stylesToCopy, stylesConfig, chatBoxName, stylesToExport } =
    useAppSelector((state) => state.editor);
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(stylesToCopy);
    handleSaveLocal(stylesConfig);
  };

  const handleCopyTestStylesToClipboard = () => {
    navigator.clipboard.writeText(stylesToExport);
  };

  const handleSaveLocal = (stylesConfig: StylesConfig) => {
    const stylesToSave = JSON.stringify(stylesConfig);

    localStorage.setItem('chatbox-name-styles', stylesToSave);
  };

  const handleOpenModal = () => {
    dispatch(actions.generateStylesToCopy());
    dispatch(actions.exportStyles());
    onOpen();
  };

  const handleResetStyles = () => {
    dispatch(actions.resetStyles());
  };

  const buttonStyles = () => {
    if (theme === 'dark') {
      return 'text-gray-300 border-dark';
    }

    return 'text-gray-500 border-gray-500';
  };

  return (
    <>
      <div className='h-20 flex items-center justify-between px-4 pr-10'>
        <div className=''>
          <h2
            className='text-lg font-semibold'
            style={{ letterSpacing: '0.5px' }}
          >
            {chatBoxName}
          </h2>
          <h3 className='text-xs'>WasabiStudio's Chatbox Editor</h3>
        </div>

        <div className='flex space-x-3'>
          <Button
            variant='bordered'
            className={`font-semibold ${buttonStyles()}`}
            startContent={<ReloadIcon />}
            onClick={handleResetStyles}
          >
            Reset
          </Button>
          <Button
            color='success'
            className='bg-green-600 text-gray-200 font-semibold'
            startContent={<SaveIcon />}
            onPress={handleOpenModal}
          >
            Save
          </Button>
        </div>
      </div>
      <hr className='shrink-0 bg-divider border-none h-divider' />

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className='dark-bg text-gray-200'
        size='4xl'
        backdrop='blur'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Copy the code below and paste it in your obs browser source
              </ModalHeader>
              <ModalBody className='overflow-auto max-h-[50vh]'>
                <CopyBlock
                  text={stylesToCopy}
                  language='css'
                  theme={dracula}
                  wrapLongLines
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>

                <Popover placement='top' color='success'>
                  <PopoverTrigger>
                    <Button
                      className='bg-green-600 text-gray-200 font-semibold'
                      color='primary'
                      onClick={handleCopyToClipboard}
                      startContent={<MdContentCopy />}
                    >
                      Copy and Save
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='bg-green-600 text-gray-200'>
                    <div className='px-1 py-2'>
                      <div className='text-small font-bold'>
                        Code Copied to Clipboard
                      </div>
                      <div className='text-tiny'>
                        The code has been copied to your clipboard
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Popover placement='top' color='success'>
                  <PopoverTrigger>
                    <Button
                      className='bg-green-600 text-gray-200 font-semibold'
                      color='primary'
                      onClick={handleCopyTestStylesToClipboard}
                      startContent={<MdContentCopy />}
                    >
                      Copy to Test
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='bg-green-600 text-gray-200'>
                    <div className='px-1 py-2'>
                      <div className='text-small font-bold'>
                        Code Copied to Clipboard
                      </div>
                      <div className='text-tiny'>
                        The code has been copied to your clipboard
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
