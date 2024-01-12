import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";
import Loading from "../components/Loading";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section>
        <div className="mt-28 h-screen w-screen bg-gradient-to-br from-rose-200 to-amber-300 flex justify-center items-center -p-0">
          <div className="bg-white shadow-md rounded-3xl w-11/12 h-5/6 overflow-hidden">
            {loading ? (
              <Loading />
            ) : (
              <div className="flex">
                {/* KIRI */}
                <div className="w-full overflow-hidden">
                  <img
                    src="images/image1.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* KANAN */}
                <div className="w-full h-full p-10">
                  <Title title={"Add New User"} />
                  <RegisterForm setLoading={setLoading} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
