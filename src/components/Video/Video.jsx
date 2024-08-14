import './Video.css';
import video from '/videos/business_meeting.mp4';

const Video = () => {
    return (
        <section className="videoSection">
            <div className="videoContent">
                <div className="container">
                <div className="vsText">
                    <h1>We are providing best business service</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <video className="vsVideo" autoPlay loop muted playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>

            </div>
        </section>
    )
}

export default Video
