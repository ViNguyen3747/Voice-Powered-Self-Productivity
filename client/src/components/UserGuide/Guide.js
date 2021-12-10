import React from "react";
import  "../common/Styles/commonStyles.css"
import Sinupimage from "../images/useGuide/signup.png"
import deleteImage from "../images/useGuide/delete.png"
import taskImage from "../images/useGuide/task.png"
import voiceImage from "../images/useGuide/voice.png"
import reportImage from "../images/useGuide/report.png"
import goglelogin from "../images/useGuide/googleLogin.png"


const userGuide = [
  {
    value:
    "To use the App you must register for an acount by filling up the join us page wich can be accessed by clicking the join us link bellow or by Sing in if you already have an account",
    image: Sinupimage,
    color: "#6D9773",
  },

  {
    value:
    "The App also supports google login, you can use your google account to access the app ",
    image: goglelogin,
    color: "#6D9773",
  },

  {
    value:
      "To create tasks, fill in name of the task, task category, the priority level of the task, the task date, the task starting and finishing time",
    color: "#6D9773",
    image: taskImage,
  },
  {
    value:
      "To update, edit or delete tasks use the the pencil symbol for edit and a trash symbol for delete",
      image: deleteImage ,
    color: "#FFBA00",
  },

  {
    value:
      "The app is Voice powered, you can enter and edit tasks using voice by holding the microphone",
      image: voiceImage ,
    color: "#FFBA00",
  },
  {
    value:
      "You can track your progress in tasks activities by viewing a weekly report under report",
      image: reportImage ,
    color: "#FFBA00",
  },
  
];
export const Guide = () => {
  return (
    <div className="guide-container" style={{ backgroundColor: "#304B30" }}>
      <div className="title" style={{ color: "white" }}>
        User Guides
      </div>
      <div className="info-wrapper">
        {userGuide.map((g) => (
          <div
            className="guideCard"
            style={{
              backgroundColor: `${g.color}`,
              textAlign: "left",
            }}
          >
            <div>
             {g.value}
            </div>
            <div className='userGuideimage'>
            <img width="500px" src={g.image} alt=''/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
