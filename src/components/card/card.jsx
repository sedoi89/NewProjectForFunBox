import React, {useState} from 'react';
import CardModule from "../card_module";


const Card = (props) => {

    const [leave, setLeave] = useState('');
    const [enter, setEnter] = useState('');
    const toggle = function () {
        if (leave === '') {
            setLeave('leave')
            setEnter('entered')
        } else {
            setLeave('')
            setEnter('')
        }
    }
    const disabled = function (props) {
        if (props.disabled) {
            return <p className={'disabled-text'}>Пичалька, c {props.with} закончился.</p>
        } else if (leave === 'leave') {
            return <p className={'link-rerendered'}>{props.tagline}</p>
        } else {
            return <p className="link">Что сидишь? Порадуй котэ, <span
                onClick={toggle}>купи.</span></p>
        }
    }
    return (

        <div className={`container`}>
            <div className={`Card `} onClick={toggle}>
                <CardModule
                    leave={leave}
                    entered={enter}
                    disabled={props.props.disabled}
                />
                <div className={`${props.props.disabled ? 'disabled' : 'notDisabled'}`}>
                    <p className={'title'}>Сказочное заморское яство</p>
                    <h1>Нямушка</h1>
                    <h2>c {props.props.with}</h2>
                    <p className={'present'}>{props.props.portion} порций <br/> {props.props.present} {props.props.portion === 10 ?
                        <span>мышь</span> :
                        <span>мыш{props.props.present < 5 ? <span>и</span> : <span>ей</span>}</span>} в подарок</p>
                    <img className={'cat'} src={'/img/cat.png'} alt={'Котик'}/>
                    <div className={`round ${leave}-back ${props.props.disabled ? 'disabled-background' : ''}`}><span
                        className={'text'}>{props.props.kg}</span> <span
                        className={'text_2'}>кг</span></div>
                </div>
            </div>
            {disabled(props.props)}
        </div>

    );
};

export default Card;
