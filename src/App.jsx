import './index.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Professional Portfolio - PRO Plan</h1>
          <p>This is a premium portfolio with dedicated infrastructure</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About My Professional Work</h2>
          <p>I create world-class digital experiences</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Premium Services</h2>
          <p>Custom web development, branding, and digital strategy</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Reach out for premium consulting</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Pro Portfolio</p>
        </div>
      </footer>
    </div>
  )
}

export default App