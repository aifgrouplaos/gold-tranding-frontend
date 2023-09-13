
export const Converfiletobase64=(event:any)=>{ 
    const file = event.target.files[0];
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); 
    }); 
}