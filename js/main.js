document.addEventListener('DOMContentLoaded', function() {
    // Header-Scroll-Effekt
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.main-nav ul');
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
    }

    // Schließen des Menüs beim Klicken auf einen Menüpunkt (mobile)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        });
    });

    // Cookie Consent
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    
    // Prüfen, ob Cookies bereits akzeptiert wurden
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted && cookieConsent) {
        cookieConsent.classList.remove('hidden');
        
        if (acceptCookies) {
            acceptCookies.addEventListener('click', function() {
                localStorage.setItem('cookiesAccepted', 'true');
                cookieConsent.classList.add('hidden');
            });
        }
    } else if (cookieConsent) {
        cookieConsent.classList.add('hidden');
    }

    // Datum im Reservierungsformular auf heutigen Tag vorbelegen
    const dateInput = document.getElementById('reservation-date');
    if (dateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        dateInput.value = `${year}-${month}-${day}`;
        dateInput.min = `${year}-${month}-${day}`;
    }

    // Formularvalidierung
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Einfache Validierung
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const persons = document.getElementById('persons').value;
            const date = document.getElementById('reservation-date').value;
            const time = document.getElementById('reservation-time').value;
            
            if (name && email && persons && date && time) {
                // Erfolgsbenachrichtigung anzeigen
                const successMessage = document.createElement('div');
                successMessage.classList.add('form-success');
                successMessage.textContent = 'Vielen Dank für Ihre Reservierungsanfrage! Wir werden uns umgehend bei Ihnen melden.';
                
                const formContent = document.querySelector('.form-content');
                formContent.innerHTML = '';
                formContent.appendChild(successMessage);
                
                // In einer realen Umgebung würde hier die Daten per AJAX an den Server gesendet werden
            } else {
                alert('Bitte füllen Sie alle Pflichtfelder aus.');
            }
        });
    }

    // Kontaktformular
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Einfache Validierung
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Erfolgsbenachrichtigung anzeigen
                const successMessage = document.createElement('div');
                successMessage.classList.add('form-success');
                successMessage.textContent = 'Vielen Dank für Ihre Nachricht! Wir werden uns umgehend bei Ihnen melden.';
                
                const formContent = document.querySelector('.form-content');
                formContent.innerHTML = '';
                formContent.appendChild(successMessage);
                
                // In einer realen Umgebung würde hier die Daten per AJAX an den Server gesendet werden
            } else {
                alert('Bitte füllen Sie alle Pflichtfelder aus.');
            }
        });
    }
});
