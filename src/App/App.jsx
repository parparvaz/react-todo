import './App.css'
import Layout from "./Layout/Layout";
import Card from "./Layout/Card";
import Form from "./Components/Form/Form";
import Tabs from "./Components/Body/Tabs";
import Content from "./Components/Body/Content";

const App = () => {
    return (
        <Layout>
            <Card>
                <Form/>

                <Tabs/>
                <Content/>
            </Card>
        </Layout>
    );
};

export default App;
