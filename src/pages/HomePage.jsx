import { createUseStyles } from 'react-jss';
import images1 from '../images/1.jpg';
import images2 from '../images/2.jpg';
import images3 from '../images/3.jpg';
import usiki from '../images/5.jpg';
import podmyszki from '../images/7.jpg';
import bikini from '../images/bikini.jpg';
import nogi from '../images/6.jpg';
import arrow from '../images/arrow.jpg';
import ld from '../images/left-down.jpg';
import l from '../images/left.jpg';
import ru from '../images/right_up.jpg';
import rd from '../images/right_down.jpg';

const useStyles = createUseStyles({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  services_title: {
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '20px',
    position: 'relative',
    display: 'inline-block',
    '&:before': {
      content: '" "',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      width: '100px',
      height: '2px',
      backgroundColor: '#2d2d2d',
      transform: 'translateX(-50%)',
      borderRadius: '2px',
      zIndex: '10',
    },
  },
  ser: {
    display: 'flex ',
    justifyContent: 'center',
    margin: '100px 0',
  },
  services_container: {
    position: 'relative',
    padding: '10px',
    '& .im': {
      width: '250px',
      height: '140px',
    },
    '&:nth-child(even)': {
      marginTop: '90px',
    },
  },
  rd: {
    position: 'absolute',
    bottom: -40,
    left: -115,
    height: '100px',
  },
  ru: {
    position: 'absolute',
    top: 30,
    right: -350,
    height: '100px',
  },
  l: {
    position: 'absolute',
    top: -30,
    left: -105,
    width: '100px',
  },
  ld: {
    position: 'absolute',
    bottom: -85,
    left: -150,
    width: '100px',
  },
  hero__arrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '25px',
  },
  hero__title: {
    fontSize: '55px',
    marginBottom: '50px',
  },
  hero__button: {
    fontSize: '20px',
    outline: 'none',
    padding: '10px 20px',
    backgroundColor: '#f7cac9',
    borderRadius: '25px',
    border: 'none',
    '&:focus, &:hover': {
      outline: 'none',
      color: 'white',
      backgroundColor: ' #92a8d1',
    },
  },
  desc: {
    fontSize: '20px',
  },
  photo__list: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    height: '390px',
  },
  photo__marg: {
    position: 'absolute',
    top: '25px',
    left: '-300px',
  },
  photo__marg__right: {
    position: 'absolute',
    top: '25px',
    right: '-300px',
  },
  photo__container: {
    marginTop: '50px',
  },
});
const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <main>
        <section className={classes.hero}>
          <h1 className={classes.hero__title}>
            Удалите 100% нежелательных волос до 40 дней за 1 сеанс эпиляции
          </h1>
          <button className={classes.hero__button}>
            Записаться на эпиляцию
          </button>
          <div className={classes.photo__container}>
            <ul className={classes.photo__list}>
              <li className={classes.photo__marg}>
                <img src={images1} alt="" />
              </li>
              <li>
                <img src={images2} alt="" />
              </li>
              <li className={classes.photo__marg__right}>
                <img src={images3} alt="" />
              </li>
            </ul>
          </div>
        </section>
        <section className={classes.hero__arrow}>
          <img src={arrow} alt="" />
        </section>

        <section>
          <div className={classes.hero}>
            <h2>Шугаринг</h2>
            <p className={classes.desc}>
              Шугаринг имеет ряд особенностей среди методов удаления волос:
              гипоаллергенность — благодаря натуральному составу риск
              аллергических реакций сведён к минимуму; безопасность — поскольку
              температура пасты составляет 36—38 градусов по Цельсию, получить
              ожог или травмировать кожу при эпиляции невозможно; дополнительный
              уход за кожей — по сути процедура шугаринга помимо удаления волос
              является ещё и механическим пилингом, так как к сахарной пасте
              прилипают ороговевшие клетки эпидермиса и отшелушиваются в
              процессе эпиляции; эффективность — при удалении волос шугарингом
              происходит механическое травмирование фолликула, поэтому уже после
              первой процедуры волосы начинают терять пигмент, становятся мягче,
              реже и тоньше; шугаринг можно проводить самостоятельно. Кусочек
              пасты разминают пальцами до нужной консистенции и раскатывают на
              натянутом участке кожи, предварительно обработанном тальком, затем
              резким движением срывают. Важной особенностью шугаринга является
              то, что паста наносится только против роста волос, а срывается —
              по росту, в отличие от восковой эпиляции, что способно
              минимизировать последующее врастание волос.
            </p>
            <ul className={classes.ser}>
              <li className={classes.services_container}>
                <img src={l} alt="" className={classes.l} />

                <img src={nogi} alt="" className="im" />
                <h3 className={classes.services_title}>Ножки</h3>
              </li>
              <li className={classes.services_container}>
                <img src={ld} alt="" className={classes.ld} />
                <h3 className={classes.services_title}>Усики</h3>
                <img src={usiki} alt="" className="im" />
              </li>
              <li className={classes.services_container}>
                <img src={ru} alt="" className={classes.ru} />

                <img src={podmyszki} alt="" className="im" />
                <h3 className={classes.services_title}>Подмышки</h3>
              </li>
              <li className={classes.services_container}>
                <img src={rd} alt="" className={classes.rd} />
                <h3 className={classes.services_title}>Бикини</h3>
                <img src={bikini} alt="" className="im" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>services</h2>
          <div className="sec">
            {/* <img src="a" alt=""> */}
            <h3>Шугаринг</h3>
          </div>
          <div className="sec">
            {/* <img src="b" alt=""> */}
            <h3>Ваксинг</h3>
          </div>
          <div className="sec">
            {/* <img src="s" alt=""> */}
            <h3>Курсы</h3>
          </div>
          <div className="sec">
            {/* <img src="x" alt=""> */}
            <h3>Электороровоз</h3>
          </div>
        </section>
        <section>
          <h2>Преимущества</h2>
          <ul className="li">1</ul>
          <ul className="li">2</ul>
          <ul className="li">3</ul>
          <ul className="li">4</ul>
          <ul className="li">5</ul>
        </section>
        <section>
          <h2>Результаты</h2>
          {/* <img src="n" alt="">
  <img src="a" alt=""> */}
        </section>
      </main>

      <footer>
        <span>logo</span>
        <ul>
          <li>telefon</li>
          <li>insta</li>
          <li>grafik</li>
          <li>adres</li>
        </ul>
        <map name="map">{/* <img src="a" alt=""> */}</map>
      </footer>
    </>
  );
};

export default HomePage;
