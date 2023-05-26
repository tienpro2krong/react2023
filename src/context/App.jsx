import React from "react";
import Layout from "./components/Layout";
import HeaderComponent from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './styles/app.css';
import ProviderContext from './share/provider';

export default function AppContext() {
    return (
        <ProviderContext>
            <Layout>
                <HeaderComponent />
                <Content />
                <Footer />
            </Layout>
        </ProviderContext>


    )
}