import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="logo">
          <span className="logo-bracket">&lt;</span>
          MadaDev
          <span className="logo-bracket">/&gt;</span>
        </a>
        <p className="footer-copy">
          © {year} MadaDev · Développeur web freelance · Fait avec ❤️ et React
        </p>
        <nav className="footer-nav">
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
