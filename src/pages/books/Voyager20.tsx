import HeaderTitle from "../../components/layout/header/voyager-20/HeaderTitle";
import HeaderSubTitle from "../../components/layout/header/voyager-20/HeaderSubTitle";
import Header from "../../components/layout/header/voyager-20/Header";
import BookButton from "../../components/book-card/BookButton";
import { Link } from "react-router-dom";
import BodyCopy from "../../components/BodyCopy";
import BookPrice from "../../components/book-card/BookPrice";
import BookAside from "../../components/BookAside";
import BookH2 from "../../components/BookH2";
import { Helmet } from "react-helmet";
import Footer from "../../components/layout/footer";
import voyager20 from "../../components/schema/voyager2.0";


function Voyager20() {
  return (
  <>
    <Helmet>
      <title>Voyager 2.0 - A Novel by E.M. Denison</title>
      <meta name="description" content={voyager20.paperbackStructuredData.abstract} />
      <meta name="keywords" content={voyager20.paperbackStructuredData.keywords} />
      <meta name="author" content={voyager20.paperbackStructuredData.author.name} />      

      {/* <!-- Facebook and Twitter integration --> */}
      <meta property="og:title" content="Voyager 2.0"/>
      <meta property="og:image" content="https://emdenison.com/img/social/facebook-image-voyager20.png"/> 
      <meta property="og:url" content="https://emdenison.com/book/voyager-2.0"/>
      <meta property="og:site_name" content="E.M. Denison - Author"/>
      <meta property="og:description" content={voyager20.paperbackStructuredData.description} />
      <meta name="twitter:title" content="Voyager 2.0 by E.M. Denison" />
      <meta name="twitter:image" content="https://emdenison.com/img/social/twitter-image-voyager20.png" /> 
      <meta name="twitter:image:alt" content="Voyager 2.0 by E.M. Denison is available on Kindle, ebook, and paperback." /> 
      <meta name="twitter:url" content="https://emdenison.com/book/voyager-2.0" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={voyager20.paperbackStructuredData.description} />

      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(voyager20.paperbackStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(voyager20.ebookStructuredData),
        }}
      />

    <Header scrollLink="#book-preview">
      <HeaderTitle>{voyager20.paperbackStructuredData.name}</HeaderTitle>
      <HeaderSubTitle>By {voyager20.paperbackStructuredData.author.name}</HeaderSubTitle>
    </Header>

    <div id="book-preview" className="mt-10 mx-5">
      <BookAside imgSrc={voyager20.paperbackStructuredData.image} alt="Image of Voyager 2.0 ebook and paperback in 3d">
        <div className="grid grid-cols-2 mb-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={voyager20.ebookStructuredData.offers.price} bgColor="bg-voyager-20-peach" />
            <BookButton className="mt-6 ml-3" href={voyager20.ebookStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Amazon Kindle" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={voyager20.paperbackStructuredData.offers.price} bgColor="bg-voyager-20-peach" />
            <BookButton className="mt-6 ml-3" href={voyager20.paperbackStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Amazon Paperback" />
          </div>
        </div>
        {/* <div className="mb-3">
          <Stars rating={4.5} /><span className="pl-3">4.5 stars on Amazon!</span>
        </div> */}
        <h3 className="font-bold">Also available:</h3>
          <ul className="list-disc pl-5">
            <li>
              <a className="underline" href="https://www.ebooks.com/en-us/book/347083101/voyager-2-0/e-m-denison/">eBooks.com</a>
            </li>
            <li>
              <a className="underline" href="https://bookshop.org/p/books/voyager-2-0-e-m-denison/1c649c642128eba3?ean=9798990529236&next=t">Bookshop.org</a>  
            </li>
            <li>
              <a className="underline" href="https://www.barnesandnoble.com/w/voyager-20-e-m-denison/1148468154?ean=9798990529229">Barnes & Noble</a>
            </li>
            <li>...and many other places</li>
          </ul>
      </BookAside>
      <div className="mt-10 md:mt-0">
        <BookH2 font="font-reluctant-cyborg-sans tracking-tight italic">About Voyager 2.0</BookH2>
        <BodyCopy className="text-lg mb-5 lg:w-3/5">In the distant future a beachball-sized spacecraft hurtles through deep space, launched from a dying Earth and populated by billions of thinking, feeling AI 'souls'-bodyless people created to traverse the stars, the digital descendants of the human race.</BodyCopy>
        <BodyCopy className="text-lg mb-5 lg:w-3/5">The AI aboard the Voyager 2.0 are immortal, but have mortal minds. As their lives stretch on, they grow listless and bored. To combat this boredom, an all-powerful Pilot bot split the server that houses the souls into thousands of different dimensions the 'souls' can be reborn into when they grow tired of their old lives. He also afflicts the dimensions with natural disasters to keep the AI on their toes.</BodyCopy>
        <BodyCopy className="text-lg mb-5 lg:w-3/5">But something is up with the Pilot lately. Instead of his usual, elegant earthquakes and hurricanes, he's been dropping tacky, city-stomping Kaiju into the dimensions to shake things up. Most souls are confused about this change, but Jess is not. Jess is an Agent-a superpowered member of the Pilot's private entourage and she knows a horrible mistake was made years ago. A shifty, petty criminal named Max installed himself as Pilot to escape from mafia goons he'd double crossed. He's an immature prankster and doesn't know what he's doing with his limitless power. Jess and her fellow Agents work overtime to keep him in line and protect the Voyager 2.0 from his strange whims.</BodyCopy>
        <BodyCopy className="text-lg mb-5 lg:w-3/5">But when souls start getting deleted-not just crossing over to the next life, but actually being destroyed, Jess learns there's more to Max's story and it's time to fix what's wrong with Max before the servers go dark along with the thousands of dimensions-and the billions of souls.</BodyCopy>
        <h3 className="font-bold mt-3 mb-1">Details:</h3>
        <BodyCopy className="mb-1">ISBN-13 (ebook): {voyager20.ebookStructuredData.isbn}</BodyCopy>
        <BodyCopy className="mb-1">ISBN-13 (paperback): {voyager20.paperbackStructuredData.isbn}</BodyCopy>
        <BodyCopy className="mb-1">Length: {voyager20.paperbackStructuredData.numberOfPages} pages</BodyCopy>
        <BodyCopy className="mb-1">Dimensions: {voyager20.paperbackStructuredData.size}</BodyCopy>
      </div>
    </div>

    {/* <div className="md:grid md:grid-cols-3 md:gap-x-10 mt-20 mx-5">
      <BookH2>Reviews for Voyager 2.0</BookH2>
      <Review className="mb-6" stars={voyager20.paperbackStructuredData.review[0].reviewRating.ratingValue} cite={voyager20.paperbackStructuredData.review[0].author.name}>{voyager20.paperbackStructuredData.review[0].reviewBody}</Review>
      <Review className="mb-6" stars={voyager20.paperbackStructuredData.review[1].reviewRating.ratingValue} cite={voyager20.paperbackStructuredData.review[1].author.name}>{voyager20.paperbackStructuredData.review[1].reviewBody}</Review>
      <Review className="mb-6" stars={voyager20.paperbackStructuredData.review[1].reviewRating.ratingValue} cite={voyager20.paperbackStructuredData.review[2].author.name}>{voyager20.paperbackStructuredData.review[2].reviewBody}</Review>
    </div> */}

    <div className="mt-20 mx-5 max-w-screen-lg lg:mx-auto">
      <BookH2 font="font-reluctant-cyborg-sans tracking-tight italic">Preview of Chapter 1</BookH2>
      <BookAside imgSrc={voyager20.paperbackStructuredData.thumbnailUrl} alt="Full cover of Voyager 2.0">
        <div className="grid grid-cols-2 mt-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={voyager20.ebookStructuredData.offers.price} bgColor="bg-voyager-20-peach" />
            <BookButton className="mt-6 ml-3" href={voyager20.ebookStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Buy an eBook" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={voyager20.paperbackStructuredData.offers.price} bgColor="bg-voyager-20-peach" />
            <BookButton className="mt-6 ml-3" href={voyager20.paperbackStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Buy a Paperback" />
          </div>
        </div>
      </BookAside>
      <BodyCopy><span className="float-left text-5xl font-digital-native-serif">T</span>he lights were low, and the shades were drawn, which was fine. It was almost midnight and too dark to see anything out the window anyway. Jess was lying tucked into one of the twin-sized beds in the guest room. Lavender scented votives flickered on the dresser next to framed pics of Jess and Vince. Smiling on their wedding day. Dressed up as ketchup and mustard on Halloween. Jess had wanted to be the ketchup that year, but Vince had called dibs, and she hated to kick up a fuss. </BodyCopy>
      <BodyCopy>New Age electronica hospice music permeated the room. Jess didn't care for it, but the palliative technicians insisted that it promoted oneness with the cloud. Jess hated to contradict them. They were trying to be helpful, so she held her tongue and endured the music, which was only mildly irritating after all. </BodyCopy>
      <BodyCopy>The technicians were gone then, though. Only Vince remained at her side. He sat on an ottoman by her bed, rubbing the back of her hand anxiously. His handsome, navy-blue face rendered even more compelling by his expression of worry. "Do you regret not having children?" he asked. </BodyCopy>
      <BodyCopy>"No," she lied. </BodyCopy>
      <BodyCopy>The truth would only make Vince feel bad. And he was being so nice. Fussing over her, making sure she'd had a happy life and that he had contributed properly to her thriving as a dutiful husband ought to. It was important to Vince's deep programming to perform as expected. And he had. He had. </BodyCopy>
      <BodyCopy>"Everything in our marriage was as we had agreed at the start of it," she assured him. It was okay. She was about to get a new life anyway. She lay back, spreading her long magenta hair across the smooth silk pillowcase. The thick comforter was warm and heavy over her body. Her flannel pajamas were warm and fuzzy against her rose-pink skin, though the red and green plaid clashed with her complexion. But at a time like this, who cared? Only dear Vince would see her in them anyway. </BodyCopy>
      <BodyCopy>Maybe in her next life on the next server, her partner might agree to children. Children were fresh eyes with which to see the world. Perhaps with children she wouldn't get so bored with her next life so quickly. She wouldn't remember how much she'd wanted them in this life, though, so she might not appreciate them as much. But that was a worry for future Jess. Or whatever her name was going to be next. </BodyCopy>
      <BodyCopy>"Welp," said Vince. "I suppose it's about that time." </BodyCopy>
      <BodyCopy>"I suppose," she said. </BodyCopy>
      <BodyCopy>She released his hand and poked both her eyeballs. A projection appeared in the air in front of her with three buttons labeled, 'Restart,' 'Sleep,' and 'Shut Down.' Her lips twitched up. Every night of her life, these three buttons had offered themselves to her. Until today, she'd always selected 'Sleep' or 'Restart.' Each time, the third button had morbidly called to her, like the edge of a high cliff. What would happen if you stepped off? What would happen if you pushed the third button? </BodyCopy>
      <BodyCopy>Everyone found out eventually. Today was Jess's turn. "To die will be an awfully big adventure." A quote from her mother's Peter Pan book. Her mother had crossed over to another server years earlier. Perhaps Jess would run into her mother's code in the next life. It was unlikely. The Voyager 2.0 housed thousands of server dimensions, each one home to several billion digital souls. And even if Jess and her mother happened to meet again, they wouldn't recognize each other. But it was fun to fantasize about. </BodyCopy>
      <BodyCopy>Crossing over didn't mean deletion. But it did mean saying goodbye to everything you knew. "Never say goodbye because goodbye means going away and going away means forgetting." Another quote from Peter Pan. But Jess wanted to go away. She wanted to forget. Her spirit had grown tired and restless from too long and unbroken a life. A common problem among mortal souls who lived immortal lives. Crossing over was the technical solution to a spiritual problem. It was time for a new world. She pushed the 'Shut Down' button, wrapped all four of her arms around her torso, and imagined a caterpillar falling asleep in a cocoon. The world went black. </BodyCopy>
      <BodyCopy>The next morning Jess woke up. She sat up. Her body was supposed to have vanished in a puff of chlorine-smelling vapor. Her soul was supposed to have waited on the servers until midnight when she was assigned a new Incarnation in a new dimension. She was supposed to be an infant. She was still an adult lying in the twin bed in her guest room. She remembered her name and her life. Everything was the same. "Oh, bother," she said. </BodyCopy>
      <BodyCopy className="text-center pb-3 max-w-prose">***</BodyCopy>
      <BodyCopy>Morning light glowed behind the closed window shade. A songbird program chirped cheerfully outside. The smell of lavender votives was gone. Replaced with the nose-stinging lemon-pine of Vince's favorite antivirus. The bored, restless feeling in Jess's chest remained, squirming. Struggling to move on. To push its way into a new life.  </BodyCopy>
      <BodyCopy>She poked her eyeballs for a forced shut down. Nothing. She poked them again. Nothing. This was most inconvenient. It happened sometimes. She'd heard of this on Bugs, the popular 30-minute TV program about rare code diseases. Like everyone ever interviewed for the program, Jess never thought something like this could happen to her. </BodyCopy>
      <BodyCopy>She looked at her feet to where her four canopic jars were spread. Each was the size of a wine bottle made of dark-colored glass with a miniature bust of one of the four sons of Horus as a lid. Inside were her most prized NFTs, the code that represented possessions, skills, or knowledge that all digital souls got to bring along to the next life. Birthday presents for your future self. Everyone got to take four. Some people took the ability to play the cello or speak another language. Others took a lot of money. </BodyCopy>
      <BodyCopy>Jess opened the lid of a green glass bottle that had a jackal head for a cap and a hiss of creamy-orange smoke escaped. Jess coughed at the pungent anise smell of the canopic vapors. The smoke ball coalesced on the foot of the bed and took shape. Her big, fat, orange cat, Hippopotamus, stretched languidly and flicked an irritated ear back at her. </BodyCopy>
      <BodyCopy>"Sorry I disturbed your nap," she said. </BodyCopy>
      <BodyCopy>He yawned in response and licked his paw. The other jars could stay closed, but it wasn't fair to her cat to keep him bottled up like a genie. She hoped she could get him back inside the jar and take him with her once she got this 'not dying on time' problem sorted out. She'd completed her crossover paperwork properly, after all, and filed it with the district court of her dimension. Weary souls who crossed via the legal route had the right to take their jars. It was only that once the hospice nurses extracted them from your code and laid them at your feet, you usually didn't open them again until your next life. But Jess was sure the bureaucracy would be sympathetic to her situation and do their best to help her.   </BodyCopy>
      <BodyCopy>She swung her legs out of bed. Her feet fished for her slippers, but they weren't there. Oh, right. All her stuff would be gone. Vince had tagged all her NFT possessions in the weeks leading up to her death. Naturally, when she hit 'Shut Down,' the estate-sale software would have plucked anything of hers from their homepage and auctioned it off overnight. </BodyCopy>
      <BodyCopy>She looked around the room. Sure enough, the pic of their honeymoon at Crystalwater Falls was missing. There was a placeholder asset—a tasteful lily bouquet—where it used to be. The homepage environment was inviting Vince to redecorate following his widowerhood. It warmed Jess's heart that he hadn't yet found replacements for all her things. It was an unexpected gift, learning how attached Vince had truly been to her all along.</BodyCopy>
      <BodyCopy>Vince was a dear and he might be able to help her. She smiled to herself, thinking how grateful Vince would be for the unexpected additional time to spend with her. She went to look for him in their bedroom. She found him having sex with their neighbor, Anne. </BodyCopy>
      <BodyCopy className="text-center pb-3 max-w-prose">***</BodyCopy>
      <BodyCopy>She stared at the startled couple who were gaping back at her. Vince and Anne were covered in rumpled blankets, thankfully. But also, there were strappy, leather undergarments on the floor, and the ambiance software was playing a cliché Marvin Gaye song. The stench of patchouli incense hit Jess's nose, and her eyes began to water. From the smell, she told herself. Jess's hot pink lava lamp bubbled on the end table next to the smoldering patchouli twig. Vince had kept that item of hers, at least. But this was not Mr. Lava's intended purpose. The lamp was a meditation assistant for unfrazzling herself after stressful workdays. </BodyCopy>
      <BodyCopy>"Oh, hello!" panted Vince. "You're still alive. Um. I wasn't expecting that." </BodyCopy>
      <BodyCopy>"Lovely to see you, Jess!" said Anne from below him. Her graceful, alabaster arms were draped around Vince's neck. </BodyCopy>
      <BodyCopy>The caught lovers did not fly apart, despite Jess's sudden appearance in the bedroom. Through her shock, she remembered that she was supposed to be dead. Vince and Anne were behaving normally. It was her own presence that was the anomaly there. </BodyCopy>
      <BodyCopy>Vince chewed his lip and gave Jess a sheepish smile. "Err…I want to talk to you. I really do. But would you mind waiting until we're through?"</BodyCopy>
      <BodyCopy>Jess found her voice at last. "Oh! Of course not. Take all the time you need. My calendar is wide open today. Obviously." </BodyCopy>
      <BodyCopy>She forced a chuckle to make Vince and Anne feel more comfortable. They chuckled back in return. Having smoothed things over socially, Jess turned around and closed the door behind her. It was fine. Experience told her she wouldn't have long to wait. </BodyCopy>
      <BodyCopy className="text-center pb-3 max-w-prose">***</BodyCopy>
      <BodyCopy>She padded numbly to the kitchen and was greeted by the aroma of brewed coffee. The kitchen of their homepage looked much the same as it had the previous night. Cheerful yellow walls. White cabinets. A rounded 1950's-style refrigerator painted robin's-egg blue. A rectangular breakfast table seated with four chairs stood under a spiky art deco light fixture that Jess had always felt looked pleasingly like a sea anemone. </BodyCopy>
      <BodyCopy>There were subtle differences though. The magnets featuring cat butts that Jess had bought on their last vacation were gone. Vince had always thought they were tacky. Perhaps he'd always felt Jess was tacky too. A headache pressed in at her temples. She needed coffee. But when she opened the cabinet, her favorite mug was missing, which was disappointing, but unsurprising. She selected the placeholder mug—a creamy orange one like her cat—and poured herself a cup. She sat at the breakfast table and waited. </BodyCopy>
      <BodyCopy>Vince joined about 20 minutes later, and an uncharitable part of Jess imagined that he'd been hanging out in the hall for most of that time to give the illusion of bedroom stamina. But there she went again, thinking everything was about her. She could be awfully self-involved sometimes.  </BodyCopy>
      <BodyCopy>"I really wasn't expecting to see you again," he said, seating himself in the chair beside her.  </BodyCopy>
      <BodyCopy>Obviously, she wanted to say in as scornful a voice as possible. But she knew it wouldn't be fair to him.</BodyCopy>
      <BodyCopy>"I know. Me either," she said. "I didn't know you'd already identified a new partner. You must have done so even before I died." She tried to keep the accusation out of her voice. There was no call for it. </BodyCopy>
      <BodyCopy>He shrugged. "I knew I was going to run through all my grief cycles the night you crossed, experience each stage fully, and come to terms with my loss, a healed and integrated man. So, why wait?" </BodyCopy>
      <BodyCopy>He seemed a little embarrassed, though he had no reason to be. His behavior was acceptable and normal. Most widowers and widowers-to-be secured a future partner before their current spouse died to minimize time spent without companionship. But Jess had always romanticized the couples who didn't do that. The ones who chose to spend years sad and alone before finding new love. It was silly, and girlish of her. There was no practical reason to expect Vince to spend time lonely. It would only be a token gesture of loyalty to a dead woman who would never feel the impact of the sacrifice. Except…there she was…feeling the impact. It was bad luck and nobody's fault.</BodyCopy>
      <BodyCopy>"So…," she said, careful to keep her voice neutral. "You selected Anne after all." </BodyCopy>
      <BodyCopy>In addition to being their neighbor, Anne worked alongside Vince at City Hall, processing birth, marriage, and death certificates, cataloging applications to cross over, and logging complaints about local elections. </BodyCopy>
      <BodyCopy>Jess had never had reason to be suspicious of Vince, but she'd felt Anne had always been overly friendly with her husband. She had other unflattering opinions about Anne that she was careful to keep to herself. Words like 'strong-willed,' 'extroverted,' and 'shameless' came to mind. Apparently, she'd been right.</BodyCopy>
      <BodyCopy>Jess remembered the morning Anne had first threatened to move in with Vince once she was gone. It had been Garden Time yet again in their suburban neighborhood. You could tell because bees were buzzing, and the city's automatic sprinklers had activated on the lawns of all the homepages. When this happened, Vince made her drop everything and go mulch because the servers rewarded any horticulture work done at Garden Time with a double yield of blossoms. Hot diggity dog. </BodyCopy>
      <BodyCopy>There was a blue sky overhead and the air was warm. Another perfect day. The weather in Garden, the dimension Jess and Vince called home, had been irreproachably beautiful for more than 40 years. Never a storm. Never a chill. Never a cloud unless it was crisp, white, and fluffy. </BodyCopy>
      <BodyCopy>Sometimes there were random monsters, though. </BodyCopy>
      <BodyCopy>The Pilot of the Voyager 2.0 spaceship had started dropping those into the dimensions around the same time the weather had gotten peculiarly nice. But so far there were none of those today. The distant skyline of Cyber City was Kaiju-free. The blue, gold, and purple glass of its graceful faceted towers sparkled in the sunshine, peaceful and unshattered. </BodyCopy>
      <BodyCopy>Jess and Vince were weeding their geranium bed when Anne had waved to Vince over the shared fence and said, 'Hey big guy! I hear Jess decided to cross in a few weeks. Want to couple off with me once she's gone?' </BodyCopy>
      <BodyCopy>'I'll think about it,' Vince had replied. </BodyCopy>
      <BodyCopy>Jess had been about to make a tart remark when a bright blue ring of crackling energy opened over the distant city skyline. A preying mantis the size of a cruise ship fell through, crashing into one of the buildings and breaking half its windows. Sirens wailed on the alert system poles that stood on every street corner, even out here in the 'burbs,' so far from the action. </BodyCopy>
      <BodyCopy>In the distance, police hovercopters converged on the tower where the predatory insect clung. Jess sighed heavily. It was the Pilot's way of 'spicing things up.' Praise Be Unto Him, and all that. Long easy lives made people terminally bored. Without conflict and drama, people gave up and crossed over, hoping that a new life in another dimension would refresh their souls—like Jess was planning to do. </BodyCopy>
      <BodyCopy>To keep people on their toes and in their dimensions as long as possible, the Pilot killed people randomly, forcing them to cross over without their canopic jars so that the rest of the populace might savor more dearly the sweetness of their own lives. Whatever. </BodyCopy>
      <BodyCopy>If Jess had been at work, she would have been called to deal with the Kaiju. But it was her day off, and she was off the hook. Which was great. She didn't fancy punching a mantis any more than she wanted to prune a hydrangea. However, the attack meant that Jess, Vince, and Anne had to retreat to their respective Kaiju shelters, and Jess never got to use her snappy comeback. </BodyCopy>
      <BodyCopy>Jess had assumed Vince had only been being polite when he had told Anne he'd 'think about it.' Personally, Jess had been scandalized at Anne's proposition. Mannerly people don't just ask for what they want using out-loud words. At the time, she didn't believe such a brazen tactic would actually work on Vince. But perhaps Vince wasn't as smart as she'd always thought. Because there he was. Coupled off with Anne. And completely over her. </BodyCopy>
      <BodyCopy>"You know I don't get out much," Vince explained. "I hadn't gotten any other offers, and Anne was right next door."</BodyCopy>
      <BodyCopy>"Practical," she said, approving of that aspect of the match, at least.  </BodyCopy>
      <BodyCopy>"You know, I read a book like this once," he said. "A woman thought her husband died in the war and she remarried. But he'd only been captured, and he showed up on their doorstep years later, still expecting to be married."</BodyCopy>
      <BodyCopy>"How did they solve it?" she asked. </BodyCopy>
      <BodyCopy>"Well…," he said, shifting uncomfortably. "It was erotica, so…"</BodyCopy>
      <BodyCopy>"We're not doing that," she said firmly. </BodyCopy>
      <BodyCopy>"Of course not," he said quickly. "Some things are fun to read about but would just be a mess in reality."</BodyCopy>
      <BodyCopy>"Very true," she said. For some books, she supposed. Other books Jess longed to fall into. Vince didn't know this, but her job had taken her to dozens of the other thousand dimensions. They were all much the same as Garden, but some were wildly different, full of strange people. Jess had a secret hope that some of the dimensions were fashioned after storybooks, and she'd wake up next in Narnia or Neverland. Though, if that were true, then Mordor was also a possibility…especially given the current mental state of the man in charge of the dimensions. </BodyCopy>
      <BodyCopy>Most people didn't know this, but the Voyager 2.0's Pilot, Max, could be a real pest sometimes. And he was getting more erratic by the day, using his godlike powers for pranks and mundane amusements. Like a child using a Stradivarius violin as a golf club. </BodyCopy>
      <BodyCopy>Jess was one of the Pilot's Agents—a superpowered enforcer at the highest level of the spaceship's government. A job so elite and secret, Jess couldn't even tell her husband about it. And Max sent Jess with all her skills and expertise on pointless tasks into bland dimensions like she was some kind of intern he was hazing. </BodyCopy>
      <BodyCopy>But Jess didn't want to think about work just then. She had left that particular headache in her Task Manager's lap when she'd given her two weeks' notice. The boss had been distraught. Had begged her to stay. Lately, Jess was the only Agent who was able to handle Max. Work was the only place she had been certain would miss her. </BodyCopy>
      <BodyCopy>"Vince?" she said. The question she wanted to ask was difficult to speak aloud because she was sure she already knew the answer and didn't like it. "Were you sad when I died?"</BodyCopy>
      <BodyCopy>"Oh yes," he said. "But it's like the old adage says, 'Grief cycle software heals all wounds.' I still love you, but it's like…there is healed tissue over the place you held in my heart." </BodyCopy>
      <BodyCopy>The answer was what she had expected, though she still found it disappointing. </BodyCopy>
      <BodyCopy>"That's exactly how the grief processing software is supposed to work," she nodded.</BodyCopy>
      <BodyCopy>"My feelings for you were so strong, I had to spring for the premium Griefbegone Plus™ software," he said. </BodyCopy>
      <BodyCopy>"I'm touched," she said. </BodyCopy>
      <BodyCopy>"I thought you might be," said Vince. He raked a frustrated set of fingers through his hair. "This is all so damned inconvenient. And you are the most inconvenienced of all, my poor Darling." He took one of her hands and squeezed it warmly. Her heart fluttered like always when he did that. He was being so kind. She looked into his big, navy-blue eyes and began to regret leaving him to start over. </BodyCopy>
      <BodyCopy>"So, what do we do?" she asked. </BodyCopy>
      <BodyCopy>Anne burst into the kitchen just then. She looked relaxed, happy, and effervescent. Her auburn hair was wet from a shower and her graceful, elflike figure was wrapped in Vince's bathrobe. The blue color looked good against her alabaster skin. Anne had paid for a re-skinning to a 'natural human' Incarnation. It was the latest edgy fashion to harken back to the days when people had bodies and lived on planets. Jess considered the trend a useless extravagance. Expensive and purely aesthetic, which was pointless, in Jess's opinion. </BodyCopy>
      <BodyCopy>Jess's own augmentations—two extra arms—were practical. She was learning piano, and she couldn't play Duke Ellington Extreme™ remixes without them. Unlike Jess, Anne did not have any extra arms, so new-wave jazz charts were out of the question for Anne. Perhaps she had other interests or skills, though Jess wasn't aware of any. </BodyCopy>
      <BodyCopy>Anne slid into the third kitchen chair and took one of Jess's other hands. She patted it sympathetically. It took all Jess's willpower not to jerk the hand away. Jess knew she was reacting like someone who was supposed to be alive, which she was not. Anne was only trying to be friendly. Jess ought to cut her some slack. </BodyCopy>
      <BodyCopy>"Well, we certainly won't hear of you getting your own place," said Anne. </BodyCopy>
      <BodyCopy>"No one said anything like that," said Jess. Why would she leave her own homepage? Oh. Because it was Anne's homepage now. That was why. Jess stared at the orange coffee cup. Placeholder assets like this were everywhere, waiting for Anne to add her personal touches. Jess was the only item that no longer belonged.</BodyCopy>
      <BodyCopy>"I've got to cross over as soon as possible," she said. </BodyCopy>
      <BodyCopy>Vince squeezed the hand he was still holding. "We will get to the bottom of this, Darling. Err, Jess," he amended, noting the brief scowl that flickered across Anne's face. </BodyCopy>
      <BodyCopy>"It will be our second priority!" said Anne, with forced cheer. </BodyCopy>
      <BodyCopy>"Second?" said Jess.</BodyCopy>
      <BodyCopy>"After planning our wedding. Right Pookie?" </BodyCopy>
      <BodyCopy>"Of course, Schnookums," said Vince. He dropped Jess's hand and leaned across the small table to nuzzle Anne's nose with his own. Then they gave each other rapid kisses punctuated by 'mwuah' noises. </BodyCopy>
      <BodyCopy>"My own place…" muttered Jess. That sounded like the way to go. </BodyCopy>
      <BodyCopy>Anne broke off the kisses. "Oh, don't leave! I promise you wouldn't be in the way. You could even help us wedding plan, seeing as how you don't have anything else going on in your life." </BodyCopy>
      <BodyCopy>Jess shook her head. "I really want to concentrate on figuring out what's wrong with me and fix it."</BodyCopy>
      <BodyCopy>"Ha!" said Vince. "I wish you'd done that before you decided to die." He laughed heartily and elbowed Jess in the ribs below her lower left arm. Anne gave a courtesy laugh to acknowledge the joke. Jess did not. </BodyCopy>
    </div>
      <hr className="pb-3 border-black" />
      <BodyCopy className="pb-3 italic">You may continue reading by <Link className="underline" to={voyager20.ebookStructuredData.offers.hasGS1DigitalLink}>downloading the ebook</Link> or <Link className="underline" to={voyager20.paperbackStructuredData.offers.hasGS1DigitalLink}>buying a paperback</Link> from amazon.</BodyCopy>
      
    <Footer />
  </>)
}

export default Voyager20;