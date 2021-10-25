const about = () => {
  return `
    <div id="about">
      <header>
        <h1 class="main-title">About</h1>
        <p class="main-p">
          We help companies build dynamic teams made up of top global talent. Using our network of
          passionate professionals we drive innovation and deliver incredible outcomes. Talented,
          diverse teams shape the best products and experiences. We’ll bring those teams to you.
        </p>
        <img src="./assets/images/bg-pattern-about-1-mobile-nav-1.svg" alt="" class="bg-pattern" />
      </header>

      <section id="team">
        <h2 class="section-title">Meet the directors</h2>
        <div class="cards">
          <article class="card">
            <div class="card__avatar">
              <img src="./assets/images/avatar-nikita.jpg" alt="Nikita Marks" />
            </div>
            <h3 class="card__name">Nikita Marks</h3>
            <p class="card__role">Founder & CEO</p>
            <button class="card__btn">
              <img
                src="./assets/images/icon-cross.svg"
                alt="open and close button for profile card"
              />
            </button>
          </article>

          <article class="card">
            <div class="card__avatar">
              <img src="./assets/images/avatar-christian.jpg" alt="Christian Duncan" />
            </div>
            <h3 class="card__name">Christian Duncan</h3>
            <p class="card__role">Co-founder & COO</p>
            <button class="card__btn">
              <img
                src="./assets/images/icon-cross.svg"
                alt="open and close button for profile card"
              />
            </button>
          </article>

          <article class="card">
            <div class="card__avatar">
              <img src="./assets/images/avatar-cruz.jpg" alt="Cruz Hamer" />
            </div>
            <h3 class="card__name">Cruz Hamer</h3>
            <p class="card__role">Co-founder & CTO</p>
            <button class="card__btn">
              <img
                src="./assets/images/icon-cross.svg"
                alt="open and close button for profile card"
              />
            </button>
          </article>

          <article class="card">
            <div class="card__avatar">
              <img src="./assets/images/avatar-drake.jpg" alt="Drake Heaton" />
            </div>
            <h3 class="card__name">Drake Heaton</h3>
            <p class="card__role">Business Development Lead</p>
            <button class="card__btn">
              <img
                src="./assets/images/icon-cross.svg"
                alt="open and close button for profile card"
              />
            </button>
          </article>

          <article class="card">
            <div class="card__avatar">
              <img src="./assets/images/avatar-griffin.jpg" alt="Griffin Wise" />
            </div>
            <h3 class="card__name">Griffin Wise</h3>
            <p class="card__role">Lead Marketing</p>
            <button class="card__btn">
              <img
                src="./assets/images/icon-cross.svg"
                alt="open and close button for profile card"
              />
            </button>
          </article>

          <article class="card">
            <div class="card__avatar">
              <img src="./assets/images/avatar-aden.jpg" alt="Aden Allan" />
            </div>
            <h3 class="card__name">Aden Allan</h3>
            <p class="card__role">Head of Talent</p>
            <button class="card__btn">
              <img
                src="./assets/images/icon-cross.svg"
                alt="open and close button for profile card"
              />
            </button>
          </article>
        </div>

        <img src="./assets/images/bg-pattern-about-2-contact-1.svg" alt="" class="bg-pattern" />
        <img src="./assets/images/bg-pattern-about-2-contact-1.svg" alt="" class="bg-pattern--2" />
      </section>

      <section id="clients">
        <h2 class="section-title">Some of our clients</h2>
        <div class="brands">
          <img src="./assets/images/logo-the-verge.png" alt="the verge logo" class="brand" />
          <img
            src="./assets/images/logo-jakarta-post.png"
            alt="the jakarta post logo"
            class="brand"
          />
          <img src="./assets/images/logo-the-guardian.png" alt="the guardian logo" class="brand" />
          <img src="./assets/images/logo-tech-radar.png" alt="tech radar logo" class="brand" />
          <img src="./assets/images/logo-gadgets-now.png" alt="gadgets now logo" class="brand" />
        </div>
        <img src="./assets/images/bg-pattern-about-4.svg" alt="" class="bg-pattern" />
      </section>

      <section id="contact-cta">
        <h2 class="section-title">Ready to get started?</h2>
        <a role="button" href="contact.html" class="btn btn--dark">contact us</a>
        <img src="./assets/images/bg-pattern-home-6-about-5.svg" alt="" class="bg-pattern" />
      </section>
    </div>
    `;
};

export default about;
