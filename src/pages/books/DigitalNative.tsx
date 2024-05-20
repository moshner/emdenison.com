import HeaderTitle from "../../components/layout/header/HeaderTitle";
import HeaderSubTitle from "../../components/layout/header/HeaderSubTitle";
import Header from "../../components/layout/header/Header";
import NewsletterCard from "../../components/newsletter";

function DigitalNative() {
  return (
  <>
    <Header scrollLink="#foo">
      <HeaderTitle>Digital Native</HeaderTitle>
      <HeaderSubTitle>AI needs a therapist</HeaderSubTitle>
    </Header>


    <div id="foo" className="grid grid-cols-1 md:grid-cols-2">

        <NewsletterCard />

    </div>
  </>)
}

export default DigitalNative;