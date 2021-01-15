import React from "react";
import PropTypes from 'prop-types';
import defaultImage from '../../../asset/image/2.jfif';
const Products = ({login,avatar_url,id}) => {
    return (
            <article>
                <h4>single product</h4>
                <img src={avatar_url || defaultImage} alt={login || 'default name'}/>
                <h4>{login || 'default name'}</h4>
                <p>${id || 3}</p>
            </article>
        )
}

Products.propTypes = {
    avatar_url:PropTypes.string.isRequired,
    login:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
}

// Products.defaultProps = {
//     name:'default name',
//     price:3.99,
//     image:defaultImage
// }

export default Products;