import '../../global.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Photo() {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 20;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => setPhotos(response.data))
            .catch(error => console.log(error));
    }, []);

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(photos.length / photosPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (event) => {
        const newPage = parseInt(event.target.value);
        if (newPage >= 1 && newPage <= pageNumbers.length) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className='Main'>
            <h1>Фото</h1>
            {currentPhotos.map(photo => (
                <div key={photo.id}>
                    <Link to='/photos'>
                        <img src={photo.url} alt={photo.title}></img>
                        <h1>{photo.title}</h1>
                    </Link>
                </div>
            ))}
            <div className="pagination">
                <input
                    type="number"
                    value={currentPage}
                    onChange={handlePageChange}
                    min="1"
                    max={pageNumbers.length}
                    
                />
                <span> of {pageNumbers.length}</span>
                {/* {pageNumbers.map(number => (
                    <button key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                    </button>
                ))} */}
            </div>
        </div>
    );
}
