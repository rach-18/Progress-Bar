import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if(prev >= 100) {
          setStatus("Completed!");
          clearInterval(id);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(id);
  }, []);

  return(
    <div className='flex flex-col items-center justify-center gap-4 mt-20 rounded-lg shadow-lg w-1/2 mx-auto p-10 bg-white'>
      <p className='text-2xl font-semibold'>Progress Bar</p>
      <div className='rounded-full w-full border-[0.1rem] border-blue-500 h-[2rem]'>
        <div 
          id='bar'
          style={{width: `${progress}%`}}
          className='bg-blue-200 h-full rounded-full'
        >
        </div>
      </div>
      <p>{progress} %</p>
      <p>{status}</p>
    </div>
  )
}

export default App
