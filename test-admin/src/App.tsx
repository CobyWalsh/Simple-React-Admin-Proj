import {
  Admin,
  Resource, 
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/posts-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from "./pages/posts/post-edit";
import UserList from "./pages/users/users-list";
import UserShow from "./pages/users/users-show";
import UserEdit from "./pages/users/users-edit";
export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit}/>
    <Resource name="users" list={UserList} show={UserShow} edit={UserEdit}/>
  </Admin>
);
