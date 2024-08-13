import { motion } from 'framer-motion';
import ThreeModel from './components/ThreeModel';
import './index.css';

function App() {

  return (
    <>
      <main className='h-screen bg-slate-900'>
        <div className="container mx-auto">

          <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",       //タイプをスプリング型
              duration: 1,          //1秒間かけて動くようにする
              delay: 0.5,           //0.5秒遅延してから動くようにする
              stiffness: 130,
            }}
          className="flex justify-between items-center text-white h-16">
            <span className="font-bold text-2xl">Website</span>

            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contents</a>
                </li>
              </ul>
            </nav>

          </motion.header>

          <section className='lg:py-48'>
            <div className='flex items-center justify-between'>
              <div className='space-y-3'>
                <motion.h2 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",       //タイプをスプリング型
                    duration: 1,          //1秒間かけて動くようにする
                    delay: 0.5,           //0.5秒遅延してから動くようにする
                    stiffness: 130,
                  }}
                  className='text-white lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem]'>
                  3D website
                </motion.h2>
                <motion.p 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",       //タイプをスプリング型
                    duration: 1,          //1秒間かけて動くようにする
                    delay: 0.8,           //0.5秒遅延してから動くようにする
                    stiffness: 130,
                  }}
                  className='text-white lg:max-w-[40rem] lg:text-5xl font-semibold'>
                  The <span className='text-orange-500'>next</span> generation
                </motion.p>
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",       //タイプをスプリング型
                    duration: 1,          //1秒間かけて動くようにする
                    delay: 0.9,           //0.5秒遅延してから動くようにする
                    stiffness: 130,
                  }}
                  className='flex items-center gap-4'>
                    <button className='py-3 px-6 rouded-md border-2 my-4 hover:translate-y-1 duration-150'>
                      <span className='font-bold text-white'>
                        More Details
                      </span>
                    </button>
                    <button className='py-3 px-6 rouded-md border-2 border-orange-500 my-4 hover:translate-y-1 duration-150'>
                      <span className='font-bold text-orange-500'>
                        Samples
                      </span>
                    </button>
                </motion.div>
              </div>
              <div className='w-1/2'>
                <ThreeModel />
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}

export default App
