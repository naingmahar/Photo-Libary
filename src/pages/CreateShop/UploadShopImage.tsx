import { useRecoilState } from "recoil"
import { ProgressContainer } from "../../componet/atoms/Container/ProgressContainer"
import { shopAndProductState } from "../../feature/recoilState"
import FileUpload from "../../componet/atoms/FileUpload"
import { CardContainer } from "../../componet/atoms/Container/CardContainer"

export const UploadShopImage = () => {
    const [state,setState] = useRecoilState(shopAndProductState)
    return (
        <ProgressContainer data={state.shop.image} progress={27} title="Drop or Choose your shop photo">
            <CardContainer className="flex justify-center items-center flex-col py-5 mb-10">
                <FileUpload  onChange={(image)=>{
                    setState(current=>{
                        let shop = {...current.shop,...{image:image[0]}}
                        return {...current,...{shop}}
                    })
                }} />
                <div className="my-3" />
                <p className="label-text"><b>Click to upload</b> or drag and drop</p>
                <p className="label-text">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </CardContainer>
        </ProgressContainer>
    )
}