import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gray-900">
      <div className="relative flex items-center justify-center">
        <div className="0 w-full h-full animate-pulse ">
          <Image
            src="/assets/logo_gdg.png"
            alt="GDG Logo"
            width={40}
            height={20}
          />
        </div>
      </div>
      {/*       
      <h1 className="mt-8 text-2xl font-semibold text-white">
        <span className="animate-dots"></span>
      </h1> */}
    </div>
  );
}
