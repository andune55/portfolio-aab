import React, { useContext, useState } from "react";

/**
 * Definin all the contexts
 */
export const AccordionContext = React.createContext<{
    activeContent: string | null;
    handleTrigger: (id: string | null) => void;
} | null>(null);
export const AccordionItemContext = React.createContext<{ 
    id: string | null 
} | null>(null);

/**
 * @param children 
 */
export const AccordionProvider = ({
    children,
} : {
    children: React.ReactNode,
}) => {
    const [activeContent, setActiveContent] = useState<string | null >(null);
    const handleTrigger = (id: string | null ) => {
        let activeId: string | null  = id;
        if( activeId === activeContent ) activeId = null
        setActiveContent(activeId);
    }
    const value = {
        activeContent,
        handleTrigger
    }
    return (
        <>
            <AccordionContext.Provider value={value}>
                {children}
            </AccordionContext.Provider>
        </>
    )
}

/**
 * @param id 
 * @param children 
 */
export const AccordionItemProvider = ({ 
    id,
    children 
}: {
    id: string | null;
    children: React.ReactNode
}) => {
    const value = {
        id
    }
    return (
        <>
            <AccordionItemContext.Provider value={value}>
                    { children }
            </AccordionItemContext.Provider>
        </>
    )
}

/**
 * custom hooks para usar nuestro hook useContext 
 * @returns  context => Accordion Provider 
 */
export const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if( context === undefined) {
        throw new Error("useAccordion debe ser usado en <Accordion />");
    }
    return context;
}

/**
 * custom hooks para usar nuestro hook useContext 
 * @returns  context => AccordionItem Provider 
 */
export const useAccordionItemContext = () => {
    const context = useContext(AccordionItemContext);
    if( context === undefined) {
        throw new Error("useAccordionItemContext debe ser usado en <AccordionItem />")
    }
    return context;
}