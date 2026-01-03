"use client"
import { useEffect, useState } from 'react';
import AppContent from './AppContent';

export const App = () => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
        const shell = document.getElementById("seo-shell");
        if (shell) shell.style.display = "none";
    }, []);

    if (!hydrated) return null;

    return <AppContent />
}
export default App;