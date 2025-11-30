import Image from "next/image";
import "./hero.css";
import ThemeToggle from "./ThemeToggle";
import { ArrowRight } from "lucide-react";


export default function Hero() {
    return (
        <section className="hero">
            <div className="theme">
                <ThemeToggle />
            </div>
            <div className="text">

                <h1 className="hero-text">Vitthal Humbe</h1>
            </div>
            <div className="content">
                <div className="left">

                    <div className="location-placer">
                        <div className="circle"></div>
                        <p className="location">Kolhapur, MH, India</p>
                    </div>
                    <div className="profession">
                        <p>AI/ML Engineer and <br/>Full Stack Developer</p>
                    </div>
                </div>
                <div className="right">
                    <div className="about">
                        Hi,  I am Vitthal Humbe - an AI/ML Engineer and Full-Stack Web and App developer passionate about building real-world application.
                    </div>
                    <div className="resume-button">
                        <a href="/Vitthal_Humbe_Resume.pdf" download>
                            <button className="btn-resume">
                                Resume   <ArrowRight size={25} />
                            </button>
                            
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
