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
    <div className="grid mx-5 w-4/5 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <a className="place-self-center md:place-self-start" href={firstOffer.hasGS1DigitalLink}><img className="max-h-80" src={firstThumb.contentUrl} alt={firstThumb.caption} /></a>
        <div className="col-span-1 md:col-span-3 order-last">
            <h2 className='font-sans-serif text-2xl pb-4 md:text-3xl font-normal text-brown-900'>{schemaData.name}</h2>
            <p className='font-sans-serif text-lg md:text-xl pb-4'>{schemaData.abstract}</p>
            <div className='font-sans-serif text-base pb-4'>{schemaData.rating || "No ratings yet"}</div>
            <ul className='font-sans-serif text-sm pb-4'>
                <li><strong>Published:</strong> {schemaData.datePublished}</li>
                <li><strong>Genre:</strong> {schemaData.genre}</li>
                <li><strong>Keywords:</strong> {schemaData.keywords}</li>
            </ul>
            <div>List price: {firstOffer.price} ({firstOffer.acceptedPaymentMethod})</div>
            <a className='cursor-pointer inline-block font-bold mt-4 py-2 px-6 rounded-full bg-black hover:underline text-white' href={firstOffer.hasGS1DigitalLink}>Buy Now</a>
        </div>
    </div>
  );
};

export default ShortStoryCard;
