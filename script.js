
let allImages = [];
let selectedImages = new Set();

function fetchImages() {
  const url = document.getElementById("urlInput").value;
  if (!url) return alert("Please enter a valid BAPS news URL.");

  const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

  fetch(proxy)
    .then(res => res.json())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, "text/html");
      const imgs = Array.from(doc.querySelectorAll("img"))
        .map(img => img.src)
        .filter(src => src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png"));

      allImages = imgs;
      renderImages();
    })
    .catch(err => {
      console.error(err);
      alert("Failed to load images. Please check the URL.");
    });
}

function renderImages() {
  const grid = document.getElementById("imageGrid");
  grid.innerHTML = "";
  allImages.forEach((src, index) => {
    const div = document.createElement("div");
    div.className = "image-item" + (selectedImages.has(src) ? " selected" : "");
    div.onclick = () => toggleSelect(src, div);

    const img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
    grid.appendChild(div);
  });
}

function toggleSelect(src, div) {
  if (selectedImages.has(src)) {
    selectedImages.delete(src);
    div.classList.remove("selected");
  } else {
    selectedImages.add(src);
    div.classList.add("selected");
  }
}

function selectAll() {
  allImages.forEach(src => selectedImages.add(src));
  renderImages();
}

function getFilenameFromUrl(url) {
  return decodeURIComponent(url.split("/").pop().split("?")[0]);
}

function downloadSelected() {
  selectedImages.forEach(url => {
    const a = document.createElement("a");
    a.href = url;
    a.download = getFilenameFromUrl(url);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

function exportCSV() {
  let csvContent = "Filename,URL\n";
  selectedImages.forEach(url => {
    const filename = getFilenameFromUrl(url);
    csvContent += `${filename},${url}\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "links.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
