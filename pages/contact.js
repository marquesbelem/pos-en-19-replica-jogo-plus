import { useState } from 'react';
import axios from 'axios';

const Home = ({ allCategories, errorCategories }) => {
  const [modifiedData, setModifiedData] = useState({
    title: '',
    content: ''
  });
  const [errorRestaurants, setErrorRestaurants] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/postIdeas', modifiedData);
      console.log(response);
    } catch (error) {
      setErrorRestaurants(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Restaurants</h3>
        <br />
        <label>
          Name:
          <input type="text" name="title" value={modifiedData.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="content"
            value={modifiedData.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/categories');
    const allCategories = res.data;
    return { allCategories };
  } catch (errorCategories) {
    return { errorCategories };
  }
};

export default Home;