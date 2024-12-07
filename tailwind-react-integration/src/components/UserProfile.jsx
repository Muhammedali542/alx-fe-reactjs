function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg xl:p-12 md:p-8 sm:p-4 md:max-w-sm sm:max-w-xs">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        class="w-24 h-24 md:w-36 md:h-36 rounded-full"
      />
      <h1 class=" my-4 text-l md:text-xl text-blue-800 ">John Doe</h1>
      <p class="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;