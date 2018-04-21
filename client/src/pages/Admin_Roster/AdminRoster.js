import React, { Component } from "react";
import { Table } from 'reactstrap';

class FireRoster extends Component { 
 
  state = {
    fireFighters:[],
  
  };
 
 
 
 
    render() {
    return (
      <Table  
      id={article._id} 
      firstName= {article.web_url}
      lastName = {article.headline.main}  
      fireNumber={article.pub_date}   
      year={article.pub_date}  
      title={article.pub_date}  
      rank={article.pub_date}  
      station={article.pub_date}  
      company={article.pub_date}  
      >
        
      </Table>
    );
  }
}

export default FireRoster;