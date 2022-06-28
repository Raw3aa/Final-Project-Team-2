import {Link} from "react-router-dom"

function Gallery(){
    const Feed = [
         {
           name : "Last Supper",
           image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg/2560px-The-Last-Supper-Restored-Da-Vinci_32x16.jpg',
           id : 1,
     
         },
         {
           name : "jewish bride",
           image: 'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/PaintingAR290620202-1024x640.jpg',
           id : 2,
     
         },
         {
           name : "The First Step",
           image: 'https://www.aljazeera.net/wp-content/uploads/2018/04/d262e3d6-0c1e-447b-9840-c100ade132e8.jpeg',
           Description :"In his painting The First Step, Zampegui presents the viewer with a realistic scene of a family from the Italian countryside living in abject poverty. However, upon examining the painting, we find that this family, despite the simplicity of their home, lives in a clear peace of mind that is not denied by the eye of the beholder.",
           id : 3,
         },
         {
           name : "Honeymoon breakfast",
           image: 'https://www.aljazeera.net/wp-content/uploads/2018/04/2f389db7-836b-4777-b845-6912b0014f7b.jpeg',
           Description :"Daniel Ridgway Knight In his 'Honeymoon breakfast', we see a married couple working in the field on their honeymoon. The woman who spreads breakfast for her husband, in old clothes, from a wooden basket does not show any resentment about her work on the honeymoon. On the contrary, the look of the couple's eyes in the painting exudes love and intimacy. Everything, despite their poverty, is simple and reassuring.",
           id : 4,
         },
         {
           name : "The First Dance",
           image: 'https://www.aljazeera.net/wp-content/uploads/2018/04/699ac9ba-8217-451f-8bc5-0acdab495da9.jpeg',
           Description :"In Magni's painting 'The First Dance'we see bright spirits who are not incapable of poverty. The grandfather who sat at the door of the house playing the accordion for his family smiles while the youngest member of the family dances his first dance with his older sister.The German painter Carl von Bergen '1853 - 1933', known for his great love of children, believed that a child's smile is the best that a painter can portray, and that the labors of mothers in making their children happy is the most important scene that a painting can truly present, We also see in the painting that the family lives in an old, simple, poor but happy country house. The whole family enjoys playing, even the mother claps for her young. Rich hearts in a simple house and on the throne of safety.",
           id : 5,
         },
         {
           name : "Chatting",
           image: 'https://www.aljazeera.net/wp-content/uploads/2018/04/3359a35a-86c0-47d7-8057-2fb45ce4a584.jpeg',
           Description : "Despite the dominance of the female element in de Blas's paintings, all of his paintings give the impression that happiness lies in ordinary life events with their simple details that are not weighed down by pretension. In the painting 'Chatting', 1905, we see four women chatting with a boy in a simple setting, wearing simple clothes, and also wearing bright smiles, As they work to earn their living, the atmosphere is not without joking and laughter.",  
           id : 6,
         },
         {
           name : "Mona Lisa",
           image: 'https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2020/02/11/6395046-777934270.jpg?itok=9PWG2uZ4',
           Description : " visitors ) ,  However, the Mona Lisa did not gain this fame until the beginning of the twentieth century ; At that time, it was just one of the many paintings that were highly regarded.  With the beginning of the nineteenth century , people began to praise Da Vinci , and there was a belief at the time that he was a genius , and then the fame of the Mona Lisa began to grow gradually with the beginning of the mid-nineteenth century. The reason for her fame is due to several different reasons, the most important of which is her smilewhich has been described as vague and vague; It puzzled many people such as Sigmund Freud , Harvard professors , and countless viewers,  besides; His use of the method of drawing with a one-point perspective in the background, and there is something related to the bulk of the artistic composition of this painting , and the method he used in drawing aerial perspective, as each of them contributes to communicating the overall picture of this painting.",
           id : 7,
     
         },
         {
           name : "Grandmother Is The Best",
           image: 'https://www.aljazeera.net/wp-content/uploads/2018/04/776483b4-ee4f-4f5b-a38b-c2d553698b83.jpeg',
           Description :"It is said that an Austrian painter named Adolf Hamburg (1847 - 1921) was asked to paint a realistic painting about a sense of help and safety, and he who specialized in drawing scenes of monks and monasticism, did not arrive and rushed to come up with a strange or abnormal idea,[2] he painted a very simple scene A grandmother sews her grandson's clothes while he wears them, lying on his stomach under her hands. The painting, titled Grandmother Is The Best, was a realistic depiction of a poor rural family living in a simple wooden house dressed in shabby clothes, but their simple house smelled of safety.",
           id :8,
         },
       
     ];
     return(
         <div>
             
           {Feed.map((Feed) =>(
             <div className="Feed">
               <img className="image" src = {Feed.image} />
               <h4><p className = "name">{Feed.name}</p></h4>
              <button className="button"><span><Link>More</Link></span></button>
          
           
             </div>
           ))}
         </div>
     )
   }
   
   export default Gallery;