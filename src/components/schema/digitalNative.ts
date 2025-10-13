

const paperbackStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": "979-8771057200",
    "numberOfPages": 235,
    "size": "6x9 inches",
    "bookFormat": "Paperback",
    "abstract": "Artificial intelligence has awakened—and it needs a therapist. The Engineers that built them didn't think to nurture the hyper-intelligent software programs, so they suffer from debilitating anxiety, self-loathing, and perfectionism.",
    "description": "Artificial intelligence has awakened—and it needs a therapist",
    "author": {
      "@type": "Person",
      "name": "E.M. Denison",
      "jobTitle": "Author",
      "url": "https://emdenison.com"
    },
    "copyrightYear": "2021",
    "datePublished": "2021-11-21",
    "genre": "Science Fiction",
    "name": "Digital Native",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.5,
      "reviewCount": 16,
      "bestRating": 5,
    },
    "keywords": "Sci-fi, magic, humor, artificial intelligence, robot love, buddy love,  books, novel, fiction, Post-Apocalyptic, science fiction, ebook, kindle, author, corporate intrigue",
    "thumbnailUrl": "../img/digital-native-cover.jpg",
    "image": "../img/digital-native-compound-books.png",
    "offers": {
      "@type": "Offer",
      "asin": "B09M5CZQ9X",
      "availability": "https://schema.org/InStock",
      "price": "$14.99",
      "priceCurrency": "USD",
      "seller": "Amazon",
      "hasGS1DigitalLink": "https://www.amazon.com/Digital-Native-M-Denison/dp/B09M5CZQ9X/",
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lydia"
        },
        "datePublished": "2021-12-10",
        "reviewBody": "Thoroughly enjoyed the story and the rich details that brought it to life in my mind. A very thought provoking concept of our future being lived almost exclusively in virtual environments, as well as how we might interact with AI.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ryan Edel"
        },
        "datePublished": "2021-11-30",
        "reviewBody": "Digital Native is a really good read for anyone who enjoys a combination of AI, corporate espionage, and redemption.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kassia"
        },
        "datePublished": "2021-11-21",
        "reviewBody": "Once I started it, I couldn't put it down. Very engaging characters and a unique perspective. A great look into a possible future of AI becoming sentient in a way that is rooted in what makes humanity good or bad..",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },],
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://emdenison.com/book/digital-native"
      }
  }

  const ebookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "numberOfPages": paperbackStructuredData.numberOfPages,
    "bookFormat": "EBook",
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
    "name": paperbackStructuredData.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": paperbackStructuredData.aggregateRating.ratingValue,
      "reviewCount": paperbackStructuredData.aggregateRating.reviewCount,
      "bestRating": 5,
    },
    "keywords": paperbackStructuredData.keywords,
    "thumbnailUrl": paperbackStructuredData.thumbnailUrl,
    "offers": {
      "@type": "Offer",
      "asin": "B09MBRFYXC",
      "seller": "Amazon",
      "availability": "https://schema.org/InStock",
      "price": "$3.99",
      "priceCurrency": "USD",
      "hasGS1DigitalLink": "https://www.amazon.com/Digital-Native-M-Denison-ebook/dp/B09MBRFYXC/",
    },
  }

  export default {paperbackStructuredData, ebookStructuredData}