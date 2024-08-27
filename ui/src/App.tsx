import '@nlux/themes/luna.css';
import './App.css'
import {Assistant} from './NLUX-comps/Assistant.tsx';
import {MyAiContext} from './NLUX-comps/Context.tsx';

function App() {
    

    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: 20, width: 800, height: 500}}>
            <div style={{flex: 1}}>
                <Assistant/>
            </div>
        </div>
    );
}

export default () => (
    <MyAiContext.Provider>
        <App/>
    </MyAiContext.Provider>
);

