import { ethers } from "ethers";
import { useState, useEffect } from 'react'
import { Text, Button, Box, VStack, Spacer, Center } from '@chakra-ui/react'
import { Line } from '../../components/line/line'
import { SupportDescription } from '../../components/support/supportDescription'



export function SupportComponent():JSX.Element {
  const [balance, setBalance] = useState<string | undefined>('')
  const [currentAccount, setCurrentAccount] = useState<string | undefined>()
  const [chainId, setChainId] = useState<number | undefined>()
  const [chainName, setChainName] = useState<string | undefined>()
  const [donation, setDonation] = useState<number>(0)

  useEffect(() => {
    if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return
    //client side code
    if(!window.ethereum) return
    const provider = new  ethers.providers.Web3Provider(window.ethereum)
    provider.getBalance(currentAccount).then((result) => {
      setBalance(ethers.utils.formatEther(result))
    })
    provider.getNetwork().then((result) => {
      setChainId(result.chainId)
      setChainName(result.name)
    })
  }), [currentAccount]

  const onClickConnect = () => {
    //client side code
    if(!window.ethereum){
      console.log("please install MetaMask")
      return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    //MetaMask requires requesting permission to connect users accounts
    provider.send("eth_requestAccounts", [])
    .then((accounts) => {
      if(accounts.length> 0) setCurrentAccount(accounts[0])
    })
    .catch((e) => console.log(e)
    )
  }

  const onClickDisconnect = () => {
    console.log("onclickDisConnect")
    setBalance(undefined)
    setCurrentAccount(undefined)
  }

  const onClickPlusDonation = () => {
    const result = donation + 1
    setDonation(result)
  }

  const onClickReduceDonation = () => {
    if (donation === 0) {
      return
    } else {
      const result = donation - 1
      setDonation(result) 
    }
  }

  return (
    <Box>
      <Text fontWeight="bold" fontSize="4xl" color="#58595b" pt={'40px'}>Support</Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">It would be my pleasure.</Text>
      <Line />
      <SupportDescription />
      <VStack>
      <Box pb={'30px'}>
        {currentAccount
          ? <Button onClick={onClickDisconnect}>Account: {currentAccount}</Button>
          : <Button onClick={onClickConnect}>Connect MetaMask</Button>
        }
      </Box>
      <Box>
        {currentAccount
        ? 
        <Box>
          <Text fontWeight={'semibold'}>Account Info</Text>
          <Text>ETH Balance of current account: {balance}</Text>
          <Text>Chain Info: ChainId {chainId} name {chainName}</Text>
          <Spacer/>
          <Box>
            <Center mb="30px">
              <Button onClick={onClickReduceDonation}>-</Button>
              <Text>{donation}</Text>
              <Button onClick={onClickPlusDonation}>+</Button>
            </Center>
            <VStack>
              <Button>Support!!</Button>
            </VStack>
          </Box>
        </Box>
        :
        <></>
        }
      </Box>
    </VStack>
  </Box>
  )
}