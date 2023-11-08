import React, { useEffect, useState } from 'react'
import NoSideLayout from '../../../layout/NoSideLayout'
import { ActionInput, DatePicker, DatePickerCustom, PrimaryInput, TextAreaInput } from '../../../common/Inputs'
import { DropdownDefault } from '../../../common/Dropdown'
import Tags from './Tags'
import ToggleSwitch from '../../../dashComponents/ToggleSwitch'
import ThumbNail from './ThumbNail'
import { RxCross2 } from 'react-icons/rx'
import {  useCategory, useTags } from '../../../../helper/api-hooks/useGeneral'
import { FaAngleRight } from 'react-icons/fa'
import UploadFileModal from '../../../dashComponents/modal/uploadFileModal'
import {  useGlobalState } from '../../../common/store'
import isEmpty from '../../../../utils/isEmpty'
import Variant from './Variant'
import Editor from './Editor'
import { PrimaryButton } from '../../../common/Button'
import Loader from '../../../common/Loader'

const AddProduct = () => {
   const { data , isLoading , refetch} = useCategory();
   const { fetch } = useTags();
   useEffect(() => {
      if (!data?.category) {
        refetch(); 
      }
   }, [])
   console.log(fetch)
   const [tags , setTags] = useState([]);
   const [tagColor] = useState([
      "#FEF8F3",
      "#F3F3F3",
      "#F0FEF9",
      "#F0FEF2",
      "#F0FEF7"
   ])
   const [isOpenTags ,setPrevTags] = useState(true)
   const [isUploadOpen ,setUpload] = useState(false)
   const [UploadType ,setUploadType] = useState('')
   const [Gallery , setGallery] = useState([])
   const [Thumb , setThumb] = useState([])
   const [Meta , setMeta] = useState([])
   const [attributes , setAttribute] = useGlobalState('attributes')
   const [colors , setColor] = useGlobalState('colors')
   const [size , setSize] = useGlobalState('size')
   const [gender, setGender] = useGlobalState('gender')
   const Gender = [
      {name : 'Male'},
      {name : 'Female'}
   ]

   const Size = [
      {name : 43},
      {name : 42},
      {name : 'XL'},
      {name : 'XXL'},
      {name : 'M'}
   ]

   const Color = [
      {'name' : 'Red' , 'color' : 'red'},
      {'name' : 'Blue' , 'color' : 'blue'},
      {'name' : 'Green' , 'color' : 'green'},
      {'name' : 'Orange' , 'color' : 'orange'},
      {'name' : 'Pink' , 'color' : 'pink'},
      {'name' : 'Black' , 'color' : 'black'},
      {'name' : 'White' , 'color' : 'white'}
   ]
   const [information , setInformation] = useState({
      productName : "",
      
   })
   
   return (
      <NoSideLayout>
         <div className='px-32 py-8 flex justify-between gap-4 w-full'>
            <div className='w-[70%] flex flex-col gap-6'>
               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT INFORMATION</p>
                     <span className='text-[#94A3B8] font-medium'>(important)</span>
                  </div>
                  <div className='flex flex-col'>
                     <PrimaryInput 
                        placeholder={'E.g., Crunchy Chin-Chin'} 
                        label={'Product Name'} 
                        className={'w-full  flex flex-col gap-1 py-4'}
                        onChange={() => setInformation()}
                     />
                     <DropdownDefault 
                        placeholder={'Select a Category...'} 
                        label={'Category'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        zIndex = 'z-30'
                        TypeOf={'Category'}
                        options={
                           !isLoading &&  data?.category
                        }
                     />
                     <DropdownDefault 
                        placeholder={'Select a Brand...'} 
                        label={'Brand'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        Multiple={true}
                        TypeOf={'Brand'}
                        zIndex = 'z-20'
                        options={
                           !isLoading &&  data?.brand
                        }
                     />
                     <PrimaryInput 
                        placeholder={'E.g., Kg, Pc, e.t.c'} 
                        label={'Unit'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />
                     

                     <PrimaryInput 
                        placeholder={'E.g., 1'} 
                        type={'number'}
                        label={'Minimum Purchase Qty'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />

                     <PrimaryInput 
                        placeholder={'Type and click “enter” to add a tag...'} 
                        type={'text'}
                        label={'Tags'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                        Tags={tags}
                        setTags={setTags}
                        enterOption={true}
                     />
                     <div className='flex gap-2 pp-4 flex-wrap'>
                        {tags.map((item , index) => {
                           return <Tags setTags={setTags} Tags={tags} index={index} color={tagColor[Math.floor(Math.random() * 4)]} name={item}/>
                        })}
                        {/* <Tags color={'#FEF8F0'} name="Food"/>
                        <Tags color={'#F3F3F3'} name="Small chops"/>
                        <Tags color={'#F0FEF9'} name="Bags"/> */}
                     </div>
                    
                     <div className='flex justify-between items-center'>
                        <h3 className='text-[#94A3B8] text-sm p-4'>Previously used tags</h3>
                        {isOpenTags ?
                        <span className='cursor-pointer' onClick={() => setPrevTags(false)}>
                           <RxCross2 size={13} />
                        </span>
                        :
                        <span className='cursor-pointer' onClick={() => setPrevTags(true)}>
                           <FaAngleRight size={13} />
                        </span>
                        } 
                     </div>
                    
                     {isOpenTags &&
                     <div className='flex gap-2 p-2 flex-wrap'>
                        {fetch && fetch.map((items) => {
                           return (
                              items.tags.map((item , index) => {
                                 return <Tags setTags={setTags} prevTags={true} Tags={tags} index={index} color={tagColor[Math.floor(Math.random() * 4)]} name={item}/>
                              })
                           )
                        })}
                     </div>
                     }
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT IMAGES</p>
                     <span className='text-[#94A3B8] font-medium'>(important)</span>
                  </div>

                  <div className='flex flex-col gap-3 w-full'>
                     <ActionInput
                        label={'Gallary Images'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                        onClick={() => setUpload(true) || setUploadType('Gallery')}
                     />
                     {Gallery &&
                     <div className='flex gap-4 flex-wrap'>
                        {
                           Gallery.map((item, index) => {
                              return <ThumbNail item={item} index={index} setGallery={setGallery} Gallery={Gallery} />
                           })
                        }
                     </div>
                     }
                  </div>

                  <div className='flex flex-col gap-3 w-full'>
                     <ActionInput
                        label={'Thumbnail Image'}
                        option={'Recommended (1:1 aspect ratio)'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                        onClick={() => setUpload(true) || setUploadType('Thumb')}
                     />
                     {Thumb &&
                     <div className='flex gap-4 flex-wrap'>
                        {
                           Thumb.map((item, index) => {
                              return <ThumbNail item={item} index={index} setThumb={setThumb} Thumb={Thumb}/>
                           })
                        }
                     </div>
                     }
                  </div>

                  
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT VIDEOS</p>
                  </div>

                  <div className='flex flex-col'>
                     <DropdownDefault 
                        placeholder={'Youtube'} 
                        label={'Video Provider'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        zIndex={'z-30'}
                        options={[
                           {'name' : 'Dailymotion'},
                           {'name' : 'Vimeo'},
                           {'name' : 'Youtube'},
                        ]}
                     />
                     <PrimaryInput 
                        placeholder={'https://'} 
                        label={'Video Link'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                     />
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT VARIATION</p>
                  </div>

                  <div className='flex flex-col'>
                     <DropdownDefault 
                        placeholder={'Select Color'} 
                        label={'Colors'} 
                        className={'w-full flex flex-col gap-1 py-2'} 
                        disabled='true'
                        activator={true}
                        Multiple={true}
                        zIndex={'z-40'}
                        TypeOf={'Colors'}
                        setColor ={setColor}
                        colors = {colors}
                        options={Color}
                        info={true}
                        infoText={"Activate/deactivate with the toggle button above the input field"}
                     />
                     <DropdownDefault 
                        placeholder={'Select Attributes'} 
                        label={'Attributes'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        zIndex={'z-30'}
                        Multiple={true}
                        TypeOf={'Attributes'}
                        setAttribute={setAttribute}
                        attributes={attributes}
                        options={[
                           {'name' : 'Gender' , 'id' : '41'},
                           {'name' : 'Size' , 'id' : '42'},
                        ]}
                        info={true}
                        infoText={"Choose the attributes of the product and then input their respective values"}
                     />
                     {!isEmpty(attributes) &&
                        attributes.map((item) => {
                           switch(item) {
                              case 'Gender':
                                 var Opt = Gender
                              break;
                              case 'Size':
                                 var Opt = Size
                           }
                           return (
                              
                              <DropdownDefault 
                                 placeholder={`Select ${item}`} 
                                 label={item} 
                                 className={'w-full flex flex-col gap-1 py-4'} 
                                 disabled='true'
                                 Multiple={true}
                                 gender= {gender}
                                 setGender={setGender}
                                 size={size}
                                 setSize={setSize}
                                 TypeOf={item}
                                 zIndex={'z-20'}
                                 options={
                                    Opt
                                 }
                              />
                           )
                        })
                     }
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT PRICE + STOCK</p>
                  </div>

                  <div className='flex flex-col'>
                     <PrimaryInput 
                        placeholder={'12,500'} 
                        label={'Unit Price'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />
                     {/* <div className='relative w-full'>
                        <PrimaryInput 
                           placeholder={'Click to select date range'} 
                           label={'Discount Date Range'} 
                           className={'w-full flex flex-col gap-1 py-4'} 
                           type={'date'}
                        /> */}
                        <DatePickerCustom 
                           placeholder={'Click to select date range'} 
                           label={'Discount Date Range'} 
                           className={'w-full flex flex-col gap-1 py-4'} 
                        />
                     {/* </div> */}
                     

                     <div className='flex gap-3 w-full'>
                        <PrimaryInput 
                           placeholder={'0'} 
                           type={'number'}
                           label={'Discount'} 
                           className={'w-[200%]  flex flex-col gap-1 py-4'} 
                        />
                        <DropdownDefault 
                           placeholder={'Flat'} 
                           label={'Flat'} 
                           className={'w-[full] flex flex-col gap-1 py-4'} 
                           disabled='true'
                           options={[
                              {'name' : 'Flat'},
                              {'name' : 'Percentage'},
                           ]}
                        />

                     </div>
                     

                     <PrimaryInput 
                        placeholder={'https://'} 
                        type={'text'}
                        label={'External Link'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                        info={true}
                        infoText={"You can leave blank if you don’t have an external link"}
                     />
                     {!isEmpty(colors) &&
                        <div className='border border-[#94A3B8] rounded-[8px]'>
                           <div className='flex'>
                              <div className='w-[30%] border-r border-[#94A3B8] p-4'>
                                 <h2 className='font-bold text-[#1F3047]'>Variant</h2>
                              </div>
                              <div className='w-[60%] border-r border-[#94A3B8] p-4'>
                                 <h2 className='font-bold text-[#1F3047]'>Variant Price</h2>
                              </div>
                              <div className='w-[10%] p-3'>
                                 <h2 className='font-bold text-[#1F3047]'></h2>
                              </div>
                           </div>
                           

                           {isEmpty(size) && isEmpty(gender) &&
                                 colors.map((color , index) => (
                                    <Variant data={color} index={index} colors={colors} gender={gender} />  
                                 ))        
                           }
                           {isEmpty(gender) &&
                              colors.map((color , index) => (
                                 size.map((item) => (
                                    <Variant data={color+"-"+item} index={index} colors={colors} gender={gender} />  
                                 ))
                              )) 
                           } 
                           {!isEmpty(size) && !isEmpty(gender) &&
                              colors.map((color , index) => {
                                 return (
                                 size.map((item) => {
                                    return (
                                    gender.map((gender) => {
                                       return <Variant data={color +"-"+gender+"-"+item} index={index} colors={colors} gender={gender} />
                                    }
                                 ))})
                              )})
                           }
                           
                        </div>
                     }
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT DESCRIPTION</p>
                  </div>

                  <div className='flex flex-col h-[456px]'>
                     <Editor />
                  </div>
               </div>
               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PDF SPECIFICATION</p>
                  </div>

                  <div className='flex flex-col'>
                     <ActionInput
                        label={'Pdf Specification'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                     />
                  </div>
               </div>


               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>SE0 META TAGS</p>
                  </div>

                  <div className='flex flex-col'>
                     <PrimaryInput 
                        placeholder={'Meta Title'} 
                        type={'text'}
                        label={'Meta Title'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />

                     <TextAreaInput 
                        placeholder={'Meta Description'} 
                        type={'text'}
                        label={'Description'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                     />

                     <ActionInput
                        label={'Meta Image'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                        onClick={() => setUpload(true) || setUploadType('Meta')}
                     />
                     <div className='flex gap-4 flex-wrap'>
                        {Meta &&
                           Meta.map((item, index) => {
                              return <ThumbNail item={item} index={index} setMeta={setMeta} Meta={Meta}/>
                           })
                        }
                     </div>
                     <PrimaryInput 
                        placeholder={'Set attributes...'} 
                        type={'text'}
                        label={'Slug'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />

                  </div>
               </div>
               <div className='h-[48px] w-[40%]'>
                  <PrimaryButton
                     name="Add File(s)"
                     type={true}
                     classNameButton="h-full w-full rounded-md text-white bg-red-600"
                  />
                  </div>
            </div>
            <div className='w-[30%] gap-6 flex flex-col'>
               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px]'>SHIPPING CONFIGURATION</p>
                  <p className='py-4'>Shipping configuration is maintained by the Admin.</p>
               </div>
               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>LOW STOCK QUANTITY WARNING</p>
                  <PrimaryInput
                     label={'Quantity'}
                     placeholder={'E.g., 1'}
                     className={'w-full  flex flex-col gap-1 py-4'} 
                  />
               </div>

               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>STOCK VISIBILITY STATE</p>
                  <div className='flex flex-col gap-2'>
                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Show Stock Quantity</div>
                        <ToggleSwitch />
                     </div>

                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Show Stock with text only</div>
                        <ToggleSwitch />
                     </div>


                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Hide Stock</div>
                        <ToggleSwitch />
                     </div>
                  </div>
               </div>

               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>REFUND & CASH ON DELIVERY</p>
                  <div className='flex flex-col gap-2'>
                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Accept Refund</div>
                        <ToggleSwitch />
                     </div>

                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Accept Cash on Delivery</div>
                        <ToggleSwitch />
                     </div>
                  </div>
               </div>

               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>ESTIMATED PERIOD OF SHIPPING</p>
                  <ActionInput
                     label={'Shipping Days'}
                     placeholder={'E.g., 1'}
                     className={'w-[100%]  flex flex-col gap-1 py-4'} 
                     actionRight={'true'}
                     actionText={'Days'}
                  />
               </div>
            </div>
         </div>
         {isUploadOpen &&
            <UploadFileModal onChange={UploadType} onClick={() => setUpload(false)} setMeta={setMeta} Meta={Meta} setGallery={setGallery} Gallery={Gallery} setThumb={setThumb} Thumb={Thumb}/>
         }
      </NoSideLayout>
   )
}

export default AddProduct