function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        class="rounded-full w-36 h-36 max-auto"
      />
      <h1 class=" my-4 text-xl text-blue-800">John Doe</h1>
      <p class=" text-xl text-blue-800">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
