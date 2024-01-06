"use client"
import styles from "./blogs.module.scss"
import Blog from "../components/blog"

const blogs = () => {
    return <>
    <div className={styles.container}>
        {/* navbar */}
        <div className={styles.nav}>
            <div className={styles.pfpandback}>
                <button onClick={()=>console.log("btn clicked")}>
                    <img className={styles.arrowimg} style={{ scale: "1", rotate:"180deg" }} src="/svg/backArrow.svg" alt="" />
                </button>
                <img id={styles.pfp} src="/img/pfp.jpg" alt="profile picture" />
            </div>
            <div className={styles.links}>
                <a>All</a>
                <a>Latest</a>
                <a>Technical</a>
                <a>this&that</a>
            </div>
            <i id={styles.chand} className="fa-solid fa-moon"></i>
        </div>

        {/* blogs */}
        <div className={styles.blogsContainer}>
            <Blog/>
        </div>


    </div>
    </>
}

export default blogs;