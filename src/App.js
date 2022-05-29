import "./style.scss";

import SaveSvg from "./img/save.svg";
import LikeSvg from "./img/like.svg";
import ShareSvg from "./img/share.svg";
import MenuSvg from "./img/menu.svg";
import VerifyPng from "./img/verified.png";
import {   useState } from "react";
 

function App() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const [verify, setVerify] = useState(false);
  const [avatar, setAvatar] = useState();
  const [photo, setPhoto] = useState();
 
  

  const formatNumber = (number) => {
    if (!number) {
      number = 0;
    }

    if (number < 1000) {
      return number;
    }

    if (number < 1000000) {
      number /= 1000;
      number = String(number).split(".");

      return (
        number[0] + (number[1] > 100 ? "," + number[1].slice(0, 1) + "B" : "B")
      );
    }
    number /= 1000000;
    number = String(number).split(".");

    return (
      number[0] + (number[1] > 100 ? "," + number[1].slice(0, 1) + "M" : "M")
    );
  };
  const profileHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };
  const photoHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setPhoto(this.result);
    });
    reader.readAsDataURL(file);
  };
 
  
 
  return (
    <div className="container">
      <div className="settings">
        <div className="settings-container">
          <div className="settings-item">
            <label htmlFor="">Profil</label>
            <input type="file" onChange={profileHandle} />
          </div>
          <div className="settings-item">
            <label htmlFor="">Kullanıcı Adı</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="settings-item">
            <label htmlFor="">Açıklama</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="settings-item">
            <label htmlFor="">Fotoğraf</label>
            <input type="file" onChange={photoHandle} />
          </div>
          <div className="settings-item">
            <label htmlFor="">Beğeni</label>
            <input type="number" onChange={(e) => setLikes(e.target.value)} />
          </div>
          <div className="settings-item">
            <label htmlFor="">Zaman</label>
            <input type="text" />
          </div>

          <div className="settings-item">
            <label>Doğrulanmış Hesap</label>
            <select
              defaultValue={verify}
              onChange={(e) => setVerify(e.target.value)}
            >
              <option value={0}>Hayır</option>
              <option value={1}>Evet</option>
            </select>
          </div>
         
        </div>
      </div>

      <div className="flow"  >
        <div className="flow-header">
          <div className="flow-header__user-avatar">
            <a href="#">{avatar && <img src={avatar} />}</a>
          </div>
          <div className="flow-header__user-info">
            <a href="#">
              <span>
                {username}
                {verify == true ? (
                  <img height="12" width="12" src={VerifyPng} />
                ) : (
                  <></>
                )}
              </span>
            </a>
          </div>
          <div className="flow-header__menu">
            <a href="">
              <img src={MenuSvg} alt="" />
            </a>
          </div>
        </div>
        <div className="flow-content">
          <img className="insta-photo" src={photo} />
        </div>
        <div className="flow-details">
          <div className="flow-details__btn">
            <span>
              <button>
                <img src={LikeSvg} alt="" />
              </button>
            </span>

              <span>
              <button>
                <img src={ShareSvg} alt="" />
              </button>
            </span>  

            <span className="save">
              <button>
                <img src={SaveSvg} alt="" />
              </button>
            </span>
          </div>
          <div className="flow-description">
            <div className="likes">
              <span>{formatNumber(likes)} beğenme</span>
            </div>
            <div className="contain">
              <span className="username">
                {username}{" "}
                {verify == true ? (
                  <img height="12" width="12" src={VerifyPng} />
                ) : (
                  <></>
                )}
              </span>
              <p>{description}</p>
            </div>
            <div className="time">
              <span>14 saat önce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
