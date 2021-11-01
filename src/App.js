import { useEffect, useState } from 'react';
import './App.css';
import PortfolioList from './component/PortfolioList/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from './data'
function App() {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const lists = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "WebApp"
    },
    {
      id: "design",
      title: "WebDesign"
    },
    {
      id: "react",
      title: "ReactJs"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "design":
        setData(mobilePortfolio);
        break;

      case "react":
        setData(designPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {
          lists.map(lists => <PortfolioList
            title={lists.title}
            active={selected === lists.id}
            setSelected={setSelected}
            id={lists.id}
          />)
        }
      </ul>
      <div className="container">
        {
          data.map((data) => (
            <div className="items">
              <img className="img-wrapping" src={data.img} alt="" />
              <h3>{data.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
