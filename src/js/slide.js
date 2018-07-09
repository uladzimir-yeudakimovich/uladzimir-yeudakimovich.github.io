export default class Slide {
  constructor(slides, slide, showNext, previousEn, previousRu, pauseEn, pauseRu, nextEn, nextRu) {
    this.slides     = slides,
    this.slide      = slide,
    this.showNext   = showNext,
    this.previousEn = previousEn,
    this.previousRu = previousRu,
    this.pauseEn    = pauseEn,
    this.pauseRu    = pauseRu,
    this.nextEn     = nextEn,
    this.nextRu     = nextRu
  }

  build() {
    const slides = document.querySelectorAll(this.slides);
    let currentSlideEn = 0, currentSlideRu = 5, self = this;
    let slideInterval = setInterval(nextSlide, 3000);

    function goToSlideEn(n) {
      slides[currentSlideEn].className = self.slide;
      currentSlideEn = (n+slides.length)%slides.length;
      slides[currentSlideEn].className = self.showNext;
    }

    function goToSlideRu(n) {
      slides[currentSlideRu].className = self.slide;
      currentSlideRu = (n+slides.length)%slides.length;
      slides[currentSlideRu].className = self.showNext;
    }

    function previousSlide() {
      goToSlideEn(currentSlideEn-1);
      goToSlideRu(currentSlideRu-1);
    }

    function nextSlide() {
      goToSlideEn(currentSlideEn+1);
      goToSlideRu(currentSlideRu+1);
    }

    const previousButtonEn = document.getElementById(this.previousEn);
    const previousButtonRu = document.getElementById(this.previousRu);
    const pauseButtonEn    = document.getElementById(this.pauseEn);
    const pauseButtonRu    = document.getElementById(this.pauseRu);
    const nextButtonEn     = document.getElementById(this.nextEn);
    const nextButtonRu     = document.getElementById(this.nextRu);
    let playing = true;

    function pauseSlideshow() {
      pauseButtonEn.innerHTML = '&#9658;';
      pauseButtonRu.innerHTML = '&#9658;';
      playing = false;
      clearInterval(slideInterval);
    }

    function playSlideshow() {
      pauseButtonEn.innerHTML = '&Iota; &Iota;';
      pauseButtonRu.innerHTML = '&Iota; &Iota;';
      playing = true;
      setInterval(nextSlide, 3000);
    }

    previousButtonEn.onclick = () => {
      pauseSlideshow();
      previousSlide();
    };

    previousButtonRu.onclick = () => {
      pauseSlideshow();
      previousSlide();
    };

    pauseButtonEn.onclick = () => playing ? pauseSlideshow() : playSlideshow();
    pauseButtonRu.onclick = () => playing ? pauseSlideshow() : playSlideshow();

    nextButtonEn.onclick = () => {
      pauseSlideshow();
      nextSlide();
    };

    nextButtonRu.onclick = () => {
      pauseSlideshow();
      nextSlide();
    };
  }
}
