export default function Navbar(){

    const logoUrl = new URL('../assets/logo.png', import.meta.url);

    return(
        <nav>
            <img src={logoUrl.href} alt="Logo" />
        </nav>
    );
}