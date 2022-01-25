import React from 'react';

const Article =({title,author,text})=>{
    const styles={
        marginTop:40
    }
    return(
<article style={styles}>
    <h3 style={{
        fontSize:32,
        fontWeight:700,
        marginBottom:20
        }}>{title}</h3>
    <span style={{
        marginBottom:15, 
        fontWeight:600,
        display:'block',
        fontSize:12,
        }}>{author}</span>
    <p style={{fontSize:15}}>{text}</p>
</article>
    )
}
export default Article