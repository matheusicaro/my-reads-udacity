import React from 'react'

import IconButton from 'material-ui/IconButton';
import Brazil from '../../media/icons/brazil.svg'
import USA from '../../media/icons/usa.svg'

import '../../styles/components/LanguagesBtn.css'

const ButtonsTranslate = (props) => {

    const changeToBr = () => {
        props.changeLanguage("pt-BR")
    }

    const changeToEn = () => {
        props.changeLanguage("en-US")
    }

    const { button, label } = props;

    return (
        <div className="languages-btn">
            <div className="b-hover IconButton"> <IconButton style={styles.icon.brazil} onClick={changeToBr} tooltip={button.BR} /> </div>
            <div className="b-hover IconButton"> <IconButton style={styles.icon.usa} onClick={changeToEn} tooltip={button.EN} /> </div>
        </div>
    )
}

export default ButtonsTranslate


const styles = {
    icon: {
        brazil: {
            background: `url(${Brazil})`,
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
        usa: {
            background: `url(${USA})`,
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    },
}