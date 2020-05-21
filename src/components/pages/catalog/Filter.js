/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import '../../../assets/styles/filter.scss'



function Filter() {

    const Size = () => (
        <>
            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="4" id="" />
                </span>
                <span className='filter-name'> S </span>
                <span className='filter-value'>(1)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="6" id="" />
                </span>
                <span className='filter-name'> M </span>
                <span className='filter-value'>(59)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="8-10" id="" />
                </span>
                <span className='filter-name'> L </span>
                <span className='filter-value'>(100)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="10" id="" />
                </span>
                <span className='filter-name'> XL </span>
                <span className='filter-value'>(59)</span>
            </div>
        </>
    );


    const Price = () => (
        <>
            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="" id="" />
                </span>
                <span className='filter-name'> 0 € to 10 € </span>
                <span className='filter-value'>(70)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="6" id="" />
                </span>
                <span className='filter-name'> 10 € to 20 € </span>
                <span className='filter-value'>(59)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="8-10" id="" />
                </span>
                <span className='filter-name'> 20 € to 50 €  </span>
                <span className='filter-value'>(10)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="8-10" id="" />
                </span>
                <span className='filter-name'> 50 € to 100 €  </span>
                <span className='filter-value'>(10)</span>
            </div>

            <div className='filter-pricerange'>
                <div className="price-range__item1">
                    <div>
                        <span>
                            From
                            €
                        </span>
                        <span className='filter-input'>
                            <input className='filter-input' type="text" pattern="[0-9]+([,.][0-9]{0,2})?" />
                        </span>
                    </div>
                </div>

                <div className="price-range__item2">
                    <div>
                        <span>
                            To
                            €
                        </span>
                        <span className='filter-input'>
                            <input className='filter-input' type="text" pattern="[0-9]+([,.][0-9]{0,2})?" />
                        </span>
                    </div>
                </div>
            </div>

            <a href='#'> <button className='btn-price' type="submit" id="" >Apply</button></a>
        </>
    );


    const Colour = () => (
        <>
            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="4" id="" />
                </span>
                <span className='filter-name'> Brown </span>
                <span className='filter-value'>(1)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="6" id="" />
                </span>
                <span className='filter-name'> Green </span>
                <span className='filter-value'>(5)</span>
            </div>
            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="8-10" id="" />
                </span>
                <span className='filter-name'> Grey </span>
                <span className='filter-value'>(10)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="10" id="" />
                </span>
                <span className='filter-name'> Multi </span>
                <span className='filter-value'>(9)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="12" id="" />
                </span>
                <span className='filter-name'> Pink </span>
                <span className='filter-value'>(50)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="12-14" id="" />
                </span>
                <span className='filter-name'> Purple </span>
                <span className='filter-value'>(10)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="12-14" id="" />
                </span>
                <span className='filter-name'> Red </span>
                <span className='filter-value'>(1)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="14" id="" />
                </span>
                <span className='filter-name'> White </span>
                <span className='filter-value'>(100)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="16" id="" />
                </span>
                <span className='filter-name'> Yellow</span>
                <span className='filter-value'> (5) </span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="16-18" id="" />
                </span>
                <span className='filter-name'> Nude </span>
                <span className='filter-value'> (58) </span>
            </div>
        </>
    );


    const Fabric = () => (
        <>
            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="4" id="" />
                </span>
                <span className='filter-name'> Chiffon </span>
                <span className='filter-value'>(6)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="6" id="" />
                </span>
                <span className='filter-name'> Cotton </span>
                <span className='filter-value'>(300)</span>
            </div>
            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="8-10" id="" />
                </span>
                <span className='filter-name'> Lace </span>
                <span className='filter-value'>(10)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="10" id="" />
                </span>
                <span className='filter-name'> Linen </span>
                <span className='filter-value'>(9)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="12" id="" />
                </span>
                <span className='filter-name'> Organza </span>
                <span className='filter-value'>(50)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="12-14" id="" />
                </span>
                <span className='filter-name'> Polyester </span>
                <span className='filter-value'>(10)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="12-14" id="" />
                </span>
                <span className='filter-name'> Satin </span>
                <span className='filter-value'>(1)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="14" id="" />
                </span>
                <span className='filter-name'> Spantex </span>
                <span className='filter-value'>(100)</span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="16" id="" />
                </span>
                <span className='filter-name'> Tweed </span>
                <span className='filter-value'> (5) </span>
            </div>

            <div className='filter-item'>
                <span><input className='selectableFilter' type="checkbox" name="16-18" id="" />
                </span>
                <span className='filter-name'> Velvet </span>
                <span className='filter-value'> (58) </span>
            </div>
        </>
    );


    const SortBy = () => (

        <>
            <label htmlFor='' >
                <h2 className='filter-title'>
                    sort by
                </h2>
            </label>
            <select className='filter-dropdown'>
                <option value="recommended">Recommended</option>
                <option value="brand_asc">Brand (A To Z)</option>
                <option value="brand_desc">Brand (Z To A)</option>
                <option value="best_selling"> Best selling </option>
                <option value="name"> Name </option>
                <option value="newest"> Newest </option>
                <option value="price_desc">Price (High To Low)</option>
                <option value="price_desc">Price (Low To High)</option>
            </select>
        </>
    )


    return (

        <div className='filter__container'>

            <h2 className='filter-title'>filters</h2>

            <Accordion atomic={false}>

                <AccordionItem title="size">
                    <Size />
                </AccordionItem>

                <AccordionItem title="price">
                    <Price />
                </AccordionItem>

                <AccordionItem title="colour">
                    <Colour />
                </AccordionItem>

                <AccordionItem title="fabric">
                    <Fabric />
                </AccordionItem>

            </Accordion>

            <>
                <SortBy />
            </>

        </div>
    )
}

export default Filter

