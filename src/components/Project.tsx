import React, { FC, ReactNode } from "react";

interface Props {
  name: ReactNode;
  summary: ReactNode;
  url: string;
  duration: {
    start: ReactNode;
    end?: ReactNode;
  };
}

const Project: FC<Props> = ({ name, summary, url, duration }) => (
  <a href={url}>
    <div className="card float">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="m-1">{name}</h3>
              <h4 className="m-1 text-faded font-weight-normal font-italic">
                {summary}
              </h4>
            </div>
          </div>
        </div>
        <div className="col">
          {duration.end
            ? `${duration.start} - ${duration.end}`
            : duration.start}
        </div>
      </div>
    </div>
  </a>
);

export default Project;
