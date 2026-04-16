"use client";

import { useEffect, useState } from "react";

/**
 * Loads non-essential third-party scripts only after the user
 * first interacts with the page (scroll, click, touch, or key press).
 * This keeps LCP and TBT clean for Google Ads landing page scoring.
 *
 * Scripts deferred: Meta Pixel, Ahrefs Analytics, Zoey AI, Microsoft Clarity
 * Scripts NOT deferred (loaded in layout): GA4, GTM (needed for conversion tracking)
 */

const META_PIXEL_ID = "631545721627652";

function loadMetaPixel() {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (w.fbq) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.onload = () => {
    w.fbq("init", META_PIXEL_ID);
    w.fbq("track", "PageView");
  };
  // Set up queue before script loads
  w.fbq = w._fbq = function () {
    // eslint-disable-next-line prefer-rest-params
    w.fbq.queue.push(arguments);
  };
  w.fbq.push = w.fbq;
  w.fbq.loaded = true;
  w.fbq.version = "2.0";
  w.fbq.queue = [];
  document.head.appendChild(script);
  w.fbq("init", META_PIXEL_ID);
  w.fbq("track", "PageView");
}

function loadAhrefs() {
  const s = document.createElement("script");
  s.src = "https://analytics.ahrefs.com/analytics.js";
  s.dataset.key = "URYFtNox7eR9I3W12rlXvA";
  s.async = true;
  document.head.appendChild(s);
}

function loadZoey() {
  const s = document.createElement("script");
  s.src = "https://www.zoeyai.com.au/widget.js";
  s.dataset.key = "pk_98c82458cae7045f337169e0";
  s.async = true;
  document.head.appendChild(s);
}

function loadClarity() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.clarity = w.clarity || function () {
    // eslint-disable-next-line prefer-rest-params
    (w.clarity.q = w.clarity.q || []).push(arguments);
  };
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://www.clarity.ms/tag/w27dnl2d8m";
  document.head.appendChild(t);
}

export default function DeferredScripts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    const load = () => {
      setLoaded(true);
      loadMetaPixel();
      loadAhrefs();
      loadZoey();
      loadClarity();
      cleanup();
    };

    const events = ["scroll", "click", "touchstart", "mousemove", "keydown"] as const;

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, load, { capture: true }));
    };

    // If user has already scrolled (e.g. browser restored scroll position), load immediately
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
      load();
      return;
    }

    events.forEach((e) => window.addEventListener(e, load, { capture: true, once: true, passive: true }));

    return cleanup;
  }, [loaded]);

  // Noscript fallback for Meta Pixel only
  if (loaded) return null;
  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
