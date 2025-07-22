const API_URL = "http://localhost:8080/api/gemini";

const handleResponse = async (response) => {
  const text = await response.text();
  let data;

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text || "Error" };
  }

  if (!response.ok) {
    let errorMessage = `HTTP Error ${response.status}`;
    if (data && typeof data === "object") {
      errorMessage = data.message || data.error || JSON.stringify(data);
    }
    console.error("API error:", {
      status: response.status,
      data,
      url: response.url,
    });
    throw new Error(errorMessage);
  }

  return data;
};

const api = {
  async costOfMoving(placeToMoving) {
    try {
      const response = await fetch(`${API_URL}/moving`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placeToMoving }),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error("Moving API error:", error);
      throw error;
    }
  },
  async costOfTravel(placeToTourism) {
    try {
      const response = await fetch(`${API_URL}/tourism`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placeToTourism }),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error("Tourism API error:", error);
      throw error;
    }
  },
};

export default api;
