// import React from 'react';
// import NewTicketForm from './NewTicketForm';
// import TicketList from './TicketList';


// class Condition extends React.Component {
  
//     constructor(props) {
//       super(props);
//       this.state = {
//         masterTicketList: []
//       };
//       this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
//     }
  
//     handleAddingNewTicketToList(newTicket){
//       var newMasterTicketList = this.state.masterTicketList.slice();
//       newMasterTicketList.push(newTicket);
//       this.setState({masterTicketList: newMasterTicketList});
//     }
  
//     render(){
//       return (
//         <div>
//           <TicketList ticketList={this.state.masterTicketList} />
//           <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
//         </div>
//       );
//     }
//   }
// export default Condition;
  