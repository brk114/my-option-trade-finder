import React, { useState } from "react";

const GlobalContext = React.createContext<any>({});

function GlobalProvider({ children }: any) {
  const [themeDark, setThemeDark] = useState(false);
  const [showSlidingPane, setShowSlidingPane] = useState(false);
  // const [signInModalVisible, setSignInModalVisible] = useState(false);
  // const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  // const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const [header, setHeader] = useState<any>({
    theme: "light",
    bgClass: "default",
    variant: "primary",
    align: "left",
    isFluid: false,
    button: "cta",
    buttonText: "Get started free",
    reveal: true,
  });
  const [footer, setFooter] = useState({
    theme: "dark",
    style: "style1",
    button: "profile",
  });

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleSlidingPane = () => {
    setShowSlidingPane(!showSlidingPane);
  };

  // const toggleSignInModal = () => {
  //     setSignInModalVisible(!signInModalVisible);
  // };

  // const toggleSignUpModal = () => {
  //     setSignUpModalVisible(!signUpModalVisible);
  // };

  // const toggleOffCanvas = () => {
  //     setVisibleOffCanvas(!visibleOffCanvas);
  // };

  // const closeOffCanvas = () => {
  //     setVisibleOffCanvas(false);
  // };

  return (
    <GlobalContext.Provider
      value={{
        themeDark,
        toggleTheme,
        showSlidingPane,
        toggleSlidingPane,
        // signInModalVisible,
        // toggleSignInModal,
        // signUpModalVisible,
        // toggleSignUpModal,
        // visibleOffCanvas,
        // toggleOffCanvas,
        // closeOffCanvas,
        header,
        setHeader,
        footer,
        setFooter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { GlobalProvider };
