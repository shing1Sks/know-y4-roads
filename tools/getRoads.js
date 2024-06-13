import axios from "axios";

export default async function getRoads() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/roads/get-roads`);
        // console.log(res.data.message);
        return res.data.message;
    } catch (error) {
        console.log(error," at get roads !");
    }
};