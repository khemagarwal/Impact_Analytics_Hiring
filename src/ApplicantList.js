import { Link } from "react-router-dom";
import { useState } from "react";


const ApplicantList = ({applicants, title}) => {
    
const keysArray=[];

function func(applicant){

    if(localStorage.getItem("keys") === null){
        localStorage.setItem(applicant+"s",null)

    }
  

}

function SearchBar({ placeholder, data }) {
const [filteredData, setFilteredData] = useState(data);

   
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData(data);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData(data);
      setWordEntered("");
    };



    return (

        <div className="search">
      <div className="searchInputs">
      <i class="fa fa-search icon"></i>
      
        <input
          className="searchBar"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      {filteredData.length != 0 && (
        <div className="applicant-list">
          {filteredData.slice(0, 15).map((applicant, key) => {
            return (
            
           

        <div className="applicant-list">
         

         <Link to={ `/ApplicantDetails/${applicant.id}` }>
                {/* <div className="applicant-preview" key={applicant.id}>
                    <div className="candidateCard">
                        {localStorage.setItem(applicant.id,JSON.stringify([applicant.id,applicant.name,applicant.Image]))}
                          {func(applicant.id)}
                          {console.log("a",JSON.parse(localStorage.getItem(applicant.id)))}
                        <img className="profilePic" width="100px" height="100px" src={applicant.Image}/>
                        <p>{applicant.id}</p>
                        <h2>{applicant.name}</h2>
                    </div>
                        
               
            
            </div> */}
      <br/>      <br/>
            <section class="cards">
<article class="card card--1">
  {/* <div class="card__img"> */}

  <div class="ribbon ribbon-top-left"><span></span></div>

  {/* </div> */}
  
  <a href="#" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
  <img className="card__img" src={applicant.Image}/>
  <br/>
    <span class="card__category"> id:{applicant.id}</span>
    <h3 class="card__title">{applicant.name}</h3>

  </div>
</article>

  </section>
  <br/>   
            </Link>
            </div>
            );
          })}
        </div>
      )}

    </div>

    );
        }


return(
        <div className="applicant-list" >
          
          <div class="one">
            <h1>{title}</h1>
          </div>
          <br/>
     
          <center><SearchBar placeholder="Search by Candidate Name" data={applicants} /></center>

          
           
            
            {applicants.map((applicant)  => (
                keysArray.push(applicant.id+"s"),
                            localStorage.setItem(applicant.id,JSON.stringify([applicant.id,applicant.name,applicant.Image])),
                           
                              func(applicant.id),
                              console.log("a",JSON.parse(localStorage.getItem(applicant.id)))
                           
            ))}

                {localStorage.setItem("keys",JSON.stringify(keysArray))}
                {console.log("b",JSON.parse(localStorage.getItem("keys")))}
               
        </div>
    
    );
}
 
export default ApplicantList;