import {
  Admin,
  Resource, 
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import UserList from "./pages/users/users-list";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="users" list={UserList}/>
  </Admin>
);
