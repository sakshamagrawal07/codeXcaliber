
import { useState } from 'react';
import sampleOne from '../../assets/1.jpg';
import sampleTwo from '../../assets/2.jpg';
import sampleThree from '../../assets/3.jpg';
import sampleFour from '../../assets/4.jpg';
import { useRef } from 'react';

const array = [sampleOne, sampleTwo, sampleThree, sampleFour];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);

    const updateCarouselNext = () => {
        if(index === array.length - 1){
            const width = ref.current?.offsetWidth;
            if(ref.current){
                ref.current.style.transform = `translateX(-${width * 0}px)`;
            }   
            setIndex(0);
        }
        else{
            const width = ref.current?.offsetWidth;
            if(ref.current){
                ref.current.style.transform = `translateX(-${width * (index+1)}px)`;
            }   
            setIndex(index + 1);
        }
    }

    const updateCarouselPrev = () => {
        if(index === 0){
            const width = ref.current?.offsetWidth;
            if(ref.current){
                ref.current.style.transform = `translateX(-${width * (array.length - 1)}px)`;
            }   
            setIndex(array.length - 1);
        }
        else{
            const width = ref.current?.offsetWidth;
            if(ref.current){
                ref.current.style.transform = `translateX(-${width * (index-1)}px)`;
            }   
            setIndex(index - 1);
        }
    }

    window.addEventListener('resize', () => {
        const width = ref.current?.offsetWidth;
        if(ref.current){
            ref.current.style.transform = `translateX(-${width * index}px)`;
        }
    });

  return (
    <div className='relative overflow-hidden w-full xl:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[300px] xs:h-[250px] h-[200px] mx-auto rounded-xl'>
        <div ref={ref} className="w-full h-full flex transform ease-in-out duration-500"> 
        {
                array.map((item,index) => {
                return (
                    <div key={index} className='flex-[0_0_100%]'>
                        <img src={item} className="w-full h-full object-cover flex-1 bg-blue-500"/>
                    </div>
                )
                })
        }
        </div>
        <div 
         className='absolute top-1/2 z-10 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-xs sm:text-base flex justify-center items-center bg-black/40 p-3 cursor-pointer rounded-lg' 
         onClick={updateCarouselPrev}
        >{"<"}</div>
        <div 
         className='absolute top-1/2 right-0 z-10 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-xs sm:text-base flex justify-center items-center bg-black/40 p-3 cursor-pointer rounded-lg' 
         onClick={updateCarouselNext}
        >{">"}</div>
    </div>
  )
}

export default Carousel
