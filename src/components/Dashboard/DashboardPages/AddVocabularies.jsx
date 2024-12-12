import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddVocabularies = () => {
  const { email: creator } = useSelector((state) => state.auth);
  // VOCABULARY ADD HANDLER
  const handleAddVoca = async (e) => {
    e.preventDefault();
    const word = e.target.word.value;
    const pronunciation = e.target.pronunciation.value;
    const meaning = e.target.meaning.value;
    const Description = e.target.Description.value;
    const lessonNo = e.target.lessonNo.value;
    const addVoca = {
      word,
      pronunciation,
      meaning,
      lessonNo,
      Description,
      creator,
    };

    const res = await axios.post(
      `${import.meta.env.VITE_SEVER_PORT}/newVoca`,
      addVoca
    );
    if (res.data) {
      toast.success("Vocabulary successfully add");
    } else {
      toast.error("Vocabulary not added successfully");
    }
    console.log(res.data);
    console.log(addVoca);
  };
  return (
    <div>
      {/* ADD VOCABULARY FORM */}
      <form
        onSubmit={handleAddVoca}
        className="grid grid-cols-2 gap-x-4 gap-y-4"
      >
        <div className="flex flex-col space-y-3">
          <label htmlFor="word">Word</label>
          <input
            type="text"
            name="word"
            className="py-2 ring-1 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="pronunciation">Pronunciation</label>
          <input
            type="text"
            name="pronunciation"
            className="py-2 ring-1 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="meaning">Meaning</label>
          <input
            type="text"
            name="meaning"
            className="py-2 ring-1 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="lessonNo">Lesson No</label>
          <input
            type="text"
            name="lessonNo"
            className="py-2 ring-1 border rounded"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name="Description"
            className="py-2 ring-1 border rounded w-full col-span-2"
          />
        </div>
        <button className="w-full btn col-span-2 text-xl">Submit</button>
      </form>
      {/* VOCABULARY TABLE */}
      <table className="mt-10 w-full bg-slate-200">
        <thead className="bg-slate-800">
          <tr className="text-center text-white space-x-8">
            <th>Word </th>
            <th>Meaning</th>
            <th>Pronunciation</th>
            <th>When to Say</th>
            <th>Lesson No</th>
            <th className="col-span-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>Dkfjad</td>
            <td>Dkfjad</td>
            <td>Dkfjad</td>
            <td>Dkfjad</td>
            <td>Dkfjad</td>
            <td>Dkfjad</td>
            <td>Dkfjad</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddVocabularies;
