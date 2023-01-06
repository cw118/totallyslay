import {Card} from "flowbite-react"
import styles from "../../styles/card.module.css"

export default function Cards() {
    const list = [
    {name: "Adam Abbas", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Adam_S.JPG"},    
    {name: "Andrea Abou-Haidar", age: 17, year: "Second year", club:"Arduino and construction", fun: "x", src:"/members/Andrea_S.JPG"},
    {name: "Adelina Badea", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Adelina_S.JPG"},
    {name: "Yau Hong Chau", age: 18, year: "Second year", club:"Film", fun: "x", src:"/members/Yau_S.JPG"},
    {name: "Sofia Del Raso", age: 19, year: "Second year", club:"Arduino", fun: "x", src:"/members/Sofia_S.JPG"},
    {name: "Audrey Dumais", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Audrey_S.JPG"},
    {name: "Zoe Hadziaras", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Zoe_S.JPG"},
    {name: "Isabella Hensley", age: 18, year: "Second year", club:"Arduino", fun: "x", src:"/members/Isabella_S.JPG"},
    {name: "Victoria Hoang", age: 17, year: "Second year", club:"Arduino and construction", fun: "x", src:"/members/Victoria_S.JPG"},
    {name: "Vincent Ly", age: 18, year: "Second year", club:"Arduino and programming", fun: "x", src:"/members/Vincent_S.JPG"},
    {name: "Nehna Patel", age: 17, year: "Second year", club:"Arduino and construction", fun: "x", src:"/members/Nehna_S.JPG"},
    {name: "Ruwa Qatmash", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Ruwa_S.JPG"},
    {name: "Celia Shi", age: 18, year: "Second year", club:"Web Development", fun: "x", src:"/members/Celia_S.JPG"},
    {name: "Sangeeta Vidyarthi", age: 18, year: "Second year", club:"Arduino and film", fun: "x", src:"/members/Sangeeta_S.JPG"},
    {name: "Zi Heng Wang", age: 18, year: "First year", club:"Arduino", fun: "x", src:"/members/ZiHeng_S.JPG"},
    {name: "Carolyn Wu", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Carolyn_S.JPG"},
    {name: "Elisa Xue", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Elisa_S.JPG"},
    {name: "Jennifer Zhang", age: 17, year: "First year", club:"Arduino", fun: "x", src:"/members/Jennifer_S.JPG"},
]
    return (
        <div>
            <h1 className={styles.title}>
            Student Body
            </h1>
            <div className={styles.div}>
                {list.map((member, index) => 
                    <Carte key={index} src={member.src} name={member.name} club={member.club} fun={member.fun} age={member.age} />
                )}
            </div>
        </div>
    )
}

function Carte(props) {
    return (
        <Card
            className={styles.card} 
            imgSrc={props.src}
            horizontal = {true}
        >
            <div className="font-kiwi">
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Age: {props.age}
                </p>
                <p>
                    Clubs: {props.club}
                </p>
                <p>
                    Quote: &ldquo;{props.fun}&rdquo;
                </p>
            </div>
        </Card>
    )
}

