import HeaderTitle from "../../components/layout/header/HeaderTitle";
import HeaderSubTitle from "../../components/layout/header/HeaderSubTitle";
import Header from "../../components/layout/header/Header";
import NewsletterCard from "../../components/newsletter";

function TheReluctantCyborg() {
  return (
  <>
    <Header scrollLink="#foo">
      <HeaderTitle>The Reluctant Cyborg</HeaderTitle>
      <HeaderSubTitle>A Sci-fi Dystopian Comedy</HeaderSubTitle>
    </Header>


    <div id="foo" className="grid grid-cols-1 md:grid-cols-2">

        <NewsletterCard />

    </div>
  </>)
}

export default TheReluctantCyborg;