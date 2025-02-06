
import { Datagrid, FunctionField, List, ReferenceField, TextField, EmailField } from 'react-admin';

const PostPanel = () => {
    return <div>Hello</div>;
};

const UserList = () => (
    <List>
        <Datagrid
        expand={<PostPanel />}      
        sx={{
            '.RaDatagrid-headerCell': {
                padding: "10px",

            }
        }}>
            <TextField source="id" />
            <TextField source="name" label="Name"/>
            <EmailField source='email' label="Email" />
            <FunctionField label="Excerpt" 
            render={(record) => `${record.name.substring(0, 50)}...`} 
            />
            <TextField source="username" />
            <ReferenceField source='userId' reference='users' />
        </Datagrid>
    </List>
);

export default UserList;