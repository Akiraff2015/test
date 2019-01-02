import React from 'react';

const about = (props) => {
    return (
        <div>
            <article>
                <h1>About Me</h1>
                <p>I am a self-taught web developer, striving to make my hobby as a career. Currently looking to transition from my
                    current job as a part-time chef / kitchen hand to Fulltime Junior Web Developer. I always enjoyed programming in general,
                    and always had a dream in becoming a Backend Software Engineer, working for a medium to large size corporates.</p>
                <div className="container">
                    <div className="timeline">
                        <h2>2018</h2>
                        <ul>
                            <li>
                                <h3>v3.0 Personal Website</h3>
                                <p>I developed the website actually on Jan 1, 2019. However, I had most of the contents saved on
                                    my Google Drive, and pretty much, all I have been doing was moving around the contents
                                    and styling. All files are being served static, as I upload the website to the server by Jan 2, 2019.</p>
                                <time>Dec 2018</time>
                            </li>

                            <li>
                                <h3>Moved to Australia</h3>
                                <p>I moved to Australia earlier this year, with current visa status permanent residence.</p>
                                <time>May 2018</time>
                            </li>
                        </ul>
                        <h2>2017</h2>
                        <ul>
                            <li>
                                <h3>v2.0 Personal Website</h3>
                                <p>Second version of the website was a bit less secured than the first one! It was developed with Node, Express
                                   and used Passport local for authentication. The problem with the second version, I made the website, publicly
                                   available on Github. Therefore anybody with the access with the source code, could simply check the router
                                   folders, where they could simply register a user, and claim to be admin. I had one of
                                    <a rel="noopener noreferrer" href="https://cdn.newsapi.com.au/image/v1/55bb7874af3ed363371de561410a34a5" target="_blank"> those moments</a>.
                                   So, I decided to take the website down once again.
                                </p>
                            </li>

                            <li>
                                <h3>Landed my first Freelance Project</h3>
                                <p>Due to Terms and Agreements, that I agreed with the client, I cannot share the project public due
                                    to legal issues. I was frankly quite excited in working for somebody on my own. </p>
                            </li>
                        </ul>
                        <h2>2016</h2>
                        <ul>
                            <li>
                                <h3>Contract Job as Junior Web Dev</h3>
                                <p>I worked for MWI, Hong Kong for about 3 months, where I was specialized in following the UX Design
                                mock-up templates designed on Photoshop and convert them to HTML/CSS. I was there to quick fix the layouts
                                of pages, create new contents for the client and edit global SASS file, which had +12000 lines of code!
                                Work in general was not tedious, but it didn't allow me to have a growth in my career path.</p>
                                <time>May 2016</time>
                            </li>
                            <li>
                                <h3>v1.0 Personal Website</h3>
                                <p>The first version of website was being hosted on GoDaddy, and needed to write a hacky
                                program on PHP which allowed me to initially have something up in the air. I took security,
                                less serious, and had a basic captcha which generated four random digit numbers, which the
                                user were required to copy the number. It helped in decreasing 80% spam bot messages!</p>

                            </li>
                            <li>
                                <h3>Deeper dive to Web Development</h3>
                                <p>During this time, a lot of Frameworks started going on mainstream. I learned MEAN stack and
                                developed a simple Inventory Management application. I must be honest here, I used a lot of
                                unnecessary libraries for this pet project.</p>
                            </li>
                        </ul>
                        <h2>2015</h2>
                        <ul>
                            <li>
                                <h3>Landed first job as Kitchen Hand</h3>
                                <p>After leaving my first job as Web Developer from my Web Developer job, was frankly quite happy,
                                that I could move out from my family's boathouse, cause that was a terrible life experience overall
                                for me (I enjoy the land, thank you). Managed to rent my own room at a shared apartment.</p>
                                <time>Dec 2015</time>
                            </li>
                            <li>
                                <h3>Landed first job as Web Dev</h3>
                                <p>My employee was quite informal and relax, and had a great charisma. Unfortunately, he/she
                                didn't provide me mentoring or any prior background checks. And I was assigned to do Web Development,
                                focusing in WordPress and Meteor framework.</p>
                                <time>Oct 2015</time>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>Exposing my first JavaScript library</h3>
                                <p>jQuery was my first JavaScript library. I love how people back in the days, would say JavaScript and
                                jQuery were two different beasts.</p>
                            </li>
                            <li>
                                <h3>Exposing to Web Development first time</h3>
                                <p>I must say it was a quite tough learning curve, to dive deep into JavaScript. Especially
                                ECMAScript 2016 was still a mixture between Web, and Flash finally started to die out, meanwhile HTML5
                                was being adopted to standard browsers. And let's not forget the HTML5 YouTube beta!</p>
                            </li>
                        </ul>
                        <h2>2014</h2>
                        <ul>
                            <li>
                                <h3>Graduated high school</h3>
                                <p>Not sure if is an achievement, but just throwing out there that I finished high school. Not the best
                                GPA, to get into top universities.</p>
                                <time>Jun 2014</time>
                            </li>
                        </ul>
                        <h2>2013</h2>
                        <ul>
                            <li>
                                <h3>Wrote a small project for my friend</h3>
                                <p>Alright, I must brag here out. I wrote a fully functional CRUD operation using I/O Python
                                    standard library. The program pretty much was a replicate of a POS (Point of Sales). I wished
                                    I learned database earlier, so I didn't need to write my own string manipulation algorithm in
                                    storing data in plain text file.
                                </p>
                            </li>
                        </ul>
                        <h2>2012</h2>
                        <ul>
                            <li>
                                <h3>Self-taught Java</h3>
                                <p>After learning Python at high school, I decided to self-explore the world in programming.
                                Picking Java, during this time was Java 7. Before lambda expressions was a thing...</p>
                            </li>
                            <li>
                                <h3>Introductory Computer Science course</h3>
                                <p>I took an Introduction to CS and Object Oriented Programming course. Which gave me the
                                fundamentals of programming and exposing basic syntax Python.</p>
                            </li>
                        </ul>

                        <h2>2011</h2>
                        <ul>
                            <li>
                                <h3>Exposed first time to programming</h3>
                                <p>I was exposed programming for the first time by my friend, who was developing a game via Java.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default about;