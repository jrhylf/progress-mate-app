const rotateChevronDown = (event) => {
    const button = event.currentTarget;
    const bxChevDown = button.querySelector('.bx-chevron-down');
    const goalContent = button.closest('.ddBtnContainer').previousElementSibling; // Finds the sibling goalContent

    if (bxChevDown && goalContent) {
        bxChevDown.classList.toggle('rotate');
        goalContent.classList.toggle('expand');
    }
};

export default rotateChevronDown;