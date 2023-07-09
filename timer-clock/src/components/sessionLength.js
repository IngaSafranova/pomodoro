function SessionLength(props){
    return (
        <div className='session-container'>
        <label id="session-label">{"Session Length"}</label>
        <div className='controls-container'>
        
        <button id='session-decrement' className='btn-level' value= "-" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
   
        </button>
        <h3 id='session-length'>25</h3>
        <button id='session-increment' className='btn-level' value= "+" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  
        </button>
        </div>
        </div>
    )
}
export default SessionLength;