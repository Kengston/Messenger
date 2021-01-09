import React from 'react';
import styles from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.paginator}>
        {

            pages.filter(p => p === currentPage)
            .map((p) => {
                return (
                            <span className={styles.pag} key={p}>
                             <span className={styles.prev} onClick={(e) => {
                              onPageChanged(currentPage - 1)
                            }}>
                            <i className="fas fa-backward"></i></span>
                            <span className={styles.next} onClick={(e) => {
                                onPageChanged(currentPage + 1)
                            }}>
                            <i className="fas fa-forward"></i></span>
                            </span>
                )
            })}

    </div>
}

export default Paginator;