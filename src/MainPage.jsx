import React from "react";
import { useEffect,useState } from "react";
import firebase from "./fire";
import "./Mainpage.css";
// import {img1,img2,img3,img4,img5} from "./images"


function MainPage(){
    const[instaData,setinstaData] = useState([]);
    const[theme,setTheme]= useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(()=>{
        // const API_KEY = '563492ad6f91700001000001d3aa3cccb66a4471b99591ad14f53b14';
        const searchitem = ['people','nature','forest','city','india'];
        const index = Math.floor(Math.random() * searchitem.length);
        const searchitemMain = searchitem[index];

       fetch(`https://api.pexels.com/v1/search?query=${searchitemMain}&per_page=6`,{
        headers: {
          Authorization: "563492ad6f91700001000001d3aa3cccb66a4471b99591ad14f53b14"
        }
      })
       .then((response)=> response.json())
       .then((data)=> setinstaData(data.photos))
       .catch((err)=> console.log(err));

    },[]);
    // console.log(instaData);
    const changeTheme=()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
   
    const className = `theme-${theme}`;




    return(
 <div className={className}>
    
    <div className="mainContainer">
        <div className="leftSection">
            <h2>Instagram</h2>
            <p><i className="fa-solid fa-house"></i>  Home</p>
            <p><i className="fa-solid fa-magnifying-glass"></i>  Search</p>
            <p><i className="fa-regular fa-compass"></i>  Explore</p>
            <p><i className="fa-sharp fa-solid fa-comment"></i>  Messages</p>
            <p><i className="fa-regular fa-heart"></i>  Notifications</p>
            <p><i className="fa-solid fa-plus"></i>  Create</p>
            <p>Profile</p>
            <button className="themeChanger" onClick={changeTheme}>{theme == 'light'?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}</button>
            <button className="btnMain" onClick={() => firebase.auth().signOut()} >Log out</button>
        </div>
       
        
        <div className="rightSection">
            <div className="mid">
                <div className="statusSection">
                 
                    {instaData == undefined ? console.log("there is error"):(
                        instaData.map((datas)=>{
                            return(
                                <div>{<img src={datas.src.tiny} alt="profimg" />}</div>
                            )
                        })
                    )}
                    
                </div>
                {/* //////////////////////////////////////////////// */}
                {instaData == undefined ? console.log("there is error") : (
                    
                    instaData.map((datas)=>{
                        return (
                          
                        <div className="postDiv">
                        <div className="postHead">
                            <div className="postHeadmg">
                               
                                <img src={datas.src.tiny} alt="profimg" />
                            </div>
                            <p>{datas.photographer}</p>
                        </div>
                        <div className="postIg">
                            <img src={datas.src.portrait} alt="image" />
                        </div>
                        <div className="postFooter">
                            <div className="postIcons">
                                <div className="icons">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-solid fa-share"></i></div>
                            <div className="icons"><i className="fa-regular fa-bookmark"></i></div>
                            </div>
                            <div className="postText">
                                <p><span>{datas.photographer} </span>{datas.alt}</p>
                            </div>
                        </div>
                    </div>
              
                        )
                    })
                )
                    
                }
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
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-solid fa-share"></i></div>
                            <div className="icons"><i className="fa-regular fa-bookmark"></i></div>
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
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-solid fa-share"></i></div>
                            <div className="icons"><i className="fa-regular fa-bookmark"></i></div>
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
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-solid fa-share"></i></div>
                            <div className="icons"><i className="fa-regular fa-bookmark"></i></div>
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

                {instaData == undefined ? console.log("it is error") : (
                        instaData.map((datas)=>{
                            return(
                                <div className="prof">
                                <div className="lft">
                                     <div className="profImgAll">
                                     <img src={datas.src.tiny} alt="profimg" />
                                     </div>
                                     <div className="profTextOne">
                                     <p>{datas.photographer}</p>
                                     </div>
                                </div>
                                <div className="rghtOne"><span> Follow</span></div>
                            </div>
                            )
                        })

                )}


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