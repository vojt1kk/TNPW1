const tiskButton = document.getElementById('tisk');
const dropdownLinks = document.getElementById('dropdownLinks');

tiskButton.addEventListener('mouseenter', () => {
    dropdownLinks.classList.add('active');
});

tiskButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownContent.matches(':hover')) {
            dropdownLinks.classList.remove('active');
        }
    }, 200);
});

dropdownLinks.addEventListener('mouseleave', () => {
    dropdownLinks.classList.remove('active');
});

dropdownLinks.addEventListener('mouseenter', () => {
    dropdownLinks.classList.add('active');
});