import HeaderTitle from "../components/layout/header/HeaderTitle";
import HeaderSubTitle from "../components/layout/header/HeaderSubTitle";
import Header from "../components/layout/header/Header";
import PageSection from "../components/layout/page-section/PageSection";
import PageSectionHeader from "../components/layout/page-section/PageSectionHeader";
import SectionTitle from "../components/layout/page-section/PageSectionTitle";
import PageSectionHeaderBooks from "../components/layout/page-section/PageSectionHeaderBooks";
import SectionTitleBooks from "../components/layout/page-section/PageSectionTitleBooks";
import BookCard from "../components/book-card/BookCard";
import BookButton from "../components/book-card/BookButton";
import BookCardTitle from "../components/book-card/BookCardTitle";
import BookCardSubTitle from "../components/book-card/BookCardSubTitle";
import BookCardText from "../components/book-card/BookCardText";
import NewsletterCard from "../components/newsletter";
import ButtonOutline from "../components/ButtonOutline";
import {Helmet} from "react-helmet";
import Footer from "../components/layout/footer";

function HomePage() {
  return (
  <>

    <Helmet>
      <title>E.M. Denison - Author</title>
      <meta name="description" content="E.M. Denison, author of sci-fi, magic, humor, and heart." />
      <meta name="keywords" content="Sci-fi, magic, humor, cyberpunk, dystopia, books, novel, fiction, Post-Apocalyptic, science fiction, ebook, kindle, author, fantasy, transhumanism, satire" />
      <meta name="author" content="E.M. Denison" />

      {/* <!-- Facebook and Twitter integration --> */}
      <meta property="og:title" content="E.M. Denison, Author"/>
      <meta property="og:image" content="https://emdenison.com/img/social/facebook-image-emdenison.png"/>
      <meta property="og:url" content="https://emdenison.com"/>
      <meta property="og:site_name" content="E.M. Denison - Author"/>
      <meta property="og:description" content="Sci-fi, magic, humor, heart"/>
      <meta name="twitter:title" content="E.M. Denison, Author" />
      <meta name="twitter:image" content="https://emdenison.com/img/social/twitter-image-emdenison.png" />
      <meta name="twitter:image:alt" content="E.M. Denison. Sci-fi, magic, humor, heart. Image of a goofy killer robot." />
      <meta name="twitter:url" content="https://emdenison.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Sci-fi, magic, humor, heart" />
    </Helmet>

    <Header scrollLink="#books">
      <HeaderTitle>E.M. Denison</HeaderTitle>
      <HeaderSubTitle>Sci-fi, magic, humor, heart</HeaderSubTitle>
    </Header>

    <PageSection id="books">
      <PageSectionHeaderBooks bgImg="bg-hero-2">
        <SectionTitleBooks>Books</SectionTitleBooks>
      </PageSectionHeaderBooks>

      <div className="grid w-4/5 m-auto md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-2 justify-center content-center align-center ">
      <BookCard imgSrc="/img/reluctant-cyborg-compound-books.png">
        <BookCardTitle>The Reluctant Cyborg</BookCardTitle>
        <BookCardSubTitle>A Sci-fi Dystopian Comedy</BookCardSubTitle>
        <BookCardText>A city's fate rests on its shruggiest pair of shoulders</BookCardText>
        <BookButton text="More Cyborgs" href="/book/the-reluctant-cyborg" color="bg-orange-700" />
      </BookCard>
      
      <BookCard imgSrc="/img/digital-native-compound-books.png">
        <BookCardTitle>Digital Native</BookCardTitle>
        <BookCardText>Artificial intelligence has awakened—and it needs a therapist</BookCardText>
        <BookButton text="More AI" href="/book/digital-native" color="bg-teal" />
      </BookCard>
      </div>

    </PageSection>

    <div className="grid grid-cols-1 md:grid-cols-2">

        <NewsletterCard />

        <PageSection>
          <PageSectionHeader bgImg="bg-hero-EM">
            <SectionTitle>About E.M. Denison</SectionTitle>
          </PageSectionHeader>
            <div className="mx-auto w-4/5 my-4">
              <p className="pb-2">E.M Denison is a sci-fi and fantasy author who favors satire and stories featuring spunky robots. She grew up in Kansas and played a lot of trombone in high school and college. She studied geology in college and lived in a paleontology lab measuring Devonian lungfish burrows and the fungus holes in Cretaceous wood. She has worked as an engineering geologist, a science journalist, and a medical grant writer. In 2010, She married the love of her  life, and they have three hilarious little kids and three ultra-needy cats.</p>
              <ButtonOutline href="https://www.facebook.com/people/Stories-by-E-M-Denison/61553634125657/" text="Follow on Facebook" />
            </div>
        </PageSection>

    </div>

    <Footer />
  </>)
}

export default HomePage;