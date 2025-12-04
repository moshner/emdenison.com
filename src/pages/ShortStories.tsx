import HeaderTitle from "../components/layout/header/HeaderTitle";
import HeaderSubTitle from "../components/layout/header/HeaderSubTitle";
import Header from "../components/layout/header/Header";
import PageSection from "../components/layout/page-section/PageSection";
import ShortStoryCard from "../components/short-story-card/ShortStoryCard";
import {Helmet} from "react-helmet";
import Footer from "../components/layout/footer";
import authorStructuredData from "../components/schema/authorStructuredData";

function ShortStories() {
  return (
  <>

    <Helmet>
      <title>Short Stories by E.M. Denison</title>
      <meta name="description" content="Short Stories by E.M. Denison include Total Eclipse of the Stomach with many more on the way." />
      <meta name="keywords" content="short story, ebook, sci-fi, humor, satire, kindle, kindleunlimited" />
      <meta name="author" content="E.M. Denison" />

      {/* <!-- Facebook and Twitter integration --> */}
      <meta property="og:title" content="E.M. Denison, Author"/>
      <meta property="og:image" content="https://emdenison.com/img/social/facebook-image-emdenison.png"/>
      <meta property="og:url" content="https://emdenison.com"/>
      <meta property="og:site_name" content="E.M. Denison - Author"/>
      <meta property="og:description" content="E.M. Denison writes speculative fiction with a bent toward satire and spunky robots."/>
      <meta name="twitter:title" content="E.M. Denison, Author" />
      <meta name="twitter:image" content="https://emdenison.com/img/social/twitter-image-emdenison.png" />
      <meta name="twitter:image:alt" content="E.M. Denison. Sci-fi, magic, humor, heart. Image of a goofy killer robot." />
      <meta name="twitter:url" content="https://emdenison.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Sci-fi, magic, humor, heart" />

    </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(authorStructuredData),
        }}
      />

    <Header scrollLink="#shortStories" active="Short-Stories">
      <HeaderTitle>Short Stories</HeaderTitle>
      <HeaderSubTitle>by E.M. Denison</HeaderSubTitle>
    </Header>

    <PageSection id="shortStories">
      <div className="grid w-4/5 m-auto md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-2 justify-center content-center align-center ">
        <ShortStoryCard schemaName="totalEclipseOfTheStomach" />
      
      </div>

    </PageSection>

    <Footer />
  </>)
}

export default ShortStories;