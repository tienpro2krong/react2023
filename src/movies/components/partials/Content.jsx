import React from "react";
import { Layout } from 'antd';
import BreadcrumMovies from './Breadcrumb';

const { Content } = Layout;

const ContentMovies = ({ children, level1, level2, level3 }) => {
    return (
        <Content
            style={{
                padding: '0 50px',
                minHeight: "100vh"
            }}
        >
            <BreadcrumMovies
                level1={level1}
                level2={level2}
                level3={level3}
            />

            <div
                className="site-layout-content"
                style={{
                    background: '#ffffff',
                    minHeight: '100vh',
                    padding: '15px'

                }}
            >
                {children}
            </div>
        </Content>
    )
}

export default React.memo(ContentMovies);