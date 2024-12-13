const response = await fetch("./laptop.json");

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const laptops = await response.json();
const laptopContainer = document.getElementById("laptop");

// Loop through the laptops array
for (const data of laptops) {
  console.log(data);

  // Create a new div for each laptop
  const laptopDiv = document.createElement("div");
  laptopDiv.className = "laptop-item"; // Optional: For styling

  // Set the innerHTML for the current laptop
  laptopDiv.innerHTML = `
    <img src="${data.imageUrl}" class="laptop-image" alt="${data.name}" style="width: 150px; height: auto;">
    <h1>${data.name}</h1>
    <h2>Price: $${data.price}</h2>
    <ul>
      <li><strong>Processor:</strong> ${data.specifications.processor}</li>
      <li><strong>RAM:</strong> ${data.specifications.ram}</li>
      <li><strong>Storage:</strong> ${data.specifications.storage}</li>
      <li><strong>Display:</strong> ${data.specifications.display}</li>
      <li><strong>OS:</strong> ${data.specifications.os}</li>
    </ul>
  `;

  // Append the div to the container
  laptopContainer.appendChild(laptopDiv);
}

