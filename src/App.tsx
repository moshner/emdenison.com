import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import BookObject from "./components/BookObject";
import Button from "./components/Button";

function App() {
  return (
  <>
    <Header>
      <Title>E.M. Denison</Title>
      <Subtitle>Sci-fi, magic, humor, heart</Subtitle>
    </Header>
    <Section>
      <SectionHeader bgImg="/img/hero-2.png">
        Books
      </SectionHeader>
      <BookObject
        title="The Reluctant Cyborg"
        subTitle="A Sci-fi Dystopian Comedy"
        text="A city's fate rests on its shruggiest pair of shoulders"
        imgSrc="/img/reluctant-cyborg-compound-books.png"
        btnText="More Cyborgs"
        btnColor="orange"
      ></BookObject>
      
      <BookObject
        title="Digital Native"
        text="Artificial intelligence has awakened—and it needs a therapist"
        imgSrc="/img/digital-native-compound-books.png"
        btnText="More AI"
        btnColor="teal"
      ></BookObject>
    </Section>
    <Section>
      <SectionHeader bgImg="/img/hero-3.png">
        Newsletter
      </SectionHeader>
      <h3>Semi-regular Emails from E.M.</h3>
      <p>Sign up for updates, news, new book releases, and more fun from E.M. Denison</p>
      <Button text="Join the Newsletter"/>
    </Section>
    <Section>
      <SectionHeader bgImg="/img/hero-EM.png">
        About E.M. Denison
      </SectionHeader>
      <p>E.M. Denison lives in Lawrence, Kansas with her husband, three daughters, three cats, and assorted tropical fish. She loves science, fiction, and science fiction and has worked as a geologist, science journalist, science educator, and research grant writer.</p>
      <p>E.M. is currently working on a three book sci-fi middle-grade series about super heros, ninjas, and robots!</p>
      <Button text="Follow on Goodreads"/>
    </Section>
  </>)
}

export default App;