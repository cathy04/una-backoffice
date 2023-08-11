import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
export default function renderPosts({
  page,
  posts,
  onVisibilityChange,
  onNavigateToPostDetails,
  openDeleteModal,
}) {
  return (
    <>
        {
        [1,2,3,4,4,5,1].map((post, index) => (
          <tr
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <td className="font-medium text-gray-900 dark:text-white">
              12
            </td>
            <td className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-xs">
              title
              </td>
            <td className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-sm">
              description
            </td>
            <td className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-md">
              date
              </td>

            <td className="font-medium text-sm">
              {post.visibility === 'PUBLISHED' ? (
                <span className="">Publié</span>
              ) : (
                <span className="text-red-600">Brouillon</span>
              )}
            </td>

            <td>
              <div className="text-black space-x-3 flex flex-row">
                <button
                  className="rounded-full p-1 bg-white w-10 h-10 shadow flex items-center justify-center"
                  onClick={() => onVisibilityChange(post)}
                >
                  {post.visibility === 'PUBLISHED' ? (
                    <VisibilityOffIcon className="w-5 h-5"   title="Cacher" />
                  ) : (
                    <VisibilityIcon className="w-5 h-5"   title="Publier" />
                  )}
                </button>
                <button
                  title="Éditer"
                  onClick={() => onNavigateToPostDetails(post)}
                  className="rounded-full p-1 bg-white w-10 h-10 shadow flex items-center justify-center"
                >
                  <EditIcon className="w-5 h-5" />
                </button>
                <button
                  title="Supprimer"
                  onClick={() => openDeleteModal(post)}
                  className="rounded-full p-1 bg-white w-10 h-10 shadow text-red-600 flex items-center justify-center"
                >
                  <DeleteIcon className="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        ))}
        {/* ))
      ) : (
        <tr>
          <td colSpan="8" className="w-full">
            <div className="text-center">Aucun article ajouté</div>
          </td>
        </tr>
      )} */}
    </>
  );
}
