import React, { useEffect } from "react";
import "./file.css"
import { Icon, IconKey } from "../icons";
import ImgPreview from "./ImagePreview";
import { uploadImage } from "../../../feature/apiClient/Common";
import { RowContainer } from "../Container/FlexContainer";

const FileUpload = (props:{onChange:(img:[string])=>any,value?:[{url:string}]}) => {

    const inputRef = React.useRef<React.LegacyRef<HTMLInputElement>| any>(null);
    const [dragActive, setDragActive] = React.useState(false);
    const [images,setImage] = React.useState<any[]>([])
    const [isUploading,setLoading] = React.useState(false)

    useEffect(()=>{
       if(props.value && props.value[0]) {
        setImage([props.value[0].url])
       }
    },[props.value])

  
    // handle drag events
    const handleDrag = function(e:any) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };


    // triggers when file is dropped
    const handleDrop = function(e:any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        // handleFiles(e.dataTransfer.files);

        handleFiles(e.dataTransfer.files)
        }
    };


    const handleFiles = async (data:{length:number,0:any}) => {
        for (let index = 0; index < data.length; index++) {
            //@ts-ignore
            const element = data[index];

            const formData = new FormData();
            formData.append("images[]", element);

            setLoading(true);
            setImage([])
            uploadImage(formData).then(data=>{
                props.onChange(data)
                setPreviewImage(element);
                setLoading(false)
            })
        }
    }

    // triggers when file is selected with click
    const handleChange = function(e:any) {
        e.preventDefault();
        console.warn("Hello")
        if (e.target.files && e.target.files[0]) {
        // at least one file has been selected so do something
        handleFiles(e.target.files);
        }
    };

    // const addImage = useCallback((img:string) => {
    //     setImage((images) => [...images, img]);
    //   }, [images]);

    const setPreviewImage = (file:any) => {
        return new Promise((resolve,reject)=>{
            var reader = new FileReader();
            reader.onload = (e) => {
                // addImage(e.target?.result);
                setImage([e.target?.result])
                resolve(true)
            }
            reader.onerror = () => {
                reject(false)
            } 
        reader.readAsDataURL(file);
        })
    }

    // const onButtonClick = () => {
    //     //@ts-ignore
    //     inputRef.current.click();
    // };

    // const removeImage = useCallback(()=>{
    //     setImage(images=>{
    //         return []
    //     })
    // },[images])

    const onRemoveImage = (delIndex:number) => {
        let temp:any[] = [];
        images.map((img,index)=>{
            if(index !== delIndex) temp.push(img)
        })
        setImage(temp)
    }
  
    
    return (
        <div className="flex flex-1">
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={(e)=>handleChange(e)} />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                    <Icon icon={IconKey.addIcon} active />
                </label>
                { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </form> 
            {
                images.map((url,index)=>(
                    <ImgPreview key={index}  url={url} onDelete={() => onRemoveImage(index)} />
                ))
            }
            {
                isUploading && (
                    <div id="form-file-upload">
                        <RowContainer className="justify-center items-center h-full border-2 rounded-xl">
                            <span className="loading loading-spinner loading-lg text-slate-500"></span>
                        </RowContainer>
                    </div>
                )
            }

        </div>
    )
}

export default FileUpload