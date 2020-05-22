import * as  React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class IndexPage extends React.Component {
    public render() {
        return (
            <Layout>
                <Content style={{ padding:"0 50px", lineHeight: "1.6", margin:"0 auto" }}>
                    <h1>Welcome!</h1>
                    <p>
                        Welcome to the Thang Nguyen's free time spending on learning new stuff  
                    </p>
                    <p>
                        This project is intended as a supplement to{' '}
                        <a href="https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/" target="blank" rel="noopener noreferrer">
                        this post
                        </a>
                        . To demonstrate it, I created a website which pulls data from the{' '}
                        <a href="https://docs.opendota.com" target="blank" rel="noopener noreferrer">
                        OpenDota API
                        </a>
                        , and display information like professional teams, heroes, as well as top players by hero. This will also demonstrate how to
                        structure your stores for each feature/module in a Redux-enabled app.
                    </p>
                    <p>Enjoy your stay!</p>
                </Content>
            </Layout>
        )
    }
}

export default IndexPage;