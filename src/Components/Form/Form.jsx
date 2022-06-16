import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

export const NewsForm = () => {
  const [data, setData] = useState({
    title: "",
    subject: "",
    article: "",
    file: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const initialState = {
    title: "",
    subject: "",
    article: "",
    file: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.title.length + 1 < 3) {
      setMessage("You need to fill out more information");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.title + " " + data.subject);
    saveResults(data);
    clearState();
    setMessage("News article added");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  function getSavedData() {
    const usersDb = localStorage.getItem("results"); //traemos la informacion del local storage a un var
    const dataArray = JSON.parse(usersDb) || [];
    // const  Object.entries(dataObject); //creating var to store. necessary step to translate to js
    return dataArray;
  }
  getSavedData();
  function saveResults(data) {
    const database = {
      title: data.title,
      subject: data.subject,
      article: data.article,
      file: data.file
    }; //the result of a function saved in a variable

    const lc = getSavedData();
    const ls = lc.push(database);
    console.log("this is lc ", lc);
    localStorage.setItem("results", JSON.stringify(lc)); //pushing infoOfUsers to database array
    //localStorage.setItem("results", JSON.stringify(database)); // puts data back into local storage
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="contact">Add your own news article</h1>
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={handleInputChange}
          name="title"
        />
        <input
          className="subject"
          type="text"
          placeholder="Subject"
          value={data.subject}
          onChange={handleInputChange}
          name="subject"
        />
        <input
          className="message"
          type="textarea"
          placeholder="Write your article here"
          value={data.article}
          onChange={handleInputChange}
          name="article"
        />

        <input
          className="file"
          type="file"
          value={data.file}
          onChange={handleInputChange}
          name="upload"
          
        />

        <button className="button" type="submit" disabled={btnDisabled}>
          Submit
        </button>
        {message}
      </form>
    </>
  );
};
export default NewsForm;
