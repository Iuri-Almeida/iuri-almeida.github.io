import React from 'react'
import python from '../../../images/python.png'
import challenges from '../../../images/challenges.png'
import logo from '../../../images/logo.png'

import { Hobbies } from './style'

import styles from '../../../styles/components/About.module.css'
import commands from '../../../styles/components/Main.module.css'

const About: React.FC = () => {

    return (

        <div id="about" className={styles.aboutContainer}>

            <span className={`${commands.commands} ${styles.aboutCommand}`}>
                $ cd about/
            </span>

            <p className={styles.aboutText}>
                Hi there, I'm <span className={styles.regularText}>Iuri Almeida</span>, a self-taught and full stack developer from Brazil, currently working at <span className={styles.regularText}>Vertigo</span> as a Web Dev. I’m always willing to know and learn new things, in addition to wanting to help spread knowledge around the world.

                <br />
                <br />

                <span className={styles.regularText}>Curiosity:</span> I'm a jiu jitsu black belt.
            </p>

            <span className={`${commands.commands} ${styles.lsCommand}`}>
                $ ls hobbies/
            </span>

            <div className={styles.hobbiesContainer}>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={logo} alt="Programming" />
                    </div>

                    <h1>Programming</h1>

                    <span>
                        I love spending hours on the computer developing and creating new things.
                    </span>

                </Hobbies>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={python} alt="Python" />
                    </div>

                    <h1>Python</h1>

                    <span>
                        Python is beautiful and that's it, you need to accept.
                    </span>

                </Hobbies>

                <Hobbies className={styles.hobbies}>

                    <div>
                        <img src={challenges} alt="Challenges" />
                    </div>

                    <h1>Challenges</h1>

                    <span>
                        I am driven by challenges and I’m always looking for more.
                    </span>

                </Hobbies>

            </div>

        </div>
    )
}

export default About