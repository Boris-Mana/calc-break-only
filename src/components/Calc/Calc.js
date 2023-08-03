import { useEffect, useState } from "react";

import logoInvOcenAnalitic from "../../images/investOcenkaAnalitycCenter.svg"

export default function Calc({ calculatedRatio, isSend }) {
  const [numerator, setNumerator] = useState(undefined);
  const [denumerator, setDenumerator] = useState(undefined);
  const [isResult, setIsResult] =  useState(false);  
  const [result, setResult] =  useState('Нет данных');
  const [resultPercent, setResultPercent] = useState('Нет данных')
  const [degree, setDegree] = useState(isSend ? calculatedRatio : '');

  // let result = degree < 0 ? ((numerator ** degree / denumerator ** degree) ).toFixed(4) : ((denumerator ** degree / numerator ** degree) ).toFixed(4);
  // degree < 0 ? console.log('Отрицательно') : console.log('Положително');  
  // let result_percent = ((result - 1) * 100).toFixed(2);

  // let isResult =
  //   !isNaN(denumerator) && !isNaN(numerator) && !isNaN(degree) && String(result).includes('.')
  //     ? true
  //     : false;

  //  && String(result).includes('.')

  const calcBreakRatio = () => {
    const res = Math.pow((numerator / denumerator), degree).toFixed(4);
    let res1;
    let res2;

    if (denumerator > 0 && numerator > 0 && !isNaN(degree)) {
      setIsResult(true);
      // if (degree < 0) {
      //   console.log('Отрицательная степень'); 
      //   res = ((Math.pow(numerator, degree) / Math.pow(denumerator, degree)) ).toFixed(4);
      //   res1 = ((numerator ** degree / denumerator ** degree) ).toFixed(4);
      //   res2 = Math.pow((numerator / denumerator), degree).toFixed(4);
      //   console.log('Три вычисления:', res, res1, res2);
      // } else {
      //   console.log('Положительная степень');
      //   res = ((Math.pow(denumerator, degree) / Math.pow(numerator, degree)) ).toFixed(4);
      //   res1 = ((denumerator ** degree / numerator ** degree) ).toFixed(4);
      //   res2 = Math.pow((numerator / denumerator), degree).toFixed(4);
      //   console.log('Три вычисления:', res, res1, res2);
      // }      

      setResult(res);
      setResultPercent(((res - 1) * 100).toFixed(2));
      // console.log('Вычислили:', res);      
    } else {
      setIsResult(false);
      setResult('Нет данных');
      setResultPercent('Нет данных');
    }
  };

  const handleNumerator = (e) => {
    // console.log("Глянь чо", e.target.validity.valid);
    // console.log('Ща значение числителя:', e.target.value);
    e.preventDefault();
    setNumerator(e.target.value);
  };

  const handleDenumenator = (e) => {
    // console.log('Ща значение знаменателя:', e.target.value);
    e.preventDefault();
    setDenumerator(e.target.value);
  };

  const handleDegree = (e) => {
    // console.log('Щас будет значение степени:', e.target.value);
    e.preventDefault();
    setDegree(e.target.value);
  };

  useEffect(() => {
    setDegree(isSend ? calculatedRatio : '');
  }, [calculatedRatio, isSend]);

  useEffect(() => {
    // console.log('Значение степени:', degree);
    // console.log('Слушатель Главного вычисления ');
    calcBreakRatio();
  }, [denumerator, numerator, degree, isSend]);

  return (
    <form>
      {/* <h2 className="calc__title">Калькулятор расчета корректировки на площадь</h2> */}
      {/* <p className="calc__subtitle">(Фактор масштаба)</p> */}
      <fieldset className="calc__container">
        <div className="container_item">
          <img className="calc__logo" src={logoInvOcenAnalitic} alt="Логотип ИнвестОценка аналитический центр"></img>
        </div>
        <div className="container_item">
          <p className="container_text">(</p>
        </div>
        <div className="container_item">
          <input
            name="num"
            className="calc__container_input"
            type="number"
            onChange={handleNumerator}
            placeholder="Площадь объекта оценки"
          />
        </div>
        <div className="container_item">
          <input
            name="denum"
            className="calc__container_input"
            type="number"
            onChange={handleDenumenator}
            placeholder="Площадь аналога"
          />
        </div>
        <div className="container_item">
          <p className="container_text">)</p>
        </div>
        <div className="container_item">
          <div className="container_degree">
            {/* <p className="degree_minus">-</p> */}
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
            Коэффициент торможения
          </p>
        </div>
        <div className="container_item">
          <p className="container_text">=</p>
        </div>
        <div className="container_item">
          <div className="comment_result_container">
            <div className="result_part">
              <p className={isResult && "result_part_is-result"}>
                {isResult ? result : "Нет данных"}
              </p>
            </div>

            <p className="result_part_or">или</p>
            <div className="result_part">
              <p className={isResult ? "result_part_is-result" : ''}>
                {isResult ? resultPercent : "Нет данных"}
                {isResult && (<p className="result_part_is-result result_part_is-result_persent-symb">%</p>)}
              </p>              
            </div>
          </div>
        </div>
        <div className="container_item">
          <div>
            <p className="result_part_comment">корректировка в долях</p>
          </div>          
          <div>
            <p className="result_part_comment">корректировка в %</p>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
