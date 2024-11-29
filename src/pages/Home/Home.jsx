import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="container">
        <header className="header">
            <div className="branding">
            <img src="/doc-copy/metthier2.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
              <h2>metthier</h2>
              <p>Rise Above Ordinary</p>
              <p className="tagline">Towards a Leap Forward</p>
            </div>


        </header>
        <section className="service-section">
          <h2>OUR SERVICE</h2>
          <div className="services">
            <div className="service">
              <span className="icon">💬</span>
              <p>Communication with Care</p>
            </div>
            <div className="service">
              <span className="icon">💡</span>
              <p>Ideas for dealing with documents</p>
            </div>
            <div className="service">
              <span className="icon">🌐</span>
              <p>The world of learning</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
