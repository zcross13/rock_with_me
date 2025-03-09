const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-logo">Logo</a>
            <ul>
                <li className="active">
                    <a href="/schedule-appointment"> Schedule Appointment</a>
                </li>
                <li>
                    <a href="/prices"> Prices </a>
                </li>
                <li>
                    <a href="/3d-ultrasound"> 3D Ultrasound</a>
                </li>
                <li>
                    <a href="/4d-ultrasound"> 4D Ultrasound</a>
                </li>
                <li>
                    <a href="/reviews"> Reviews</a>
                </li>
                <li>
                    <a href="/calendar"> Calendar</a>
                </li>
                <li>
                    <a href="/about-us"> About Us</a>
                </li>
                <li>
                    <a href="faq"> FAQs</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;