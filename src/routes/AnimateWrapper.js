import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
export default function AnimateWrapper({children, variant, transition, once = true}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: once })
  const mainControl = useAnimation()

  useEffect(() => { 
    if(isInView) {
      mainControl.start("visible")
    } else {
      mainControl.start("hidden")
    }
  }, [isInView])

  return (
    <motion.div 
      ref={ref}
      variants={variant ? variant : {
        hidden: { opacity:0, y:-100 },
        visible: { opacity: 1,y:0 }
      }}

      initial="hidden"
      animate={mainControl} 
      transition={transition ? transition : {
        duration: 0.5,
        delay:0.5
      }}

    >
      {children}
    </motion.div>
  )
}
