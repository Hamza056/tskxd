
person=[
    {
        name: "Matt",
        surname: "Edabit",
        gender: "M",
        dob: "01/1/1900"
    },
     {
        name: "Helen",
        surname: "Yu",
        gender: "F",
        dob: "01/12/1950"
     },
     {
        name: "Ali",
        surname: "Ahmed",
        gender: "M",
        dob: "16/1/1928"
     },
                                   
]



const displaymv=function(mv){
   const str=mv.name;
 

   const noVowels = str.replace(/[aeiou]/gi, '');
   
   let firstname=noVowels.toUpperCase();
 

if (firstname.length>3) {
  firstname=firstname.replace("C",'');
 
}
   ///vowals
   const strl = mv.name;

   const res = strl.match(/[aeiou]/ig).join("").toUpperCase();
    
   // console.log(res);
   if(firstname.length<3){
      firstname= firstname.concat(res[0])
      if(firstname.length<3){
         firstname=firstname.concat(`X`);
         if(firstname.length<3){
            firstname=`L`.concat(firstname);
         }
   }}
  //
   const fname=mv.surname
   const stri=fname
  
   const novowelssr=stri.replace(/[aeiou]/gi, '');
   
   let fathname= novowelssr.toUpperCase();
 
  
  //
     ///vowals
     const strlfn = mv.surname;

     const resfn = strlfn.match(/[aeiou]/ig).join("").toUpperCase();
  
   //   console.log(resfn);
     if(fathname.length<3){
     fathname= fathname.concat(resfn[0]);
   
     if(fathname.length<3){
      fathname=fathname.concat(`X`);
      if(fathname.length<3){
         fathname=`L`.concat(fathname);
      }
     }
     }
    //
   const dobs=mv.dob.slice(-2);
   
   let conv=''
    if(mv.dob.includes("/1/")){
      conv= 'A';
     
    }else if(mv.dob.includes('/12/')){
        conv='T';
    }
    
    let Day= `${mv.dob[0]}${mv.dob[1]}`;
   
    if(mv.gender=='F'){
      Day=`${Number(Day)+40}`;
    }else{
      Day=`${mv.dob[0]}${mv.dob[1]}`;
    }
    
    
    console.log(`${fathname}${firstname}${dobs}${conv}${Day}`);
  };
  displaymv(person[0]);
  displaymv(person[1]);
  displaymv(person[2]);

  