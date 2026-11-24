import { useEffect } from 'react';

const setMetaContent = (attribute, key, value, changes) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    element.dataset.seoManaged = 'true';
    document.head.appendChild(element);
    changes.created.push(element);
  } else if (!changes.originals.has(element)) {
    changes.originals.set(element, element.getAttribute('content'));
  }

  if (value) element.setAttribute('content', value);
  else element.removeAttribute('content');
};

export function useSeo(seo) {
  const schema = seo?.jsonLd ? JSON.stringify(seo.jsonLd) : '';
  const keywords = seo?.keywords?.join(', ') || '';

  useEffect(() => {
    if (!seo?.metaTitle) return undefined;

    const changes = {
      created: [],
      originals: new Map(),
      canonicalCreated: false,
      canonicalOriginal: null,
    };
    const previousTitle = document.title;

    document.title = seo.metaTitle;
    setMetaContent('name', 'description', seo.metaDescription, changes);
    setMetaContent('name', 'keywords', keywords, changes);
    setMetaContent('name', 'robots', 'index, follow', changes);
    setMetaContent('property', 'og:title', seo.metaTitle, changes);
    setMetaContent('property', 'og:description', seo.metaDescription, changes);
    setMetaContent('property', 'og:url', seo.canonical, changes);
    setMetaContent('property', 'og:type', 'article', changes);
    setMetaContent('name', 'twitter:title', seo.metaTitle, changes);
    setMetaContent('name', 'twitter:description', seo.metaDescription, changes);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.dataset.seoManaged = 'true';
      document.head.appendChild(canonical);
      changes.canonicalCreated = true;
    } else {
      changes.canonicalOriginal = canonical.getAttribute('href');
    }
    canonical.setAttribute('href', seo.canonical);

    let script = null;
    if (schema) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'service-seo-schema';
      script.textContent = schema;
      document.head.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
      changes.created.forEach((element) => element.remove());
      changes.originals.forEach((value, element) => {
        if (value === null) element.removeAttribute('content');
        else element.setAttribute('content', value);
      });
      if (changes.canonicalCreated) canonical.remove();
      else if (changes.canonicalOriginal !== null) canonical.setAttribute('href', changes.canonicalOriginal);
      if (script) script.remove();
    };
  }, [seo?.metaTitle, seo?.metaDescription, seo?.canonical, keywords, schema]);
}
