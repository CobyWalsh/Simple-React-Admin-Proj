import { Datagrid, List, TextField, DeleteButton } from "react-admin";

const UserList = () => {
    return ( <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
            <DeleteButton /> {/* 🗑️ Delete button added */}
        </Datagrid>
    </List> );
}

export default UserList;