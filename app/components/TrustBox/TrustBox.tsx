/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

declare global {
  interface Window {
    Trustpilot: any;
  }
}

const TrustBox = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if ((window as any).Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="54ad5defc6454f065c28af8b"
      data-businessunit-id="5c12d8d7393a0100015d1c3e"
      data-style-height="240px"
      data-style-width="100%"
      data-theme="light"
      data-tags="trainer:Nml4dDMzbkNoYXJhY3Ryekj+B9CXUA=="
      data-stars="1,2,3,4,5"
      data-review-languages="en"
    >
      <a
        href="https://www.trustpilot.com/review/scrum.org"
        target="_blank"
        rel="noreferrer"
        className="mx-auto"
      >
        {" "}
        Trustpilot
      </a>
    </div>
  );
};

export default TrustBox;
