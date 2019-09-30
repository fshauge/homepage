import React, { FC, ReactNode } from "react";

interface Props {
  school: ReactNode;
  studyProgram: ReactNode;
  duration: {
    start: ReactNode;
    end: ReactNode;
  };
}

const Education: FC<Props> = ({ school, studyProgram, duration }) => (
  <div className="card">
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="m-1">{school}</h3>
            <h4 className="m-1 font-weight-normal">{studyProgram}</h4>
          </div>
        </div>
      </div>
      <div className="col">
        {duration.start} - {duration.end}
      </div>
    </div>
  </div>
);

export default Education;
