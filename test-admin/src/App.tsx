import {
  Admin,
  Resource, 
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/posts-list";
import UserList from "./pages/users/users-list";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList}/>
    <Resource name="users" list={UserList}/>
  </Admin>
);
