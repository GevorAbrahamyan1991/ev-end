import { FormattedMessage } from "react-intl";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner description={<FormattedMessage id="about_text" />} />
    </>
  );
}
