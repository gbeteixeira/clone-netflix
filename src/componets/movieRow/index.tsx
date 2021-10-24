import React, {useState} from 'react';
import './index.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

type Props = {
  title: string,
  items: any
}

export default function ListMovie({ title, items }: Props) {
  
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let width = window.innerWidth;
    let x = scrollX + Math.round(width / 2);
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let width = window.innerWidth;
    let x = scrollX - Math.round(width / 2);
    let listWidth = items.results.length * 150;
    if((width - listWidth) > x){
      x = (width - listWidth) - 60;
    }
    
    setScrollX(x);
  }
  
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow__left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow__right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow__listarea">
        <div className="movieRow__list" style={{ 
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item: any, key: any) => (
            <div key={key} className="movieRow__item">
              <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}