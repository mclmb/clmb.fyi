async function fetchIPData() {
  try {
    const response = await fetch("https://edns.ip-api.com/json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    document.getElementById("ip-data").textContent = JSON.stringify(
      data,
      null,
      2
    );
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    document.getElementById("ip-data").textContent = "Error fetching data";
  }
}

fetchIPData();
