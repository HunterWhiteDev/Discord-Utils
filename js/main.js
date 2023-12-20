console.log("loaded");

const targetNode = document.getElementsByTagName("body")[0];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      if (mutation?.addedNodes[0]?.className === "lazyImg_dafbb7") {
        // Get Image node then convert url without width and heigh restriction
        let image = mutation.addedNodes[0];
        let params = new URLSearchParams(image.src);
        params.delete("width");
        params.delete("height");
        const encodedUrl = params.toString();
        const decodedUrl = decodeURIComponent(encodedUrl);
        console.log({ decodedUrl });
        image.src = decodedUrl;
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
