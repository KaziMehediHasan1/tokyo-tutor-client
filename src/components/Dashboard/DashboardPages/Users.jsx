import axios from "axios";
import useGetUsers from "../../Hooks/useGetUsers";
import Swal from "sweetalert2";

const Users = () => {
  // get all user and show user in this table.
  const [allUser, isLoading, refetch] = useGetUsers();
  const handlePromote = async (id, role) => {
    console.log(id, role);
    // ALERT

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, promote!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.patch(
              `${import.meta.env.VITE_SEVER_PORT}/promote`,
              { id, role }
            );

            // Display success message if the PATCH request was successful
            if (res.status === 200) {
              refetch();
              swalWithBootstrapButtons.fire({
                title: "Promoted!",
                text: "The user has been successfully promoted.",
                icon: "success",
              });
            }
          } catch (error) {
            // Handle errors
            swalWithBootstrapButtons.fire({
              title: "Error!",
              text: "Something went wrong. Please try again later.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Operation cancelled. No changes made.",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">No</th>
              <th className="p-3">User Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Promote to</th>
            </tr>
          </thead>
          <tbody>
            {allUser.users?.map((user, index) => {
              return (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.userRole}</p>
                  </td>
                  <td className="p-3 space-x-4">
                    <button
                      onClick={() => handlePromote(user._id, "admin")}
                      className="px-4 py-2 bg-black text-white rounded"
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => handlePromote(user._id, "normal")}
                      className="px-4 py-2 bg-slate-400 rounded"
                    >
                      Normal
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
