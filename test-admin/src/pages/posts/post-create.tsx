import { Create, SimpleForm, TextInput } from 'react-admin';

const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" label="Post Title" />
            <TextInput source="body" label="Post" />
        </SimpleForm>
    </Create>
);

export default PostCreate;
