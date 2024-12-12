import axios from "axios";
import { RxUpdate } from "react-icons/rx";
import { TiDeleteOutline } from "react-icons/ti";

const AddLesson = () => {
  // ADD LESSON HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    const lessonName = e.target.lessonName.value;
    const lessonNo = e.target.lessonNo.value;
    console.log(lessonName, lessonNo);
    const res = await axios.post(
      `${import.meta.env.VITE_SEVER_PORT}/add-lesson`,
      { lessonName, lessonNo }
    );
    console.log(res.data);

    if (res.data) {
      console.log(res.data, "bhitor theke");
    }
  };
  return (
    <div className="py-10 px-5">
      <div>
        {/** ADD LESSON **/}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col space-y-3">
            <label htmlFor="lessonName">Lesson Name</label>
            <input
              type="text"
              name="lessonName"
              className="ring-1 border py-2 rounded px-3"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="lessonNumber">Lesson Number</label>
            <input
              type="text"
              name="lessonNo"
              className="ring-1 border py-2 rounded px-3"
            />
          </div>
          <button type="submit" className="btn text-center w-full">
            Submit
          </button>
        </form>

        {/** VIEW ALL LESSON **/}
        <div className="container p-2 mt-20 bg-slate-200 mx-auto sm:p-4 dark:text-gray-800">
          <div className="overflow-y-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3 text-xl">Lesson Name</th>
                  <th className="p-3 text-xl">Lesson No</th>
                  <th className="p-3 text-xl">Vocabulary</th>

                  <th className="p-3 text-xl">Edit</th>
                  <th className="p-3 text-xl">Delete</th>
                </tr>
              </thead>
              <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                <tr>
                  <td className="px-3 text-2xl font-medium dark:text-gray-600">
                    Basic gretting
                  </td>
                  <td className="px-3 py-2">
                    <p className="px-3 text-2xl font-medium dark:text-gray-600">
                      49
                    </p>
                  </td>
                  <td className="px-3 py-2">
                    <p className="px-3 text-2xl font-medium dark:text-gray-600">
                      45
                    </p>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <p>
                      <RxUpdate size={25} />
                    </p>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <p className="text-center">
                      <TiDeleteOutline size={25} className="text-center" />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
