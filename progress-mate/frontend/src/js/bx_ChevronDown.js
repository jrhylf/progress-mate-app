const rotateChevronDown = (event) => {
    const button = event.currentTarget; // Gets the button that was clicked
    const bxChevDown = button.querySelector('.bx-chevron-down'); // Finds the icon inside the clicked button
    // const goalContent = button.querySelector('.goalContent');
    const goalContent = document.getElementById('goalContent');

    if (bxChevDown) {
        bxChevDown.classList.toggle('rotate');
        goalContent.classList.toggle('expand');
    }
};

export default rotateChevronDown;