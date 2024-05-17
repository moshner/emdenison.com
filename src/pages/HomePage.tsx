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

function HomePage() {
  return (
  <>
    <Header>
      <HeaderTitle>E.M. Denison</HeaderTitle>
      <HeaderSubTitle>Sci-fi, magic, humor, heart</HeaderSubTitle>
    </Header>

    <PageSection>
      <PageSectionHeaderBooks bgImg="bg-hero-2">
        <SectionTitleBooks>Books</SectionTitleBooks>
      </PageSectionHeaderBooks>

      <div className="grid md:max-w-screen-md lg:max-w-screen-lg m-auto lg:grid-cols-2 justify-center">
      <BookCard imgSrc="/img/reluctant-cyborg-compound-books.png">
        <BookCardTitle>The Reluctant Cyborg</BookCardTitle>
        <BookCardSubTitle>A Sci-fi Dystopian Comedy</BookCardSubTitle>
        <BookCardText>A city's fate rests on its shruggiest pair of shoulders</BookCardText>
        <BookButton text="More Cyborgs" color="bg-orange" />
      </BookCard>
      
      <BookCard imgSrc="/img/digital-native-compound-books.png">
        <BookCardTitle>Digital Native</BookCardTitle>
        <BookCardText>Artificial intelligence has awakened—and it needs a therapist</BookCardText>
        <BookButton text="More AI" color="bg-teal" />
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
              <p className="pb-2">E.M. Denison lives in Lawrence, Kansas with her husband, three daughters, three cats, and assorted tropical fish. She loves science, fiction, and science fiction and has worked as a geologist, science journalist, science educator, and research grant writer.</p>
              <p>E.M. is currently working on a three book sci-fi middle-grade series about super heros, ninjas, and robots!</p>
              <ButtonOutline text="Follow on Goodreads" />
            </div>
        </PageSection>

    </div>
  </>)
}

export default HomePage;