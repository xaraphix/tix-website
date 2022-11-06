import React from "react";
import { FC } from "react";
interface IContentProps {}

export const Content: FC<IContentProps> = (props) => {
  return <div className="w-5/6 h-full bg-spaceblu-400">Content</div>;
};
