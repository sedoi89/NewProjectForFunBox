import main from './assets/css/main.css'
import Card from "./components/card/card";


function App() {
    const cards = [{
        id: 1, with: 'фуа-гра', portion: 10, present: '', kg: '0,5', tagline: 'Печень утки разварная с артишоками.', disabled:false
    }, {
        id: 2, with: 'рыбой', portion: 40, present: '2', kg: '2', tagline: 'Головы щучьи с чесноком да свежайшая сёмгушка.', disabled:false
    }, { id: 3, with: 'курой', portion: 100, present: '5', kg: '5', tagline: 'Филе из цыплят с трюфелями в бульоне.', disabled:true
        }]
    return (
      <div className={'main-container'} style={main}>
          <p className={'main-title'}> Ты сегодня покормил кота? </p>
        <div className={'main'}>
            {cards.map(card =>
                <Card
                    props={card}
                    key={card.id}
                />
            )}
        </div>
      </div>
    );
}

export default App;
