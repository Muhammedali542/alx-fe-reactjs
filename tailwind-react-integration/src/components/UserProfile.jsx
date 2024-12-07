function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg xl:p-12 md:p-8 sm:p-4 md:max-w-sm sm:max-w-xs hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        class="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 class=" my-4 text-lg md:text-xl text-blue-800  hover:text-blue-500">
        John Doe
      </h1>
      <p class="text-gray-600 text-sm md:text-base ">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
