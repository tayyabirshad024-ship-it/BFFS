import Header from "./components/Header";
import { Reveal } from "./components/Reveal";
import ScrollVideo from "./components/ScrollVideo";

const programs = [
  { number: "01", title: "Restore Dignity", text: "Providing complimentary day of beauty makeovers, pampering, and self-worth workshops to victims in shelters.", tag: "SURVIVOR SUPPORT" },
  { number: "02", title: "Provide Education", text: "Offering life counseling, career advisement, and direct international technology scholarships to youth.", tag: "EDUCATION" },
  { number: "03", title: "Inspire Action", text: "Challenging communities globally to take the Non-Violence Pledge to respect themselves, others, and protect the Earth.", tag: "THE PLEDGE" },
];

export default function Home() {
  return (
    <main id="top" className="site">
      <Header />
      <section className="hero hero-home">
        <div className="hero-video-visual" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster="/video-poster.jpg">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-wash" />
          <div className="hero-video-frame" />
          <div className="hero-video-caption"><span>LIVE FROM THE WORK</span><i /><b>01</b></div>
        </div>
        <div className="hero-ambient" />
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit-a" /><div className="hero-orbit hero-orbit-b" />
        <div className="hero-inner">
          <Reveal className="hero-copy">
            <div className="hero-kicker"><span>20</span><div><b>YEARS</b><small>OF BRIGHT FUTURES</small></div></div>
            <h1><span>Encourage.</span><span>Educate.</span><em>Empower.</em></h1>
            <p className="hero-lead">Restoring dignity, expanding opportunity, and helping vulnerable communities move toward a brighter future.</p>
            <div className="hero-actions"><a className="button gold" href="#mission">Begin the story <span>↓</span></a><a className="text-link" href="/nvp">Take the pledge <span>↗</span></a></div>
          </Reveal>
          <div className="hero-logo-lockup"><img src="/logo.png" alt="Bright Future Foundation of America" /><span>BRIGHT FUTURE<br />FOUNDATION OF AMERICA</span></div>
        </div>
        <div className="scroll-indicator"><span /> Keep scrolling</div>
      </section>
      <ScrollVideo />
      <section id="mission" className="mission-editorial section-light">
        <div className="mission-number">03</div>
        <div className="mission-statement-wrap">
          <Reveal><p className="eyebrow purple-text">THE MISSION</p><h2>We believe a brighter future is something you <em>build.</em></h2></Reveal>
        </div>
        <Reveal className="mission-body"><p>To provide a foundation of hope, safety, and independence for survivors of domestic violence and underserved communities through holistic empowerment.</p><span>Hope → Safety → Independence</span></Reveal>
      </section>
      <section id="programs" className="programs-modern section-dark">
        <div className="programs-head"><Reveal><p className="eyebrow gold-text">04 — HOW WE HELP</p><h2>Three ways we<br /><em>move futures forward.</em></h2></Reveal><Reveal delay={120}><p>From survivor support to scholarships and the Non-Violence Pledge, every program turns compassion into a practical next step.</p></Reveal></div>
        <div className="program-stack">{programs.map((program, i) => <Reveal key={program.number} delay={i * 100} className="program-row"><span className="program-row-number">{program.number}</span><div className="program-row-main"><p>{program.tag}</p><h3>{program.title}</h3></div><p className="program-row-text">{program.text}</p><a href={program.number === "03" ? "/nvp" : "#impact"} aria-label={`Explore ${program.title}`}>↗</a></Reveal>)}</div>
      </section>
      <section id="impact" className="impact-modern section-light">
        <div className="impact-top"><p className="eyebrow purple-text">05 — THE IMPACT</p><span>MEASURED IN PEOPLE, NOT JUST NUMBERS</span></div>
        <div className="impact-number-grid">
          <Reveal><strong>3,000<sup>+</sup></strong><p>Women and children supported</p></Reveal>
          <Reveal delay={120}><strong>20</strong><p>Years of unbroken service</p></Reveal>
        </div>
        <Reveal className="impact-award"><span>RECOGNITION</span><p>Winner of the Breaking Away Award of Excellence by KUSI News and Torrey Pines Bank.</p></Reveal>
      </section>
      <section id="story" className="founder-modern section-purple">
        <div className="founder-visual"><div className="founder-orbit" /><img src="/logo.png" alt="Bright Future Foundation mark" /><span>06 / THE FOUNDING PROMISE</span></div>
        <div className="founder-copy"><Reveal><p className="eyebrow gold-text">THE FOUNDER'S STORY</p><h2>A promise became<br /><em>a movement.</em></h2><div className="gold-line" /><p>Our founder started Bright Future Foundation of America out of a promise made to two people who never had the chance to grow old: Lexi and Baby Adam.</p><p>Their story is one of loss, but it became the seed of something lasting. Instead of letting their memory fade into grief alone, our founder chose to turn that pain into a mission that could protect other mothers and children from ever facing the same fate.</p><p>Twenty years later, that founding promise still guides everything we do.</p><a className="button gold" href="https://bbf2026.kinsta.cloud/get-involved/#donate" target="_blank" rel="noreferrer">Support the mission <span>↗</span></a></Reveal></div>
      </section>
      <section className="final-cta-modern section-dark"><Reveal><p className="eyebrow gold-text">07 — YOUR NEXT STEP</p><h2>Help make the<br /><em>future brighter.</em></h2><p>Give, volunteer, or take the Non-Violence Pledge. Start wherever you are.</p><div className="cta-actions"><a className="button gold" href="https://bbf2026.kinsta.cloud/get-involved/#donate" target="_blank" rel="noreferrer">Make a difference <span>↗</span></a><a className="button light-outline" href="/nvp">Take the pledge</a></div></Reveal></section>
      <Footer />
    </main>
  );
}

function Footer(){return <footer className="footer"><div className="footer-main"><div><a className="brand footer-brand" href="#top"><img src="/logo.png" alt="Bright Future Foundation of America"/><span><strong>Bright Future</strong><small>FOUNDATION OF AMERICA</small></span></a><p className="footer-description">Restoring dignity to survivors of domestic violence and funding education for youth in the U.S. and Mizoram, India.</p></div><div><p className="footer-label">EXPLORE</p><a href="#mission">Mission</a><a href="#programs">How We Help</a><a href="#impact">Impact</a><a href="#story">Founder Story</a><a href="/nvp">The Pledge</a></div><div><p className="footer-label">NATIONAL DV HOTLINE</p><a className="hotline" href="tel:18007997233">1-800-799-7233</a><p>Available 24/7, free and confidential</p></div></div><div className="footer-bottom"><span>© 2026 Bright Future Foundation of America. All rights reserved.</span><span>EIN: 85-1234567</span></div></footer>}
