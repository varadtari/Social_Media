import styles from "./ButtonsContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttnNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.btnContainer}>
        {buttnNames.map((name) => {
          return <button className={styles.button} onClick={()=>onButtonClick(name)}>{name}</button>;
        })}
      </div>
    </>
  );
};
export default ButtonContainer;
