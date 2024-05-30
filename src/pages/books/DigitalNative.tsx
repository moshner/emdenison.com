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
import Book from "../../data/digitalNative";
import paperbackStructuredData from "../../components/schema/digitalNative"
import ebookStructuredData from "../../components/schema/digitalNative"

function book() {


  return (
  <>
    <Helmet>
      <title>{Book.title} - A Novel by {Book.author}</title>
      <meta name="description" content={Book.abstract} />
      <meta name="keywords" content={Book.keywords} />
      <meta name="author" content={Book.author} />

      {/* <!-- Facebook and Twitter integration --> */}
      <meta property="og:title" content={`${Book.title} by ${Book.author}`} />
      <meta property="og:image" content={Book.images.ogImg.url} />
      <meta property="og:url" content={Book.url} />
      <meta property="og:site_name" content={`${Book.author} - Author`} />
      <meta property="og:description" content={Book.tagLine} />
      <meta name="twitter:title" content={`${Book.title} by ${Book.author}`} />
      <meta name="twitter:image" content={Book.images.ogImg.url} />
      <meta name="twitter:image:alt" content={Book.images.ogImg.alt} />
      <meta name="twitter:url" content={Book.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={Book.tagLine} />

      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(paperbackStructuredData),
        }}
      />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ebookStructuredData),
          }}
      />
      

    <Header scrollLink="#book-preview">
      <HeaderTitle>{Book.title}</HeaderTitle>
      <HeaderSubTitle>By {Book.author}</HeaderSubTitle>
    </Header>

    <div id="book-preview" className="mt-10 mx-5">
      <BookAside imgSrc={Book.images.compoundImg.url} alt={Book.images.compoundImg.alt}>
        <div className="grid grid-cols-2 mb-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={Book.formats.ebook.price} />
            <BookButton className="mt-6 ml-3" href={Book.formats.ebook.sellerURL} color="bg-black" text="Buy an eBook" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={Book.formats.paperback.price} />
            <BookButton className="mt-6 ml-3" href={Book.formats.paperback.sellerURL} color="bg-black" text="Buy a Paperback" />
          </div>
        </div>
        <div className="mb-3">
          <Stars rating={Book.aggregateRating.ratingValue} /><span className="pl-3">{Book.aggregateRating.ratingValue} stars on Amazon!</span>
        </div>
        <BodyCopy className="mb-1">ISBN-13: {Book.formats.paperback.isbn}</BodyCopy>
        <BodyCopy className="mb-1">Length: {Book.numberOfPages} pages</BodyCopy>
        <BodyCopy className="mb-1">Dimensions: {Book.size}</BodyCopy>
      </BookAside>
      <div className="mt-10 md:mt-0">
        <BookH2>About {Book.title}</BookH2>
        {Book.description.map(d => (<BodyCopy key={d.id} className="text-lg mb-5 lg:w-3/5">{d.data}</BodyCopy>))}
      </div>
    </div>

    <div className="md:grid md:grid-cols-3 md:gap-x-10 mt-20 mx-5">
      <BookH2>Reviews for {Book.title}</BookH2>
      {Book.reviews.map(d => (<Review key={d.id} className="mb-6" stars={d.reviewRating.ratingValue} cite={d.author.name}>{d.reviewBody}</Review>))}
    </div>

    <div className="mt-20 mx-5 max-w-screen-lg lg:mx-auto">
      <BookH2>Preview of Chapter 1</BookH2>
      <BookAside imgSrc={Book.images.thumbnailImg.url} alt={Book.images.thumbnailImg.alt}>
        <div className="grid grid-cols-2 mt-5">
          <div className="relative">
          <BookPrice screenReader="Amazon Price" price={Book.formats.ebook.price} />
            <BookButton className="mt-6 ml-3" href={Book.formats.ebook.sellerURL} color="bg-black" text="Buy an eBook" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={Book.formats.paperback.price} />
            <BookButton className="mt-6 ml-3" href={Book.formats.paperback.sellerURL} color="bg-black" text="Buy a Paperback" />
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
    <BodyCopy className="pb-3 italic">You may continue reading by <Link className="underline" to={Book.formats.ebook.sellerURL}>downloading the ebook</Link> or <Link className="underline" to={Book.formats.paperback.sellerURL}>buying a paperback</Link> from amazon.</BodyCopy>
    
    <Footer />
  </>)
}

export default book;