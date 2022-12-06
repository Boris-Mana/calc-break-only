export default function About() {
    return (
        <section className="about">
            <h1 className="about__title">Правила расчета</h1>
            <p className='about__text'>Возможные значения коэффициента торможения:<br /><br />Общественные здания
                и помещения: <br /><strong>-0.19</strong><br />Промышленные, складские и сельскохозяйственные здания,
                помещения: <br /><strong>-0.27</strong><br /><br /> В калькуляторе отрицательное значение коэффициента уже учтено! Вводите цифру без знака "минус"</p>
        </section>
    )
};