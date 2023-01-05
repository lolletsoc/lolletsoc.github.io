import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from "./navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>Liam Costello - engineering lead and systems architect</title>
                <meta name="description"
                      content="Lead software engineer solutions architect and principal team lead
                      with experience in Kubernetes, AWS, Azure, .NET, Java, NodeJS and more."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            </Head>
            <main className={styles.layout}>
                <NavBar/>
                <div className={styles.contentWrapper}>
                    <div className={styles.tagLineWrapper}>
                        <span>
                            <h1 style={{fontWeight: '400'}}>Liam is a <span
                                style={{fontWeight: '700'}}>principal engineer</span> and <span
                                style={{fontWeight: '700'}}>architect</span> <br/> building products,
                            high-performance <br/> systems and teams.</h1>
                        </span>
                        <p className={styles.desc}>I'm a seasoned engineer with 10+ years of experience in
                            backend development,
                            <br/>infrastructure, architectural design and leading engineering organisations.
                            <br/> I
                            focus on clean well thought out patterns, ensuring consistency <br/> across the stack and
                            ultimately reducing the need for significant refactoring in the future.
                        </p>

                        <h2 className={styles.contact}>Want to <i>hire me</i> or fancy a chat?</h2>
                        <p className={styles.desc}>
                            I'm available for hire, consultation and mentoring. <br/>
                            Contact me on <a href="mailto:liam@lolletsoc.com">liam@lolletsoc.com</a>
                        </p>
                        <nav className={styles.downloadContactNav}>
                            <a href="/liam_costello_cv.pdf">Download CV</a>
                        </nav>
                    </div>
                    <Image
                        src="/me.jpg"
                        alt="A picture of Liam Costello"
                        width={350}
                        height={500}
                        priority
                        className={styles.pictureOfMe}/>
                </div>
            </main>

        </>
    )
}
