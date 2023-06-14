import Header from "@/components/Header";

const HomePage = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">

      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Welcome Back
          </h1>

          <div className="grid frid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-3 gap-3">
            {/* List Item Liked song */}
          </div>
        </div>
      </Header>

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest Song
          </h1>
        </div>

        {/* Song Playlist */}
      </div>
    </div>
  )
}

export default HomePage;