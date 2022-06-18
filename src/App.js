import main from './assets/css/main.css'
import Card from "./components/card/card";


function App() {
    const cards = [{
        id: 1, with: 'фуа-гра', portion: 10, present: '', kg: '0,5'
    }, {
        id: 2, with: 'рыбой', portion: 40, present: '2', kg: '2'
    }, { id: 3, with: 'курой', portion: 100, present: '5', kg: '5'
        }]
    return (
        <div className={'main'}> <p className={'main-title'}> Ты сегодня покормил кота? </p>
            {cards.map(card =>
                <Card
                    props={card}
                    key={card.id}
                />
            )}
        </div>
    );
}

export default App;
