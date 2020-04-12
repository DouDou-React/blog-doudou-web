import React from 'react'
import ReactDOM from 'react-dom'

import styles from './index.scss'

const render = () => {
    ReactDOM.render(
        <div className={styles.test_font}>Hello Word</div>,
        document.querySelector('#app')
    )
}

render()