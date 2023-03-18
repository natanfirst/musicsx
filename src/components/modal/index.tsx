import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";

interface Props {
  children: React.ReactNode;
}

const FadeCenterModal = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.modals);

  return (
    <>
      <div
        className={`fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 flex justify-center ${
          open ? "opacity-1 visible" : " opacity-0 invisible"
        }`}
        onClick={() => {
          dispatch({ type: "CLOSE_MODAL" });
        }}
      ></div>
      <div className={`w-full max-w-[800px] h-[100vh] overflow-y-auto lg:h-fit bg-[#030621] fixed top-0 bottom-0 left-0 right-0 m-auto ${
          open ? "opacity-1 visible" : " opacity-0 invisible"
        }`}>
        <div className="h-full">{children}</div>
      </div>
    </>
  );
};

export default FadeCenterModal;
