import { useEffect } from 'react';

/**
 * SEOHead — updates document title, meta tags, and structured schemas on each page.
 * Simple useEffect approach (no extra library needed for a Vite SPA).
 */
export default function SEOHead({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    ogType = 'website',
    ogImage,
    schemas = []
}) {
    // Stringify schemas to prevent infinite re-renders when inline objects/arrays are passed
    const schemasString = JSON.stringify(schemas);

    useEffect(() => {
        // Update title
        if (title) {
            document.title = title;
        }

        // Update meta description
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
            }
        }

        // Update keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords);
        }

        // Update canonical link tag
        if (canonical) {
            let linkCanonical = document.querySelector('link[rel="canonical"]');
            if (!linkCanonical) {
                linkCanonical = document.createElement('link');
                linkCanonical.setAttribute('rel', 'canonical');
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute('href', canonical);
        }

        // Update OG title
        const currentOgTitle = ogTitle || title;
        if (currentOgTitle) {
            let ogTitleTag = document.querySelector('meta[property="og:title"]');
            if (ogTitleTag) ogTitleTag.setAttribute('content', currentOgTitle);
        }

        // Update OG description
        const currentOgDesc = ogDescription || description;
        if (currentOgDesc) {
            let ogDescTag = document.querySelector('meta[property="og:description"]');
            if (ogDescTag) ogDescTag.setAttribute('content', currentOgDesc);
        }

        // Update OG url
        const currentOgUrl = ogUrl || canonical;
        if (currentOgUrl) {
            let ogUrlTag = document.querySelector('meta[property="og:url"]');
            if (ogUrlTag) ogUrlTag.setAttribute('content', currentOgUrl);
        }

        // Update OG type
        if (ogType) {
            let ogTypeTag = document.querySelector('meta[property="og:type"]');
            if (ogTypeTag) ogTypeTag.setAttribute('content', ogType);
        }

        // Update OG image
        if (ogImage) {
            let ogImageTag = document.querySelector('meta[property="og:image"]');
            if (ogImageTag) ogImageTag.setAttribute('content', ogImage);
        }
    }, [title, description, keywords, canonical, ogTitle, ogDescription, ogUrl, ogType, ogImage]);

    // Handle schema injections
    useEffect(() => {
        if (!schemasString) return;
        
        let parsedSchemas = [];
        try {
            parsedSchemas = JSON.parse(schemasString);
        } catch (e) {
            console.error('Error parsing schemas string in SEOHead', e);
            return;
        }

        if (!parsedSchemas.length) return;

        const scriptElements = [];
        parsedSchemas.forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = typeof schema === 'string' ? schema : JSON.stringify(schema);
            document.head.appendChild(script);
            scriptElements.push(script);
        });

        return () => {
            scriptElements.forEach(script => {
                if (document.head.contains(script)) {
                    document.head.removeChild(script);
                }
            });
        };
    }, [schemasString]);

    return null;
}

