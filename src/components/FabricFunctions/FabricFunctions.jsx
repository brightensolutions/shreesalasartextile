import React, { useEffect } from 'react';
import {
  fabricfunctions,
  FunctionalFabric1,
  FunctionalFabric2,
  FunctionalFabric3,
  FunctionalFabric4,
  FunctionalFabric5,
  FunctionalFabric6,
  Hangtags1,
  Hangtags2,
  Hangtags3
} from '../Images/Images';

const FabricFunctions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
      {/* Header */}
      <div className='text-center'>
        <h1 className='font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block'>
          Fabric Functions
        </h1>
      </div>

      {/* Image */}
      <div>
        <img src={fabricfunctions} alt='fabricfunctions' className='w-full h-full' />
      </div>

      {/* Functional Fabrics */}
      <div className='mt-[50px]'>
        <h1 className='font-tomorrow sm:text-[25px] text-[20px] font-bold pb-[10px] border-b-[1px] inline-block'>
          Functional Fabric, Yarn and Finishes
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
          {[
            { id: 1, img: FunctionalFabric1, title: 'Anti Microbial/Anti Odour' },
            { id: 2, img: FunctionalFabric2, title: 'Anti Static' },
            { id: 3, img: FunctionalFabric3, title: 'UPF Sun Protection' },
            { id: 4, img: FunctionalFabric4, title: 'Wicking/ Moisture Management' },
            { id: 5, img: FunctionalFabric5, title: 'Anti Viral' },
            { id: 6, img: FunctionalFabric6, title: 'Thermal Management - Q Max Cool Touch' }
          ].map((item) => (
            <div key={item.id} className='text-center'>
              <img src={item.img} alt={item.title} className='w-[190px] m-auto h-auto' />
              <h2 className='font-roboto font-bold text-[25px] mt-3'>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Hangtags */}
      <div className='mt-[50px]'>
        <h1 className='font-tomorrow sm:text-[25px] text-[20px] font-bold pb-[10px] border-b-[1px] inline-block'>
          Hangtags 
        </h1>
        <div className='flex md:flex-row flex-col justify-center items-center gap-[25px] mt-[20px]'>
          {[Hangtags1, Hangtags2, Hangtags3].map((hangtag, index) => (
            <div key={index}>
              <img src={hangtag} alt={`Hangtag${index + 1}`} className='md:w-[100%] w-[100%] h-full' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FabricFunctions;