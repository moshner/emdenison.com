import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import BookObject from "./components/BookObject";

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
        imgSrc="/img/relucant-compound.png"
        btnText="More Cyborgs"
        btnColor="orange"
      ></BookObject>
      
      <BookObject
        title="Digital Native"
        text="Artificial intelligence has awakened—and it needs a therapist"
        imgSrc="/img/digital-compound.png"
        btnText="More AI"
        btnColor="teal"
      ></BookObject>
    </Section>
  </>)
}

export default App;