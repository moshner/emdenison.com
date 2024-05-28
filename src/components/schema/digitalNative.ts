import Book from "../../data/digitalNative";
import Author from "../../data/author";

const paperbackStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "isbn": Book.formats.paperback.isbn,
    "numberOfPages": Book.numberOfPages,
    "size": Book.size,
    "bookFormat": Book.formats.paperback.format,
    "abstract": Book.abstract,
    "author": {
      "@type": "Person",
      "name": Author.name,
      "jobTitle": Author.jobTitle,
      "url": Author.url
    },
    "copyrightYear": Book.copyrightYear,
    "datePublished": Book.datePublished,
    "genre": Book.genre,
    "name": Book.title,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": Book.aggregateRating.ratingValue,
      "reviewCount": Book.aggregateRating.reviewCount,
      "bestRating": Book.aggregateRating.bestRating,
    },
    "keywords": Book.keywords,
    "thumbnailUrl": Book.images.thumbnailImg.url,
    "offers": {
      "@type": "Offer",
      "asin": Book.formats.paperback.asin,
      "availability": "https://schema.org/InStock",
      "price": Book.formats.paperback.price,
      "priceCurrency": Book.formats.paperback.priceCurrency,
      "seller": Book.formats.paperback.seller,
      "hasGS1DigitalLink": Book.formats.paperback.sellerURL,
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": Book.reviews[0].author
        },
        "datePublished": Book.reviews[0].datePublished,
        "reviewBody": Book.reviews[0].reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Book.reviews[0].reviewRating.ratingValue
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": Book.reviews[1].author
        },
        "datePublished": Book.reviews[1].datePublished,
        "reviewBody": Book.reviews[1].reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Book.reviews[1].reviewRating.ratingValue
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": Book.reviews[2].author
        },
        "datePublished": Book.reviews[2].datePublished,
        "reviewBody": Book.reviews[2].reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Book.reviews[2].reviewRating.ratingValue
        }
      },],
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": Book.url
      }
  }

  const ebookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    "additionalType": "Product",
    "numberOfPages": Book.numberOfPages,
    "size": Book.size,
    "bookFormat": Book.formats.ebook.format,
    "abstract": Book.abstract,
    "author": {
      "@type": "Person",
      "name": Author.name,
      "jobTitle": Author.jobTitle,
      "url": Author.url
    },
    "copyrightYear": Book.copyrightYear,
    "datePublished": Book.datePublished,
    "genre": Book.genre,
    "name": Book.title,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": Book.aggregateRating.ratingValue,
      "reviewCount": Book.aggregateRating.reviewCount,
      "bestRating": Book.aggregateRating.bestRating,
    },
    "keywords": Book.keywords,
    "thumbnailUrl": Book.images.thumbnailImg.url,
    "offers": {
      "@type": "Offer",
      "asin": Book.formats.ebook.asin,
      "availability": "https://schema.org/InStock",
      "price": Book.formats.ebook.price,
      "priceCurrency": Book.formats.ebook.priceCurrency,
      "seller": Book.formats.ebook.seller,
      "hasGS1DigitalLink": Book.formats.ebook.sellerURL,
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": Book.reviews[0].author
        },
        "datePublished": Book.reviews[0].datePublished,
        "reviewBody": Book.reviews[0].reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Book.reviews[0].reviewRating.ratingValue
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": Book.reviews[1].author
        },
        "datePublished": Book.reviews[1].datePublished,
        "reviewBody": Book.reviews[1].reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Book.reviews[1].reviewRating.ratingValue
        }
      },{
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": Book.reviews[2].author
        },
        "datePublished": Book.reviews[2].datePublished,
        "reviewBody": Book.reviews[2].reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Book.reviews[2].reviewRating.ratingValue
        }
      },
    ],
  "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": Book.url
  }
}
  

  export default {paperbackStructuredData, ebookStructuredData}