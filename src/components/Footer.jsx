export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Andrew Haines. Built from scratch, no template.</p>
        <ul className="footer-links">
          <li><a href="https://github.com/Kryhr" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="mailto:hainesdrew.h@gmail.com">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
