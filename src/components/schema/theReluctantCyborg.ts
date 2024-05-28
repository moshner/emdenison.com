
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
      "availability": "PreOrder",
      "price": "$17.99",
      "priceCurrency": "USD",
      "hasGS1DigitalLink": "https://a.co/d/61niJFB",
    },
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