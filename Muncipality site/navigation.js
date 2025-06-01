// Navigation functionality for Municipality Site

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const navWrapper = document.querySelector('.nav-wrapper');
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
    // Set active link based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Scroll effect for navigation
    // navWrapper is already declared at the top of the file, reuse existing reference
    if (navWrapper) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navWrapper.classList.add('scrolled');
            } else {
                navWrapper.classList.remove('scrolled');
            }
        });
    }

    // Services Page Search and Filter Functionality
    const serviceSearchInput = document.getElementById('serviceSearch');
    const categoryFilterSelect = document.getElementById('categoryFilter');
    const servicesGrid = document.getElementById('servicesGrid');

    if (serviceSearchInput && categoryFilterSelect && servicesGrid) {
        const allServiceCards = Array.from(servicesGrid.getElementsByClassName('service-card'));

        function filterServices() {
            const searchTerm = serviceSearchInput.value.toLowerCase();
            const selectedCategory = categoryFilterSelect.value;

            allServiceCards.forEach(card => {
                const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
                const description = card.dataset.description ? card.dataset.description.toLowerCase() : '';
                const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';

                const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || category.includes(selectedCategory);

                if (matchesSearch && matchesCategory) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        serviceSearchInput.addEventListener('input', filterServices);
        categoryFilterSelect.addEventListener('change', filterServices);

        // Initial filter on page load (optional, if needed)
        // filterServices(); 
    }
});