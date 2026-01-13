import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">
      {/* 배경색(bg-blue-500), 둥근 모서리(rounded), 그림자(shadow)가 잘 보이나요? */}
      <div className="p-6 bg-blue-500 text-white font-bold rounded-xl shadow-lg">
        Tailwind CSS가 잘 작동하고 있습니다! 🚀
      </div>
    </div>
  );
}
