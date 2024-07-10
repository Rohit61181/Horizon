import React from "react";
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';

import TotalBalanceBox from '@/components/TotalBalanceBox';
const Home = () => {

  const loggedIn = {
    firstName: "Rohit", lastName: "Chowdhary", email: "rohitchowdhary20122002@gmail.com"}




  return <section className="home">
    <div className="home-content">
      <header className="home-header">
        <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your accounts and transactions efficiently."
        
        
        />


           <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={61181.99}
          />
        


        </header>
  
     RECENT TRANSACTIONS
    </div>
    <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50},{ currentBalance: 523.50}]}
      />
  </section>;
};

export default Home;
