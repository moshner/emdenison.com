import HeaderTitle from "../components/layout/header/HeaderTitle";
import HeaderSubTitle from "../components/layout/header/HeaderSubTitle";
import Header from "../components/layout/header/Header";
import PageSection from "../components/layout/page-section/PageSection";
import BookCard from "../components/book-card/BookCard";
import BookButton from "../components/book-card/BookButton";
import BookCardTitle from "../components/book-card/BookCardTitle";
import BookCardSubTitle from "../components/book-card/BookCardSubTitle";
import BookCardText from "../components/book-card/BookCardText";
import {Helmet} from "react-helmet";
import Footer from "../components/layout/footer";
import authorStructuredData from "../components/schema/authorStructuredData";
import theReluctantCyborg from "../components/schema/theReluctantCyborg";
import digitalNative from "../components/schema/digitalNative";
import voyager20 from "../components/schema/voyager2.0";

function Books() {
  return (
  <>

    <Helmet>
      <title>Books by E.M. Denison</title>
      <meta name="description" content="Books by E.M. Denison include The Reluctant Cyborg and Digital Native with many more on the way." />
      <meta name="keywords" content="books, ebook, book, sci-fi books, kindle, paperback, The Reluctant Cyborg, Digital Native" />
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

    <Header scrollLink="#books" active="Books">
      <HeaderTitle>Books</HeaderTitle>
      <HeaderSubTitle>by E.M. Denison</HeaderSubTitle>
    </Header>

    <PageSection id="books">
      <div className="grid w-4/5 m-auto md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-2 justify-center content-center align-center ">
        <BookCard imgSrc="/img/voyager-2.0-compound-books.png">
        <BookCardTitle>{voyager20.paperbackStructuredData.name}</BookCardTitle>
        <BookCardText>TODO</BookCardText>
        <BookButton text="Let's Voyage" href="/book/the-reluctant-cyborg" color="bg-black" />
      </BookCard>

      <BookCard imgSrc="/img/reluctant-cyborg-compound-books.png">
        <BookCardTitle>{theReluctantCyborg.paperbackStructuredData.name}</BookCardTitle>
        <BookCardSubTitle>{theReluctantCyborg.paperbackStructuredData.alternativeHeadline}</BookCardSubTitle>
        <BookCardText>A city's fate rests on its shruggiest pair of shoulders</BookCardText>
        <BookButton text="More Cyborgs" href="/book/the-reluctant-cyborg" color="bg-orange-700" />
      </BookCard>
      
      <BookCard imgSrc="/img/digital-native-compound-books.png">
        <BookCardTitle>{digitalNative.paperbackStructuredData.name}</BookCardTitle>
        <BookCardText>Artificial intelligence has awakened—and it needs a therapist</BookCardText>
        <BookButton text="More AI" href="/book/digital-native" color="bg-teal" />
      </BookCard>
      </div>

    </PageSection>

    <Footer />
  </>)
}

export default Books;