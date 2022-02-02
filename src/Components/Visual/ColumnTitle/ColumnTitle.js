import React, { useContext } from 'react';
import './ColumnTitle.css';
import PencilPlus from '../../../Assets/Icons/PencilPlus';

import GlobalContext from '../../../Context/Global/GlobalContext';

const ColumnTitle = ({ category }) => {
  const globalContext = useContext(GlobalContext);
  const { IsAddNewTodoOpen, toggleAddTodoComp } = globalContext;
  const { title, color, subTitle } = category;
  return (
    <>
      <div className="column-title-con">
        <div
          className="c-t-c-border-left"
          style={{ backgroundColor: color }}
        ></div>
        <div className="c-t-c-head">
          <h3>{title}</h3>
          <p>{subTitle} </p>
        </div>
        {title === 'TO Do' && (
          <div
            className="pencile-plus-svg-con"
            onClick={(e) => toggleAddTodoComp(!IsAddNewTodoOpen)}
          >
            <PencilPlus />
          </div>
        )}
      </div>
    </>
  );
};

export default ColumnTitle;
