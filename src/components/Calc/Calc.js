import { useEffect, useState } from "react";

export default function Calc({ calculated }) {
  const [numenator, setNumenator] = useState();
  const [denumenator, setDenumenator] = useState();
  const [degree, setDegree] = useState(calculated);

  let result = ((denumenator / numenator) ** degree).toFixed(4);
  let result_percent = ((result - 1) * 100).toFixed(2);
  let isResult =
    !isNaN(denumenator) && !isNaN(numenator) && !isNaN(degree) && String(result).includes('.')
      ? true
      : false;

  const handleNumenator = (e) => {
    // console.log("Глянь чо", e.target.validity.valid);
    e.preventDefault();
    setNumenator(e.target.value);
  };

  const handleDenumenator = (e) => {
    e.preventDefault();
    setDenumenator(e.target.value);
  };

  const handleDegree = (e) => {
    e.preventDefault();
    setDegree(e.target.value);
  };
  
  useEffect(() => {
    setDegree(calculated);
  }, [calculated]);

  return (
    <form>
      <h2 className="calc__title">Калькулятор расчета корректировки на площадь</h2>
      <p className="calc__subtitle">(Фактор масштаба)</p>
      <fieldset className="calc__container">
        <div className="container_item">
          <p className="container_text">(</p>
        </div>
        <div className="container_item">
          <input
            name="num"
            className="calc__container_input"
            type="number"
            onChange={handleNumenator}
            placeholder="Пл. объекта оценки"
          />
        </div>
        <div className="container_item">
          <input
            name="denum"
            className="calc__container_input"
            type="number"
            onChange={handleDenumenator}
            placeholder="Пл. аналога"
          />
        </div>
        <div className="container_item">
          <p className="container_text">)</p>
        </div>
        <div className="container_item">
          <div className="container_degree">
            <p className="degree_minus">-</p>
            <input
              name="degr"
              className="calc__container_input calc__container_input_degree"
              type="number"
              value={degree}
              onChange={handleDegree}
              placeholder="Коэфф. торможения"
            />
          </div>
          <div></div>
        </div>
        <div className="container_item">
          <p className="container_degree-comment container_text">
            Вводите число без "минуса". <br /> Он уже учтен
          </p>
        </div>
        <div className="container_item">
          <p className="container_text">=</p>
        </div>
        <div className="container_item">
          <div className="comment_result_container">
            <div className="result_part">
              <p className={isResult ? "result_part_is-result" : ''}>
                {isResult ? result : "Нет данных"}
              </p>
            </div>

            <p className="result_part_or">или</p>
            <div className="result_part">
              <p className={isResult ? "result_part_is-result" : ''}>
                {isResult ? `${result_percent} %` : "Нет данных"}
              </p>
            </div>
          </div>
        </div>
        <div className="container_item">
          <div className="result_part_comment">
            <p>корректировка в долях</p>
          </div>

          <p className="result_part_or" />
          <div className="result_part_comment">
            <p>корректировка в %</p>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
