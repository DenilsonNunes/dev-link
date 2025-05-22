import { useEffect, useState, type FormEvent } from "react"
import Header from "../../components/header"
import Input from "../../components/Input"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

const Networks = () => {

  const [facebook, setFacebook] = useState('');
  const [youtube, setYoutube] = useState('');
  const [instagram, setInstagram] = useState('');



  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    if(facebook === '' || instagram === '' || youtube === ''){
      alert('Preencha todos os campos')
      return;
    }

    setDoc(doc(db, 'social', 'link'), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
    .then(()=>{

    })
    .catch((err)=>{
      alert('Houve um erro:' + err);
    })



  }



  useEffect(()=> {

    const loadLinks = () => {
      const docRef = doc(db, 'social', 'link')
      getDoc(docRef)
      .then((snapshot)=>{

        if(snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setYoutube(snapshot.data()?.youtube);
        }

      })
    }

    loadLinks();
    
  },[])




  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header/>
      <h1 className="text-white text-2xl font-medium mt-8 mb-8">Minhas redes sociais</h1>

      <form className="flex flex-col  max-w-xl w-full" onSubmit={handleRegister}>

        <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={facebook}
          onChange={(e)=> setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
        <Input
          type="url"
          placeholder="Digite a url do instagram..."
          value={instagram}
          onChange={(e)=> setInstagram(e.target.value)}
        />
        
        <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
        <Input
          type="url"
          placeholder="Digite a url do youtube..."
          value={youtube}
          onChange={(e)=> setYoutube(e.target.value)}
        />

        <button 
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium cursor-pointer"
        > 
          Salvar links
        </button>

      </form>

    </div>
  )
}

export default Networks