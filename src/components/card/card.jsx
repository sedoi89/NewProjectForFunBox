import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
      <div className={'container'}>
        <div className="Card">
            <div className={'Corner'}></div>
            <p className={'title'}>Сказочное заморское яство</p>
            <h1>Нямушка</h1>
            <h2>c {props.props.with}</h2>
            <p className={'present'}>{props.props.portion} порций <br/> {props.props.present} {props.props.portion === 10? <span>мышь</span> : <span>мыш{props.props.present <5? <span>и</span> : <span>ей</span>}</span>} в подарок</p>
            <img className={'cat'} src={'/img/cat.png'}/>
            <div className={'round'}><span className={'text'}>{props.props.kg}</span> <span className={'text_2'}>кг</span> </div>
        </div>
          <p className="link">Что сидишь? Порадуй котэ, <a>купи.</a></p>
      </div>
    );
};

export default Card;
