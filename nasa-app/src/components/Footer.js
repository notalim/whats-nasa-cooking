import React from "react";
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                {currentYear}, alim k.
                <br />
                Contact me at:
            </p>
            <ul>
                <li>
                    <a
                        href="https://linkedin.com/in/notalim"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://notalim.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
