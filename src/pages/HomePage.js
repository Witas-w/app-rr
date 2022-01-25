import React from 'react';
import Article from '../components/Article';

const articles=[
    {
        id:1,
        title:'Czym jest teoria strun?',
        author:'Jan Nowak',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste ut unde aperiam numquam facere quis magnam incidunt libero. Eos, quod exercitationem distinctio deserunt nam tenetur cum sint voluptatum nobis.'
    },  {
        id:2,
        title:'Czym jest teoria XD?',
        author:'Jan Kowalski',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste ut unde aperiam numquam facere quis magnam incidunt libero. Eos, quod exercitationem distinctio deserunt nam tenetur cum sint voluptatum nobis.'
    },  {
        id:3,
        title:'Czym jest teoria Teoretyczna?',
        author:'Jan A',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste ut unde aperiam numquam facere quis magnam incidunt libero. Eos, quod exercitationem distinctio deserunt nam tenetur cum sint voluptatum nobis.'
    },
]

const HomePage=(props)=>{
    const artList = articles.map(article=>(
        <Article key={article.id} {...article}/>
    ))
    return(
        <div className="home">
            {artList}
        </div>
    );
}
export default HomePage;