import React, { FC, Fragment, ReactNode } from "react";

interface Props {
  title: ReactNode;
  items: ReactNode[];
}

const BlockList: FC<Props> = ({ title, items }) => (
  <Fragment>
    <h2 className="my-3">{title}</h2>
    <ul className="block-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Fragment>
);

export default BlockList;
