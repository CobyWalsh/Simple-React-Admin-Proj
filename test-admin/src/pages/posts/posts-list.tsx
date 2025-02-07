
import { Datagrid, 
    FunctionField, 
    List, 
    ReferenceField, 
    TextField, 
    EmailField, 
  } from 'react-admin';

const PostList = () => (
    <List>
        <Datagrid>
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

export default PostList;