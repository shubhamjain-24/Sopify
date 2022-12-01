import React from "react";
import "./B_section2.css";
import img1 from "../../../Images/s7-img1.jpg";
import img2 from "../../../Images/s7-img2.jpg";
import img3 from "../../../Images/s7-img3.jpg";
import img4 from "../../../Images/blog-img2.jpg";

const B_Section2 = () => {
  return (
    <>
      <div className="B_section2_mainContainer">
        <div className="B_section2_gridContainer">
            {/* CARD 1 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img1} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                S@pifY_2022
              </div>
              <p className="B_section2_headText">
                Best countries for studying abroad on a budget?
              </p>
              <p>
                A good amount of Indian students aspire to or have desired at
                some point in their life to study abroad....
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img2} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                S@pifY_2022
              </div>
              <p className="B_section2_headText">
              How and why do students fail to get visas?
              </p>
              <p>
              Planning to go to the UK to study? Or maybe the USA? Or Australia or New Zealand or maybe Canada?...
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img3} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                S@pifY_2022
              </div>
              <p className="B_section2_headText">
              Why do students get rejected by Universities?
              </p>
              <p>
              The dream of studying abroad is brought to an abrupt halt when despite all the effort, hard work and achievements,...
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="B_section2_gridDiv">
            <img className="B_section2_gridDivImg" src={img4} alt="" />
            <div className="B_section2_gridDivContent">
              <div className="B_section2_gridDivDate">
                <span
                  style={{ color: "black" }}
                  class="material-symbols-outlined"
                >
                  calendar_month{" "}
                </span>
                03/09/2019
                <span style={{ color: "black" ,marginLeft:"10px"}} class="material-symbols-outlined">person</span>
                S@pifY_2022
              </div>
              <p className="B_section2_headText">
              How to write a perfect SOP?
              </p>
              <p>
              A Statement of Purpose is a document that states your intentions of joining an institution. SOPs are also written to...
              </p>
              <div className="B_section2_gridDivRead">
                Read More
                <span  class="material-symbols-outlined B_section2_cardArrow">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default B_Section2;
