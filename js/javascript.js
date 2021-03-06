const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);


const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 600,
    interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 64,
    throttle: 200
});

const collapsible = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsible);