import HeaderTitle from "../../components/layout/header/digital-native/HeaderTitle";
import HeaderSubTitle from "../../components/layout/header/digital-native/HeaderSubTitle";
import Header from "../../components/layout/header/digital-native/Header";
import NewsletterCard from "../../components/newsletter";

function DigitalNative() {
  return (
  <>
    <Header scrollLink="#foo">
      <HeaderTitle>Digital Native</HeaderTitle>
      <HeaderSubTitle>Artificial Intelligence has awakened—and it needs a therapist</HeaderSubTitle>
    </Header>


    <div id="foo" className="grid grid-cols-1 md:grid-cols-2">

        <NewsletterCard />

    </div>
  </>)
}

export default DigitalNative;