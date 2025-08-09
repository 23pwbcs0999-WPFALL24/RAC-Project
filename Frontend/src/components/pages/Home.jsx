import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import { FadeIn } from "../../transition"; // Importing the custom fade-in animation variant
import '../styles/Home.css'; // Importing CSS for styling the component

export const Home = () => {
    return (
        <div className="home">
            {/* Hero section with motion animation */}
            <motion.div
                className="hero"
                variants={FadeIn("up", 0)} // Applying "up" animation variant
                initial="hidden" // Initial animation state
                whileInView={"show"} // Animation state when the element comes into view
                viewport={{ once: true, amount: 0.5 }} // Trigger animation once, when 50% of the element is visible
            >
                <h1>
                    <span style={{ fontFamily: "Dancing Script" }}>Robots</span> turn dreams into motion.
                </h1>
                <div className="hero-img">
                    {/* Placeholder for hero image */}
                </div>
            </motion.div>

            {/* Horizontal line divider */}
            <hr style={{ border: "3px solid #bcb8b9", margin: "30px 50px" }} />

            {/* About Us section with motion animation */}
            <motion.div
                className="about-us"
                variants={FadeIn("left", 0)} // Applying "left" animation variant
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }} // Trigger animation multiple times, when 50% of the element is visible
            >
                <div className="text">
                    <h1>
                        <span style={{ fontFamily: "Dancing Script" }}>Robotics</span> And Automation Community
                    </h1>
                    <p>
The Robotics and Automation Community (RAC) is a platform for innovators, engineers, and technology enthusiasts to explore the limitless possibilities of robotics. Our mission is to design, build, and share intelligent systems that make life easier, safer, and more efficient. Whether it’s creating advanced robotic arms, developing autonomous drones, or experimenting with AI-powered machines, we bring ideas to life through teamwork, creativity, and cutting-edge technology. At RAC, we believe that automation isn’t just the future—it’s the present, and we’re here to shape it.
                    </p>
                </div>
                <div className="about-us-img">
                    <div className="about-us-img-1-1">
                        {/* Placeholder for the first image */}
                    </div>
                    <div className="about-us-img-1-2">
                        <div className="about-us-img-2">
                            {/* Placeholder for the second image */}
                        </div>
                        <div className="about-us-img-3">
                            {/* Placeholder for the third image */}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Horizontal line divider */}
            <hr style={{ border: "3px solid #bcb8b9", margin: "30px 50px" }} />

            {/* Our Vision section with motion animation */}
            <motion.div
                className="our-vision"
                variants={FadeIn("left", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="our-vision-img">
                    {/* Placeholder for vision image */}
                </div>
                <div className="text">
                    <h1>
                        <span style={{ fontFamily: "Dancing Script" }}>Our</span> Vision
                    </h1>
                    <p>
                      We envision a future where robotics and automation work hand in hand with humanity to solve real-world challenges. Our goal is to inspire and equip individuals with the skills, knowledge, and confidence to become pioneers in the field. Through hands-on projects, workshops, and competitions, we aim to cultivate problem-solvers who are ready to lead the next wave of technological breakthroughs. At RAC, our vision is simple yet powerful: innovate for impact, automate for progress, and empower for a better tomorrow.


                    </p>
                </div>
            </motion.div>

            {/* Horizontal line divider */}
            <hr style={{ border: "3px solid #bcb8b9", margin: "30px 50px" }} />

            {/* Achievements section with motion animation */}
            <motion.div
                className="achievements"
                variants={FadeIn("left", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
            >
                <h1>
                    Events <span style={{ fontFamily: "Dancing Script" }}>&</span> Achievements
                </h1>
                <div className="achievements-imgs">
                    {/* Image placeholders for achievements */}
                    <div className="achievements-img">
                        <img src="img7.jpeg" alt="" />
                    </div>
                    <div className="achievements-img">
                        <img src="img8.jpeg" alt="" />
                    </div>
                    <div className="achievements-img">
                        <img src="img6.jpeg" alt="" />
                    </div>
                    <div className="achievements-img">
                        <img src="img5.jpeg" alt="" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
