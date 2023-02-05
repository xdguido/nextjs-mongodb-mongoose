import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Button from './Button';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
            style="outline"
            square
        >
            {theme === 'light' ? <FiMoon className=" w-5 h-5" /> : <FiSun className=" w-5 h-5" />}
        </Button>
    );
}
