const skeleton = () => {
  return (
    <table className="bg-blue-300 w-full text-sm text-left text-black ">
      <thead className="bg-blue-700 text-sm text-gray-300 uppercase ">
        <tr>
          <th className="py-3 px-6">No</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody className="animate-pulse">
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded-sm bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-10 rounded-sm bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-10 rounded-sm bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-10 rounded-sm bg-gray-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-4 w-4 rounded-sm bg-gray-100"></div>
            <div className="h-4 w-4 rounded-sm bg-gray-100"></div>
          </td>
        </tr>
        {/* batas skeleton */}
        <tr className="bg-white border-b border-gray-50">
          <td className="py-3 px-6">
            <div className="h-4 w-4 rounded-sm bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-10 rounded-sm bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-10 rounded-sm bg-gray-100"></div>
          </td>
          <td className="py-3 px-6">
            <div className="h-4 w-10 rounded-sm bg-gray-100"></div>
          </td>
          <td className="flex justify-center gap-1 py-3">
            <div className="h-4 w-4 rounded-sm bg-gray-100"></div>
            <div className="h-4 w-4 rounded-sm bg-gray-100"></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default skeleton;
