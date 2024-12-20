
import { useCallback, useEffect, useState } from 'react';
import sampleOne from '../../assets/1.jpg';
import sampleTwo from '../../assets/2.jpg';
import sampleThree from '../../assets/3.jpg';
import sampleFour from '../../assets/4.jpg';
import { useRef } from 'react';

const array = [sampleOne, sampleTwo, sampleThree, sampleFour];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const startRef = useRef(0);
    const currentRef = useRef(0);
    const isDownRef = useRef(false);

    const [isMobile, setIsMobile] = useState(false);

    const updateCarouselNext = useCallback(() => {
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
    },[index]);

    const updateCarouselPrev = useCallback(() => {
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
    },[index]);

    useEffect(() => {
        setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = ref.current?.offsetWidth || 0;
            ref.current.style.transform = `translateX(-${width * index}px)`;
          };
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);      
    }, [index]);
    
    useEffect(() => {
        const handleMouseDown = (e) => {
          startRef.current = e.clientX;
          isDownRef.current = true;
        };

        const handleMouseMove = (e) => {
          if(!isDownRef.current) return;
          currentRef.current = e.clientX - startRef.current;
        };

        const handleMouseUp = () => {
          const threshold = 50;
          if(currentRef.current > threshold){
            updateCarouselPrev();
          }else if(currentRef.current < -threshold){
            updateCarouselNext();
          }
          currentRef.current = 0;
          startRef.current = 0;
          isDownRef.current = false;
        };

        const handleTouchStart = (e) => {
          startRef.current = e.touches[0].clientX;
        };
    
        const handleTouchMove = (e) => {
          currentRef.current = e.touches[0].clientX - startRef.current;
        };
    
        const handleTouchEnd = () => {
          const threshold = 50;
          if(currentRef.current > threshold){
            updateCarouselPrev();
          }else if(currentRef.current < -threshold){
            updateCarouselNext();
          }
          currentRef.current = 0;
          startRef.current = 0;
        };

        const currentRefElement = ref.current;
        currentRefElement?.addEventListener('mousedown', handleMouseDown);
        currentRefElement?.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        currentRefElement?.addEventListener('touchstart', handleTouchStart, {passive: true});
        currentRefElement?.addEventListener('touchmove', handleTouchMove, {passive: true});
        currentRefElement?.addEventListener('touchend', handleTouchEnd, {passive: true});

        return () => {
          currentRefElement?.removeEventListener('mousedown', handleMouseDown);
          currentRefElement?.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);

          currentRefElement?.removeEventListener('touchstart', handleTouchStart);
          currentRefElement?.removeEventListener('touchmove', handleTouchMove);
          currentRefElement?.removeEventListener('touchend', handleTouchEnd);
        };
    }, [updateCarouselNext, updateCarouselPrev]);

  return (
    <div className='relative overflow-hidden w-full xl:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[300px] xs:h-[250px] h-[200px] mx-auto rounded-xl'>
        <div ref={ref} className="w-full h-full flex transform ease-in-out duration-500"> 
        {
                array.map((item,index) => {
                return (
                    <div key={index} className='flex-[0_0_100%]'>
                        <img src={item} className="w-full h-full object-cover flex-1 bg-blue-500 select-none" onDragStart={(e) => e.preventDefault()}/>
                    </div>
                )
                })
        }
        </div>
        {
            !isMobile && (
                <>
                    <div 
                     className='absolute top-1/2 z-10 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-xs sm:text-base flex justify-center items-center bg-black/40 p-3 cursor-pointer rounded-lg' 
                     onClick={updateCarouselPrev}
                    >{"<"}</div>
                    <div 
                     className='absolute top-1/2 right-0 z-10 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 text-xs sm:text-base flex justify-center items-center bg-black/40 p-3 cursor-pointer rounded-lg' 
                     onClick={updateCarouselNext}
                    >{">"}</div>
                </>
            )
        }
    </div>
  )
}

export default Carousel
