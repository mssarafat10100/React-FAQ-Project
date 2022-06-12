import React, {useState} from 'react'
import styles from './faq.module.css'

const FAQ = ({id, title, desc}) => {

    const [toggle, setToggle] = useState(false);

  return (
    <article className={styles.faq}>
        <div>
            <h3>{title}</h3>
            <button className={styles.btn} onClick={() => {setToggle(!toggle)}}>
                {toggle ? '-' : "+"}
            </button>
        </div>
        
        {toggle && <p>{desc}</p>}
    </article>
    )
}

export default FAQ