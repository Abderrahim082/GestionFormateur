import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { Sun, Moon, Ghost, Skull, Box, Stars } from 'lucide-react';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeIcons = [
    { name: 'light', icon: <Sun className="w-6 h-6" /> },
    { name: 'dark', icon: <Moon className="w-6 h-6" /> },
    { name: 'halloween', icon: <Ghost className="w-6 h-6" /> },
    { name: 'synthwave', icon: <Skull className="w-6 h-6" /> },
    { name: 'wireframe', icon: <Box className="w-6 h-6" /> },
    { name: 'night', icon: <Stars className="w-6 h-6" /> }
  ];

  const currentThemeIndex = themeIcons.findIndex(t => t.name === theme);
  
  const handleClick = () => {
    const nextIndex = (currentThemeIndex + 1) % themeIcons.length;
    toggleTheme(themeIcons[nextIndex].name);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50"> 
      <button
        onClick={handleClick}
        className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-500"
        title={theme}
      >
        {themeIcons[currentThemeIndex]?.icon}
      </button>
    </div>
  );
}
