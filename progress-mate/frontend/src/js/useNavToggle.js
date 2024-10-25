import { useState, useEffect } from "react";

const useNavToggle = () => {
    // Get the screen width 1400px minimum (for desktop)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
    const [isOpen, setIsOpen] = useState(false);

    // Handle screen resize to update desktop state
    useEffect(() => {
        const updateNavState = () => {
            const desktopWidth = window.innerWidth >= 1280;
            setIsDesktop(desktopWidth);

            // Adjust the navContainer based on the screen size
            const nav = document.getElementById('nav');
            const navContainer = document.getElementById('nav-container');
            const navBtn = document.getElementById('nav-btn');
            // const pageName = document.getElementById('pageName');
            // const navItem = document.querySelectorAll('.navItem');
            // const navItemName = document.querySelectorAll('.nav-item-name');
            // const dashboardIcon = document.querySelector("box-icon[name='bar-chart-square']");
            // const taskIcon = document.querySelector("box-icon[name='task']");
            // const goalIcon = document.querySelector("box-icon[name='target-lock']");
            // const calendarIcon = document.querySelector("box-icon[name='calendar']");

            if (desktopWidth) {
                // Desktop size: ensure the nav is open
                navContainer?.classList.remove('close');
                navContainer?.classList.add('open');
                // pageName?.classList.add('hide');

                // navItem.forEach(item => {
                //     item.classList.add('margin');
                // });

                // 
                if (!nav?.classList.contains('collapse')) {
                    navBtn?.addEventListener('click', function() {
                        // nav?.classList.add('collapse');

                        // navItemName.forEach(itemName => {
                        //     itemName.classList.add('hide');
                        // });
                        
                        // dashboardIcon.style.marginRight = '0';
                        // taskIcon.style.marginRight = '0';
                        // goalIcon.style.marginRight = '0';
                        // calendarIcon.style.marginRight = '0';

                        // dashboardIcon.setAttribute('size', 'md');
                        // taskIcon.setAttribute('size', 'md');
                        // goalIcon.setAttribute('size', 'md');
                        // calendarIcon.setAttribute('size', 'md');
                    });
                }
            } else {
                // Mobile size: remove 'open' class
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
