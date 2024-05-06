import { Bubble } from "./features/bubble/components/Bubble"
import type { Component } from 'solid-js';


const App: Component = () => {
  return (
    <>
      <div class='bg-gradient-to-br from-slate-300 to-slate-100 h-screen w-full'>
        <Bubble chatflowid="72f46335-8170-4a7e-9405-3b3cc629153c" apiHost="https://ai.blibb.ru" />
      </div>
    </>
  )
}

export default App
