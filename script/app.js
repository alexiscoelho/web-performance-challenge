const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('marquee');

  marqueeBar.innerHTML = CONTENT_BREAKING_NEWS

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};


const cookieLayerVanillaInit = () => {
  const container = document.getElementById('cookie-vanilla');
  /* const template = `<div class="cookieLayer__content cookieLayer__base">
        <h2 class="cookieLayer__title">Do you like cookies ?</h2>
        <p class="cookieLayer__text">This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!</p>
        <p class="cookieLayer__text">The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.</p>
        <button class="cookieLayer__button">I solemny swear I will bake these cookies</button>
        <div class="cookieLayer__disclaimer">This box WAS made using Vue.js and WAS NOT super awesome !!! ............. or WAS it ???</div>
      </div>`;


  container.innerHTML = template; */

  document.body.classList.add('no-scroll');

  const button = document.querySelector('.cookieLayer__content .cookieLayer__button');

  button.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    container.innerHTML = '';
  });
};

const handleFacade = () => {
  const template = `<iframe src="https://player.vimeo.com/video/44265326?h=1e8b36c00b&autoplay=1&loop=1&byline=0&muted=1&controls=0 " width="475" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

  const facadeButton = document.querySelector('.video-facade');

  facadeButton.addEventListener('click', () => {
    const container = document.querySelector('.facade-container');

    container.innerHTML = template;
  });
};

const initApp = () => {
  dynamicContent();
  cookieLayerVanillaInit();
  handleFacade();
};

initApp();
