import { useEffect } from 'react';

/**
 * SEOHead — updates document title and meta description on each page.
 * Simple useEffect approach (no extra library needed for a Vite SPA).
 */
export default function SEOHead({ title, description }) {
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

        // Update OG title
        if (title) {
            let ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.setAttribute('content', title);
        }

        // Update OG description
        if (description) {
            let ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) ogDesc.setAttribute('content', description);
        }
    }, [title, description]);

    return null;
}
