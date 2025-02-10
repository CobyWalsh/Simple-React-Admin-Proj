import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="username" label="Username" />
            <TextInput source="email" label="Email" />
        </SimpleForm>
    </Create>
);

export default UserCreate;
