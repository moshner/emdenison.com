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
    <Header scrollLink="#books">
      <HeaderTitle>E.M. Denison</HeaderTitle>
      <HeaderSubTitle>Sci-fi, magic, humor, heart</HeaderSubTitle>
    </Header>

    <PageSection id="books">
      <PageSectionHeaderBooks bgImg="bg-hero-2">
        <SectionTitleBooks>Books</SectionTitleBooks>
      </PageSectionHeaderBooks>

      <div className="grid md:max-w-screen-md lg:max-w-screen-lg m-auto lg:grid-cols-2 justify-center">
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
              <p className="pb-2">I grew up in Kansas and played a lot of trombone in high school and college. I studied geology in college and lived in a paleontology lab measuring the fungus holes in petrified Cretaceous wood and Devonian lungfish burrows. I have worked as an engineering geologist, a science journalist, and a medical grant writer. In 2010, I married the love of my life and we have three hilarious little kids.</p>
              <ButtonOutline href="https://www.goodreads.com/author/show/22379452.E_M_Denison" text="Follow on Goodreads" />
            </div>
        </PageSection>

    </div>
  </>)
}

export default HomePage;