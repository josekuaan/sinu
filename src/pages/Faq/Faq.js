import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Faq from 'react-faq-component';
import './styles.css'



const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is the date for Mint?",
      content: "An official announcement will be made In due time; you don't want to miss it. "
    },
    {
      title: "How do I get Whitelisted?",
      content: "      The community comes first, and people who contribute to the community will be whitelisted. This could be accomplished in a variety of ways, including remaining active in chat and assisting newcomers, creating fan art, memes, stickers and remaining active in the community. For more details on how to get whitelisted, check discord"
    },
    {

      title: "How do I get my hands on a PupSINU NFT?",
      content: "Our website will allow you to mint an NFT directly and you'll be able to purchase the arts on secondary markets like Opensea and MagicEden after the collection sells out. "
    },
    {
      title: "What is the total number of NFTs available?",
      content: "The total number of arts in the collection is 5,555. You can check who owns a NFT and others on the blockchain."
    },
    {
      title: "What is the mint prices?",
      content: "TBA closed to launch"
    },
    {
      title: "How can you be a member of the community?",
      content: "We have a thriving community and we welcome new members with open arms! Come and Join Our Discord Community."
    },
]
}

const Faqs = () => {
  return (
    <header >
        <NavBar/>
        <div className='Row faq'>
        <Faq data={data}/>

        </div>
        <Footer/>
    </header>
  )
}

export default Faqs