import React from "react";

function About() {
  return (
    <div className="pt-10" id="about">
      <div className="bg-slate-200 dark:bg-slate-900 dark:text-slate-200 text-slate-800 sm:pt-10 sm:pb-10 pt-8 pb-6 px-4">
        <p className="text-xl sm:text-3xl font-medium">About Our Application</p>
        <p className="text-sm sm:text-lg pt-4">
          Know Your Roads &#40;KYR&#41; is an innovative solution designed to
          bring you the real story about the roads you travel every day. We
          believe that informed drivers are safe drivers, and our platform
          empowers you to make better decisions by giving you access to the
          latest information on road conditions.
        </p>
      </div>
      <div className="bg-blue-300 dark:bg-blue-900 dark:text-slate-200 text-slate-800 pt-2 pb-3 px-4 ">
        <p className="text-xl sm:text-3xl font-medium">How It Works:</p>
        <ol className="list-decimal list-inside space-y-2 dark:text-gray-300 text-sm sm:text-lg pt-2">
          <li className="list-item">
            <strong>Upload Photos:</strong> Users can upload photos of roads,
            highlighting any issues such as potholes, cracks, or other dangers
            that could pose a threat to drivers.
          </li>
          <li className="list-item">
            <strong>Pin on the Map:</strong> Each photo can be pinpointed on our
            interactive map, providing a precise location of the reported road
            condition. This helps other users to see where the problem areas are
            and plan their routes accordingly.
          </li>
          <li className="list-item">
            <strong>Stay Informed:</strong> By viewing the map, users can stay
            updated on the condition of roads in their area or along their
            planned travel routes. This real-time information allows everyone to
            avoid dangerous areas, reducing the risk of accidents and injuries.
          </li>
          <li className="list-item">
            <strong>Community Impact:</strong> Your contributions not only help
            fellow drivers but also bring attention to neglected areas that
            require maintenance. By highlighting these issues, we can
            collectively urge local authorities to take necessary actions to
            improve road safety.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
