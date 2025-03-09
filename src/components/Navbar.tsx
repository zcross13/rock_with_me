// CustomLink Component with types
interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
}

function CustomLink({ href, children, ...props }: CustomLinkProps) {

    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}


const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-logo">Logo</a>
            <ul>
                <CustomLink href="/schedule-appointment"> Schedule Appointment</CustomLink>
                <CustomLink href="/prices"> Prices </CustomLink>
                <CustomLink href="/3d-ultrasound"> 3D Ultrasound</CustomLink>
                <CustomLink href="/4d-ultrasound"> 4D Ultrasound</CustomLink>
                <CustomLink href="/reviews"> Reviews</CustomLink>
                <CustomLink href="/calendar"> Calendar</CustomLink>
                <CustomLink href="/about-us"> About Us</CustomLink>
                <CustomLink href="faq"> FAQs</CustomLink>

            </ul>
        </nav>
    )
}



export default Navbar;

