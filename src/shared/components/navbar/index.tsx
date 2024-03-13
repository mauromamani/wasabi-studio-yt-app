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
import { STYLES } from '../../../modules/home/html/styles';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(STYLES);
    handleSaveLocal();
  };

  const handleSaveLocal = () => {
    localStorage.setItem('chatbox-name-styles', 'modificacion');
  };

  const handleResetStyles = () => {
    navigate('/testing');
  };

  return (
    <>
      <div className='h-20 flex items-center justify-between px-4 pr-10'>
        <div className=''>
          <h2
            className='text-lg font-semibold'
            style={{ letterSpacing: '0.5px' }}
          >
            Chatbox Name
          </h2>
          <h3 className='text-xs'>WasabiStudio's Chatbox Editor</h3>
        </div>

        <div className='flex space-x-3'>
          <Button
            variant='bordered'
            className='text-gray-300 font-semibold border-dark'
            startContent={<ReloadIcon />}
            onClick={handleResetStyles}
          >
            Reset
          </Button>
          <Button
            color='success'
            className='bg-green-600 text-gray-200 font-semibold'
            startContent={<SaveIcon />}
            onPress={onOpen}
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
                  text={STYLES}
                  language='css'
                  theme={dracula}
                  wrapLongLines
                  onCopy={handleSaveLocal}
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
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
