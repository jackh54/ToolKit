const tools = {
    "RGB Utilities": {
      path: "tools/rgb-utilities/rgb-utilities.html",
      description: "Tools for selecting and customizing RGB colors."
    },
    "Minecraft": {
      path: "tools/minecraft/minecraft.html",
      description: "Minecraft-related tools for servers and gameplay."
    },
    "Encoders": {
      path: "tools/encoders/encoders.html",
      description: "Text encoding and decoding tools."
    }
  };
  
  async function renderToolCategories() {
    const contributors = await fetchContributors();
    const container = document.getElementById("tool-categories");
  
    for (const [category, { path, description }] of Object.entries(tools)) {
      const contributor = contributors[category];
  
      const categoryCard = document.createElement("div");
      categoryCard.className = "p-6 bg-gray-800 rounded-lg shadow-md relative";
  
      const categoryLink = document.createElement("a");
      categoryLink.href = path;
      categoryLink.className = "block text-xl font-bold text-blue-400 hover:underline";
      categoryLink.textContent = category;
  
      const descriptionText = document.createElement("p");
      descriptionText.className = "mt-2 text-gray-300";
      descriptionText.textContent = description;
  
      const profileLink = document.createElement("a");
      profileLink.href = contributor.github;
      profileLink.target = "_blank";
  
      const profilePic = document.createElement("img");
      profilePic.src = contributor.profilePic;
      profilePic.alt = `${contributor.name}'s profile picture`;
      profilePic.className = "w-10 h-10 rounded-full absolute top-4 right-4 cursor-pointer";
  
      const tooltip = document.createElement("div");
      tooltip.className = "hidden absolute bg-gray-700 text-white text-sm rounded-lg px-3 py-2 shadow-md";
      tooltip.style.bottom = "120px";
      tooltip.style.right = "0";
      tooltip.textContent = `Created by ${contributor.name}`;
  
      profilePic.addEventListener("mouseenter", () => {
        tooltip.classList.remove("hidden");
      });
      profilePic.addEventListener("mouseleave", () => {
        tooltip.classList.add("hidden");
      });
  
      profileLink.appendChild(profilePic);
      categoryCard.appendChild(categoryLink);
      categoryCard.appendChild(descriptionText);
      categoryCard.appendChild(profileLink);
      categoryCard.appendChild(tooltip);
  
      container.appendChild(categoryCard);
    }
  }
  
  document.addEventListener("DOMContentLoaded", renderToolCategories);
  