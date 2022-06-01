import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import { featuredPortfolio,
reactPortfolio,
javascriptPortfolio,
htmlCssPortfolio,
gitGithubPortfolio,
responsiveWebDesignPortfolio } from "../../data.js";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured Projects",
            link: "",
        },
        {
            id: "react",
            title: "React.js",
            link: "",
        },
        {
            id: "javascript",
            title: "JavaScript",
            link: "",
        },
        {
            id: "html5 & css3",
            title: "HTML5 & CSS3",
            link: "",
        },
        {
            id: "git & github",
            title: "Git & GitHub",
            link: "",
        },
        {
            id: "responsive web",
            title: "Responsive Web Design",
            link: "",
        },
    ]; 

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "javascript":
                setData(javascriptPortfolio);
                break;
            case "html5 & css3":
                setData(htmlCssPortfolio);
                break;
            case "git & github":
                setData(gitGithubPortfolio);
                break;
            case "responsive web":
                setData(responsiveWebDesignPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            {list.map((item) => (
                <PortfolioList 
                title={item.title} 
                active={selected === item.id} 
                setSelected={setSelected} 
                id={item.id}
                link={item.link}
                />
            ))}
        </ul>
        <div className="container">
            {data.map((d) => (
            <div className="item">
                <img 
                    src={d.img}
                    alt={d.title}/>
                <h3><a href={d.link} target="_blank" rel="noreferrer">{d.title}</a></h3>
            </div>
            ))}
        </div>
    </div>
    )
}
