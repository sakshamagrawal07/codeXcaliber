import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import borderBlue from "../../assets/borderBlue.svg";
import borderRed from "../../assets/borderRed.svg"
import borderYellow from "../../assets/borderYellow.svg"
import borderGreen from "../../assets/borderGreen.svg"
import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return width
}

const events = [
  {
    id: "01",
    date: "15.01.2025",
    title: "REGISTRATION BEGINS",
    description: "This marks the period when students can submit their applications to participate in CodeXCaliber. Ensure your application is complete before the deadline!"
  },
  {
    id: "02",
    date: "24.01.2025",
    title: "INAUGURAL CEREMONY",
    description: "The official start of CodeXCaliber! Join us for an introductory session where we’ll walk you through the program’s timeline, expectations, and the exciting journey ahead."
  },
  {
    id: "03",
    date: "25.01.2025",
    title: "PROPOSAL WRITING",
    description: "A week-long workshop focused on helping students write strong, well-structured project proposals. Get guidance from mentors and learn the best practices for proposing your project ideas."
  },
  {
    id: "04",
    date: "25.01.2025",
    title: "COMMUNITY BONDING PHASE",
    description: "This phase encourages students and mentors to connect, discuss their projects, and build rapport with the organisations. It’s a great opportunity to understand your project’s goals better before diving into coding."
  },
  {
    id: "05",
    date: "15.02.2025",
    title: "CODINGPHASE",
    description: "This is where the real fun begins! The core phase of CodeXCaliber, where students begin implementing their proposed projects. During this period, students will collaborate closely with mentors and contribute code to open-source repositories."
  },
  {
    id: "06",
    date: "03.04.2025",
    title: "MENTOR EVALUATION PHASE",
    description: "Mentors will review the progress of students’ projects, providing feedback and guidance. This evaluation is crucial for refining and improving the final submission."
  },
  {
    id: "07",
    date: "07.04.2025",
    title: "CLOSING CEREMONY",
    description: "The official conclusion of CodeXCaliber. Celebrate your achievements, review key learnings, and recognize outstanding contributors as we wrap up the program."
  },
]

const borders = [borderBlue, borderRed, borderYellow, borderGreen]
const colors = ["bg-[#4285F4]","bg-[#EA4335]","bg-[#FBBC04]","bg-[#34A853]"]
const colorsLowOp = ["bg-[#4285F4]/50","bg-[#EA4335]/50","bg-[#FBBC04]/50","bg-[#34A853]/50"]

export default function Vo() {
  const width = useWidth()

  return (
    <div className="min-h-screen w-full mb-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full xl:-mb-8"
        >
          <div className="relative mx-auto w-48 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl" />
            <div className="relative border border-cyan-500 bg-black/50 p-4 backdrop-blur-sm">
              <h1 className="text-center font-mono text-2xl font-bold tracking-wider text-cyan-500">Start</h1>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Center Line */}
          {
            width>1024 ? (
              <div className="absolute z-[-1] lg:-top-8 xl:top-0 left-1/2 lg:h-[calc(100%+96px)] xl:h-[calc(100%+16px)] w-px -translate-x-1/2 bg-multi-gradient"/>
            ) : (
              <>
                <div className="absolute z-[-1] left-1/2 xl:top-0 -top-8 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-[#4285F4] to-[#34A853]"/>
                <div className="absolute z-[-1] left-1/2 xl:bottom-0 -bottom-8 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-[#4285F4] to-[#34A853]"/>
              </>
            )
          }

          {/* Events */}
          {events.map((event, index) => (
            <TimelineItem 
              key={event.id}
              event={event}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}   
        </div>

        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full lg:-mt-4 xl:-mt-8"
        >
          <div className="relative mx-auto w-48 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl" />
            <div className="relative border border-cyan-500 bg-black/50 p-4 backdrop-blur-sm">
              <h1 className="text-center font-mono text-2xl font-bold tracking-wider text-cyan-500">End</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function TimelineItem({ event, isLeft, index }) {
  const width = useWidth()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (isLeft ? -50 : 50) }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`mt-8 mb-8 xl:mb-12 w-full relative flex flex-col gap-1 items-center`}
    >
      {/* Connector */}
      {
        (!isLeft && width>1024) && (
            <div className="absolute top-[calc(50%-16px)] right-[calc(50%-8px)] h-4 w-4">
              <div className={`absolute h-4 w-4 animate-ping rounded-full ${colorsLowOp[index%4]}`}/>
              <div className={`absolute h-4 w-4 rounded-full ${colors[index%4]}`}/>
              <div className="absolute h-0.5 xl:w-14 w-10 top-[50%] left-[100%] z-[-1] bg-cyan-500"/>
            </div>
        )
      }
    
      <div className={`relative ${'xl:pt-8'}`}>
        <div className={`${width>1024? isLeft? "-mx-[60%]" : "mx-[60%]" : "mx-auto"} relative xl:w-[521px] xl:h-[291px] xs:w-[401px] xs:h-[224px] w-[320px] h-[179px]`}>
          <img src={borders[index%4]} className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className="absolute top-5 right-10 font-extrabold md:text-base sm:text-sm text-xs">{event.date}</div>
          <div className="sm:pt-14 pt-10">
            <div className="xl:text-3xl md:text-xl xs:text-lg text-sm flex gap-3 justify-center items-center iceland-font"
            >
              {event.title}
              <div className="xl:text-2xl md:text-lg xs:text-sm border xl:p-1 md:p-0.5 sm:p-0.5 px-[2px] aspect-square xl:w-10 md:w-8 sm:w-6 w-5">
                {event.id}
              </div>
            </div>
              
            <div className="mt-3 px-7 xl:text-base md:text-xs xs:text-xs text-2xs">{event.description}</div>
          </div>
        </div>
      </div>

      {/* Connector */}
      {
        (isLeft && width>1024) && (
          <div className={`absolute top-[calc(50%-16px)] left-[calc(50%-8px)] h-4 w-4`}>
            <div className={`absolute h-4 w-4 animate-ping rounded-full ${colorsLowOp[index%4]}`}/>
            <div className={`absolute h-4 w-4 rounded-full ${colors[index%4]}`}/>
            <div className="absolute h-0.5 xl:w-12 w-8 top-[50%] right-[100%] z-[-1] bg-cyan-500"/>
          </div>
        )
      }
    </motion.div>
  )
}

