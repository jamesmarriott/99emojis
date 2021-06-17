import { render } from "react-dom";

import React, { useState, useEffect } from "react";
import { List, arrayMove } from "react-movable";

export default function App() {
  const [items, setItems] = React.useState([
    "Sausage",
    "Apple",
    "Cake",
    "Cheese",
    "Turnip",
    "Zucchini"
  ]);

  const correctOrder = [
    "Apple",
    "Cake",
    "Cheese",
    "Sausage",
    "Turnip",
    "Zucchini"
  ];

  const [correct, setCorrect] = useState(false);

  const checkCorrect = () => {
    if (JSON.stringify(items) === JSON.stringify(correctOrder)) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  useEffect(() => {
    checkCorrect();
  }, [items]);

  return (
    <div
      style={{
        maxWidth: "300px",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        margin: "0px auto",
        backgroundColor: "#F7F7F7",
        padding: "3em",
        textAlign: "center"
      }}
    >
      <div>
        <p>Order the words alphabetically</p>
        {correct ? (
          <p style={{ color: "green" }}>Correct</p>
        ) : (
          <p style={{ color: "red" }}>Incorrect</p>
        )}
      </div>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{ padding: 0, cursor: isDragged ? "grabbing" : undefined }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => (
          <>
            <li
              {...props}
              style={{
                ...props.style,
                padding: "1.5em",
                margin: "0.5em 0em",
                listStyleType: "none",
                cursor: isDragged ? "grabbing" : "grab",
                border: "2px solid #CCC",
                boxShadow: "3px 3px #AAA",
                color: "#333",
                borderRadius: "5px",
                backgroundColor: isDragged || isSelected ? "#EEE" : "#FFF"
              }}
            >
              {value}
            </li>
          </>
        )}
      />
    </div>
  );
}

