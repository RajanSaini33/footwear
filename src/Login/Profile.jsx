// import React from "react";
// import ProfilePic from "../assets/image/profile.jpeg";

// const Profile = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center p-4">
//       <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl p-6 w-full max-w-2xl border border-white/20">
        
//         <div className="flex flex-col items-center text-center">
//           <img
//             src={ProfilePic}
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
//           />
//           <h1 className="text-2xl font-semibold text-gray-800 mt-4">Bhanu Saini</h1>
//           <p className="text-gray-500">Frontend Developer</p>
//           <p className="text-sm text-gray-600 mt-1">bhanu1234@gmail.com</p>
//           <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
//             Edit Profile
//           </button>
//         </div>

        
//         <div className="my-6 border-t border-white/30" />

        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               placeholder="Bhanu Saini"
//               className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="bhanu1234@gmail.com"
//               className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="text"
//               placeholder="+91 9876543210"
//               className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               placeholder="Jaipur, Rajasthan"
//               className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Address</label>
//           <textarea
//             rows="3"
//             placeholder="Write something about yourself..."
//             className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>

//         <button className="mt-6 w-full py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from "react";
import ProfilePic from "../assets/image/profile.jpeg";

const Profile = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white/30 backdrop-blur-md shadow-lg p-6 border-r border-white/20 hidden md:block">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700 mb-10 text-center">MyProfile</div>

        {/* Navigation Links */}
        <nav className="space-y-4 text-gray-800 font-medium">
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-100 transition">Contact</a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-100 transition">Settings</a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-100 transition">About</a>
          <a href="#" className="block py-2 px-4 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition">
            Buy Now
          </a>
        </nav>
      </div>

      
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl p-6 w-full max-w-2xl border border-white/20">
          
         
          <div className="flex flex-col items-center text-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">Bhanu Saini</h1>
            <p className="text-gray-500">Frontend Developer</p>
            <p className="text-sm text-gray-600 mt-1">bhanu1234@gmail.com</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>

          <div className="my-6 border-t border-white/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Bhanu Saini"
                className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="bhanu1234@gmail.com"
                className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+91 9876543210"
                className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                placeholder="Jaipur, Rajasthan"
                className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              rows="3"
              placeholder="Write something about yourself..."
              className="mt-1 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button className="mt-6 w-full py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;