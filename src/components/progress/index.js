import React from "react";
import "./index.scss";

const Progress = () => {
  return (
    <div className="progress">
      <div className="d-flex justify-content-between align-center">
        <div className="progress__title">Progress</div>
        <div className="progress__month">February</div>
      </div>
      <div className="progress__line"></div>
      <div className="progress__row">
        <div className="progress__col">
          <div className="progress__item week">Mon</div>
        </div>
        <div className="progress__col">
          <div className="progress__item week">Tue</div>
        </div>
        <div className="progress__col">
          <div className="progress__item week">Wen</div>
        </div>
        <div className="progress__col">
          <div className="progress__item week">Thu</div>
        </div>
        <div className="progress__col">
          <div className="progress__item week">Fri</div>
        </div>
        <div className="progress__col">
          <div className="progress__item week">Sat</div>
        </div>
        <div className="progress__col">
          <div className="progress__item week">Sun</div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__2"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__1"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__5"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__4"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__3"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__2"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__1"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__5"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__4"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__3"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__2"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__1"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__5"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__4"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__3"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__2"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__1"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__5"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__4"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__3"></div>
        </div>
        <div className="progress__col">
          <div className="progress__item mark__0"></div>
        </div>
      </div>
      <div className="progress__info">
        <div className="progress__info__title">Low</div>
        <div className="progress__info__card mark__1"></div>
        <div className="progress__info__card mark__2"></div>
        <div className="progress__info__card mark__3"></div>
        <div className="progress__info__card mark__4"></div>
        <div className="progress__info__card mark__5"></div>
        <div className="progress__info__title">High</div>
      </div>
    </div>
  );
};

export default Progress;
