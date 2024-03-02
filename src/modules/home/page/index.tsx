import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';

export const HomePage = () => {
  return (
    <section id='home-page' className='flex'>
      <Editor />

      <Preview />
    </section>
  );
};
