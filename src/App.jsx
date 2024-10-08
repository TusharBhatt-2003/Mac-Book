import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className='w-screen h-screen bg-white'>
      {/* Navbar Section */}
      <div className='navbar flex gap-5 py-3 lg:px-0 lg:pt-3 lg:pb-2 absolute top-0 left-1/2 -translate-x-1/2 border-b flex-wrap justify-center lg:justify-start'>
        {[
          'Store',
          'iPhone',
          'iPad',
          'Mac',
          'Accessories',
          'Support',
        ].map((e, index) => (
          <a key={index} href='' className='text-black font-[400] text-xs lg:text-sm py-1'>
            {e}
          </a>
        ))}
      </div>

      {/* Content Section */}
      <div className='w-screen absolute flex flex-col items-center top-24 lg:top-36 left-1/2 -translate-x-1/2 text-center px-4'>
        <h3 className='text-3xl lg:text-7xl tracking-tighter font-[700]'>
          MacBook Pro.
        </h3>
        <h5 className='text-sm lg:text-base tracking-tighter font-[500] mt-3 lg:mt-5'>
          Oh So Pro..!
        </h5>
      </div>

      {/* Canvas Section */}
      <Canvas
        camera={{ fov: 20, position: [0, -10, 160] }}
        className='lg:w-full lg:h-full'
      >
        <Environment 
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr',
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
