// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Simple alert booking
document.querySelector('.btn').addEventListener('click', () => {
    alert("Anda akan diarahkan ke WhatsApp untuk booking");
});