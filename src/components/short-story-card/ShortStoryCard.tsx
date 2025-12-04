import React, { useState, useEffect } from 'react';

interface Thumbnail {
    caption: string;
    contentUrl: string;
}

interface Offer {
  price: string;
  priceCurrency?: string; // Optional: It's good practice to have this
  acceptedPaymentMethod?: string; // Optional
  hasGS1DigitalLink: string;
}

// Define the shape of your schema data
interface MediaSchema {
  name: string;
  datePublished: string;
  abstract: string;
  genre: string;
  keywords: string;
  rating?:string; // broken
  offers: Offer[];
  thumbnail: Thumbnail[];
}

interface ShortStoryCardProps {
  schemaName: string; // The name of the schema file (e.g., 'mySchema')
}

const ShortStoryCard: React.FC<ShortStoryCardProps> = ({ schemaName }) => {
  const [schemaData, setSchemaData] = useState<MediaSchema | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadSchema = async () => {
      setLoading(true);
      setError(null);
      setSchemaData(null); // Clear previous data

      try {
        // Dynamically import the schema file
        // IMPORTANT: The path `../schemas/${schemaName}` must be
        // resolvable by your bundler (Webpack/Vite).
        // If your schemas are in a different folder, adjust the path.
        const module = await import(`../schema/short-stories/${schemaName}.ts`);

        // Assuming your schema data is exported as 'mediaSchema'
        if (module && module.shortStoryStructuredData) {
          setSchemaData(module.shortStoryStructuredData as MediaSchema);
        } else {
          throw new Error(`Schema ${schemaName} not found or invalid format.`);
        }
      } catch (err) {
        console.error(`Failed to load schema ${schemaName}:`, err);
        setError(`Could not load media information for ${schemaName}.`);
      } finally {
        setLoading(false);
      }
    };

    if (schemaName) {
      loadSchema();
    } else {
      setSchemaData(null);
      setError("No schema name provided.");
      setLoading(false);
    }
  }, [schemaName]); // Re-run effect if schemaName changes

  if (loading) {
    return <div>Loading media...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  if (!schemaData) {
    return <div>No media data available.</div>;
  }

  // Safely get the first offer, if it exists
  const firstOffer = schemaData.offers?.[0];

  
  // Safely get the first thumbnail, if it exists
  const firstThumb = schemaData.thumbnail?.[0];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mx-3 my-6 max-w-xl lg:grid-cols-2">
        <img className="max-h-80" src={firstThumb.contentUrl} alt={firstThumb.caption} /> 
        <div className="order-last">
            <div>{schemaData.name}</div>
            <div>Published: {schemaData.datePublished}</div>
            <div>{schemaData.abstract}</div>
            <div>{schemaData.genre} | {schemaData.keywords}</div>
            <div>{schemaData.rating || "No ratings yet"}</div>
            <div>{firstOffer.price} ({firstOffer.acceptedPaymentMethod})</div>
            <div><a href={firstOffer.hasGS1DigitalLink}>Buy Now</a></div>
        </div>
    </div>
  );
};

export default ShortStoryCard;
