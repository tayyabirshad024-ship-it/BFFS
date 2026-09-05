import Header from "../components/Header";
import { Reveal } from "../components/Reveal";
import NvpScrollVideo from "../components/NvpScrollVideo";

const endorsers = [
  ["BD", "Bonnie Dumanis", "Former San Diego County District Attorney"],
  ["MB", "Martin Bayless", "NFL Veteran · 13 seasons"],
  ["DT", "Deborah Tabart", "Founder & CEO · Australia Koala Foundation"],
  ["IB", 'Iain "Ratso" Buchanan', "New Zealand surfer"],
  ["MW", "Mayor Wood", "Mayor of Oceanside"],
  ["BS", "Brett Swain", "NFL · Green Bay Packers"],
  ["CP", "Carlsbad Patch", "Community Partner"],
];

export default function NvpPage() {
  return (
    <main className="site nvp-page">
      <Header current="nvp" />
      <section className="nvp-hero">
        <div className="nvp-hero-glow" />
        <div className="nvp-hero-inner">
          <Reveal>
            <p className="eyebrow gold-text">ENCOURAGE · EDUCATE · EMPOWER</p>
            <h1>The Non-Violent<br /><em>Pledge.</em></h1>
            <p>A public commitment to nonviolence, self-respect, and protecting the Earth — one person and one promise at a time.</p>
            <a className="button gold" href="#pledge">Read the promise <span>↓</span></a>
          </Reveal>
        </div>
        <div className="nvp-side-label">THE PLEDGE / 2026</div>
      </section>
      <section id="pledge" className="pledge-modern section-light">
        <div className="pledge-intro">
          <Reveal>
            <p className="eyebrow purple-text">01 — MAKE THE COMMITMENT</p>
            <h2>It starts<br /><em>with you.</em></h2>
          </Reveal>
        </div>
        <Reveal className="pledge-panel">
          <span className="giant-quote">“</span>
          <p>I pledge to treat myself and others with respect, to reject violence in my words and my actions, and to build a home, a family, and a community rooted in safety and dignity.</p>
          <p>I pledge to protect this Earth as I protect my own body, understanding that how we care for the world around us reflects how we care for each other.</p>
          <div className="pledge-signoff">
            <span>ONE PERSON</span><i /> <span>ONE PROMISE</span><i /> <span>ONE FUTURE</span>
          </div>
        </Reveal>
      </section>
      <NvpScrollVideo />
      <section className="endorsers-modern section-light">
        <div className="section-topline">
          <span className="eyebrow purple-text">03 — THE COMMUNITY</span>
          <span className="section-index">7 VOICES</span>
        </div>
        <Reveal>
          <h2>Standing behind<br /><em>the pledge.</em></h2>
          <p className="wide-copy">Our commitment to nonviolence, self-respect, and protecting the Earth has been championed by community leaders and partners who believe change starts with a promise.</p>
        </Reveal>
        <div className="endorser-marquee">
          {[...endorsers, ...endorsers].map(([initials, name, role], i) => (
            <div className="endorser-card-modern" key={`${name}-${i}`}>
              <div className="avatar-modern">{initials}</div>
              <div><h3>{name}</h3><p>{role}</p></div>
              <span className="mini-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>
      <section className="pledge-action section-purple">
        <div className="action-decoration">NVP</div>
        <Reveal>
          <p className="eyebrow gold-text">04 — CARRY IT FORWARD</p>
          <h2>A promise worth<br /><em>protecting.</em></h2>
          <p>Every gift helps bring the Non-Violent Pledge, the PSA campaign, and its message to more schools, shelters, and communities.</p>
          <form className="donate-modern" action="https://bbf2026.kinsta.cloud/get-involved/#donate" method="get" target="_blank">
            <label htmlFor="amount">YOUR CONTRIBUTION</label>
            <div><span>$</span><input id="amount" name="amount" type="number" min="1" step="1" placeholder="Enter amount" /><button type="submit">Donate ↗</button></div>
          </form>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <a className="brand footer-brand" href="/"><img src="/logo.png" alt="Bright Future Foundation of America" /><span><strong>Bright Future</strong><small>FOUNDATION OF AMERICA</small></span></a>
          <p className="footer-description">Restoring dignity to survivors of domestic violence and funding education for youth in the U.S. and Mizoram, India.</p>
        </div>
        <div><p className="footer-label">EXPLORE</p><a href="/">Home</a><a href="/#mission">Mission</a><a href="/#programs">Programs</a><a href="/#impact">Impact</a><a href="/nvp">The Pledge</a></div>
        <div><p className="footer-label">NATIONAL DV HOTLINE</p><a className="hotline" href="tel:18007997233">1-800-799-7233</a><p>Available 24/7, free and confidential</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Bright Future Foundation of America. All rights reserved.</span><span>EIN: 85-1234567</span></div>
    </footer>
  );
}
