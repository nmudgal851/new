import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styles from './Items.module.css';
import { connect } from 'react-redux';

const Items = (props) => {

    const items = [
        {
            icon: 'user',
            text: 'Profile',
            link: '/user',
            restricted: true
        },
        {
            icon: 'sign-in',
            text: 'Log in',
            link: '/login',
            restricted: false,
            exclude: true
        },
        {
            icon: 'user-plus',
            text: 'Sign up',
            link: '/register',
            restricted: false,
            exclude: true
        },
        {
            icon: 'sign-out',
            text: 'Log out',
            link: '/user/logout',
            restricted: false
        }
    ]

    const element = (item, i) => (
        <div key={i} className={styles.navItem}>
            <Link to={item.link} onClick={props.onClick}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        props.user.auth ? 
            items.map((item, i) => {
                if(props.user.auth.isAuth) {
                    return !item.exclude ?
                                element(item, i)
                            :   null
                    
                } else {
                    return !item.restricted ?
                                element(item, i)
                            :   null
                }


                /* return element(item, i); */
            })
        :   null    
    )

    return(
        <div>
            {showItems()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Items);
