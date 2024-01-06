import styles from "./blog.module.scss"
import { useState } from "react"

const blogData = [{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 6 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
},
{
    heading: "The story of my weekend project - A complete dumpster fire, and everything I learnt from it.",
    subheading:"A story about how my Christmas was ruined by a series of spam, abuse and DDoS attacks on a small app that I built. And what you can learn from it.",
    minuteRead: "3 min read",
    date:"Jan 26 2023"
}]

const blog = () => {
    
    // remove this useState and ternary operators when database connected
    const [dataFetch, setDataFetch] = useState(true)

    return <>
   
    {dataFetch ? blogData.map((input)=>{        
        return <>
            <div id={styles.blogBox}>
                <div className={styles.headingsContainer}>
                    <h2 className={styles.mainheading}>{input.heading}</h2>
                    <p className={styles.subheading}>{input.subheading}</p>
                </div>
                <div className={styles.DateAndTimeContainer}>
                    <p className={styles.minuteRead}>{input.minuteRead}</p>
                    <p className={styles.date}>{input.date}</p>
                </div>
            </div>
        </>
    }) : <h1 id={styles.comingSoon}>Blogs are coming soon...</h1> }
    </> 



}

export default blog;