import React from 'react';

import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetails = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:max-0">
                        <ProductDetailsCarousel />
                    </div>

                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2">
                            Product Title
                        </div>

                        <div className="text-lg font-semibold mb-5">
                            Type of shoes
                        </div>

                        <div className="text-lg font-semibold">
                            MRP : 80 hazaar
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>


                        <div className="mb-10">
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 6
                                </div>
                            </div>

                            <div className="text-red-600 mt-1">
                                Size Selection is required
                            </div>
                        </div>

                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>
                        
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Wishlist
                            <AiOutlineHeart size={20}/>
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor massa in enim pulvinar, at sollicitudin nunc dignissim. Vivamus id urna dignissim, dignissim est a, aliquam odio. Sed faucibus risus vel libero rutrum hendrerit. Nullam euismod semper mi, eget tincidunt eros ultrices sit amet.
                            </div>
                            <div className="text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor massa in enim pulvinar, at sollicitudin nunc dignissim. Vivamus id urna dignissim, dignissim est a, aliquam odio. Sed faucibus risus vel libero rutrum hendrerit. Nullam euismod semper mi, eget tincidunt eros ultrices sit amet.
                            </div>
                        </div>
                    </div>
                </div>
                
                <RelatedProducts />
            </Wrapper>
        </div>
    )
}

export default ProductDetails;