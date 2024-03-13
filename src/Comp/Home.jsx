import React, { useCallback, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { toast } from "react-toastify";

const Home = () => {
  const [length, setLength] = useState(16);
  const [numberAllowed, setNumberallowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const handleClick = () => {
    navigator.clipboard.writeText(password);
    toast.info(" Copied!!! ",{
        position:"top-center",
    });
  };

  return (
    <div className={styles.divContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={password}
          readOnly
          className={styles.inputpass}
        />
        <button onClick={handleClick}>Copy</button>
      </div>
      <div className={styles.controls}>
        <label>Length: ({length})</label>
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <input
          type="checkbox"
          id="numbers"
          onChange={() => {
            setNumberallowed((prev) => {
              return !prev;
            });
          }}
          defaultChecked={numberAllowed}
        />
        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          id="characters"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => {
              return !prev;
            });
          }}
        />
        <label htmlFor="characters">Characters</label>
      </div>
    </div>
  );
};

export default Home;
