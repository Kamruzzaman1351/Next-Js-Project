function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            <a
            href="https://github.com/Kamruzzaman1351"
            target="_blank"
            rel="noopener noreferrer"
            >
            Created by{' '}
            <span>
                Kamruzzaman
            </span>
            </a>
            <p>Copyright &copy; {currentYear} Github User Fiender</p>
        </div>
    </footer>
  )
}

export default Footer