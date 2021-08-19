import InfoDesktop from "./InfoDesktop";
import NewPage from "./NewPage";

function InfoDesktopContainer() {
  return (
    <section>
      <InfoDesktop
        name="DIĀNA GAVARE"
        role="Mākslinieciskā vadītāja"
        email="gavarediana@gmail.com"
      />
      <NewPage text="TOP JAUNA LAPA" />
      <InfoDesktop
        name="Līva Burmistre"
        role="Rotaļas prezidente"
        email="liva.burmistre@gmail.com"
      />
    </section>
  );
}

export default InfoDesktopContainer;
