import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import Djob from "./artifacts/contracts/Djob.sol/Djob.json"
import { ethers } from "ethers";
import "./App.css";

function App() {


  const [contract,setContract]=useState(null);
  const [provider,setProvider]=useState(null);
    const [cbalance,setCbalance]=useState(0);
    const [abalance,setAbalance]=useState("Dunno");
    const [wjob,setJob]=useState("Dunno");
    const [registereddemp,setRegistereddemp]=useState("No one Hired yet");
    const [postjob,setPostjob]=useState("No Job Posted yet");

    const [jname, setjname] = useState("built website");
    const [jdesc, setjdesc] = useState("just built");
    const [jbudget, setjbudget] = useState(500);
    const [jloc, setjloc] = useState("remote");
    const [jmod, setjmod] = useState("WFH");
    const [data, setData] = useState('');



    useEffect(() => {
      const loadprovider = async()=>{
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const url="http://localhost:8545";

        const provider =new ethers.providers.JsonRpcProvider(url);

        const contract =new ethers.Contract( contractAddress,Djob.abi,provider);
         
          setContract(contract);
          setProvider(provider);
          console.log(contract);

          // const nicola = await contract.deploy();

        
      };
      loadprovider();
    },[]);


    useEffect(() => {
      const xvalfun =async()=>{
        const x= await contract.getx();
        const m=x.toNumber();
        console.log(m);
      }
      contract && xvalfun();
    }, [contract]);


    const postJob = async ()=>{
      setjname("App deveolpment");
      setjdesc("App deveolpment");
      setjbudget(100);
      setjloc("remote");
      setjmod("wfh");

      const signer=contract.connect(provider.getSigner());
      signer.postjob(jname,jdesc,jbudget,jloc,jmod);
      console.log(signer);
      alert("data posted")


    }

    useEffect(() => {
      const getjobs =async()=>{
        const result= await contract.getJobsAsArrays();
       
        console.log(result);
      }
      contract && getjobs();
    }, [contract]);

    // async function postJob() {
    //   setjname("App deveolpment");
    //     setjdesc("App deveolpment");
    //     setjbudget(100);
    //     setjloc("remote")
    //     setjmod("wfh")
    // //     const {contra
    //     const {contract}=state;
    //     await contract.methods
    //       .postjob(jname,jdesc,jbudget,jloc,jmod)
    //       .send({from:account});
          
  
    //   }
  

  return (
    <div className="center">
      
      <button onClick={postJob}>Post Job</button>
    </div>
  );
}

export default App;


