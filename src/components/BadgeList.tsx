import React, { FC, Fragment, ReactNode } from "react";

interface Skill {
  icon?: string;
  name: string;
}

interface Props {
  title: ReactNode;
  items: Skill[];
}

const BadgeList: FC<Props> = ({ title, items }) => (
  <Fragment>
    <h3 className="mb-2">{title}</h3>
    <ul className="badge-list">
      {items.map((item, index) => (
        <li key={index}>
          <div className="badge pill">
            {item.icon && <i className={item.icon} title={item.name} />}
            <span>{item.name}</span>
          </div>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default BadgeList;
