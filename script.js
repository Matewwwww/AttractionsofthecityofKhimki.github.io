document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header a, footer a, main a, a');
    const main = document.querySelector('main');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            main.classList.add('fade-out');
            
            setTimeout(() => {        
                window.location.href = link.href;
            }, 500);
        });
    });
});

