import React, { FC, Fragment, ReactNode } from "react";

interface Props {
  image?: string;
  company: ReactNode;
  position: ReactNode;
  duration: {
    start: ReactNode;
    end: ReactNode;
  };
}

const WorkExperience: FC<Props> = ({ image, company, position, duration }) => (
  <Fragment>
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <div className="row align-items-center">
          {image && (
            <div className="col">
              <img className="avatar sm" src={image} />
            </div>
          )}
          <div className="col">
            <h3 className="m-1">{company}</h3>
            <h4 className="m-1 text-faded font-weight-normal">{position}</h4>
          </div>
        </div>
      </div>
      <div className="col">
        {duration.start} - {duration.end}
      </div>
    </div>
  </Fragment>
);

export default WorkExperience;
