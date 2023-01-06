import { useState,useEffect } from "react";
import "./home.css";
import api from '../api';
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [seatNumber,setSeatNumber]=useState("None");
  const [seatStatus,setSeatStatus]=useState("STATUS");
  const [admin,setAdminStatus]=useState(false);
  const [seats,setSeats]=useState([]);
  const user=JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();
  function handleSeat(seatNum){
      setSeatNumber(seatNum);
      setSeatStatus("STATUS");
    }
    function handleLogout(){
        localStorage.removeItem("user");
        navigate("/");
    }
    useEffect(()=>{
        if(!user){
            navigate("/");
        }
        setAdminStatus(user.isAdmin);
        console.log(admin);
  },[seatNumber,seatStatus]);
  async function chk(){
    const response=await api.post("/status/checkStatus",{seatNumber});
    // conso
    if(response.data.msg==false){
        setSeatStatus("SEAT AVAILABLE");
    }
    else{
        setSeatStatus("SELECT OTHER SEAT");
    }
    // alert(seatStatus);
    setSeats(response.data.status.seatStatus);
  }
  async function book(){
    const response=await api.put("/status/book",{seatNumber});
    if(response.data.msg==false){
        setSeatStatus("SEAT UNAVAILABLE");
    }
    else{
        setSeatStatus("SEAT BOOKED");
    }
  }
  async function handleadmin(){
    const response=await api.put("/status/admin",{seatNumber});
    // alert(JSON.stringify(response.data));
    setSeats(response.data.result.seatStatus);
    setSeatStatus("STATUS");
  }
  return (
    <div className="home">
        <h1><div>{user.email}</div><div>SEAT BOOKING</div><button className="checkAvail" onClick={handleLogout}>L O G O U T</button></h1>
        <div className="BusContainer">
            <div className="SeatInfo">
                <h1>DASHBOARD</h1>
                <div className="titles"><p>SELECTED SEAT:</p><p>{seatNumber}</p><button className="checkAvail" onClick={chk}>
                    Check Availablity</button><button className="checkAvail" onClick={book}>
                    BOOK</button></div>
                    <div className="titles" style={{justifyContent:"center",color:"red",fontWeight:"1000",fontSize:'30px'}}>{seatStatus}</div>
                    {admin&&<h1>ADMIN PANEL</h1>}
                    {seats.length!=0&&admin&&<div className="titles"><p>SEAT:</p><p>{seatNumber}</p>
                        {seats[seatNumber-1]&&<button className="checkAvail" onClick={handleadmin}>
                    UNRESERVE</button>}
                    {seats.length!=0&&!seats[seatNumber-1]&&<button className="checkAvail" onClick={handleadmin}>
                    BLOCK</button>}
                    </div>}
            </div>
            <div className="Bus">                
                <div className="seatRow">
                    <div className="seatCol">
                        <div className="seat" onClick={()=>{
                            handleSeat("1");
                        }}>1</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("2");
                        }}>2</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("3");
                        }}>3</div>
                    </div>
                    <div className="seatCol">
                    <div className="seat" onClick={()=>{
                            handleSeat("4");
                        }}>4</div>
                    <div className="seat" 
                    onClick={()=>{
                        handleSeat("5");
                    }}>5</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("6");
                        }}>6</div>

                    </div>
                </div>
                <div className="seatRow">
                    <div className="seatCol">
                        <div className="seat" onClick={()=>{
                            handleSeat("7");
                        }}>7</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("8");
                        }}>8</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("9");
                        }}>9</div>
                    </div>
                    <div className="seatCol">
                    <div className="seat" onClick={()=>{
                            handleSeat("10");
                        }}>10</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("11");
                        }}>11</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("12");
                        }}>12</div>

                    </div>
                </div>
                <div className="seatRow">
                    <div className="seatCol">
                        <div className="seat" onClick={()=>{
                            handleSeat("13");
                        }}>13</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("14");
                        }}>14</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("15");
                        }}>15</div>
                    </div>
                    <div className="seatCol">
                    <div className="seat" onClick={()=>{
                            handleSeat("16");
                        }}>16</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("17");
                        }}>17</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("18");
                        }}>18</div>

                    </div>
                </div>
                <div className="seatRow">
                    <div className="seatCol">
                        <div className="seat" onClick={()=>{
                            handleSeat("19");
                        }}>19</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("20");
                        }}>20</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("21");
                        }}>21</div>
                    </div>
                    <div className="seatCol">
                    <div className="seat" onClick={()=>{
                            handleSeat("22");
                        }}>22</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("23");
                        }}>23</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("24");
                        }}>24</div>

                    </div>
                </div>
                <div className="seatRow">
                    <div className="seatCol">
                        <div className="seat" onClick={()=>{
                            handleSeat("25");
                        }}>25</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("26");
                        }}>26</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("27");
                        }}>27</div>
                    </div>
                    <div className="seatCol">
                    <div className="seat" onClick={()=>{
                            handleSeat("28");
                        }}>28</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("29");
                        }}>29</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("30");
                        }}>30</div>

                    </div>
                </div>
                <div className="seatRow">
                    <div className="seatCol">
                        <div className="seat" onClick={()=>{
                            handleSeat("31");
                        }}>31</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("32");
                        }}>32</div>
                        <div className="seat" onClick={()=>{
                            handleSeat("33");
                        }}>33</div>
                    </div>
                    <div className="seatCol">
                    <div className="seat" onClick={()=>{
                            handleSeat("34");
                        }}>34</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("35");
                        }}>35</div>
                    <div className="seat" onClick={()=>{
                            handleSeat("36");
                        }}>36</div>

                    </div>
                </div>
                <div className="seatRow">
                    <div className="seatCol2">
                        <div className="seat2" onClick={()=>{
                            handleSeat("37");
                        }}>37</div>
                        <div className="seat2" onClick={()=>{
                            handleSeat("38");
                        }}>38</div>
                        <div className="seat2" onClick={()=>{
                            handleSeat("39");
                        }}>39</div>
                        <div className="seat2" onClick={()=>{
                            handleSeat("40");
                        }}>40</div>                    
                        <div className="seat2" onClick={()=>{
                            handleSeat("41");
                        }}>41</div>
                        <div className="seat2" onClick={()=>{
                            handleSeat("42");
                        }}>42</div>
                        <div className="seat2" onClick={()=>{
                            handleSeat("43");
                        }}>43</div>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
}