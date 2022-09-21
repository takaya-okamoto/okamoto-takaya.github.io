import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export function Line():JSX.Element {
  return (
    <Skeleton borderRadius="10px" mb="30px" startColor='#99FFFF' endColor='#66FF99' height='10px' w={["250px", "400px", "400px"]}/>
  )
}