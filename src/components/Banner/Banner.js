import React, {useState} from 'react';
import styles from './Banner.module.css';

const Banner = () => {

    const [name, setName] = useState('');
    const onChangeHandler = e => {
        setName(e.target.value)
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(name)
    }

    return (
        <div className={styles.banner}>
            <form onSubmit={onSubmitHandler}>
                <input type="text" 
                    placeholder="Search by name"
                    value={name}
                    name="name"
                    onChange={onChangeHandler}
                />
            </form>
        </div>
    )
}

export default Banner;