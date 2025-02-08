

const Profile = () => {
  return (
    <div>
              {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-opacity-80 shadow-lg text-[#151a21]">
        {/* Icon and Brand Name */}
        <div className="flex items-center gap-2 text-3xl font-bold">
          <FaBookBookmark />
          <p className="font-mono">YearBook</p>
        </div>
        {/* Search Input */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="border border-black bg-transparent text-[#151a21] px-3 py-1 rounded-full focus:outline-none"
            placeholder="Search Year Book"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="rounded-full p-3 border border-black hover:bg-gray-200"
            onClick={handleSearch}
          >
            <IoSearchSharp />
          </button>
        </div>
        {/* Profile Icon */}

        {/* sidebar  */}
        <Navigation user={user} onLogout={handleLogout} />
      </div>
    </div>
  )
}

export default Profile