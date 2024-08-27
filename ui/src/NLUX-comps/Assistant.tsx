import {AiChat, ChatAdapterExtras, useAsBatchAdapter} from '@nlux/react';
import {useChatAdapter} from '@nlux/nlbridge-react';


import '@nlux/themes/nova.css';
import '../App.css'
import {MyAiContext} from './Context.tsx';
import {assistantCssStyle} from './personas.tsx';




export const Assistant = () => {


    const adapter = useChatAdapter({
        url: 'http://localhost:3000/assist',
        mode: 'copilot',
        context: MyAiContext,
    });


    return (
        <AiChat
            adapter={adapter}
            conversationOptions={{
                layout: 'bubbles'
            }}
            personaOptions={{
                assistant: {
                    name: 'Registration  Bot',
                    avatar: <span style={assistantCssStyle}>🤖</span>,
                    tagline: 'You are an AI bot for registration',
                },
                user: {
                    name: 'Nishant',
                    avatar: 'https://docs.nlkit.com/nlux/images/personas/alex.png'
                }
            }}
        />
    );
};
