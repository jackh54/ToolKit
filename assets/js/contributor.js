async function fetchContributors() {
    const response = await fetch("contributors.json");
    const contributors = await response.json();
    return contributors;
  }
  