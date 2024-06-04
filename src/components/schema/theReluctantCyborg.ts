
const paperbackStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": "979-8990529205",
    "numberOfPages": 407,
    "size": "6x9 inches",
    "bookFormat": "Paperback",
    "name": "The Reluctant Cyborg",
    "alternativeHeadline": "A Sci-fi Dystopian Comedy",
    "abstract": "A lighthearted dystopian sci-fi satire that reads like Upton Sinclair's The Jungle retold as a buddy love comedy between an irresponsible super cyborg and a judgmental medical robot.",
    "author": {
      "@type": "Person",
      "name": "E.M. Denison",
      "jobTitle": "Author",
      "url": "https://emdenison.com",
      "seller": "Amazon",
    },
    "copyrightYear": "2024",
    "datePublished": "2024-05-30",
    "genre": "Science Fiction",
    "keywords": "Dystopian comedy,Buddy love,Evil robot,friendly robot,near future cyberpunk,sci-fi satire,post-apocalyptic,reluctant hero,surprise baby,friends to lovers,transhumanism,light-hearted comedy,Connie Willis,Jasper Fforde,John Scalzi,Douglas Adams,Terry Pratchett,working mom,war hero,Martha Wells,pop-culture references",
    "thumbnailUrl": "../img/reluctant-cyborg-cover.jpg",
    "offers": {
      "@type": "Offer",
      "availability": "InStock",
      "price": "$17.99",
      "priceCurrency": "USD",
      "hasGS1DigitalLink": "https://a.co/d/61niJFB",
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rebekah"
        },
        "datePublished": "2024-05-28",
        "reviewBody": "This is scifi that challenges like Asimov with James S A Corey pacing, Anne McCaffrey world building - and more of Denison's signature immersive style and concertina wire humour.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Nick"
        },
        "datePublished": "2024-05-31",
        "reviewBody": "I loved it, as usual. E.M. Denison does a great job of keeping it light and fast paced. Her books tend to push the boundaries of sci-fi and this is no exception.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },],
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://emdenison.com/book/the-reluctant-cyborg"
    }
  }

  const ebookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": "979-8990529212",
    "numberOfPages": paperbackStructuredData.numberOfPages,
    "bookFormat": "EBook",
    "name": paperbackStructuredData.name,
    "alternativeHeadline": paperbackStructuredData.alternativeHeadline,
    "abstract": paperbackStructuredData.abstract,
    "author": {
      "@type": "Person",
      "name": "E.M. Denison",
      "jobTitle": "Author",
      "url": "https://emdenison.com"
    },
    "copyrightYear": paperbackStructuredData.copyrightYear,
    "datePublished": paperbackStructuredData.datePublished,
    "genre": paperbackStructuredData.genre,
    "keywords": paperbackStructuredData.keywords,
    "thumbnailUrl": paperbackStructuredData.thumbnailUrl,
    "offers": {
      "@type": "Offer",
      "asin": "B0D3YKH76X",
      "availability": "https://schema.org/InStock",
      "price": "$5.99",
      "priceCurrency": "USD",
      "seller": "Amazon",
      "hasGS1DigitalLink": "https://www.amazon.com/dp/B0D3YKH76X"
    },
  }

  export default {paperbackStructuredData, ebookStructuredData}