import React from 'react'
import style from './Contact.module.css'



function Contact() {

    return (
        <div className={style.contactBlock}>

            <div className={style.contactContainer}>
                <h2 className={style.contactTitle}>Contact</h2>
                <form className={style.contactForm}>
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Your E-mail"/>
                    <textarea placeholder="Message"/>
                    <button type='submit' className={style.btnSendContact}>Send</button>
                </form>
            </div>

        </div>

    )
}


export default Contact;
