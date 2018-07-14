var io = new IntersectionObserver(
  entries => {
    console.log(entries);
  },
  {
    /* Using default options. Details below */
  }
);
// Start observing an element
// io.observe(element);

// Stop observing an element
// io.unobserve(element);

// Disable entire IntersectionObserver
// io.disconnect();

new IntersectionObserver(entries => {/* … */}, {
  // The root to use for intersection.
  // If not provided, use the top-level document’s viewport.
  root: null,
  // Same as margin, can be 1, 2, 3 or 4 components, possibly negative lengths.
  // If an explicit root element is specified, components may be percentages of the
  // root element size.  If no explicit root element is specified, using a percentage
  // is an error.
  rootMargin: "0px",
  // Threshold(s) at which to trigger callback, specified as a ratio, or list of
  // ratios, of (visible area / total area) of the observed element (hence all
  // entries must be in the range [0, 1]).  Callback will be invoked when the visible
  // ratio of the observed element crosses a threshold in the list.
  threshold: [0],
});
