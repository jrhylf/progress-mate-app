/*
    TODO: Fix this to run only on Dashboard page.
    window.onload is not applicable since the page is not loading on Router.
*/
// import { useEffect } from "react";

// export function useNavToggle() {
//     useEffect(() => {
//         const nav = document.getElementById("nav");
//         const menuIcon = document.getElementById("menuIcon");
//         const ul = document.getElementById("contents");

//         if (nav && ul) {
//             nav.classList.add("hide");
//             nav.style.maxHeight = "0";
//             ul.style.opacity = "0";
//         } else {
//             console.error("Element with id 'nav' not found.");
//         }

//         menuIcon.addEventListener("click", function() {
//             if (nav.classList.contains("hide")) {
//                 // Show Nav
//                 const scrollHeight = nav.scrollHeight + "px";
//                 nav.style.maxHeight = scrollHeight;
//                 nav.classList.remove("hide");
//                 nav.classList.add("show");
//                 ul.style.opacity = "1";
//                 ul.classList.remove("hide-elements");
//                 ul.classList.add("show-elements");
//             } else {
//                 // Hide Nav
//                 nav.style.maxHeight = "0";
//                 nav.classList.remove("show");
//                 nav.classList.add("hide");
//                 ul.style.opacity = "0";
//                 ul.classList.remove("show-elements");
//                 ul.classList.add("hide-elements");
//             }
//         });
//     }, []);
// }



import { useState } from "react";

const useNavToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen((prev) => !prev);
    };

    return { isOpen, toggleNav };
};

export default useNavToggle;
