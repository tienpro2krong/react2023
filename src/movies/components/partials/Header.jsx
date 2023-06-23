import React from "react";
import { Button, Layout, Menu, Input } from 'antd';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const HeaderMovies = () => {
    const { pathname } = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // nhap tim kiem chuyen sang trang tim kiem
    const searchMovieByName = (nameMovie) => {
        nameMovie = nameMovie.trim();
        if (nameMovie.length > 0) {
            // co nhap tu khoa
            navigate(`/search/${encodeURIComponent(nameMovie)}`);
        }
    }

    let itemsMenus = [
        { label: <NavLink to="/">Trang chu</NavLink>, key: '/' },
        { label: <NavLink to="/upcoming">Phim sap trinh chieu</NavLink>, key: '/upcoming' },
        // { label: <NavLink to="/search">Tim kiem</NavLink>, key: '/search' },
        { label: <NavLink to="/favorite">Phim yeu thich</NavLink>, key: '/favorite' },
        {
            label:
                <Search
                    placeholder="input search loading with enterButton"
                    // loading
                    enterButton
                    style={{ marginTop: '16px' }}
                    onSearch={keyword => searchMovieByName(keyword)}
                />
        }
    ];

    if (user) {
        itemsMenus = [
            ...itemsMenus,
            {
                label: `Wellcom ${user.firstName} ${user.lastName}`
            },
            { label: <Button danger onClick={() => logout()}><LogoutOutlined />Đăng xuất</Button> }
        ]
    } else {
        itemsMenus = [
            ...itemsMenus,
            { label: <NavLink to="/login">Dang nhap</NavLink>, key: '/login' }

        ]
    }
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={itemsMenus}
                style={{ width: '1500px' }}
            >
            </Menu>
        </Header>
    )
}

export default React.memo(HeaderMovies);