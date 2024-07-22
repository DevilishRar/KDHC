document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        const modalId = e.currentTarget.id.replace('card', 'modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('scroll', function() {
    document.querySelectorAll('.navbar-item, .custom-text, .custom-button, .card').forEach(el => {
        el.style.animationDuration = '0s';
    });
});

document.getElementById('dropdownButton').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open');
        dropdownMenu.classList.add('close');
    } else {
        dropdownMenu.classList.remove('close');
        dropdownMenu.classList.add('open');
    }
});