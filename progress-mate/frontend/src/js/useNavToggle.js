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
            const pageName = document.getElementById('pageName');
            const navBtn = document.getElementById('nav-btn');
            const navContainer = document.getElementById('nav-container');
            const navItemName = document.querySelectorAll('.nav-item-name');
            const navList = document.querySelectorAll('.navItem');

            if (desktopWidth) {
                // Desktop size: ensure the nav is open
                navContainer?.classList.remove('close');
                navContainer?.classList.add('open');
                nav?.classList.add('sideExpand');

                const navExpand = () => {
                    nav?.classList.add('sideCollapse');
                };

                if (nav?.classList.contains('sideExpand')) {
                    // Close Sidebar
                    navBtn?.addEventListener('click', function() {
                        nav?.classList.remove('sideExpand');
                        nav?.classList.add('sideCollapse');
                        pageName?.classList.add('absolute');
                        
                        navItemName.forEach(item => {
                            item.classList.add('itemCollapse');
                        });

                        navList.forEach(item => {
                            item.classList.add('mr-0');
                        });
                    });

                    navBtn.removeEventListener('click', navExpand);
                }
                else if (nav?.classList.contains('sideCollapse')) {
                    // Open Sidebar
                    navBtn?.addEventListener('click', function() {
                        nav?.classList.add('sideExpand');
                        nav?.classList.remove('sideCollapse');
                        pageName?.classList.remove('absolute');
                    });
                }
            } else {
                // Mobile size: remove 'open' class
                nav?.classList.remove('sideExpand');
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
