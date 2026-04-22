window.HELP_IMPROVE_VIDEOJS = false;

function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button ? button.querySelector('.copy-text') : null;

    if (!bibtexElement || !button || !copyText) {
        return;
    }

    navigator.clipboard.writeText(bibtexElement.textContent).then(function() {
        button.classList.add('copied');
        copyText.textContent = 'Cop';

        setTimeout(function() {
            button.classList.remove('copied');
            copyText.textContent = 'Copy';
        }, 2000);
    }).catch(function() {
        const textArea = document.createElement('textarea');
        textArea.value = bibtexElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        button.classList.add('copied');
        copyText.textContent = 'Cop';

        setTimeout(function() {
            button.classList.remove('copied');
            copyText.textContent = 'Copy';
        }, 2000);
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (!scrollButton) {
        return;
    }

    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video');

    if (carouselVideos.length === 0) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(function() {});
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    carouselVideos.forEach(function(video) {
        observer.observe(video);
    });
}

$(document).ready(function() {
    if (typeof bulmaCarousel !== 'undefined') {
        bulmaCarousel.attach('.carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
            loop: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    if (typeof bulmaSlider !== 'undefined') {
        bulmaSlider.attach();
    }

    setupVideoCarouselAutoplay();
});
