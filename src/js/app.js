import Slide from "./slide";
import '../less/base.less';

document.getElementById('btn1').addEventListener("click", function() {
  document.getElementById('language-en-header').style.display='none';
  document.getElementById('language-en-main').style.display='none';
  document.getElementById('language-en-footer').style.display='none';
  document.getElementById('language-ru-header').style.display='block';
  document.getElementById('language-ru-main').style.display='block';
  document.getElementById('language-ru-footer').style.display='block';
});

document.getElementById('btn2').addEventListener("click", function() {
  document.getElementById('language-ru-header').style.display='none';
  document.getElementById('language-ru-main').style.display='none';
  document.getElementById('language-ru-footer').style.display='none';
  document.getElementById('language-en-header').style.display='block';
  document.getElementById('language-en-main').style.display='block';
  document.getElementById('language-en-footer').style.display='block';
});

let bootstrap4 = new Slide(
  '.slides-b4 .slide-b4',
  'slide-b4',
  'slide-b4 showing-b4',
  'previousB4En',
  'previousB4Ru',
  'pauseB4En',
  'pauseB4Ru',
  'nextB4En',
  'nextB4Ru'
);
setTimeout(() => bootstrap4.build(), 1);

let bootstrap3 = new Slide(
  '.slides-b3 .slide-b3',
  'slide-b3',
  'slide-b3 showing-b3',
  'previousB3En',
  'previousB3Ru',
  'pauseB3En',
  'pauseB3Ru',
  'nextB3En',
  'nextB3Ru'
);
setTimeout(() => bootstrap3.build(), 2);

let chat = new Slide(
  '.slides-chat .slide-chat',
  'slide-chat',
  'slide-chat showing-chat',
  'previousChatEn',
  'previousChatRu',
  'pauseChatEn',
  'pauseChatRu',
  'nextChatEn',
  'nextChatRu'
);
setTimeout(() => chat.build(), 3);

let game = new Slide(
  '.slides-game .slide-game',
  'slide-game',
  'slide-game showing-game',
  'previousGameEn',
  'previousGameRu',
  'pauseGameEn',
  'pauseGameRu',
  'nextGameEn',
  'nextGameRu'
);
setTimeout(() => game.build(), 4);

let social = new Slide(
  '.slides-social .slide-social',
  'slide-social',
  'slide-social showing-social',
  'previousSocialEn',
  'previousSocialRu',
  'pauseSocialEn',
  'pauseSocialRu',
  'nextSocialEn',
  'nextSocialRu'
);
setTimeout(() => social.build(), 5);

let react = new Slide(
  '.slides-react-app .slide-react-app',
  'slide-react-app',
  'slide-react-app showing-react-app',
  'previousReactEn',
  'previousReactRu',
  'pauseReactEn',
  'pauseReactRu',
  'nextReactEn',
  'nextReactRu'
);
setTimeout(() => react.build(), 6);

let match = new Slide(
  '.slides-match .slide-match',
  'slide-match',
  'slide-match showing-match',
  'previousMatchEn',
  'previousMatchRu',
  'pauseMatchEn',
  'pauseMatchRu',
  'nextMatchEn',
  'nextMatchRu'
);
setTimeout(() => match.build(), 7);

let restaurant = new Slide(
  '.slides-restaurant .slide-restaurant',
  'slide-restaurant',
  'slide-restaurant showing-restaurant',
  'previousRestaurantEn',
  'previousRestaurantRu',
  'pauseRestaurantEn',
  'pauseRestaurantRu',
  'nextRestaurantEn',
  'nextRestaurantRu'
);
setTimeout(() => restaurant.build(), 8);

let site = new Slide(
  '.slides-site .slide-site',
  'slide-site',
  'slide-site showing-site',
  'previousSiteEn',
  'previousSiteRu',
  'pauseSiteEn',
  'pauseSiteRu',
  'nextSiteEn',
  'nextSiteRu'
);
setTimeout(() => site.build(), 9);

let currency = new Slide(
  '.slides-currency .slide-currency',
  'slide-currency',
  'slide-currency showing-currency',
  'previousCurrencyEn',
  'previousCurrencyRu',
  'pauseCurrencyEn',
  'pauseCurrencyRu',
  'nextCurrencyEn',
  'nextCurrencyRu'
);
setTimeout(() => currency.build(), 10);

let obj = {
  developer: "Uladzimir Yeudakimovich"
};

let Obj = JSON.stringify(obj);

localStorage.setItem("front-end", Obj);

//let returnObj = JSON.parse(localStorage.getItem("developer"))

//localStorage.removeItem("front-end");
