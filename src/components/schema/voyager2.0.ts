
const paperbackStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": "979-8-9905292-2-9",
    "numberOfPages": 370,
    "size": "6x9 inches",
    "bookFormat": "Paperback",
    "name": "Voyager 2.0",
    "abstract": "In the distant future a beachball-sized spacecraft hurtles through deep space, launched from a dying Earth and populated by billions of thinking, feeling AI 'souls'—bodyless people created to traverse the stars, the digital descendants of the human race.",
    "author": {
      "@type": "Person",
      "name": "E.M. Denison",
      "jobTitle": "Author",
      "url": "https://emdenison.com",
      "seller": "Amazon",
    },
    "copyrightYear": "2025",
    "datePublished": "2025-10-15",
    "genre": "Science Fiction",
    "keywords": "reality shifting, sci-fi romance, sci-fi comedy, sci-fi noir, cyberpunk, sci-fi adventure, dimension hopping",
    "thumbnailUrl": "../img/voyager-2.0-cover.jpg",
    "offers": {
      "@type": "Offer",
      "availability": "InStock",
      "price": "$17.99",
      "priceCurrency": "USD",
      "hasGS1DigitalLink": "TODO",
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://emdenison.com/book/voyager-2.0"
    }
  }

  const ebookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": "979-8-9905292-3-6",
    "numberOfPages": paperbackStructuredData.numberOfPages,
    "bookFormat": "EBook",
    "name": paperbackStructuredData.name,
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
      "hasGS1DigitalLink": "TODO"
    },
  }

  export default {paperbackStructuredData, ebookStructuredData}