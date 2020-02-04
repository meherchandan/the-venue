import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <footer className="bck_red">
            <Fade delay={200}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">
                    The Venue 2020. All right reserved.
                </div>
            </Fade>
        </footer>
    )
}
