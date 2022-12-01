import React from "react";
import "./footer2.css";
import logo from "../../Images/footerLogo.png";
import img1 from "../../Images/footer-img1.jpg";
import img2 from "../../Images/s7-img2.jpg";
import img3 from "../../Images/s7-img3.jpg";
import svg1 from "../../Images/facebook.svg";
import svg2 from "../../Images/linkdin.svg";
import svg3 from "../../Images/gmail.svg";
import svg4 from "../../Images/insta.svg";
import svg5 from "../../Images/whatsapp.svg";

const footer2 = () => {
  return (
    <>
      <div className="footer2-mainContaier">
      {/* <hr className="line" /> */}
        <div className="footer2-grid">
          <div className="footer2-col1">
            <div className="footer2-col1ImgContainer">
              <img className="footer2-col1Img" src={logo} alt="" />
            </div>
            <p>
              SOPify is a one of a kind startup. SOPify is by the student for
              the students startup where we help young aspirants achieve their
              life goals by getting them admitted to the universities they
              desire.
            </p>
            <div className="footer2-buttonContainer">
              <button className="footer2-button">READ MORE</button>
            </div>
          </div>
          <div className="footer2-col2">
            <h3 className="col2Heading">Quick Links</h3>
            <div className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">Home</p>
            </div>
            <div className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">Services</p>
            </div>
            <div style={{ marginLeft: "22px" }} className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">SOP:Statement of Purpose</p>
            </div>
            <div style={{ marginLeft: "22px" }} className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">
                LOR: Letter of Recommendation
              </p>
            </div>
            <div style={{ marginLeft: "22px" }} className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">Assignment</p>
            </div>
            <div className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">Blogs</p>
            </div>
            <div className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">About Us</p>
            </div>
            <div className="col2-valueContainer">
            <span  class="material-symbols-outlined ">chevron_right</span>
              <p className="col2-valeContainerText">Contact Us</p>
            </div>
          </div>
          <div className="footer2-col3">
            <h3 className="col3-headText">Blogs</h3>
            <div className="col3-container">
              <img className="col3-image" src={img1} alt="" srcset="" />
              <p className="col3-text">How to write a perfect SOP?</p>
            </div>
            <div className="col3-container">
              <img className="col3-image" src={img3} alt="" srcset="" />
              <p className="col3-text">
                Why do students get rejected by Universities?
              </p>
            </div>
            <div className="col3-container">
              <img className="col3-image" src={img2} alt="" srcset="" />
              <p className="col3-text">
                How and why do students fail to get visas?
              </p>
            </div>
          </div>
          <div className="footer2-col4">
            <h3 className="col4-headText">Contact Info</h3>
            <div className="col4-valueContainer">
              <span class="material-symbols-outlined">pin_drop</span>
              <p className="col4-valeContainerText">
                J-1301 Jolly Residency, near Vijaya Laxmi hall, vesu Road -
                Surat (395007)
              </p>
            </div>
            <div className="col4-valueContainer">
              <span class="material-symbols-outlined">phone_in_talk</span>
              <p className="col4-valeContainerText">+91 70165 22535</p>
            </div>
            <div className="col4-valueContainer">
              <span class="material-symbols-outlined">mail</span>
              <p className="col4-valeContainerText">info@studentvisasop.com</p>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="footer2-col5">
          <div className="col5-mainContainer">
            <p className="col5-text">© Copyright 2022 SOPify.</p>
            <div className="col5-logoContainer">
              <img className="svg" src={svg1} alt="" srcset="" />
              <img className="svg" src={svg2} alt="" srcset="" />
              <img className="svg" src={svg3} alt="" srcset="" />
              <img className="svg" src={svg4} alt="" srcset="" />
              <img className="svg" src={svg5} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer2;
