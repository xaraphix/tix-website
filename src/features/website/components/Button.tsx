import React, { FC } from "react";

interface WebBtnProps {
  icon?: JSX.Element;
  label: string;
  styles?: string;
}

const WebBtn: React.FC<WebBtnProps> = ({ icon, label, styles }) => {
  return (
    <button
      className={`flex grow-0 items-center gap-5 rounded-lg bg-primary-800 px-5 py-2.5 text-center text-2xl font-black text-onprimary-500 duration-300 ease-in-out hover:bg-primary-400 hover:bg-opacity-100 hover:text-primary-50 focus:outline-none focus:ring-0  ${styles}`}
    >
      {
        <>
          {icon}
          {label}
        </>
      }
    </button>
  );
};

export default WebBtn;
