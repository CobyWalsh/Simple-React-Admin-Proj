import { Card, CardContent, Typography } from "@mui/material";
import { Datagrid, TextField, FunctionField, useGetList, List } from "react-admin";

const Dashboard = () => {
    const { data, isLoading, error } = useGetList("users");
    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">Error Loading Data</Typography>;
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">
                    User Character Count DashBoard
                    </Typography>
                <List resource="users">                    <Datagrid data={data} bulkActionButtons={false}>
                        <TextField source="id" label="User Id" />
                        <TextField source="name" label="Name" />
                        <FunctionField
                        label="Character Count"
                        render={record => record.body ? record.body.length : 0}
                        />
                    </Datagrid>
                </List>
            </CardContent>
        </Card>
    );
};

export default Dashboard;