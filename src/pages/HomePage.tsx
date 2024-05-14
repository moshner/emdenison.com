import HeaderTitle from "../components/layout/header/HeaderTitle";
import HeaderSubTitle from "../components/layout/header/HeaderSubTitle";
import Header from "../components/layout/header/Header";
import PageSection from "../components/layout/page-section/PageSection";
import PageSectionHeader from "../components/layout/page-section/PageSectionHeader";
import BookCard from "../components/book-card/BookCard";
import BookButton from "../components/book-card/BookButton";
import SectionTitle from "../components/layout/page-section/PageSectionTitle";
import BookCardTitle from "../components/book-card/BookCardTitle";
import BookCardSubTitle from "../components/book-card/BookCardSubTitle";
import BookCardText from "../components/book-card/BookCardText";

function HomePage() {
  return (
  <>
    <Header>
      <HeaderTitle>E.M. Denison</HeaderTitle>
      <HeaderSubTitle>Sci-fi, magic, humor, heart</HeaderSubTitle>
    </Header>

    <PageSection>
      <PageSectionHeader bgImg="bg-hero-2">
        <SectionTitle>Books</SectionTitle>
      </PageSectionHeader>

      <BookCard imgSrc="/img/reluctant-cyborg-compound-books.png">
        <BookCardTitle>The Reluctant Cyborg</BookCardTitle>
        <BookCardSubTitle>A Sci-fi Dystopian Comedy</BookCardSubTitle>
        <BookCardText>A city's fate rests on its shruggiest pair of shoulders</BookCardText>
        <BookButton text="More Cyborg" color="bg-orange" />
      </BookCard>
      
      <BookCard imgSrc="/img/digital-native-compound-books.png">
        <BookCardTitle>Digital Native</BookCardTitle>
        <BookCardText>Artificial intelligence has awakened—and it needs a therapist</BookCardText>
        <BookButton text="More AI" color="bg-teal" />
      </BookCard>

    </PageSection>

    <PageSection>
      <PageSectionHeader bgImg="bg-hero-3">
        <SectionTitle>Newsletter</SectionTitle>
      </PageSectionHeader>
      <h3>Semi-regular Emails from E.M.</h3>
      <p>Sign up for updates, news, new book releases, and more fun from E.M. Denison</p>
      <BookButton text="Join the Newsletter" />
    </PageSection>

    <PageSection>
      <PageSectionHeader bgImg="bg-hero-EM">
        <SectionTitle>About E.M. Denison</SectionTitle>
      </PageSectionHeader>
      <p>E.M. Denison lives in Lawrence, Kansas with her husband, three daughters, three cats, and assorted tropical fish. She loves science, fiction, and science fiction and has worked as a geologist, science journalist, science educator, and research grant writer.</p>
      <p>E.M. is currently working on a three book sci-fi middle-grade series about super heros, ninjas, and robots!</p>
      <BookButton text="Follow on Goodreads" />
    </PageSection>
  </>)
}

export default HomePage;