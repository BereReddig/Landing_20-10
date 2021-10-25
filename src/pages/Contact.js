import bgPattern1 from '../assets/images/bg-pattern-about-2-contact-1.svg';
import bgPattern2 from '../assets/images/bg-pattern-contact-2.svg';
import iconPerson from '../assets/images/icon-person.svg';
import iconCog from '../assets/images/icon-cog.svg';
import iconChart from '../assets/images/icon-chart.svg';

const contact = () => {
  return `
      <div id="contact">
        <header>
        <section class="contact-form">
          <div class="ask-us">
            <img src="${bgPattern1}" alt="" class="bg-pattern" />
            <h1 class="main-title">Contact</h1>
            <h2 class="subtitle">Ask us about</h2>
            <ul class="services">
              <li>
                <img src="${iconPerson}" alt="" />
                <p>The quality of our talent network</p>
              </li>
              <li>
                <img src="${iconCog}" alt="" />
                <p>Usage & implementation of our software</p>
              </li>
              <li>
                <img src="${iconChart}" alt="" />
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
          <img src="${bgPattern2}" alt="" class="bg-pattern bg-pattern--2" />
        </section>
      </div>
    `;
};

export default contact;
