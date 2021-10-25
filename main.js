Parse.initialize(
  'w2CsQkHzUv9oLF71QNmqgxw9p1OskOuasvkKSL2z',
  'kLCIoTLojIPQK4rGK1ybQlXnPFI1a0skNgNoBcyS'
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

const home = () => {
  return `
    <header>
          <!-- NAVBAR-->
          <div class="container header-image">
            <img src="./assets/images/bg-pattern-home-1.svg" alt="" class="bg-pattern-desktop-add" />
            <div class="center-title">
              <h1 class="center-title-flex-50">
                Find the <br />
                best <span class="span-h1">talent</span>
              </h1>
              <div class="center-title-flex-50">
                <div class="border-blue"></div>
                <p>
                  Finding the right people and building high performing teams can be hard. Most
                  companies aren’t tapping into the abundance of global talent. We’re about to change
                  that.
                </p>
              </div>
            </div>
          </div>
          <!-- /#container   -->
        </header>

        <section class="features">
          <div class="features-flex-50">
            <div class="border-pink"></div>
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>

          <div class="features-flex-50">
            <div class="feature">
              <img src="./assets/images/icon-person.svg" alt="" />
              <div class="feature-content">
                <h3>Experienced Individuals</h3>
                <p>
                  Our network is made up of highly experienced professionals who are passionate about
                  what they do.
                </p>
              </div>
            </div>

            <div class="feature">
              <img src="./assets/images/icon-cog.svg" alt="" />
              <div class="feature-content">
                <h3>Easy to Implement</h3>
                <p>
                  Our processes have been refined over years of implementation meaning our teams always
                  deliver.
                </p>
              </div>
            </div>

            <div class="feature">
              <img src="./assets/images/icon-chart.svg" alt="" />
              <div class="feature-content">
                <h3>Enhanced Productivity</h3>
                <p>
                  Our customized platform with in-built analytics helps you manage your distributed
                  teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="feedbacks">
          <h2>
            Delivering real results for top companies. Some of our
            <span class="span-h2">success stories.</span>
          </h2>

          <div class="feedbacks-flex">
            <div class="feedback">
              <img src="./assets/images/icon-quotes.svg" alt="quotes" class="quotes" />
              <p>
                “The team perfectly fit the specialized skill set required. They focused on the most
                essential features helping us launch the platform eight months faster than planned.”
              </p>
              <h3 id='customer-1'>Kady Baker</h3>
              <h4 id='customer-role-1'>Product Manager at Bookmark</h4>
              <img src="./assets/images/avatar-kady.jpg" alt="kady" class="avatar" />
            </div>

            <div class="feedback">
              <img src="./assets/images/icon-quotes.svg" alt="quotes" class="quotes" />
              <p>
                “We needed to automate our entire onboarding process. The team came in and built out the
                whole journey. Since going live, user retention has gone through the roof!”
              </p>
              <h3 id='customer-2'>Aiysha Reese</h3>
              <h4 id='customer-role-2'>Founder of Manage</h4>
              <img src="./assets/images/avatar-aiysha.jpg" alt="aiysha" class="avatar" />
            </div>

            <div class="feedback">
              <img src="./assets/images/icon-quotes.svg" alt="quotes" class="quotes" />
              <p>
                “Amazing. Our team helped us build an app that delivered a new experience for hiring a
                physio. The launch was an instant success with 100k downloads in the first month.”
              </p>
              <h3 id='customer-3'>Arthur Clarke</h3>
              <h4 id='customer-role-3'>Co-founder of MyPhysio</h4>
              <img src="./assets/images/avatar-arthur.jpg" alt="arthur" class="avatar" />
            </div>
          </div>
        </section>

        <section class="contact-us">
          <h2>Ready to get started?</h2>
          <button type="button" class="btn-contact">contact us</button>
        </section>
  `;
};

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

const contact = () => {
  return `
      <div id="contact">
        <header>
        <section class="contact-form">
          <div class="ask-us">
            <img src="./assets/images/bg-pattern-about-2-contact-1.svg" alt="" class="bg-pattern" />
            <h1 class="main-title">Contact</h1>
            <h2 class="subtitle">Ask us about</h2>
            <ul class="services">
              <li>
                <img src="./assets/images/icon-person.svg" alt="" />
                <p>The quality of our talent network</p>
              </li>
              <li>
                <img src="./assets/images/icon-cog.svg" alt="" />
                <p>Usage & implementation of our software</p>
              </li>
              <li>
                <img src="./assets/images/icon-chart.svg" alt="" />
                <p>How we help drive innovation</p>
              </li>
            </ul>
          </div>

          <form action="#" id="contact-form" class="form">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email Address" />
            <input type="text" name="company-name" id="company-name" placeholder="Company Name" />
            <input type="text" name="title" id="title" placeholder="Title" />
            <textarea name="message" id="message" cols="30" rows="4" placeholder="Message"></textarea>
            <button class="btn btn--filled" type="submit">submit</button>
          </form>
          <img src="./assets/images/bg-pattern-contact-2.svg" alt="" class="bg-pattern bg-pattern--2" />
        </section>
      </div>
    `;
};

const routes = {
  '/': home(),
  '/contact': contact(),
  '/about': about(),
};

const rootDiv = document.getElementById('root');
const onNavigate = (_pathname) => {
  window.history.replaceState(null, null, _pathname);
  window.history.pushState(null, _pathname, _pathname);
  rootDiv.innerHTML = routes[_pathname];

  // Change document content on home load
  _pathname === '/' ? renderCustomers() : undefined;
  _pathname === '/contact' ? initForm() : undefined;
};

// Show home view on page load
rootDiv.addEventListener('onload', onNavigate('/'));

/*--------------------------- 
BACK4APP
--------------------------- */
//Reading your First Data Object from Back4App
async function renderCustomers() {
  const query = new Parse.Query('customers');

  try {
    const customer_1 = await query.get('ar8NU8Xv1f');
    const name_1 = customer_1.get('name');
    const role_1 = customer_1.get('role');

    const customer_2 = await query.get('YARt5Z5smp');
    const name_2 = customer_2.get('name');
    const role_2 = customer_2.get('role');

    const customer_3 = await query.get('Of2Z8tvGBV');
    const name_3 = customer_3.get('name');
    const role_3 = customer_3.get('role');

    document.getElementById('customer-1').innerHTML = name_1;
    document.getElementById('customer-role-1').innerHTML = role_1;

    document.getElementById('customer-2').innerHTML = name_2;
    document.getElementById('customer-role-2').innerHTML = role_2;

    document.getElementById('customer-3').innerHTML = name_3;
    document.getElementById('customer-role-3').innerHTML = role_3;
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}

/*--------------------------- 
EMAILJS
--------------------------- */
const initForm = () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      emailjs.init('user_WKFn1swS6QbUm2bnIiYoJ');

      event.preventDefault();

      contactForm.querySelector('.btn').innerHTML = 'sending...';

      emailjs.sendForm('contact_service', 'contact_form', contactForm).then(
        function () {
          contactForm.querySelector('.btn').innerHTML = 'email sent successfully :D';
          alert('SUCCESS!');
        },
        function (error) {
          contactForm.querySelector('.btn').innerHTML = 'something went wrong :(';
          alert('FAILED...', error);
        }
      );
    });
  }
};
