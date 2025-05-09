// src/pages/help/[...slug].js
import { useRouter } from 'next/router';

const HelpContent = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Default content for /help route
  if (!slug || slug.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p>Welcome to the Help Center. How can we assist you today?</p>
      </div>
    );
  }

  // Show specific content based on the slug
  const pageSlug = slug[0]; // E.g. faqs, contact, etc.
  let content;

  switch (pageSlug) {
    case 'faqs':
      content = <p>Here are the frequently asked questions.</p>;
      break;
    case 'contact':
      content = <p>You can contact us at support@moviehouse.com.</p>;
      break;
    case 'privacy':
      content = <p>Privacy Policy: We value your privacy...</p>;
      break;
    default:
      content = <p>Sorry, the help section you're looking for does not exist.</p>;
      break;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1)}</h1>
      {content}
    </div>
  );
}

export default HelpContent; // Default export
