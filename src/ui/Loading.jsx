import { ThreeDots } from 'react-loader-spinner'

const Loading = ({width="75", height="45"}) => {
  return (
    <ThreeDots 
    height={height} 
    width={width} 
    radius={9} 
    color='rgb(var(--color-primary-900))'
    wrapperStyle={{
        display: "flex",
        justifyContent: "center",
    }}
    visible={true}
     />
  )
}

export default Loading