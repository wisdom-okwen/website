import React, { useState, useEffect } from "react";
import './Footer.css';

const initialDate = new Date().getFullYear();

function Footer() {
    const [date, setDate] = useState(initialDate);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newDate = new Date().getFullYear();
            setDate(newDate)
        });
        return () => clearTimeout(timeout);
    }, [date]);

    return (
        <div id="footer">
            <p>Made from scratch with 💙 by Wisdom &copy; {date}</p>
        </div>
    );
}
export default Footer;