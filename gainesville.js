window.onload=function () {
    /*dome title location*/
    const domeTitle=document.getElementById('domeTitle');
    domeTitle.style.left='60px';
    domeTitle.style.top='25px';
    /*line location*/
    const line=document.getElementById('line');
    line.style.left='60px';
    line.style.top='100px';
    /*home title location*/
    const home=document.getElementById('homeTitle');
    home.style.left='750px';
    home.style.top='60px';
    home.addEventListener('click', () => {
        home.classList.add('clicked');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 300);
      });
    /*about title location*/
    const about=document.getElementById('aboutTitle');
    about.style.left='975px';
    about.style.top='60px';
    about.addEventListener('click', () => {
        about.classList.add('clicked');
        setTimeout(() => {
          window.location.href = 'quito.html';
        }, 300);
      });

    /*contact title location*/
    const contact=document.getElementById('contactTitle');
    contact.style.left='1225px';
    contact.style.top='60px';
};

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


function scalePage() {
    const baseWidth = 1335;
    const baseHeight = 645;

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY);

    const wrapper = document.getElementById("scaleWrapper");
    if (wrapper) {
      wrapper.style.transform = `translateX(0%) scale(${scale})`;
      wrapper.style.width = baseWidth + "px";
      wrapper.style.height = baseHeight + "px";
    }

  }

  window.addEventListener("resize", scalePage);
  window.addEventListener("load", scalePage);