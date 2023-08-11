/*eslint-disable*/
import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";

import {
  Button,
  Pagination, Table, Text,
  TextInput,
  Title
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
// import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

import { Loading } from 'components/icons';
import renderPosts from './utils/renderPosts';
import renderSearchResult from './utils/renderSearchResult';
    
function Posts() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // const history = useHistory();

  const searchInputRef = React.useRef(null);

  const [total, setTotal] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [next, setNext] = React.useState();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  const [debouncedSearch] = useDebouncedValue(searchQuery, 500);
    

  const onNavigateToPostDetails = (post) => {

  };
    
  const openDeleteModal = (post) => {
    
  };

  const onVisibilityChange = (post) => {
    
  };

  const loadPage = (pageToGo) => {
    
  };
    
  return (
    <div className="bg-white pt-8 shadow-xl rounded-md px-9 mt-6 pb-40 max-w-6xl 2xl:max-w-full w-full">
      <Title order={3} className="mb-8">
        POSTS
      </Title>
      <div className="mt-20">
        <div className="w-full flex flex-row items-center justify-between mb-10">
          <div className="max-w-lg w-full">
            <TextInput
              size="sm"
              placeholder="Rechercher"
              icon={<SearchIcon size={14} />}
              classNames={{ input: 'pl-8' }}
              ref={searchInputRef}
              rightSection={
                debouncedSearch ? (
                  <ClearIcon
                    className="w-4 h-4 text-gray-600"
                    onClick={() => {
                      setSearchQuery('');
                      searchInputRef.current.value = '';
                    }}
                  />
                ) : null
              }
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-row w-full justify-end items-center">
            <a href="posts/add-post">
              <Button
                className="uppercase text-white text-sm px-4 py-2"
              >
                Ajouter
              </Button>
            </a>
          </div>
        </div>

        <div className="table-container relative overflow-x-auto rounded-lg">
          <Table striped withBorder withColumnBorders verticalSpacing="sm">
            <thead className="!text-white ">
              <tr>
                <th className="!text-white">N°</th>
                <th className="!text-white">TITRE</th>
                <th className="!text-white">DESCRIPTION</th>
                <th className="!text-white">DATE</th>
                <th className="!text-white">ETAT</th>
                <th className="!text-white">
                  <span className="">ACTIONS</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                <tr>
                  <td colSpan="8" className="w-full">
                    <div className="w-full flex justify-center">
                      <Loading sizes="h-10 w-10" className="" />
                    </div>
                  </td>
                </tr>
              ) : debouncedSearch ? (
                renderSearchResult({
                  searchResult,
                  onNavigateToPostDetails,
                  onVisibilityChange,
                  openDeleteModal,
                })
              ) : (
                renderPosts({
                  page,
                  posts,
                  onNavigateToPostDetails,
                  onVisibilityChange,
                  openDeleteModal,
                })
              )}
            </tbody>
          </Table>
          {!debouncedSearch && (
            <div className="flex flow-row items-center justify-center mt-10">
              <Pagination
                size="xl"
                radius="xl"
                color="green"
                page={page}
                // initialPage={page}
                total={Math.round(total / 15) + 1}
                onChange={loadPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
    

Posts.layout = Admin;

export default Posts;