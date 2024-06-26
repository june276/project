import React, { useEffect, useState } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import BasicSearch from '../../components/search/BasicSearch.jsx';
import S from './style.js';

const LotteworldAttraction = () => {


    // currentValue에 맞는 데이터를 fetch로 불러온다.
    // 의존성 배열에 [currentValue]를 넣어 onClick으로 바뀌었을 때 새로 불러온다.
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const getAttractions = async () => {
            const response = await fetch(`http://localhost:8000/attraction/lotteworld`, {
                method : 'POST',
                credentials : 'include',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const datas = await response.json()
            console.log(datas)
            return datas;
        };
        getAttractions().then((datas)=>{
            // console.log(datas);
            setAttractions(datas);
        });
    }, []);
  
    

    // 화면에 뿌리기 위해 리스트를 구현한다.
    const attractionsList = attractions.map((att, i) => (
        <S.ImageWrapper key={i}>
            {/* NavLink 쓰다가 Link씀 */}
        <Link to={`/attraction/lotteworld/explain/${att.id}`}>    
            {/* <img src={`process.env.PUBLIC_URL/pages/attractions/lotte/blahblah${att.id}.jpg`} /> */}
             <S.Image src={`${process.env.PUBLIC_URL}/AttractionsImage/Lotteworld/at${att.id}.jpg`} alt="attraction" />
            <div>
                <p>{att.title}</p>
                <span>{att.location}</span>
                {/* <p>{att.description}</p> */}
            </div>  
        </Link>
        </S.ImageWrapper>
        
    ))
   
    return (
        <S.Background className='notosanskr'>
            
            

            <S.NavParkSelector>
                <NavLink to={"/attraction/lotteworld"}>롯데월드</NavLink>
                <span>|</span>
                <NavLink to={"/attraction/everland"}>에버랜드</NavLink>
                <span>|</span>
                <NavLink to={"/attraction/seoulland"}>서울랜드</NavLink>
            </S.NavParkSelector>

            <S.search className='searchbar'>
              <BasicSearch  shape={"default"} variant={"main"} size={"default"} />
             </S.search>

            <div>
                <S.AttractionsContainer>
                {attractions && attractionsList}
                </S.AttractionsContainer>
            </div>
        </S.Background>
    );
};




export default LotteworldAttraction;

