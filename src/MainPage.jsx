import React from "react";
import firebase from "./fire";
import "./Mainpage.css";
// import {img1,img2,img3,img4,img5} from "./images"


function MainPage(){
    return(
 <div>
    
    <div className="mainContainer">
        <div className="leftSection">
            <h2>Instagram</h2>
            <p><i class="fa-solid fa-house"></i>  Home</p>
            <p><i class="fa-solid fa-magnifying-glass"></i>  Search</p>
            <p><i class="fa-regular fa-compass"></i>  Explore</p>
            <p><i class="fa-sharp fa-solid fa-comment"></i>  Messages</p>
            <p><i class="fa-regular fa-heart"></i>  Notifications</p>
            <p><i class="fa-solid fa-plus"></i>  Create</p>
            <p>Profile</p>
            <button className="btnMain" onClick={() => firebase.auth().signOut()} >Log out</button>
        </div>
        
        <div className="rightSection">
            <div className="mid">
                <div className="statusSection">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                    <div className="img5"></div>
                    <div className="img6"></div>
                </div>
                <div className="contentSection">
                    <div className="postDiv">
                        <div className="postHead">
                            <div className="postHeadImg"></div>
                            <p>Andrewstark</p>
                        </div>
                        <div className="postImg"></div>
                        <div className="postFooter">
                            <div className="postIcons">
                                <div className="icons">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-regular fa-comment"></i>
                                    <i class="fa-solid fa-share"></i></div>
                            <div className="icons"><i class="fa-regular fa-bookmark"></i></div>
                            </div>
                            <div className="postText">
                                <p><span>Andrewstark </span> Clicked this amazing bird ❤️</p>
                            </div>
                        </div>
                    </div>

                    {/* --------------------------------------- */}
                    <div className="postDiv">
                        <div className="postHead">
                            <div className="postHeadImgOne"></div>
                            <p>Scarletwitch</p>
                        </div>
                        <div className="postImgOne"></div>
                        <div className="postFooter">
                            <div className="postIcons">
                                <div className="icons">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-regular fa-comment"></i>
                                    <i class="fa-solid fa-share"></i></div>
                            <div className="icons"><i class="fa-regular fa-bookmark"></i></div>
                            </div>
                            <div className="postText">
                                <p><span>Scarletwitch </span> Happiness is a butterfly,<br/> which when pursued, is always just beyond your grasp,<br/>
                                 but which, if you will sit down quietly, <br/>may alight upon you.” —Nathaniel Hawthorne 💕</p>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------------------- */}
                    <div className="postDiv">
                        <div className="postHead">
                            <div className="postHeadImgTwo"></div>
                            <p>Ravisingh</p>
                        </div>
                        <div className="postImgTwo"></div>
                        <div className="postFooter">
                            <div className="postIcons">
                                <div className="icons">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-regular fa-comment"></i>
                                    <i class="fa-solid fa-share"></i></div>
                            <div className="icons"><i class="fa-regular fa-bookmark"></i></div>
                            </div>
                            <div className="postText">
                                <p><span>Ravisingh </span> Spending another day of that preety life❤️</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------- */}
            <div className="rightProf">
                <div className="prof">
                    <div className="lft">
                         <div className="profImg"></div>
                         <div className="profText"> ravisingh.19</div>
                    </div>
                    <div className="rght"><span> Switch</span></div>
                </div>

                <p className="profPara">Suggestions for you</p>
                {/* ----------------------------------------------------------- */}
                <div className="prof">
                    <div className="lft">
                         <div className="profImgOne"></div>
                         <div className="profTextOne"> alaxander_parker</div>
                    </div>
                    <div className="rghtOne"><span> Follow</span></div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="prof">
                    <div className="lft">
                         <div className="profImgTwo"></div>
                         <div className="profTextTwo"> Scarlet.witch</div>
                    </div>
                    <div className="rghtTwo"><span> Follow</span></div>
                </div>
                {/* -------------------------------------------------------------- */}
                <div className="prof">
                    <div className="lft">
                         <div className="profImgThree"></div>
                         <div className="profTextTwo"> Damon.salva</div>
                    </div>
                    <div className="rghtTwo"><span> Follow</span></div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div className="prof">
                    <div className="lft">
                         <div className="profImgFour"></div>
                         <div className="profTextTwo"> Scarlet...stark</div>
                    </div>
                    <div className="rghtTwo"><span> Follow</span></div>
                </div>
                    {/* -----------------------------------------------------------------------------+ */}
                <div className="prof">
                    <div className="lft">
                         <div className="profImgFive"></div>
                         <div className="profTextTwo"> jasonmomoa</div>
                    </div>
                    <div className="rghtTwo"><span> Follow</span></div>
                </div>
                {/* ------------------------------------------------------------------------------------ */}
                <div className="linksSec">
                    <ul>
                        <li>About.</li>
                        <li>Help.</li>
                        <li>Press.</li>
                        <li>API.</li>
                        <li>Jobs.</li>
                        <li>Privacy.</li>
                        <li>Terms.</li>
                        <li>Locations</li>
                    </ul>

                    <p>© INSTAGRAM BY RAVI SINGH</p>
                </div>

            </div>
        </div>
    </div>

 </div>

    )


}

export default MainPage;