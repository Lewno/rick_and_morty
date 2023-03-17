import Card from "./Card";
import style from "./Card.module.css";

export default function Cards({characters, onClose}) {
   return (
      <div className={style.container}>
         {
            characters.map(({id, name,species,gender,image}) => {
               return(
                  <Card 
                     id={id} 
                     name = {name} 
                     species = {species} 
                     gender = {gender} 
                     image = {image} 
                     onClose = {onClose}
                  />
               );
            })}
      </div>
   );
}
