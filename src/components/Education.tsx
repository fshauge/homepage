import React, { FC, Fragment, ReactNode } from "react";

interface Props {
  school: ReactNode;
  studyProgram: ReactNode;
  duration: {
    start: ReactNode;
    end: ReactNode;
  };
}

const Education: FC<Props> = ({ school, studyProgram, duration }) => (
  <Fragment>
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="m-1">{school}</h3>
            <h4 className="m-1 text-faded font-weight-normal">
              {studyProgram}
            </h4>
          </div>
        </div>
      </div>
      <div className="col">
        {duration.start} - {duration.end}
      </div>
    </div>
  </Fragment>
);

export default Education;
