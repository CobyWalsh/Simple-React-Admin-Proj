import { Datagrid, List, TextField } from "react-admin";

const PostList = () => {
    return ( <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List> );
}

export default PostList;