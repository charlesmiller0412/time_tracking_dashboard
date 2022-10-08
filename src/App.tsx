import { useState } from "react";
import Images from "./assets/Images";
import jeremy from "./assets/image-jeremy.png";
let data = require("./assets/data.json");

function App() {
    console.log(data[0]);
    const [interval, setInterval] = useState("daily");

    if (interval === "daily") {
        document.getElementById("daily")?.classList.add("nav__active");
        document.getElementById("monthly")?.classList.remove("nav__active");
        document.getElementById("weekly")?.classList.remove("nav__active");
    } else if (interval === "weekly") {
        document.getElementById("weekly")?.classList.add("nav__active");
        document.getElementById("daily")?.classList.remove("nav__active");
        document.getElementById("monthly")?.classList.remove("nav__active");
    } else if (interval === "monthly") {
        document.getElementById("monthly")?.classList.add("nav__active");
        document.getElementById("daily")?.classList.remove("nav__active");
        document.getElementById("weekly")?.classList.remove("nav__active");
    }
    return (
        <main className="App">
            <div className="profile">
                <div className="card name">
                    <img src={jeremy} alt="profile pic" />
                    <span>Report for</span>
                    <h1>jeremy robson</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li
                            id="daily"
                            className="nav__active"
                            onClick={() => {
                                // eslint-disable-next-line no-implied-eval
                                setInterval("daily");
                            }}
                        >
                            Daily
                        </li>
                        <li
                            id="weekly"
                            onClick={() => {
                                // eslint-disable-next-line no-implied-eval
                                setInterval("weekly");
                            }}
                        >
                            Weekly
                        </li>
                        <li
                            id="monthly"
                            onClick={() => {
                                // eslint-disable-next-line no-implied-eval
                                setInterval("monthly");
                            }}
                        >
                            Monthly
                        </li>
                    </ul>
                </nav>
            </div>
            {/* work */}
            <div className="card">
                <div className="card__image work">
                    <img src={Images.work} alt="play icon" className="icon" />
                </div>
                <div className="stats">
                    <div className="title">
                        <h2>work</h2>
                        <img src={Images.ellipsis} alt="menu button" />
                    </div>
                    <div className="data">
                        <div className="time">
                            {data[0].timeframes[interval].current}hrs
                        </div>
                        <div className="comparison">
                            {interval === "daily"
                                ? "Yesterday - "
                                : interval === "weekly"
                                ? "Last Week - "
                                : interval === "monthly"
                                ? "Last Month - "
                                : ""}
                            {data[0].timeframes[interval].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
            {/* play */}
            <div className="card">
                <div className="card__image play">
                    <img src={Images.play} alt="play icon" className="icon" />
                </div>{" "}
                <div className="stats">
                    <div className="title">
                        <h2>play</h2>
                        <img src={Images.ellipsis} alt="menu button" />
                    </div>
                    <div className="data">
                        <div className="time">
                            {data[1].timeframes[interval].current}hrs
                        </div>
                        <div className="comparison">
                            {interval === "daily"
                                ? "Yesterday - "
                                : interval === "weekly"
                                ? "Last Week - "
                                : interval === "monthly"
                                ? "Last Month - "
                                : ""}
                            {data[1].timeframes[interval].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
            {/* study */}
            <div className="card">
                <div className="card__image study">
                    <img src={Images.study} alt="play icon" className="icon" />
                </div>
                <div className="stats">
                    <div className="title">
                        <h2>study</h2>
                        <img src={Images.ellipsis} alt="menu button" />
                    </div>
                    <div className="data">
                        <div className="time">
                            {data[2].timeframes[interval].current}hrs
                        </div>
                        <div className="comparison">
                            {interval === "daily"
                                ? "Yesterday - "
                                : interval === "weekly"
                                ? "Last Week - "
                                : interval === "monthly"
                                ? "Last Month - "
                                : ""}
                            {data[2].timeframes[interval].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
            {/* exercise */}
            <div className="card">
                <div className="card__image exercise">
                    <img
                        src={Images.exercise}
                        alt="play icon"
                        className="icon"
                    />
                </div>
                <div className="stats">
                    <div className="title">
                        <h2>exercise</h2>
                        <img src={Images.ellipsis} alt="menu button" />
                    </div>
                    <div className="data">
                        <div className="time">
                            {data[3].timeframes[interval].current}hrs
                        </div>
                        <div className="comparison">
                            {interval === "daily"
                                ? "Yesterday - "
                                : interval === "weekly"
                                ? "Last Week - "
                                : interval === "monthly"
                                ? "Last Month - "
                                : ""}
                            {data[3].timeframes[interval].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
            {/* social */}
            <div className="card">
                <div className="card__image social">
                    <img src={Images.social} alt="play icon" className="icon" />
                </div>{" "}
                <div className="stats">
                    <div className="title">
                        <h2>social</h2>
                        <img src={Images.ellipsis} alt="menu button" />
                    </div>
                    <div className="data">
                        <div className="time">
                            {data[4].timeframes[interval].current}hrs
                        </div>
                        <div className="comparison">
                            {interval === "daily"
                                ? "Yesterday - "
                                : interval === "weekly"
                                ? "Last Week - "
                                : interval === "monthly"
                                ? "Last Month - "
                                : ""}
                            {data[4].timeframes[interval].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
            {/* self care */}
            <div className="card">
                <div className="card__image care">
                    <img
                        src={Images.selfCare}
                        alt="play icon"
                        className="icon"
                    />
                </div>{" "}
                <div className="stats">
                    <div className="title">
                        <h2>self care</h2>
                        <img src={Images.ellipsis} alt="menu button" />
                    </div>
                    <div className="data">
                        <div className="time">
                            {data[5].timeframes[interval].current}hrs
                        </div>
                        <div className="comparison">
                            {interval === "daily"
                                ? "Yesterday - "
                                : interval === "weekly"
                                ? "Last Week - "
                                : interval === "monthly"
                                ? "Last Month - "
                                : ""}
                            {data[5].timeframes[interval].previous}hrs
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
