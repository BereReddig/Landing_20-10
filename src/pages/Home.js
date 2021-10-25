import bgPattern1 from '../assets/images/bg-pattern-home-1.svg';
import iconPerson from '../assets/images/icon-person.svg';
import iconCog from '../assets/images/icon-cog.svg';
import iconChart from '../assets/images/icon-chart.svg';
import iconQuotes from '../assets/images/icon-quotes.svg';
import avatarKady from '../assets/images/avatar-kady.jpg';
import avatarAiysha from '../assets/images/avatar-aiysha.jpg';
import avatarArthur from '../assets/images/avatar-arthur.jpg';

const home = () => {
  return `
    <header>
          <!-- NAVBAR-->
          <div class="container header-image">
            <img src="${bgPattern1}" alt="" class="bg-pattern-desktop-add" />
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
              <img src="${iconPerson}" alt="" />
              <div class="feature-content">
                <h3>Experienced Individuals</h3>
                <p>
                  Our network is made up of highly experienced professionals who are passionate about
                  what they do.
                </p>
              </div>
            </div>

            <div class="feature">
              <img src="${iconCog}" alt="" />
              <div class="feature-content">
                <h3>Easy to Implement</h3>
                <p>
                  Our processes have been refined over years of implementation meaning our teams always
                  deliver.
                </p>
              </div>
            </div>

            <div class="feature">
              <img src="${iconChart}" alt="" />
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
              <img src="${iconQuotes}" alt="quotes" class="quotes" />
              <p>
                “The team perfectly fit the specialized skill set required. They focused on the most
                essential features helping us launch the platform eight months faster than planned.”
              </p>
              <h3 id='customer-1'>Kady Baker</h3>
              <h4 id='customer-role-1'>Product Manager at Bookmark</h4>
              <img src="${avatarKady}" alt="kady" class="avatar" />
            </div>

            <div class="feedback">
              <img src="${iconQuotes}" alt="quotes" class="quotes" />
              <p>
                “We needed to automate our entire onboarding process. The team came in and built out the
                whole journey. Since going live, user retention has gone through the roof!”
              </p>
              <h3 id='customer-2'>Aiysha Reese</h3>
              <h4 id='customer-role-2'>Founder of Manage</h4>
              <img src="${avatarAiysha}" alt="aiysha" class="avatar" />
            </div>

            <div class="feedback">
              <img src="${iconQuotes}" alt="quotes" class="quotes" />
              <p>
                “Amazing. Our team helped us build an app that delivered a new experience for hiring a
                physio. The launch was an instant success with 100k downloads in the first month.”
              </p>
              <h3 id='customer-3'>Arthur Clarke</h3>
              <h4 id='customer-role-3'>Co-founder of MyPhysio</h4>
              <img src="${avatarArthur}" alt="arthur" class="avatar" />
            </div>
          </div>
        </section>

        <section class="contact-us">
          <h2>Ready to get started?</h2>
          <button type="button" class="btn-contact">contact us</button>
        </section>
  `;
};

export default home;
