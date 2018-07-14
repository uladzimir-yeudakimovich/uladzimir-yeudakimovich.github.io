var observer = new IntersectionObserver(changes => {
  for (const change of changes) {
    console.log(change.time);               // Timestamp when the change occurred
    console.log(change.rootBounds);         // Unclipped area of root
    console.log(change.boundingClientRect); // target.boundingClientRect()
    console.log(change.intersectionRect);   // boundingClientRect, clipped by its containing block ancestors, and intersected with rootBounds
    console.log(change.intersectionRatio);  // Ratio of intersectionRect area to boundingClientRect area
    console.log(change.target);             // the Element target
  }
}, {});

// Watch for intersection events on a specific target Element.
observer.observe(target);

// Stop watching for intersection events on a specific target Element.
observer.unobserve(target);

// Stop observing threshold events on all target elements.
observer.disconnect();
