// import "./Guestbook.css";
// import supabase from "./config/supabase";
// import {useState, useEffect} from 'react';

// const Guestbook = () => {
//     const [fetchError, setFetchError] = useState(null);
//     const [guestbook, setGuestbook] = useState([]);
//     const [name, setName] = useState("");
//     const [message, setMessage] = useState("");
 
//     useEffect(() => {
//         const fetchMessages = async () => {
//             const {data, error} = await supabase
//             .from('guestbook')
//             .select()

//             if (error) {
//                 setFetchError(error);
//                 setGuestbook(null)
//                 console.log(error)
//             }

//             if (data) {
//                 setFetchError(null);
//                 setGuestbook(data);
//             }
//         }
//         fetchMessages();
//     }, [guestbook]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if(!name || !message) {
//             return;
//         }

//         const {data, error} = await supabase
//             .from("guestbook")
//             .insert({name, message});
//     }

//     return (
//         <div className="guestbook">
//             {fetchError && (<p>{fetchError}</p>)}
//             {guestbook && (
//                 <div className="message-board">
//                     {guestbook.map(guest => (
//                         <div className="guest">
//                         <p className="guest-name">{guest.name}</p>
//                         <p className="message">{guest.message}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <h2>Guestbook :D</h2>
//             <p></p>
//             <form>
//                 <label>Who are you?</label>
//                 <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required/>
//             </form>
//             <form>
//                 <label>Leave a Message Here!</label>
//                 <textarea 
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required>
//                 </textarea>
//             </form>
//             <button onClick={(e) => handleSubmit(e)}>Click me!</button>
//         </div>
//     )
// }

// export default Guestbook;