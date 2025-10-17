
const paperbackStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": "979-8-9905292-2-9",
    "numberOfPages": 270,
    "size": "6x9 inches",
    "bookFormat": "Paperback",
    "name": "Voyager 2.0",
    "abstract": "In the distant future a beachball-sized spacecraft hurtles through deep space, launched from a dying Earth and populated by billions of thinking, feeling AI 'souls'—bodyless people created to traverse the stars, the digital descendants of the human race.",
    "description": "A ship with a billion souls aboard and the only pilot is losing his mind",
    "author": {
      "@type": "Person",
      "name": "E.M. Denison",
      "jobTitle": "Author",
      "url": "https://emdenison.com",
      "seller": "Barnes & Noble",
    },
    "copyrightYear": "2025",
    "datePublished": "2025-10-15",
    "genre": "Science Fiction",
    "keywords": "reality shifting, sci-fi romance, sci-fi comedy, sci-fi noir, cyberpunk, sci-fi adventure, dimension hopping",
    "thumbnailUrl": "../img/voyager-2.0-cover.jpg",
    "image": "../img/voyager-2.0-compound-books.png",
    "offers": {
      "@type": "Offer",
      "availability": "PreOrder",
      "price": "$17.99",
      "priceCurrency": "USD",
      "hasGS1DigitalLink": "https://www.barnesandnoble.com/w/voyager-20-em-denison/1148468154?ean=9798990529229",
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
      "availability": "https://schema.org/PreOrder",
      "price": "$5.99",
      "priceCurrency": "USD",
      "seller": "Barnes & Noble",
      "hasGS1DigitalLink": "https://www.barnesandnoble.com/w/voyager-20-em-denison/1148468154?ean=9798990529236"
    },
  }

  export default {paperbackStructuredData, ebookStructuredData}