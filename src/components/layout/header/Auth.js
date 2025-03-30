import { CiLogin } from "react-icons/ci";

function LogingAuth() {
  return (
    <div>
      <button className="flex items-center gap-2 text-sm md:hidden">
        ورود <CiLogin size={25} />
      </button>

      <button className="hidden md:flex items-center border-1 border-blue-900 p-2 rounded-md gap-2 text-md w-40 ps-6 text-gray-800 md:me-3 ">
        <span className="border-l-1 border-blue-900 pe-4">ورود</span>
        <span className="px-2">ثبت نام</span>
      </button>
    </div>
  );
}

export default LogingAuth;
