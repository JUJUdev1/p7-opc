import bannerAbout from "../media/bannerAbout.png";
import bannerHome from "../media/bannerHome.png";
import bannerAboutMobile from "../media/bannerAboutMobile.png";

const Banner = () => {
  return (
    <>
      {window.location.pathname === "/" ? (
        <div className="banner">
          <img src={bannerHome} alt="banner" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      ) : (
        <div className="banner">
          <img
            src={window.innerWidth > 468 ? bannerAbout : bannerAboutMobile}
            alt="banner"
          />
        </div>
      )}
    </>
  );
};

export default Banner;
