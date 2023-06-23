import LayoutMovies from '../components/Layout';
import React from 'react';
import ListMovies from '../components/ListMovies';
import { helpers } from '../helpers';

const FovoriteMovies = () => {
    let dataMovies = helpers.getDataMoviesFromLocalStorage();
    // console.log(dataMovies)

    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim yeu thich"
        >
            <h2>Danh sach bo phim ban yeu thich</h2>
            {dataMovies && (
                <ListMovies movies={dataMovies} />
            )}
        </LayoutMovies>
    )
}

export default React.memo(FovoriteMovies)