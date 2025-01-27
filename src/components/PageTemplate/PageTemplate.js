import React from 'react'; 
import styles from './PageTemplate.scss'; 
import classNames from 'classnames/bind'; 

const cx = classNames.bind(styles); 

const PageTemplate = ({children}) => {
    return(
        <div className={cx('page-template')}> 
            <h1>To-do List</h1> 
            <div className={cx('content')}> 
                {children} 
            </div>
        </div> 
    ) 
}; 

export default PageTemplate;