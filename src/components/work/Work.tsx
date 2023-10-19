import Kizomba from "../../assets/kizomba1.jpg";
import "./index.css";

const Work = () => {

    const test = () => {
        console.log("test");
    }
    return (
        <section className="work" id="work">
            <div className="work_title">
                <h2>Mes réalisations</h2>
            </div>
            {/* <div className="work_items">
                <div className="work_item">
                    <img src={Kizomba} alt="html skill" width={50} />
                </div>
            </div> */}
            <div className="cube">
                <div className="face front" onClick={test}>
                    <img src={Kizomba} alt="html skill" width={150} />
                </div>
                <div className="face back">Back</div>
                <div className="face right">Right</div>
                <div className="face left">Left</div>
                <div className="face top">Top</div>
                <div className="face bottom">Bottom</div>
            </div>
        </section>
    )
}

export default Work
