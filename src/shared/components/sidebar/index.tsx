import { Image } from '@nextui-org/react';

export const Sidebar = () => {
  return (
    <div className='sidebar w-20 flex flex-col px-5 py-7 justify-between'>
      <Image
        width={300}
        radius='sm'
        src='https://storage.ko-fi.com/cdn/useruploads/77e8474b-735d-420d-adb0-696b4bcf9dd1_c1bd53f2-b749-4eaf-b982-47b3211980d5.png'
      />

      <div className='px-2 flex flex-col space-y-4'>
        <Image
          width={300}
          radius='sm'
          src='https://storage.ko-fi.com/cdn/useruploads/77e8474b-735d-420d-adb0-696b4bcf9dd1_c1bd53f2-b749-4eaf-b982-47b3211980d5.png'
        />
        <Image
          width={300}
          radius='sm'
          src='https://storage.ko-fi.com/cdn/useruploads/77e8474b-735d-420d-adb0-696b4bcf9dd1_c1bd53f2-b749-4eaf-b982-47b3211980d5.png'
        />
        <Image
          width={300}
          radius='sm'
          src='https://storage.ko-fi.com/cdn/useruploads/77e8474b-735d-420d-adb0-696b4bcf9dd1_c1bd53f2-b749-4eaf-b982-47b3211980d5.png'
        />
      </div>
    </div>
  );
};
