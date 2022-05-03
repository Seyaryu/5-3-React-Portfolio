import React from 'react';


function About() {
    return(
        <div class="amCard">
            <div id="about">
                <h2>About Me:</h2>

                <img src="images/Profile1.jpg" class="profilePic" alt=""/>
                <img src="images/Profile2.jpg" class="profilePic" alt=""/>
                <img src="images/Profile3.jpg" class="profilePic" alt=""/>
            </div>
            <div id='experience'>

                <p>My name is Daniel Holland, and welcome to my portfolio page!</p>  

                <p>I was born, raised, and am based out of beautiful San Diego.</p> 

                <p>You can see examples of my work below.</p>  
                
                <p>You can get further information or contact me at the top and gitbottom of the page.</p> 

                <div class="even">
                    <div class="exp">
                        <h4>I have 14 years of experience in distribution, with skills in:</h4>
                        <ul class="listed">
                            <li> &#128181; Purchasing </li>
                            <li> &#128666; Logistics </li>
                            <li> &#128187; IT </li>
                            <li> &#127970; Warehouse Management </li>
                            <li> &#128178; Pricing Product in a Competitive Market </li>
                            <li> &#128209; Data Analysis in Excel and Access </li>
                            <li> &#128718; Customer Service </li>
                        </ul>
                    </div>

            
                    <div class="exp">
                        <ul class='listed'>
                            <h4>Prior Work Includes: </h4>
                            <li><p class="date">2007 - April 2008</p>
                                Windy City Beef <br/>
                                Cashier/Cook</li>

                            <li><p class="date">2008 - February 2009</p>
                                Kearny Electric Supply Company <br/>
                                Warehouse</li>

                            <li><p class="date">2009 - September 2009</p>
                                CED Greentech San Diego <br/>
                                Inside Sales</li>

                            <li><p class="date">2009 - September 2011</p>
                                CED San Diego <br/>
                                Counter Sales</li>

                            <li><p class="date">2011 - Present</p>
                                CED San Diego <br/>
                                Purchasing Agent / IT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )   
}


export default About;