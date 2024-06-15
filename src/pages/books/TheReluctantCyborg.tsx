import HeaderTitle from "../../components/layout/header/reluctant-cyborg/HeaderTitle";
import HeaderSubTitle from "../../components/layout/header/reluctant-cyborg/HeaderSubTitle";
import Header from "../../components/layout/header/reluctant-cyborg/Header";
import BookButton from "../../components/book-card/BookButton";
import { Link } from "react-router-dom";
import BodyCopy from "../../components/BodyCopy";
import BookPrice from "../../components/book-card/BookPrice";
import BookAside from "../../components/BookAside";
import BookH2 from "../../components/BookH2";
import { Helmet } from "react-helmet";
import Footer from "../../components/layout/footer";
import theReluctantCyborg from "../../components/schema/theReluctantCyborg";
import Review from "../../components/Review";


function TheReluctantCyborg() {
  return (
  <>
    <Helmet>
      <title>The Reluctant Cyborg - A Novel by E.M. Denison</title>
      <meta name="description" content={theReluctantCyborg.paperbackStructuredData.abstract} />
      <meta name="keywords" content={theReluctantCyborg.paperbackStructuredData.keywords} />
      <meta name="author" content={theReluctantCyborg.paperbackStructuredData.author.name} />      

      {/* <!-- Facebook and Twitter integration --> */}
      <meta property="og:title" content="The Reluctant Cyborg by E.M. Denison"/>
      <meta property="og:image" content="https://emdenison.com/img/social/facebook-image-the-reluctant-cyborg.png"/>
      <meta property="og:url" content="https://emdenison.com/book/the-reluctant-cyborg"/>
      <meta property="og:site_name" content="E.M. Denison - Author"/>
      <meta property="og:description" content={theReluctantCyborg.paperbackStructuredData.alternativeHeadline} />
      <meta name="twitter:title" content="The Reluctant Cyborg by E.M. Denison" />
      <meta name="twitter:image" content="https://emdenison.com/img/social/twitter-image-the-reluctant-cyborg.png" />
      <meta name="twitter:image:alt" content="The Reluctant Cyborg by E.M. Denison is available on Kindle, ebook, and paperback." />
      <meta name="twitter:url" content="https://emdenison.com/book/the-reluctant-cyborg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={theReluctantCyborg.paperbackStructuredData.alternativeHeadline} />

      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(theReluctantCyborg.paperbackStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(theReluctantCyborg.ebookStructuredData),
        }}
      />

    <Header scrollLink="#book-preview">
      <HeaderTitle>{theReluctantCyborg.paperbackStructuredData.name}</HeaderTitle>
      <HeaderSubTitle>By {theReluctantCyborg.paperbackStructuredData.author.name}</HeaderSubTitle>
    </Header>

    <div id="book-preview" className="mt-10 mx-5">
      <BookAside imgSrc="../img/reluctant-cyborg-compound-books.png" alt="Image of Digital Native in 3d">
        <div className="grid grid-cols-2 mb-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={theReluctantCyborg.ebookStructuredData.offers.price} bgColor="bg-orange-400" />
            <BookButton className="mt-6 ml-3" href={theReluctantCyborg.ebookStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Amazon Kindle" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={theReluctantCyborg.paperbackStructuredData.offers.price} bgColor="bg-orange-400" />
            <BookButton className="mt-6 ml-3" href={theReluctantCyborg.paperbackStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Amazon Paperback" />
          </div>
        </div>
        {/* <div className="mb-3">
          <Stars rating={4.5} /><span className="pl-3">4.5 stars on Amazon!</span>
        </div> */}
        <h3 className="font-bold">Also available:</h3>
          <ul className="list-disc pl-5">
            <li>
              <a className="underline" href="https://www.ebooks.com/en-us/book/211332248/the-reluctant-cyborg/e-m-denison/">eBooks.com</a>
            </li>
            <li>
              <a className="underline" href="https://bookshop.org/p/books/the-reluctant-cyborg-e-m-denison/21453615?ean=9798990529205">Bookshop.org</a>  
            </li>
            <li>
              <a className="underline" href="https://www.barnesandnoble.com/w/the-reluctant-cyborg-e-m-denison/1145623709?ean=9798990529205">Barnes & Noble</a>
            </li>
            <li>
              <a className="underline" href="https://shop.ingramspark.com/b/084?lp7iEl644BEWzJGaayf1vitkTaVW3VFJ0MbgElrRFHe">IngramSpark</a>
            </li>
            <li>...and many other places</li>
          </ul>
      </BookAside>
      <div className="mt-10 md:mt-0">
        <BookH2 font="font-reluctant-cyborg-sans tracking-tight italic">About The Reluctant Cyborg</BookH2>
        <BodyCopy className="text-lg mb-5 lg:w-3/5 xl:w-4/5">Year 2182: Two city states are locked in a pointless war for bragging rights between their petty, immortal dictators. Average citizens scrape by on medical betting, participating in unregulated clinical trials, or scrubbing the 'Rat Flatteners' and 'Possum Shredders' at the local meat packing plant.</BodyCopy>
        <BodyCopy className="text-lg mb-5 lg:w-3/5 xl:w-4/5">Trust fund goof-off Ezeny Phillips assumes his money will insulate him from this nonsense. His only worry is how his jokes are landing with a certain kitchen maid. But when the family Patriarch decides he doesn't need all his sixty heirs, he sends several dozen sons, including Ezeny, to war in exchange for lucrative social credit. Tenderhearted and unaccustomed to hardship, Ezeny proves easy pickings on the battlefield. But his wounds transform him into The Iron King, a superpowered cyborg devoid of emotion and monstrous in battle.</BodyCopy>
        <BodyCopy className="text-lg mb-5 lg:w-3/5 xl:w-4/5">When Medbot 5, a hyper-patriotic medical drone, accidentally frees Ezeny from the nanobots that control his thoughts, all he wants is to find his sweetheart, bond with their son, and enjoy life again. But Medbot 5 won't rest until she gets The Iron King back on the battlefield. And the judgmental robot is the least of Ezeny's problems. He must keep his past and powers secret because darker forces are hunting for him. And when the war returns to claim the Iron King, Ezeny must choose whether to save the people he loves or save his ability to love at all.</BodyCopy>
        <h3 className="font-bold mt-3 mb-1">Details:</h3>
        <BodyCopy className="mb-1">ISBN-13 (ebook): {theReluctantCyborg.ebookStructuredData.isbn}</BodyCopy>
        <BodyCopy className="mb-1">ISBN-13 (paperback): {theReluctantCyborg.paperbackStructuredData.isbn}</BodyCopy>
        <BodyCopy className="mb-1">Length: {theReluctantCyborg.paperbackStructuredData.numberOfPages} pages</BodyCopy>
        <BodyCopy className="mb-1">Dimensions: {theReluctantCyborg.paperbackStructuredData.size}</BodyCopy>
      </div>
    </div>

    <div className="md:grid md:grid-cols-3 md:gap-x-10 mt-20 mx-5">
      <BookH2>Reviews for The Reluctant Cyborg</BookH2>
      <Review className="mb-6" stars={theReluctantCyborg.paperbackStructuredData.review[0].reviewRating.ratingValue} cite={theReluctantCyborg.paperbackStructuredData.review[0].author.name}>{theReluctantCyborg.paperbackStructuredData.review[0].reviewBody}</Review>
      <Review className="mb-6" stars={theReluctantCyborg.paperbackStructuredData.review[1].reviewRating.ratingValue} cite={theReluctantCyborg.paperbackStructuredData.review[1].author.name}>{theReluctantCyborg.paperbackStructuredData.review[1].reviewBody}</Review>
      <Review className="mb-6" stars={theReluctantCyborg.paperbackStructuredData.review[1].reviewRating.ratingValue} cite={theReluctantCyborg.paperbackStructuredData.review[2].author.name}>{theReluctantCyborg.paperbackStructuredData.review[2].reviewBody}</Review>
    </div>

    <div className="mt-20 mx-5 max-w-screen-lg lg:mx-auto">
      <BookH2 font="font-reluctant-cyborg-sans tracking-tight italic">Preview of Chapter 1</BookH2>
      <BookAside imgSrc={theReluctantCyborg.paperbackStructuredData.thumbnailUrl} alt="Full cover of The Reluctant Cyborg">
        <div className="grid grid-cols-2 mt-5">
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={theReluctantCyborg.ebookStructuredData.offers.price} bgColor="bg-orange-400" />
            <BookButton className="mt-6 ml-3" href={theReluctantCyborg.ebookStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Buy an eBook" />
          </div>
          <div className="relative">
            <BookPrice screenReader="Amazon Price" price={theReluctantCyborg.paperbackStructuredData.offers.price} bgColor="bg-orange-400" />
            <BookButton className="mt-6 ml-3" href={theReluctantCyborg.paperbackStructuredData.offers.hasGS1DigitalLink} color="bg-black" text="Buy a Paperback" />
          </div>
        </div>
      </BookAside>
      <BodyCopy className="text-center font-bold text-xl mb-4">Announcement</BodyCopy>
			<BodyCopy className="text-center font-bold mb-4">Year 2182—Ezeny</BodyCopy>
			<BodyCopy><span className="float-left text-5xl font-digital-native-serif">E</span>zeny was only standing beside his eleven half brothers for appearance's sake. The other young men were waiting to greet their various mothers after a long separation. Ezeny alone would not be seeing his mother that night. But there he was anyway. Lined up in a greeting queue in the foyer of the family high-rise, flanked by stern servants and rigid with gentlemanly good posture. </BodyCopy>
      <BodyCopy>He slumped a little and stuffed his hands into the pockets of his cross-collar dress robe. He was supposed to be wearing a starched lace vestee shirt underneath for the auspicious occasion, but such things were itchy, so Ezeny had wadded a ruffly handkerchief under his collar and was secretly going commando. He got a whack on the back of his head.</BodyCopy>
      <BodyCopy>“Straighten up,” hissed a Matron behind him. 	</BodyCopy>
      <BodyCopy>He turned, rubbing his head and mouthed 'ow' at her. She frowned and brandished her bamboo whacking fan at him, so he faced forward again and got back to looking responsible. This was silliness. The Emeritus Concubines weren't even there yet to be impressed by their sons' disciplined comportment. He shouldn't have to hold still. </BodyCopy>
      <BodyCopy>The Matrons had outdone themselves transforming his father's simple announcement into 'an event.' Servants had buffed and polished the marble entryway until the walls gleamed and the floors squeaked, as if guests cared how shiny a room was. A red carpet ran from the revolving glass entry door down the foyer's central aisle to welcome his brothers' mothers to Tower C. The carpet was gilding the lily, Ezeny felt, covering the resplendent flooring in an unnecessary layer of glamour. </BodyCopy>
      <BodyCopy>He and his half brothers were already hygienic fellows. But this morning the Matrons had soaked them for an hour each and coated them in so much cologne and hair gel that Ezeny smelled like the cleaning supplies closet he hid contraband sweets in as a child. Now that he was nineteen, he had a much better hiding spot that didn't make his stolen cookies smell like pine. </BodyCopy>
      <BodyCopy><span className="italic">Such a fuss, </span>he thought. <span className="italic">It's only family after all. Well, everyone </span>else's<span className="italic"> family</span>. But that was uncharitable of him. Ezeny was happy for his half brothers, truly. And once the Concubines had thoroughly greeted and fussed over their sons, they'd want to talk to him too, which would be pleasant. </BodyCopy>
      <BodyCopy>He considered his father's other Concubines to be his aunts. The <span className="italic">Emeritus</span> Concubines, anyway. He couldn't think of the ones his own age as aunts. He had no good word for what those women were to him. Certainly not sisters. Ezeny didn't have sisters. The Matrons, guardians of the Phillips family genome, made sure of that. </BodyCopy>
      <BodyCopy>Outside, the limo pulled up and the footman opened the back. One by one eleven beautiful older women emerged wearing cashmere peignoir robes over a rainbow of calf-length silk wrap dresses. Ezeny didn't understand why a man his father's age considered these women past their prime, but his aunts didn't seem bothered by their retirement, so neither was he. </BodyCopy>
      <BodyCopy>Cold air rushed through the revolving doors as the Concubines strolled in to greet their sons. Ezeny watched only a little wistfully as each of his half brothers welcomed his mother with fond smiles and a kiss on each cheek. Despite her age, his father still considered Ezeny's own mother beautiful enough to keep for occasional duty across town in Tower A, the family's primary skyscraper. His father would not be parted from any of his Concubines still on the 'active' roster. Not even for a few hours. Not for many years. </BodyCopy>
      <BodyCopy>Arms in elbows, his half brothers escorted their mothers past the foyer's welcome desk and into the grand banquet hall of the Tower C high-rise. Ezeny followed them alone, eager for his father's announcement to be over so he could eat dinner. </BodyCopy>
      <BodyCopy>Octagonal columns lined the dining hall. A forgettable sort of jazzy dining music emanated from floating speaker spheres, and a holographic vidwindow hovered at the end of the hall in preparation for his father's announcement. The word 'standby' was projected at the center. </BodyCopy>
      <BodyCopy>Twenty tables for family, guests, and staff were set with gold-plated utensils, sweating glass goblets of ice water, and unfortunately empty plates. Barren plates. Desolate plates. And flower arrangements at the table centers where the bread baskets ought to be. </BodyCopy>
      <BodyCopy>Ezeny could smell food cooking, though. Buttery garlic bread, slices of tube protein roasting in various barbeque sauces. His stomach did not rumble, because he'd been snitching food all day. But there was always room for more. Especially since his favorite thing when he felt a little lonesome, was to go pester his favorite cooking maid. The 'event' wasn't scheduled to start for fifteen more minutes. There was still time. He grinned and veered off toward the double doors that led to the kitchen. </BodyCopy>
      <BodyCopy>Inside, steam rose from bubbling pots. Cooks with aprons tied over tight-fitting gray work robes busied themselves between rows of chrome countertops. Vegetables sizzled in pans. Yren stood in the back, chopping potatoes with a stern expression. He always called her 'Cricket,' just to mess with her. </BodyCopy>
      <BodyCopy>She'd joined the household staff when they were both ten and they'd become fast friends. Well, friends in the way a dog and a cat were friends. Him with thoughtless enthusiasm. Her with acquiescing tolerance. </BodyCopy>
      <BodyCopy>She was pale and angular with a rigid backbone, captivatingly reproachful eyebrows, and a prickly personality that Ezeny delighted in poking at. But they'd both turned nineteen that year and he was worried that other men were going to notice that she'd become rather pretty without appreciating how much fun she could be. </BodyCopy>
      <BodyCopy>He approached her from behind and tapped her shoulder. “My, but your hairnet looks lovely today,” he said. </BodyCopy>
      <BodyCopy>She startled and swatted at him, then turned back to chopping potatoes, this time with a bemused expression. “Sounds like you want something. What is it now?”	</BodyCopy>
      <BodyCopy>He chewed his lip. “I need your help, Cricket. I ate all the sweet buns.” </BodyCopy>
      <BodyCopy>She frowned. “So, you want an antacid?”</BodyCopy>
      <BodyCopy>“No! I need you to make more! The Matrons will skin me if they find out I ate them all before the party.”</BodyCopy>
      <BodyCopy>“You indulge too much. One of these days I'll stop bailing you out, Ez. Then you'll be sorry. Anyway, I knew you'd do something like this.”</BodyCopy>
      <BodyCopy>She bent and opened a cabinet. She pulled out a second tray piled high with warm, frosted pastries. He grinned at her. </BodyCopy>
      <BodyCopy>“You are literally the best. But you still may need to make even more.” He grabbed the top bun and took a huge bite, locking eyes with her as he chewed. Her eyelid jumped in irritation. Cricket's eyes sparkled when she got an eye tic. </BodyCopy>
      <BodyCopy>She shook her head. “If you keep gorging yourself, you'll go to fat.” </BodyCopy>
      <BodyCopy>“Life goals!” he said. He winked at her and wheeled to leave the kitchen. He collided with a Matron—a different one than had whacked him with the fan. Matrons seemed to pop up out of nowhere. How <span className="italic">did </span>they do it? </BodyCopy>
      <BodyCopy>She frowned at him. “You oughtn't wink at that one. I know you<span className="italic"> </span>mean nothing untoward, young master, but girls like Yren here tempt young men of good families into traps with their wiles.” </BodyCopy>
      <BodyCopy>He grinned back at Cricket. She stared coldly at the Matron, the fun gone out of her eyes. He noted that Cricket already had a fresh batch of dough out for the more buns he'd requested. <span className="italic">Excellent.</span></BodyCopy>
      <BodyCopy>“What, Cricket? Cricket's not a <span className="italic">girl, </span>girl. She's just regular people,” he said.</BodyCopy>
      <BodyCopy>Cricket rolled her eyes and punched the dough. A frighteningly hard punch. “I wouldn't have him anyway,” said Cricket. </BodyCopy>
      <BodyCopy>She fancied him, he was pretty sure. </BodyCopy>
      <BodyCopy>“Careful around her,” cautioned the Matron. “She is not a proper lady. There is wantonness in Yren's genetics.” </BodyCopy>
      <BodyCopy>The Matron herded Ezeny from the kitchen back into the dining hall where more of the family had gathered. <span className="italic">Wantonness. Great word. Oh, please let there be wantonness. </span>He definitely fancied Cricket. </BodyCopy>
      <BodyCopy>Someday, Ezeny would have enough seniority to do whatever he pleased. Including taking an improper Concubine, if Cricket would have him. He wasn't <span className="italic">completely </span>sure she would. It would be a scandal, but so what? Ezeny wasn't known for being respectable. </BodyCopy>
      <BodyCopy>All he wanted from life was good food, fun parties with lots of people, and the stoic girl who watched the century-old illegal classic movies with him. He liked <span className="italic">Star Wars</span> and <span className="italic">The Princess Bride</span>. But his favorite was <span className="italic">The Lion King</span>. It still made him cry when Simba's dad came back as a glowing cloud lion, and he never remembered a handkerchief. </BodyCopy>
      <BodyCopy>“For God's sake. How many times have you seen this?” Cricket would say. Then she'd hand him a tissue. <span className="italic">She</span> never cried, but she brought tissues anyway because <span className="italic">he</span> always did. That stuff. That was what the good life was made of. </BodyCopy>
      <BodyCopy>Trays of hors d'oeuvres had made their way to the dining room. Ezeny snagged a bite of land lobster salad on brioche as the Matron dragged him past it toward the seat with his name card. <span className="italic">Ooh, </span>he thought. <span className="italic">Assigned seating. </span>This <span className="italic">was </span>an auspicious occasion. </BodyCopy>
      <BodyCopy>He scooted his chair up to the table with five of his half brothers. Little Koal, only sixteen, squirmed and tugged at the starched lace of his itchy vestee shirt. Ezeny grimaced in sympathy but reveled in the feeling of his silk robe against his own bare skin. Poor Koal hadn't figured out yet it didn't pay to be dutiful and proper. </BodyCopy>
      <BodyCopy>Arabel, oldest of the Tower C boys, elbowed Koal and frowned. “Sit up straight. It's starting.”</BodyCopy>
      <BodyCopy>The overhead lights dimmed, and the word 'standby' on the vidwindow dissolved into an image of Kanary Phillips. It was a recording as usual. Whatever his father was going to say was important enough to spawn a lavish party here in Tower C, but it wasn't important enough to warrant an actual visit from the family patriarch. </BodyCopy>
      <BodyCopy>Kanary Phillips was in his late seventies. The 'type specimen of an apex genome,' the Matrons said. They whispered of his 'sexually attractive facial structure,' 'masculine jawline,' and 'genetically desirable butterscotch skin.' They claimed their assessments were scientific, but their observations about his father always icked Ezeny out. To his eyes, Kanary just looked like another old guy. </BodyCopy>
      <BodyCopy>Kanary was seated behind a desk, smiling warmly, hands folded. Three beautiful women wearing open jewel-toned kimonos over shimmering sheath dresses surrounded him, each with hands placed lovingly on Kanary's shoulders. They were all about Ezeny's age, the newest Phillips Concubines. The redhead to his father's right was visibly pregnant. </BodyCopy>
      <BodyCopy>Ezeny felt no emotions when the image of his father popped up on screen. He was <span className="italic">supposed </span>to feel love and filial devotion. But he'd only met the man a handful of times for a brief handshake. </BodyCopy>
      <BodyCopy>“My beautiful Tower C boys!” the recording of Ezeny's father said. “Great news! Your time has come to defend Everland against the scourge of McCreedia.”</BodyCopy>
      <BodyCopy><span className="italic">Wait, what? </span>The war? Ezeny was confused. Wealthy boys from the high-rises didn't join the war. He frowned. This sounded like work. </BodyCopy>
      <BodyCopy>“That's right! Our brave Everland soldiers have got the McCreedian dogs on their heels. Our City State is poised to win the war of McCreedian aggression! The Military just needs a teensy few more men to send those devils packing and the Phillips clan will answer.” </BodyCopy>
      <BodyCopy>His father lifted a sword. Ezeny lifted an eyebrow. <span className="italic">Why the heck does he have a sword?</span> The war was fought with laser guns. <span className="italic">It must be for show, </span>he decided. </BodyCopy>
      <BodyCopy>A montage of battle footage rolled. Exciting explosions. Blue, red, and green lasers flashed. A fresh-faced blond soldier hoisted the purple and gold flag of Everland to thunderous applause from his mates. </BodyCopy>
      <BodyCopy>“And of course, you'll be fighting alongside Everland's great High Warrior heroes.” </BodyCopy>
      <BodyCopy>A hush fell on the table of Ezeny's brothers and spread to the entire assembled Phillips' clan. On the vidwindow, three soldiers dressed in mech battle suits stood, backdropped by the smoking ruin of a McCreedian high-rise. </BodyCopy>
      <BodyCopy>“The Midnight Demon,” Kanary said. </BodyCopy>
      <BodyCopy>The vidwindow focused on the caped man in black and silver armor. His helmet bore silver lightning bolts on either side. A volley of McCreedian hand grenades rained on Everland soldiers, but the Midnight Demon stretched out a hand and sent the explosives flying back toward the McCreedians, as if by magic—the metal manipulation powers only High Warriors had. </BodyCopy>
      <BodyCopy>“The Screaming Eagle.”</BodyCopy>
      <BodyCopy>The screen offered a closeup of an armored man in red and blue with shoulders wider than the TorsoMan™ action figures Ezeny had played with as a child. And still did on occasion when no one was looking.<span className="italic"> </span>The Screaming Eagle leaped onto the lid of a trash can lying amid the war debris and used it to fly into the sky like it was a surfboard. </BodyCopy>
      <BodyCopy>“And the Ice Dragon.” </BodyCopy>
      <BodyCopy>A warrior in white and silver armor seized the barrel of a McCreedian hover tank and crushed it in his fist like a soda can. </BodyCopy>
      <BodyCopy>His brothers erupted into applause. They'd all been playing 'High Warrior' since they were kids. Now, here was a chance to join their heroes for real. Ezeny glanced around the room. Most of the servants applauded. His Concubine aunts, however, sat with fake smiles frozen on their faces. Misgivings tripped alarms in Ezeny's brain. </BodyCopy>
      <BodyCopy>The video image dissolved back to his father. </BodyCopy>
      <BodyCopy>“Don't let me down, Tower C boys. And don't worry. You won't be alone. Your brothers from Tower B are already at the front, eagerly awaiting you lot. Of course, the Tower A generation won't be going to war. Their responsibilities as my oldest, most important<span className="italic"> </span>heirs don't afford them the privilege of fighting for Everland's glory. Someone's got to stay home and take care of business. Ha, ha! Not like <span className="italic">you </span>lucky young men.”</BodyCopy>
      <BodyCopy>He smiled. </BodyCopy>
      <BodyCopy>“The six- to twelve-year-old crop of strapping Tower D sons is ripening nicely and will join you when they come of age. I can't wait for you to meet them all on the front.”</BodyCopy>
      <BodyCopy>He chuckled and rubbed the red-head's round belly fondly. She covered her smile with a bejeweled hand and blushed. </BodyCopy>
      <BodyCopy>“And I may as well tell you, because you're family. My new Concubines and I have started generation E already. Scaffolding's going up on the new high-rise as we speak. So. As you see, Family Phillips is strong, growing, and winning glory. You're all part of something great. And I know you'll do me proud, sons. Daddy loves you.”</BodyCopy>
      <BodyCopy>A final montage of war footage rolled. Exciting stuff. The High Warriors performed their mysterious, superpowered battle techniques. Ordinary soldiers cheered. </BodyCopy>
      <BodyCopy>But then a short clip of battle footage caught Ezeny's eye. Something terrifying in the background. <span className="italic">Corpses?</span> The sweet buns turned to lead in his stomach. He stood.</BodyCopy>
      <BodyCopy>“Computer, go back a bit and pause,” he said, loud enough for the computer to recognize his voice.</BodyCopy>
      <BodyCopy>Mumbles rose from the dinner guests. He understood their undercurrent. Freewheeling Ezeny had interrupted his own Father's video announcement. What would<span className="italic"> </span>that hedonistic knave do next? Let them talk. He didn't care. The computer scanned back until he saw the disturbing image again. </BodyCopy>
      <BodyCopy>“There!” he told it. </BodyCopy>
      <BodyCopy>Behind the Screaming Eagle he could make out a pile of bodies in McCreedian Military fatigues. Grey flesh streaked with dried blood. He turned to his family and pointed at the vidwindow. </BodyCopy>
      <BodyCopy>“That doesn't look good.” </BodyCopy>
      <BodyCopy>Little Koal tried to comfort him. “Those are the <span className="italic">enemy's </span>troops. Not ours.”</BodyCopy>
      <BodyCopy>“That's not better,” Ezeny said. “We'd have to kill<span className="italic"> them</span>.” </BodyCopy>
      <BodyCopy>Arabel rolled his eyes. “That's what war <span className="italic">is, </span>dork.”</BodyCopy>
      <BodyCopy>“So, the McCreedians will be trying to kill <span className="italic">us </span>right back? I think this is going to be dangerous,” said Ezeny. </BodyCopy>
      <BodyCopy>“Come off it, Ez. You'll be fine. Soldiers come back all the time,” said Arabel.</BodyCopy>
      <BodyCopy>Rhyne, the kindest of his older brothers, elbowed him and grinned. “Don't worry. I'm sure the Military's got a cooking battalion that makes stews and not war.”</BodyCopy>
      <BodyCopy>“Really?” said Ezeny. “That'd be the one I'd want to join.”</BodyCopy>
      <BodyCopy>Arabel gave him a stern look. “Don't shame the family,” he said. “You're ridiculous enough. The Phillips boys are brave. We'll answer father's call for the glory of Everland. And we brothers will be all the closer for having served together.”</BodyCopy>
      <BodyCopy>Ezeny folded his arms. “<span className="italic">If</span> we all come back…”</BodyCopy>
      <BodyCopy>“Ez, it was one photo,” Rhyne said gently. “You're focusing on the one bad thing. You saw how the war really is right there on the video. It's mostly winning.” </BodyCopy>
      <BodyCopy>Ezeny locked eyes with Cricket, who'd poked her hair-netted head out of the kitchen to watch the announcement. She was wide-eyed and pale. Her lips were drawn into a thin line. Confirmation. His gut reaction was right. This was not glorious. This was bad. </BodyCopy>
      <BodyCopy>Ezeny couldn't be as sanguine about the war as his half brothers. Over their years of friendship, Cricket had told him stories of life outside the high-rises. The war wasn't going well, or why else would Everland High Command make even wealthy boys fight? <span className="italic">They must be running low on poor men.</span></BodyCopy>
      <BodyCopy>His safety was shattering. His father's money had kept him cushioned from all the things people like Cricket had to face every day. Ezeny liked being cushioned, dammit. </BodyCopy>
      <BodyCopy><span className="italic">How am </span>I <span className="italic">going to fight in a war? </span>He was made for eating and drinking and kissing pretty girls. He was certain of that. His flesh crawled looking at the images of the dead. He didn't know if it would be worse to <span className="italic">be </span>a corpse or make someone <span className="italic">else </span>into a corpse. <span className="italic">War presents opportunities for both,</span> he realized. <span className="italic">Lovely.</span></BodyCopy>
    </div>
      <hr className="pb-3 border-black" />
      <BodyCopy className="pb-3 italic">You may continue reading by <Link className="underline" to={theReluctantCyborg.ebookStructuredData.offers.hasGS1DigitalLink}>downloading the ebook</Link> or <Link className="underline" to={theReluctantCyborg.paperbackStructuredData.offers.hasGS1DigitalLink}>buying a paperback</Link> from amazon.</BodyCopy>
      
    <Footer />
  </>)
}

export default TheReluctantCyborg;