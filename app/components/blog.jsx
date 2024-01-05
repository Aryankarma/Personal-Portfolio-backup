import styles from "./blog.module.scss"

const blogData = [{
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

export default blog = () => {

    blogData.map((input)=>{
        <div className={styles.headings}>
            <h2>{input.heading}</h2>
            <p>{input.subheading}</p>            
        </div>
    })

}