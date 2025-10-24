import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt="Google"
          />
          <button >
            Save <Bookmark size='12px'/>
          </button>
        </div>

        <div className="center">
          <h2 className="user">
            Airbnb <span>5 day ago</span>
          </h2>
          <h1 className="post">Junior UI/UX Designer</h1>
          <div className="tag">
            <h3>Contact</h3>
            <h3>Remote</h3>
          </div>
        </div>

        <div className="line"></div>
        
        <div className="bottom">
          <div>
            <h4 className="payment">$100/hr</h4>
            <h6 className="location">Dhaka, Bangladesh</h6>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
