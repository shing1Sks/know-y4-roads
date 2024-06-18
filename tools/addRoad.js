import axios from "axios";

export default async function addRoad(data) {
    try {
        // console.log(data);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/roads/upload-road`,data,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res);
    } catch (error) {
        console.log(error, " at add road !");
    }
}