const menuModal = () => {
    const menu = document.getElementById('mobile-menu');
    const burger = document.getElementById('burger');

    burger.addEventListener('click', () => {
        menu.classList.add('show');
    })

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.header-menu-item') ||
            e.target.closest('.about-header-menu-item') ||
            e.target.closest('.header-menu-close') ||
            e.target.closest('.about-header-menu-close')) {
            menu.classList.remove('show')
        }
    });
};

export default menuModal;