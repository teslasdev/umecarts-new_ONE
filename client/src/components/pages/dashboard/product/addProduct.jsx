import React from 'react'
import NoSideLayout from '../../../layout/NoSideLayout'
import { ActionInput, FormInput, PrimaryInput, TextAreaInput } from '../../../common/Inputs'
import { DropdownDefault } from '../../../common/Dropdown'
import Tags from './Tags'
import ToggleSwitch from '../../../dashComponents/ToggleSwitch'
import ThumbNail from './ThumbNail'

const AddProduct = () => {
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
                     />

                     

                     <DropdownDefault 
                        placeholder={'Select a Category...'} 
                        label={'Category'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        options={[
                           {'label' : 'Foods'},
                           {'label' : 'Shoes'},
                           {'label' : 'Bags'}
                        ]}
                     />

                     <DropdownDefault 
                        placeholder={'Select a Brand...'} 
                        label={'Branch'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        options={[
                           {'label' : 'Gucci'},
                           {'label' : 'Balenciaga'},
                           {'label' : 'Ok'}
                        ]}
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
                     />
                     <div className='flex gap-2 flex-wrap'>
                        <Tags color={'#FEF8F0'} name="Food"/>
                        <Tags color={'#F3F3F3'} name="Small chops"/>
                        <Tags color={'#F0FEF9'} name="Bags"/>
                     </div>
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
                     />

                     <div className='flex gap-4 flex-wrap'>
                        <ThumbNail />
                        <ThumbNail />
                        <ThumbNail />
                        <ThumbNail />
                        <ThumbNail />
                        <ThumbNail />
                        <ThumbNail />
                        <ThumbNail />
                     </div>
                  </div>

                  <div className='flex flex-col gap-3 w-full'>
                     <ActionInput
                        label={'Thumbnail Image'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                     />

                     <div className='flex gap-4 flex-wrap'>
                        <ThumbNail />
                     </div>
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
                        options={[
                           {'label' : 'Youtube'},
                           {'label' : 'Shoes'},
                           {'label' : 'Bags'}
                        ]}
                     />
                     <PrimaryInput 
                        placeholder={'Youtube'} 
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
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        options={[
                           {'label' : 'Youtube'},
                           {'label' : 'Shoes'},
                           {'label' : 'Bags'}
                        ]}
                     />
                     <DropdownDefault 
                        placeholder={'41,42,43'} 
                        label={'Attributes'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        options={[
                           {'label' : 'Youtube'},
                           {'label' : 'Shoes'},
                           {'label' : 'Bags'}
                        ]}
                     />
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

                     <PrimaryInput 
                        placeholder={'Click to select date range'} 
                        label={'Discount Date Range'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        type={'date'}
                     />

                     <div className='flex gap-3 w-full'>
                        <PrimaryInput 
                           placeholder={'0'} 
                           type={'number'}
                           label={'Discount'} 
                           className={'w-[70%]  flex flex-col gap-1 py-4'} 
                        />
                        <DropdownDefault 
                           placeholder={'Flat'} 
                           label={'Flat'} 
                           className={'w-[full] flex flex-col gap-1 py-4'} 
                           disabled='true'
                           options={[
                              {'label' : 'Foods'},
                              {'label' : 'Shoes'},
                              {'label' : 'Bags'}
                           ]}
                        />

                     </div>
                     

                     <PrimaryInput 
                        placeholder={'https://'} 
                        type={'text'}
                        label={'External Link'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />

                     
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

                     <ActionInput
                        label={'Meta Image'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                     />

                     <TextAreaInput 
                        placeholder={'Meta Description'} 
                        type={'text'}
                        label={'Description'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                     />

                     <PrimaryInput 
                        placeholder={'Set attributes...'} 
                        type={'text'}
                        label={'Slug'} 
                        className={'w-full  flex flex-col gap-1 py-4'} 
                     />

                  </div>
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
      </NoSideLayout>
   )
}

export default AddProduct