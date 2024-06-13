import addRoad from "@/tools/addRoad";
import React, { forwardRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const AddMarker = forwardRef(function AddMarker(props, ref) {
  const [decription, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const handleFileChange = (e) => {
    setImages(e.target.files[0]);
  };
  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();
    const longitude = ref.current._lngLat.lng;
    const latitude = ref.current._lngLat.lat;
    console.log(decription, condition, images, longitude, latitude);
    if(!decription || !condition || !images ){
        alert("Please fill all the fields !");
        setLoader(false);
        return;
    }
    // Handle form submission
    const formdata = new FormData();
    formdata.append("description", decription);
    formdata.append("condition", condition);
    formdata.append("images", images);
    formdata.append("longitude", longitude);
    formdata.append("latitude", latitude);
    // Make API call to submit form data
    const res = await addRoad(formdata);
    setDescription("");
    setCondition("");
    setImages([]);
    setLoader(false);
  };
  return (
    <div className="w-[95vw] sm:w-[30vw] mt-4 h-fit sm:h-[300px] rounded-md mx-auto dark:text-gray-200 text-gray-950 bg-slate-200 dark:bg-blue-950 py-2 border-2 border-blue-800 dark:border-gray-600">
      {loader ? (
        <div className="w-full h-full flex items-center justify-center">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <p className="text-2xl font-bold text-center py-3">Contribute !</p>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center justify-center"
          >
            <div>
              <label htmlFor="desc" className="pr-4 font-bold">
                Description
              </label>
              <input
                type="text"
                className="dark:bg-slate-900 p-1 rounded"
                id="desc"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <p className=" text-xs text-justify text-red-500 w-full px-2 my-2">
              Give a breif description of the condtion.
            </p>
            <div>
              <label htmlFor="cond" className="pr-4 font-bold">
                Condition
              </label>
              <input
                type="text"
                className="dark:bg-slate-900 p-1 rounded"
                id="cond"
                placeholder="condition"
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
            <p className="text-xs text-justify text-red-500 px-2 my-2">
              Describe the state of the condition using one word like
              alert,danger or avoid !
            </p>
            <div className="w-full flex flow-row item-center justify-center gap-x-4 pl-10">
              <label htmlFor="img" className="font-bold">
                Images
              </label>
              <input
                type="file"
                className="dark:bg-slate-900"
                id="img"
                placeholder="images"
                onChange={handleFileChange}
              />
            </div>
            <input
              type="submit"
              className="px-4 mt-4 rounded-md text-white hover:bg-blue-400 bg-blue-300 "
            />
          </form>
        </>
      )}
    </div>
  );
});

export default AddMarker;
