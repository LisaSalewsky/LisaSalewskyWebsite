

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        }); 
    });

    const allAnimatedElements = document.querySelectorAll('.animate');

    const moreAnimatedElements = document.querySelectorAll('.radial-bar');

    // allAnimatedElements.forEach((element) => observer.observe(element));
    moreAnimatedElements.forEach((element) => observer.observe(element));
});