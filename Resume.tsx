import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">

            <section className="experience">
                <h3>Experience</h3>
                
                <div className="job">
                    <h4>CAD Engineer</h4>
                    <p>Telecon, USA – Salt Lake City, UT</p>
                    <p>November 2021 – April 2024</p>
                    <ul>
                        <li>Created designs for Altice One Fiber Optic Cables to feed into residential and commercial buildings.</li>
                        <li>Designed floor plans, renderings, and elevations using AutoCAD software (Netwin and SpatialNet).</li>
                        <li>Produced detailed construction and design plans for field engineers, ensuring technical solutions met client goals.</li>
                        <li>Utilized tools like Microsoft Word and Excel alongside Netwin and SpatialNet software.</li>
                    </ul>
                </div>

                <div className="job">
                    <h4>Warehouse Manager</h4>
                    <p>Hannon Floor Covering – Union, NJ</p>
                    <p>January 2017 – November 2021</p>
                    <ul>
                        <li>Managed staff, prepared delivery schedules, and assigned specific duties.</li>
                        <li>Responsible for ordering materials for flooring jobs.</li>
                        <li>Established and implemented company policies, goals, objectives, and procedures.</li>
                        <li>Oversaw all shipping and receiving of flooring materials.</li>
                    </ul>
                </div>

                <div className="job">
                    <h4>1st Assistant Manager</h4>
                    <p>Regal Manahawkin 10 – Manahawkin, NJ</p>
                    <p>February 2016 – November 2016</p>
                    <ul>
                        <li>Managed staff, prepared work schedules, and assigned specific duties.</li>
                        <li>Administered personnel processes.</li>
                        <li>Established and implemented company policies, goals, objectives, and procedures.</li>
                        <li>Ensured customer satisfaction with cinema visits.</li>
                    </ul>
                </div>

                <div className="job">
                    <h4>General Manager</h4>
                    <p>Bow Tie Cinemas – Red Bank, NJ</p>
                    <p>June 2013 – September 2014</p>
                    <ul>
                        <li>Managed staff, prepared work schedules, and assigned specific duties.</li>
                        <li>Determined staffing requirements, interviewed, hired, and trained new employees.</li>
                        <li>Administered personnel processes.</li>
                        <li>Established and implemented company policies, goals, objectives, and procedures.</li>
                        <li>Managed two cinemas simultaneously with a total staff of 40.</li>
                        <li>Ensured customer satisfaction with cinema visits.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Resume;