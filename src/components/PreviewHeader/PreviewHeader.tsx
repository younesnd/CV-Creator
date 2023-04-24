type PreviewHeaderProps = {
  firstName:string
  position?:string
}
const PreviewHeader = (props:PreviewHeaderProps) =>{

    return (
        <div className="grid grid-rows-[0.8fr,auto]">
          <h1 className="mb-2 p-8 tracking-[8px] text-center font-medium text-3xl uppercase">
            {props.firstName}
          </h1>
          <div className="bg-zinc-200 h-10  font-extralight">
            
          </div>
        </div>
    )
}

export default PreviewHeader