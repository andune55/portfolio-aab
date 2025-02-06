import React from 'react'
import {   
    AccordionItemProvider,  
    AccordionProvider,  
    useAccordionContext, 
    useAccordionItemContext 
} from './accordion-context';

type WithChildren = {
    children: React.ReactNode
}
type AccordionProps = WithChildren;
type AccordionItemProps = WithChildren & {
    id: string | null
}
type AccordionTriggerProps = WithChildren;
type AccordionContentProps = WithChildren;

/**
 * 
 * @param children: React.ReactNode 
 */
export const Accordion = ({
    children
}: AccordionProps) => {
    return (
        <AccordionProvider >
            { children }
        </AccordionProvider>
    )
}

/**
 * 
 * @param children: React.ReactNode
 * @param id: string | null  
 */
export const AccordionItem = ({
    children,
    id,
}: AccordionItemProps) => {
    return (
        <>
        <AccordionItemProvider id={id}>
            { children }
        </AccordionItemProvider>
        </>
    )
}

/**
 * 
 * @param children: React.ReactNode 
 */
export const AccordionTrigger= ({
    children
} : AccordionTriggerProps) => {
    const context = useAccordionContext();
    const item = useAccordionItemContext();
    // context can be null
    if( !context || !item) return null
    return (
        <>
            <div>
                <button
                    className="flex items-center justify-between cursor-pointer bg-red-100 hover:bg-red-200 text-red-900 py-2 px-2 border-b-2 border-b-red-100 hover:border-red-700 rounded w-full mb-0.5"
                    onClick={() => context?.handleTrigger(item?.id)}
                    >
                    { children }
                    <svg className="w-7 h-7 text-red-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                    </svg>

                </button>
            </div>
        </>
    );
}

/**
 * 
 * @param children: React.ReactNode
 * @returns 
 */
export const AccordionContent = ({
    children
} : AccordionContentProps) => {
    const context = useAccordionContext();
    const item = useAccordionItemContext();
    //console.log( item?.id )
    return (
        <>
            {
                context?.activeContent === item?.id ? (
                    <div>
                        { children }
                    </div>
                ) : null
            }
        </>
    )
}