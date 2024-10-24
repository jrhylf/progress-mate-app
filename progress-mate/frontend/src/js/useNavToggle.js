import { useState, useEffect } from "react";

const useNavToggle = () => {
    // Get the screen width 1400px minimum (for desktop)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1400);
    const [isOpen, setIsOpen] = useState(false);

    // Handle screen resize to update desktop state
    useEffect(() => {
        const updateNavState = () => {
            const desktopWidth = window.innerWidth >= 1400;
            setIsDesktop(desktopWidth);

            // Adjust the navContainer based on the screen size
            const nav = document.getElementById('nav');
            const navContainer = document.getElementById('nav-container');
            const navItemName = document.getElementsByClassName('nav-item-name');

            if (desktopWidth) {
                // Desktop size: ensure the nav is open
                navContainer?.classList.remove('close');
                navContainer?.classList.add('open');

                // TODO: Fix this.
                navItemName[0].classList.add('show');
                // TODO: Fix the sidebar
            } else {
                // Mobile size: remove 'open' class
                nav?.classList.remove('side');
                navContainer?.classList.remove('open');
                navContainer?.classList.add('close');
            }
        };

        // Initial check for the current screen size when component mounts
        updateNavState();

        // Add resize event listener
        window.addEventListener("resize", updateNavState);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateNavState);
        };
    }, []);

    const toggleNav = () => {
        const navContainer = document.getElementById('nav-container');

        // For screens smaller than 1400px, allow nav toggle
        if (!isDesktop) {
            setIsOpen((prev) => !prev);
            if (isOpen) {
                navContainer?.classList.remove('open');
                navContainer?.classList.add('close');
            } else {
                navContainer?.classList.remove('close');
                navContainer?.classList.add('open');
            }
        }
    };

    return { isOpen, toggleNav, isDesktop };
};

export default useNavToggle;
