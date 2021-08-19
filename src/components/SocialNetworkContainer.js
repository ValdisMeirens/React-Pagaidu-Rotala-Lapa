import SocialNetwork from "./SocialNetwork";
import InstagramLogo from "../img/Plakatu_josla_YOUTUBE.png";
import FacebookLogo from "../img/Plakatu_josla_FB.png";
import YoutubeLogo from "../img/Plakatu_josla_INSTA.png";

function SocialNetworkContainer() {
  return (
    <section>
      <SocialNetwork
        url="https://www.instagram.com/tdarotala"
        target="_blank"
        rel="noreferrer"
        image={InstagramLogo}
        alt="Instagram"
      />
      <SocialNetwork
        url="https://www.facebook.com/TdaRotala/"
        target="_blank"
        rel="noreferrer"
        image={FacebookLogo}
        alt="Facebook"
      />
      <SocialNetwork
        url="https://www.youtube.com/user/tdaRotala"
        target="_blank"
        rel="noreferrer"
        image={YoutubeLogo}
        alt="Youtube"
      />
    </section>
  );
}

export default SocialNetworkContainer;
