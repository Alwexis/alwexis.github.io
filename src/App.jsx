import { useState } from 'react'
import './App.css'
import Info from './components/Info'

function App() {

  const [animationVisible, setAnimationVisible] = useState(false);
  const [animation, setAnimation] = useState('animate-fade-up');

  const handleAnimationEnd = (e) => {
    if (e.animationName == 'fade-left') {
      setAnimation('animate-fade-down animate-reverse animate-duration-[1000ms]')
    } else if (e.animationName == 'fade-down') {
      setTimeout(() => {setAnimationVisible(!animationVisible)}, 50)
    }
  }

  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
      {/* Animación */}
      <section className={
        `header ${animationVisible ? 'hidden' : ''} ${animation}`
        } onAnimationEnd={handleAnimationEnd}>
        <div className='font-space-grotesk text-white text-4xl flex'>
          <span onAnimationEnd={handleAnimationEnd} className='animate-fade-left animate-delay-[1500ms]'>{"<"}</span>
          <h1 className='flex mx-2 space-x-1'>
            <span className='block animate-shrink-to-one-character overflow-hidden'>Ariel</span>
            <span className='block animate-shrink-to-one-character overflow-hidden'>Silva</span>
          </h1>
          <span className='animate-fade-right animate-delay-[1500ms]'>{"/>"}</span>
        </div>
      </section>
      <Info animationVisible={animationVisible} />
    </main>
  )
}

export default App
