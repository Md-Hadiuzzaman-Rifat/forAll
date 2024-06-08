import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {useNavigate} from "react-router-dom"

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// eslint-disable-next-line no-unused-vars
const [error, setError] = useState("");
  // eslint-disable-next-line no-unused-vars
const [loading, setLoading] = useState(false);


const { login, googleSignIn } = useAuth();
const navigate = useNavigate();

const handleGoogle=()=>{
  googleSignIn()
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to Login. Or account not already exist.");
      setLoading(false);
      // dispatch(errorModalOpen())
    } finally {
      setLoading(false);
    }
  };

    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create Account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@gmail.com"
                      required=""
                      onChange={e=>setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={e=>setPassword(e.target.value)}
                    />
                  </div>

                  <button className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" disabled={loading} type="submit">
              Login
            </button>

                  <div className="flex flex-col gap-2">
                  {/* <button type="submit" className="dark:bg-white dark:text-black text-white bg-gray-500 px-6 py-2 font-semibold rounded-sm text-white">Submit</button> */}
                  <button onClick={handleGoogle} className="bg-orange-500 px-6 py-2 font-semibold rounded-sm text-white">Google++</button>
                  </div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Create a new account?{" "}
                    <div
                      onClick={()=>navigate("/register")}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                    >
                      Register
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Login;
  