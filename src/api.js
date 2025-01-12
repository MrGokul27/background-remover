import axios from "axios";

const API_KEY = "LkosHdQ4fVmWiB8L9aa1LNic";
const REMOVE_BG_URL = "https://api.remove.bg/v1.0/removebg";

export const removeBackground = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
        const response = await axios.post(REMOVE_BG_URL, formData, {
            headers: {
                "X-Api-Key": API_KEY,
            },
            responseType: "blob",
        });
        return URL.createObjectURL(response.data);
    } catch (error) {
        console.error("Error removing background:", error.response.data || error);
        throw new Error("Background removal failed");
    }
};
