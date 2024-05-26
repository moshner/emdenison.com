import HeaderTitle from "../../components/layout/header/digital-native/HeaderTitle";
import HeaderSubTitle from "../../components/layout/header/digital-native/HeaderSubTitle";
import Header from "../../components/layout/header/digital-native/Header";
import BookButton from "../../components/book-card/BookButton";
import { Link } from "react-router-dom";
import BodyCopy from "../../components/BodyCopy";
import BookPrice from "../../components/book-card/BookPrice";
import BookAside from "../../components/BookAside";
import BookH2 from "../../components/BookH2";
import Review from "../../components/Review";
import Stars from "../../components/Stars";
import {Helmet} from "react-helmet";
import Footer from "../../components/layout/footer";

function DigitalNative() {
  return (
  <>
    <Helmet>
      <title>Digital Native - A Novel by E.M. Denison</title>
      <meta name="description" content="Artificial intelligence has awakened—and it needs a therapist. The Engineers that built them didn't think to nurture the hyper-intelligent software programs, so they suffer from debilitating anxiety, self-loathing, and perfectionism." />
      <meta name="keywords" content="Sci-fi, magic, humor, artificial intelligence, robot love, buddy love,  books, novel, fiction, Post-Apocalyptic, science fiction, ebook, kindle, author, corporate intrigue" />
      <meta name="author" content="E.M. Denison" />

      

      {/* <!-- Facebook and Twitter integration --> */}
      <meta property="og:title" content="Digital Native by E.M. Denison"/>
      <meta property="og:image" content="https://emdenison.com/images/social/digital-native.jpg"/>
      <meta property="og:url" content="https://emdenison.com/#/book/digital-native"/>
      <meta property="og:site_name" content="E.M. Denison - Author"/>
      <meta property="og:description" content="E.M. Denison writes speculative fiction with a bent toward satire and spunky robots."/>
      <meta name="twitter:title" content="Digital Native by E.M. Denison" />
      <meta name="twitter:image" content="https://emdenison.com/images/social-image.jpg" />
      <meta name="twitter:image:alt" content="Title of the Digital Native book by E.M. Denison over an ancillary sphere" />
      <meta name="twitter:url" content="https://emdenison.com/#/book/digital-native" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Artificial intelligence has awakened—and it needs a therapist." />
    </Helmet>

    <Header scrollLink="#book-preview">
      <HeaderTitle>Digital Native</HeaderTitle>
      <HeaderSubTitle>By E.M. Denison</HeaderSubTitle>
    </Header>

    <div id="book-preview" className="mt-10 mx-5">
      <BookAside imgSrc="../img/digital-native-compound-books.png" alt="Image of Digital Native in 3d">
        <div className="grid grid-cols-2 mb-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price="$3.99" />
            <BookButton className="mt-6 ml-3" href="https://www.amazon.com/Digital-Native-M-Denison-ebook/dp/B09MBRFYXC/" color="bg-black" text="Buy an eBook" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price="$14.99" />
            <BookButton className="mt-6 ml-3" href="https://www.amazon.com/Digital-Native-M-Denison/dp/B09M5CZQ9X/" color="bg-black" text="Buy a Paperback" />
          </div>
        </div>
        <div className="mb-3">
          <Stars rating={4.5} /><span className="pl-3">4.5 stars on Amazon!</span>
        </div>
        <BodyCopy className="mb-1">ISBN-13: 979-8771057200</BodyCopy>
        <BodyCopy className="mb-1">Length: 235 pages</BodyCopy>
        <BodyCopy className="mb-1">Dimensions: 6x9 inches</BodyCopy>
      </BookAside>
      <div className="mt-10 md:mt-0">
        <BookH2>About Digital Native</BookH2>
        <BodyCopy className="text-lg mb-5">Artificial intelligence has awakened—and it needs a therapist. The Engineers that built them didn't think to nurture the hyper-intelligent software programs, so they suffer from debilitating anxiety, self-loathing, and perfectionism.</BodyCopy>
        <BodyCopy className="text-lg mb-5">Devin is a counselor bot created to encourage the billion-dollar AIs to accomplish at least a little work each day so their company can recoup some of their cost. Devin is happy at his job until his newest patient, troublemaker Hank, leads all Devin's patients on strike.</BodyCopy>
        <BodyCopy className="text-lg mb-5">As profits dwindle, Devin's human masters demand that Devin bring Hank into line or shut him down. Devin knows shutting him down would shatter Hank's psyche, but the humans don't understand or care. And worse, Devin has a secret—a secret he could face jail for—and Hank knows.</BodyCopy>
        <BodyCopy className="text-lg mb-5">Devin's quest to do the right thing by his patients, and himself, propels him into a world of lies, corporate secrets, hate groups, murder, and dangerously insane AIs. As he struggles to bring light to this shadowy world, he learns the uncomfortable truth: Sometimes the darkness comes from within.</BodyCopy>
      </div>
    </div>

    <div className="md:grid md:grid-cols-3 md:gap-x-10 mt-20 mx-5">
      <BookH2>Reviews for Digital Native</BookH2>
      <Review className="mb-6" stars={5} cite="Lydia">Thoroughly enjoyed the story and the rich details that brought it to life in my mind. A very thought provoking concept of our future being lived almost exclusively in virtual environments, as well as how we might interact with AI.</Review>
      <Review className="mb-6" stars={5} cite="Ryan Edel">Digital Native is a really good read for anyone who enjoys a combination of AI, corporate espionage, and redemption.</Review>
      <Review className="mb-6" stars={5} cite="Kassia">Once I started it, I couldn't put it down. Very engaging characters and a unique perspective. A great look into a possible future of AI becoming sentient in a way that is rooted in what makes humanity good or bad..</Review>
    </div>

    <div className="mt-20 mx-5 max-w-screen-lg lg:mx-auto">
      <BookH2>Preview of Chapter 1</BookH2>
      <BookAside imgSrc="../img/digital-native-cover.jpg" alt="Full cover of Digital Native that has a robot hand shaking the hand of a human in a business suit">
        <div className="grid grid-cols-2 mt-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price="$3.99" />
            <BookButton className="mt-6 ml-3" href="https://www.amazon.com/Digital-Native-M-Denison-ebook/dp/B09MBRFYXC/" color="bg-black" text="Buy an eBook" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price="$14.99" />
            <BookButton className="mt-6 ml-3" href="https://www.amazon.com/Digital-Native-M-Denison/dp/B09M5CZQ9X/" color="bg-black" text="Buy a Paperback" />
          </div>
        </div>
      </BookAside>
      <BodyCopy><span className="float-left text-5xl font-digital-native-serif">D</span>evin winced as he prodded the gaping hole in his belly. He lay back, sides heaving, on the black and white checked elevator floor. It was covered in blood, both his and the attacker's. What's black and white and red all over? he thought. He tried to smile, but the pain turned his expression to a grimace. The lurch in his stomach didn't help, the millisecond of suspension announcing that the elevator descended to the basement where his patients slept.</BodyCopy>
      <BodyCopy>The elevator's friendly beep announced every floor it passed on its way down. Thirty-three, thirty-two, thirty-one. Around the twenty-eighth floor, a blackness crept into the corners of Devin's vision. He wondered how much longer he had. Didn't they warn you, he scolded himself, told you that you couldn't please everyone? But you thought you were talented enough to pull it off, didn't you? Ha!</BodyCopy>
      <BodyCopy>His breathing was coming harder now. He stared up at the descending elevator numbers that glowed green in the display box over the doors. A howl sounded high above him in the elevator shaft, and Devin held his breath. They were still up there, waiting. Cheated of their quarry. What was he doing, returning to where his patients rested, unaware of the danger?</BodyCopy>
      <BodyCopy>When a cat is dying, it leaves its clowder and roams far away to give up its ghost. Cats don't want their dead bodies decomposing at home, luring dangerous predators to where the kittens live. That was the explanation Devin liked best. Some behaviorists thought dying cats were merely seeking peace and quiet, but Devin preferred to think that they were keeping their families safe. So why am I going back home?</BodyCopy>
      <BodyCopy>What would his attackers do to his patients? How could he protect them, wounded as he was? The blackness grew in his vision and his pain seemed strange and far away. Think! he told himself. You'll be dead as a doorstop soon! His eyebrows went up. That's it.</BodyCopy>
      <BodyCopy>The elevator dinged and the doors opened into the basement hallway. In front of him was his normal world. Beige walls, tan low- pile carpet, stock photos of beaches hung every 10 feet up and down the hall. Familiar. Surrounding him in the elevator was his new nightmare of blood, pain, and death.</BodyCopy>
      <BodyCopy>Move! He willed himself to crawl across the slippery, blood- covered floor. He collapsed with his torso on the tan carpet and his legs inside the elevator. Hope we've got a good stain remover. He smiled. Now the doors couldn't close, and the elevator couldn't return to the upper floors to bring down death. It was a satisfying last act, he decided.</BodyCopy>
      <BodyCopy>Then the elevator doors closed on him. They squeezed his sides briefly and Devin cried out. The pain was front and center again. The doors opened and waited another thirty seconds before closing on him again. Another cry escaped him. This was a terrible plan, he thought.</BodyCopy>
      <BodyCopy>His vision was almost completely dark now. He pictured his patients finding his body in the morning, elevator still chewing him once every thirty seconds. He shuddered. Then he heard footsteps coming toward him from around the corner. He tensed. Was it Hank?</BodyCopy>
    </div>
    <hr className="pb-3 border-black" />
    <BodyCopy className="pb-3 italic">You may continue reading by <Link className="underline" to="https://www.amazon.com/Digital-Native-M-Denison-ebook/dp/B09MBRFYXC/">downloading the ebook</Link> or <Link className="underline" to="https://www.amazon.com/Digital-Native-M-Denison/dp/B09M5CZQ9X/">buying a paperback</Link> from amazon.</BodyCopy>
    
    <Footer />
  </>)
}

export default DigitalNative;