import { DNA } from "react-loader-spinner";

const FullPageLoader = () => {
  return (
    <>
      <div className="fullPageLoaderContainer" />
      {/* <Loader
        type="Grid"
        color=" #28a745"
        height={80}
        width={80}
        className="fullPageLoader"
      /> */}
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClass="fullPageLoader"
      />
    </>
  );
};

export default FullPageLoader;
