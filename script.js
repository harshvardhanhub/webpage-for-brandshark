var currentIndex = 0;

document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        var sectionId = this.getAttribute('data-target');
        scrollToSection(sectionId);
    });
});

function moveLeft() {
    var clientContainer = document.getElementById('client-container');
    currentIndex = (currentIndex - 1 + clientContainer.children.length) % clientContainer.children.length;
    updateSlider();
}

function moveRight() {
    var clientContainer = document.getElementById('client-container');
    currentIndex = (currentIndex + 1) % clientContainer.children.length;
    updateSlider();
}

function updateSlider() {
    var clientContainer = document.getElementById('client-container');
    var newPosition = -currentIndex * 100 + '%';
    clientContainer.style.transform = 'translateX(' + newPosition + ')';
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('click', function () {
        menuItems.style.display = (menuItems.style.display === 'flex') ? 'none' : 'flex';
    });
});

function showBlog(blogIndex) {
    var blogTabs = document.querySelectorAll('.blog-tab');
    var blogContent = document.querySelectorAll('.blog-post');

    for (var i = 0; i < blogContent.length; i++) {
        blogContent[i].style.display = 'none';
        blogTabs[i].classList.remove('active');
    }

    document.getElementById('blog-' + blogIndex).style.display = 'block';
    blogTabs[blogIndex - 1].classList.add('active');
}

function showService(serviceIndex) {
    var serviceTabs = document.getElementsByClassName('service-tab');
    var serviceContent = document.getElementsByClassName('service-info');

    for (var i = 0; i < serviceContent.length; i++) {
        serviceContent[i].style.display = 'none';
        serviceTabs[i].classList.remove('active');
    }

    serviceContent[serviceIndex - 1].style.display = 'block';
    serviceTabs[serviceIndex - 1].classList.add('active');
}

function toggleReadMore(serviceIndex) {
    var readMore = document.getElementById('read-more-' + serviceIndex);
    var extraInfo = document.getElementById('extra-info-' + serviceIndex);
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'inline';
        readMore.innerText = 'Read Less';
    } else {
        extraInfo.style.display = 'none';
        readMore.innerText = 'Read More';
    }
}

function redirectToFullInfo(serviceIndex) {
    window.location.href = 'full-info-page.html?service=' + serviceIndex;
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
