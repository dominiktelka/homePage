import { usePlay } from "../../contexts/Play.jsx";
import {useState} from "react";
import styles from "./EndScreen.module.css";


export const EndScreen = () => {
    const { end, hasScroll } = usePlay();
    const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
    const [isIconsContainerVisible, setIsIconsContainerVisible] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const toggleAboutMe = () => {
        setIsAboutMeVisible(!isAboutMeVisible);
        setActiveButton("aboutMe");
        if (isIconsContainerVisible) {
            setIsIconsContainerVisible(false);
        }
    };

    const toggleIconsContainer = () => {
        setIsIconsContainerVisible(!isIconsContainerVisible);
        setActiveButton("socialMedia");
        if (isAboutMeVisible) {
            setIsAboutMeVisible(false);
        }
    };
    return (
        < section className={`${end ? "endScreen" : "endScreenDisable"} ${hasScroll ? "overlay--scrolled" : ""}`} >
            <button className={`aboutMe ${activeButton === "aboutMe" ? "active" : ""}`} onClick={toggleAboutMe}>
                About Me
            </button>
            <button className={`socialMedia ${activeButton === "socialMedia" ? "active" : ""}`} onClick={toggleIconsContainer}>
                Social Media
            </button>
            <article className={` ${isAboutMeVisible ? "visible" : "outroAppear"}`} >
                <p className="outroText">
                    My journey in JavaScript began over two years ago with a thirst for knowledge and a determination to understand the entire ecosystem.
                </p>
                <p className="outroText">
                    I focused on mastering the basics of JavaScript, laying a strong foundation for my continuous learning journey.
                </p>
                <p className="outroText">
                    Delving into front-end development, I immersed myself in React.js, where I crafted engaging and user-friendly interfaces.
                </p>
                <p className="outroText">
                    Venturing into the 3D realm with Three.js and Theatre.js, I explored the exciting world of 3D graphics, constantly pushing the boundaries of web development.
                </p>
                <p className="outroText">
                    In the realm of back-end development, I honed my skills in Express.js and Node.js, mastering databases like MongoDB and MySQL to create robust and efficient back-end solutions.
                </p>
                <p className="outroText">
                    My tech stack proficiency includes CSS3, HTML5, and SASS. I am well-versed in version control with Git and project management using Jira.
                </p>
                <p className="outroText">
                    Beyond coding, I collaborated with CMS platforms like Drupal, AEM, and Hybris, delivering comprehensive web solutions and gaining valuable experience in various aspects of web development.
                </p>
                <p className="outroText">
                    Throughout my journey, I have valued continuous learning, attention to detail, effective teamwork, independence, and strong interpersonal skills. These qualities, combined with my technical expertise, equip me to be a valuable asset in any development team.
                </p>
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