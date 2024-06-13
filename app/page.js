import HomeSec from "@/components/HomeSec";

export const metadata = {
  title: "Know Your Roads !",
  description: "Know Your Roads (KYR) is an innovative solution designed to bring you the real story about the roads you travel every day. We believe that informed drivers are safe drivers, and our platform empowers you to make better decisions by giving you access to the latest information on road conditions.",
};
export default function Home() {
  return (
    <div>
      <link rel="shortcut icon" href="./kyr.png" type="png" />
      <HomeSec />
    </div>
  );
}
