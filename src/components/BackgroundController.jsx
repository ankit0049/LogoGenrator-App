import { Slider } from "@/components/ui/slider";
import React, { useContext, useEffect, useState } from 'react';
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {  
  const storageValue = JSON.parse(localStorage.getItem('value')); 
    const [rounded , setRounded] = useState(storageValue? storageValue?.bgRounded:0); 
    const [padding , setPadding] = useState(storageValue?storageValue?.bgPadding:0);
    const [color , setColor] = useState(storageValue?storageValue?.bgColor:'#000')  

    const {updateStorage , setUpdateStorage} = useContext(UpdateStorageContext);
    

     useEffect(()=>{ 

      const updatedValue = {
        ...storageValue ,  
        bgRounded : rounded,
        bgPadding : padding, 
        bgColor : color
      }   
      setUpdateStorage(updatedValue)
      localStorage.setItem('value', JSON.stringify(updatedValue));

     },[padding ,color ,rounded])
   
    return (
        <div className="w-70">
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'> Rounded<span>{rounded} px</span></label> 
                <Slider className='bg-primary' defaultValue={[0]} max={360} step={1}  
                    onValueChange={e => setRounded(e[0])}
                /> 
            </div>   
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'> Padding<span>{padding} px</span></label> 
                <Slider className='bg-primary' defaultValue={[40]} max={100} step={1}  
                    onValueChange={e => setPadding(e[0])}
                /> 
            </div>   
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'> Color Picker</label> 
                <ColorPickerController hideController={false} selectedColor={(color)=>setColor(color)} />
            </div>  
        </div>
    );
}

export default BackgroundController;
