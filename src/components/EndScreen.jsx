import { usePlay } from "../contexts/Play.jsx";
import {useState} from "react";


export const EndScreen = () => {
    const {end, hasScroll} = usePlay();
    const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
    const [isIconsContainerVisible, setIsIconsContainerVisible] = useState(false);

    const toggleAboutMe = () => {
        setIsAboutMeVisible(!isAboutMeVisible);
    };
    const toggleIconsContainer = () => {
        setIsIconsContainerVisible(!isIconsContainerVisible);
    };

    return (
        < section className={`${end ? "endScreen" : "endScreenDisable"} ${hasScroll ? "overlay--scrolled" : ""}`} >
            <button className="aboutMe" onClick={toggleAboutMe}>About Me</button>
            <button className="socialMedia" onClick={toggleIconsContainer}>
                Social Media
            </button>
            <article className={`outroAppear ${isAboutMeVisible ? "visible" : ""}`} >
                <p className="outroText">
                    Beginning the Odyssey: I started my JavaScript journey over two years ago, eager to conquer the entire ecosystem.</p>
                <p className="outroText">  Building Strong Foundations: I mastered JavaScript basics, laying the groundwork for advanced learning.</p>
                <p className="outroText">  Front-End Finesse: I immersed myself in front-end development, excelling in React.js and creating captivating interfaces.</p>
                <p className="outroText">  Exploring the 3D Realm: Venturing into Three.js and Theatre.js, I explored 3D graphics, pushing web development boundaries.</p>
                <p className="outroText">   Back-End Brilliance: Excelling in Express.js and Node.js, I mastered databases like MongoDB and MySQL for a robust back-end.</p>
                <p className="outroText">  Tech Stack Mastery: I polished CSS3, HTML5, and SASS skills, and used Git for version control and Jira for project management.</p>
                <p className="outroText">  Versatile CMS Skills: Beyond coding, I worked with CMS platforms like Drupal, AEM, and Hybris, delivering comprehensive web solutions.</p>
                <p className="outroText">  Skills AND Qualities Unveiled: Throughout this journey, my commitment, attention to detail, rapid learning, teamwork, independence, and strong interpersonal skills have complemented my technical expertise, making me a well-rounded candidate ready to excel in any development team.</p>
            </article>
            <div className={`${isIconsContainerVisible ? "visible2" : "iconsContainer"}`} style={{ pointerEvents: isIconsContainerVisible ? 'all' : 'none' }} >
                <p className="info">Contact me 📨 </p>
                <img className="img" src={'./icons/linkedin.png'} onClick={() => window.location.href = "https://www.linkedin.com/in/dominik-telka-203102183/"} alt="linkedin" style={{cursor:"pointer"}}/>
                <p className="info2">Check Github for more projects 💻 </p>
                <img className="img2" src={'./icons/githubFiolet.png'} onClick={() => window.location.href ='https://github.com/dominiktelka'} alt="github" style={{cursor:"pointer"}}/>
                <p className="emailInfo">dominiktelka@gmail.com</p>
            </div>
            <button className="restartButton" onClick={ () => window.location.href = "https://dominik-telka.vercel.app/"}>Restart</button>
        </section>
    );
};