import { Bubble } from "./features/bubble/components/Bubble"
import type { Component } from 'solid-js';


const App: Component = () => {
    return (
        <>
            <div class='bg-gradient-to-br from-slate-300 to-slate-100 h-screen w-full'>
                <Bubble chatflowid="0f90a5c2-01a2-47b0-b6a9-509c61927011" apiHost="https://ai.blibb.ru" />
            </div>
        </>
    )
}

export default App
