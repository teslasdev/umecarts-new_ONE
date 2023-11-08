import React, { useEffect, useRef, useState } from 'react'
import { DropdownDefault } from '../../common/Dropdown'
import { PrimaryInput } from '../../common/Inputs'
import { RxCross1 } from 'react-icons/rx'
import { PrimaryButton } from '../../common/Button'
import { BiCheck, BiPlus } from 'react-icons/bi'
import UploadService from '../../../helper/services/FileUploadService'
import isEmpty from '../../../utils/isEmpty'
import UploadCard from '../uploadCard'
import { useGallery } from '../../../helper/api-hooks/useGeneral'

const UploadFileModal = ({
   onClick,
   setGallery,
   Gallery,
   Thumb,
   setThumb,
   setMeta,
   Meta,
   onChange
}) => {
   const {data ,isLoading, refetch} = useGallery()
   useEffect(() => {
    if (!data?.gallery) {
      refetch();
    }
   }, [])
   const [selectedFiles, setSelectedFiles] = useState(undefined);
   const [imagePreviews, setImagePreviews] = useState([]);
   const [progressInfos, setProgressInfos] = useState({ val: [] });
   const [message, setMessage] = useState([]);
   const [imageInfos, setImageInfos] = useState([]);
   const progressInfosRef = useRef(null);
   const [iLoading, setLoading] = useState(false)
   const uploadImages = (event) => {
      console.log()
      let images = [];
      let imgName = []
      for (let i = 0; i < event.target.files.length; i++) {
         console.log(event.target.files[i].extension)
         images.push(URL.createObjectURL(event.target.files[i]));
         imgName.push({ fileName : event.target.files[i].name , size : event.target.files[i].size });
      }
      
      if(isEmpty(imagePreviews)) {
         setImagePreviews(images);
      } else {
         setImagePreviews((prevImage) => [
            ...prevImage,
            images
         ]) 
      }
      setSelectedFiles(event.target.files);
      setProgressInfos({ val: [] });
      setMessage([]);
      setImageInfos(imgName)
      const files = Array.from(event.target.files);
      let _progressInfos = files.map((file) => ({
        percentage: 0,
        fileName: file.name,
      }));
      progressInfosRef.current = {
        val: _progressInfos,
      };
      const uploadPromises = files.map((file, i) => upload(i, file));  
      setMessage([]);
   };
   const upload = async (idx, file) => {
      let _progressInfos = [...progressInfosRef.current.val];
      try {
         await UploadService.upload(file, (event) => {
            _progressInfos[idx].percentage = Math.round(
               (100 * event.loaded) / event.total
            )
            setProgressInfos({ val: _progressInfos })
         })
         setMessage((prevMessage) => [
            ...prevMessage,
            "Uploaded the image successfully: " + file.name,
         ])
      } catch {
         _progressInfos[idx].percentage = 0
         setProgressInfos({ val: _progressInfos })

         setMessage((prevMessage_1) => [
            ...prevMessage_1,
            "Could not upload the image: " + file.name,
         ])
      }
    };
    const inputFile = useRef(null) 
    const uploadInputFile =() => {
      inputFile.current.click();
   }
   const addFiles = async (e) => {
      setLoading(true)
      for (let i = 0; i < imageInfos.length; i++) {
         await UploadService.uploadGallery(imageInfos[i]).then((res) => {
            console.log('yes')
         })
      }
   }
   const [tab , setTab] = useState(true)
   return (
      <div className='fixed z-[112] top-0 blur-bg w-full h-screen flex justify-center items-center'>
         <div className='bg-[#F5F5F5] h-[767px] w-[98%]'>
            <div className='relative h-[10%] flex  align-bottom px-6 pt-8 gap-3 text-[12px]'>
               <div className='px-4 rounded-t-xl flex justify-center items-center text-[#001229] cursor-pointer' style={{backgroundColor : tab && 'white' , fontWeight : tab && 700 }} onClick={() => setTab(true)}>Select File</div>
               <div className='px-4 rounded-t-xl flex justify-center items-center text-[#001229] cursor-pointer' style={{backgroundColor : !tab && 'white' , fontWeight : !tab && 700 }} onClick={() => setTab(false)}>Upload New</div>
               <div className='absolute right-10 top-1/2 cursor-pointer'><RxCross1 onClick={onClick}/></div>
            </div>
            {!tab ?
            <div className='h-[80%] bg-white p-4'>
               <div className='flex justify-between items-center'>
                  <div className='w-[25%]'>
                     <DropdownDefault 
                        placeholder={'Sorted by Newest'} 
                        className={'w-full flex flex-col gap-1'} 
                        disabled='true'
                        options={[
                           {'label' : 'Newest'},
                           {'label' : 'Oldest'},
                           {'label' : 'Tyest'}
                        ]}
                     />

                     
                  </div>
                  <PrimaryInput 
                     placeholder={"Search files"}
                  />
               </div>

               <div className='border border-[#94a3b879] h-[500px] my-4 rounded-md'>
                  <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={uploadImages}
                  ref={inputFile}
                  className='hidden'
                  />
                  {isEmpty(imagePreviews) ?
                  <div className='border border-dotted border-[#94A3B8] h-full bg-[#F5F5F5] rounded-md flex justify-center items-center' onClick={uploadInputFile}>
                     <div className='w-[20%]'>
                        <p>Drag any files here,paste or <span className='text-[#004399] cursor-pointer'>Browse</span> your local directory</p>
                     </div>
                  </div>
                  :
                  <div className='h-full bg-[#F5F5F5] rounded-md'>
                     <div className='h-[15%] flex justify-center gap-2 items-center border-b w-full border-[#94a3b879]'>
                        <p>Uploading file</p>
                       
                     </div>
                     <div className='h-[75%] p-4 w-full flex gap-8 flex-wrap overflow-auto'>
                     {imagePreviews.map((img, i) => {
                        return (
                        <div className='relative w-[175px] h-[175px] rounded-sm'>
                           <img 
                              src={img} 
                              className='w-full h-full object-cover'
                              alt={"image-" + i} key={i}
                           />
                           { progressInfosRef.current.val[i].percentage == 100 ?
                              <div className='absolute -top-2 -right-2 bg-[#02BD73] z-[60] w-[20px] h-[20px] rounded-full flex justify-center items-center'><BiCheck color='white'/></div>
                           :
                              <>
                                 <div className='w-[175px] h-[175px] bg-black opacity-50 absolute top-0 left-0 z-[40]'></div>
                                 <div>
                                    <div className='absolute top-[20%] left-[20%]  z-50 w-[117px] h-[117px] border-[#27272797] animate-spin border-[16px] border-t-[15px] border-r-[15px] border-b-[15px] border-t-[#ffffff66] border-r-[#ffffff56] border-b-[#ffffff56] flex justify-center items-center rounded-full'>

                                    </div>
                                    <RxCross1 size={40} color='#ffffff66' className='absolute top-[42%] left-[42%]'/>
                                 </div>
                              </> 
                           }
                        </div>
                        )
                     })}
                     </div>
                     <div className='relative h-[10%] flex justify-between px-2 items-center border-t w-full  border-[#94a3b879]'>
                        <div className='absolute left-0 -top-1 bg-[#002C66] h-[3px] w-[40%] flex' style={{
                           width : progressInfosRef.current.val[selectedFiles.length - 1].percentage  + "%",
                           backgroundColor : progressInfosRef.current.val[selectedFiles.length - 1].percentage != 100 ? '#002C66' : '#02BD73'
                        }}/>
                        <div className='flex gap-2 items-center'>
                           { progressInfosRef.current.val[selectedFiles.length - 1].percentage != 100 ?
                              <>
                                 <div className='w-[24px] h-[24px] border-transparent animate-spin border-[2px] border-t-[2px] border-r-[2px] border-b-[2px] border-t-[#002C66] border-r-[#002C66] border-b-[#002C66] flex justify-center items-center rounded-full' /> 
                                 <p>
                                 {progressInfosRef.current.val.filter(item => {
                                    if(item.percentage == 100) {
                                       return true;
                                    }
                                    return false;
                                 }).length}/{selectedFiles.length} file(s) uploading
                                 </p>
                              </>
                            :
                             <>
                              <BiCheck color='#02BD73'/>
                              <p>
                              {progressInfosRef.current.val.filter(item => {
                                 if(item.percentage == 100) {
                                    return true;
                                 }
                                 return false;
                              }).length}/{selectedFiles.length} file(s) uploaded
                              </p>
                             </>
                           }
                           
                          
                        </div>
                        <div>
                           <p>{progressInfosRef.current.val.filter(item => {
                                 if(item.percentage == 100) {
                                    return true;
                                 }
                                 return false;
                              }).length === selectedFiles.length ? 100 : (progressInfosRef.current.val.filter(item => {
                                 if(item.percentage == 100) {
                                    return true;
                                 }
                                 return false;
                              }).length / selectedFiles.length ) * 100}% . {progressInfosRef.current.val.filter(item => {
                                 if(item.percentage == 100) {
                                    return false;
                                 }
                                 return true;
                              }).length * 5} Secs left
                              </p>
                        </div>
                     </div>
                  </div>
                  }

               </div>
            </div>
            :
            <div className='h-[80%] bg-white p-4'>
               <div className='flex justify-between items-center'>
                  <div className='w-[25%]'>
                     <DropdownDefault 
                        placeholder={'Sorted by Newest'} 
                        className={'w-full flex flex-col gap-1'} 
                        disabled='true'
                        options={[
                           {'label' : 'Newest'},
                           {'label' : 'Oldest'},
                           {'label' : 'Tyest'}
                        ]}
                     />

                     
                  </div>
                  <PrimaryInput 
                     placeholder={"Search files"}
                  />
               </div>

               <div className='border border-[#94a3b879] h-[500px] my-4 rounded-md px-5 overflow-scroll'>
              
                  {!isLoading && isEmpty(data.gallery) ?
                     <div className="emppty-pro-boc">
                       <div className="dashbor-text">Your Uploaded files is Empty!</div>
                       <div className="pro-simple">
                         You do not have any uploaded files yet.
                       </div>
                     </div>
                     :
                     <div className="nonempty-pro-container">
                       {isLoading ? 
                         'Loading...'  
                         : 
                         data.gallery.map((item) => {
                           return <UploadCard item={item} onChange={onChange} setGallery={setGallery} Gallery={Gallery} setMeta={setMeta} Meta={Meta} setThumb={setThumb} Thumb={Thumb}/>
                         })
                       }
                     </div>
                  }
               </div>
            </div>
            }
            <div className={`h-[10%] w-full px-4 flex ${tab ? 'justify-between' : 'justify-end'} items-center`}>
               {tab ?
               <div className='flex w-[40%] gap-5 items-center'>
                  <div className=''>
                     <h4 className='font-bold text-[#001229]'>{Gallery.length} file(s) Selected</h4>
                     <h5 className='font-bold text-[#CA0505]'>Clear</h5>
                  </div>

                  <div className='flex gap-3'>
                     <PrimaryButton 
                        isLoading = {iLoading}
                        name="Previous"
                        type={true}
                        classNameButton="h-[48px] w-[100px] rounded-md text-white bg-blue-400"
                        click = {addFiles}
                     />
                     <PrimaryButton 
                        isLoading = {iLoading}
                        name="Continue"
                        type={true}
                        classNameButton="h-[48px] w-[100px] rounded-md text-white bg-[#004399]"
                        click = {onClick}
                     />
                  </div>
               </div>
               :
               <div className='h-[48px] w-[40%]'>
                  <PrimaryButton 
                     isLoading = {iLoading}
                     name="Add File(s)"
                     type={true}
                     classNameButton="h-full w-full rounded-md text-white bg-red-600"
                     click = {addFiles}
                  />
               </div>
               }
            </div>
         </div>
      </div>
   )
}

export default UploadFileModal