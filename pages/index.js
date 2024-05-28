import Image from 'next/image';

import { createClient } from 'contentful';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ,
    });

    const webTitleLogo_Res = await client.getEntries({
        content_type: 'webTitleLogo',
    });

    const sectionOne_Res = await client.getEntries({
        content_type: 'sectionOne',
    });

    const sectionSecond_Res = await client.getEntries({
        content_type: 'sectionSecond',
    });

    const sectionThree_Res = await client.getEntries({
        content_type: 'sectionThree',
    });

    const sectionFour_Res = await client.getEntries({
        content_type: 'sectionFour',
    })

    const sectionFive_Res = await client.getEntries({
        content_type: 'sectionFive',
    })

    const sectionSix_Res = await client.getEntries({
        content_type: 'sectionSix',
    })

    const sectionSeven_Res = await client.getEntries({
        content_type: 'sectionSeven',
    })

    const sectionEight_Res = await client.getEntries({
        content_type: 'sectionEight',
    })

    const sectionNine_Res = await client.getEntries({
        content_type: 'sectionNine'
    })

    const sectionTen_Res = await client.getEntries({
        content_type: 'sectionTen'
    })

    const sectionEleven_Res = await client.getEntries({
        content_type: 'sectionEleven'
    })

    const sectionTwelve_Res = await client.getEntries({
        content_type: 'sectionTwelve'
    })

    const sectionThirteen_Res = await client.getEntries({
        content_type: 'sectionThirteen'
    })

    const footer_Res = await client.getEntries({
        content_type: 'footer'
    })
    
    return {
        props: {
            webTitleLogo: webTitleLogo_Res.items,
            sectionOne: sectionOne_Res.items,
            sectionSecond: sectionSecond_Res.items,
            sectionThree: sectionThree_Res.items,
            sectionFour: sectionFour_Res.items,
            sectionFive: sectionFive_Res.items,
            sectionSix: sectionSix_Res.items,
            sectionSeven: sectionSeven_Res.items,
            sectionEight: sectionEight_Res.items,
            sectionNine: sectionNine_Res.items,
            sectionTen: sectionTen_Res.items,
            sectionEleven : sectionEleven_Res.items,
            sectionTwelve : sectionTwelve_Res.items,
            sectionThirteen : sectionThirteen_Res.items,
            footer : footer_Res.items
        },
    };
}

const Mainpro = ({ webTitleLogo, sectionOne,sectionSecond,sectionThree,sectionFour,sectionFive,sectionSix,sectionSeven,sectionEight,sectionNine,sectionTen,sectionEleven,sectionTwelve,sectionThirteen,footer }) => {
    // console.log(sectionOne[0].fields);
    const logoUrl = `https:${webTitleLogo[0].fields.logo.fields.file.url}`;
    const image1Url = `https:${sectionOne[0].fields.image[0].fields.file.url}`;
    const sectionOneBloggerImageUrl = `https:${sectionOne[0].fields.blogerImage.fields.file.url}`;
    const image2Url = `https:${sectionThree[0].fields.image[0].fields.file.url}`;
    const sectionThreeBloggerImageUrl = `https:${sectionThree[0].fields.blogerImage.fields.file.url}`;
    const image3Url = `https:${sectionFour[0].fields.image[0].fields.file.url}`;
    const image4Url = `https:${sectionFive[0].fields.image[0].fields.file.url}`;
    const image5Url = `https:${sectionSix[0].fields.image[0].fields.file.url}`;
    const image6Url = `https:${sectionSeven[0].fields.image[0].fields.file.url}`;
    const image7Url = `https:${sectionEight[0].fields.image[0].fields.file.url}`;
    const image8Url = `https:${sectionNine[0].fields.image[0].fields.file.url}`;
    const image9Url = `https:${sectionThirteen[0].fields.blogerImage.fields.file.url}`;
    const mini_image1Url = `https:${sectionTwelve[0].fields.image[0].fields.file.url}`;
    const mini_image2Url = `https:${sectionTwelve[0].fields.image[1].fields.file.url}`;
    const mini_image3Url = `https:${sectionTwelve[0].fields.image[2].fields.file.url}`;
    const mini_image4Url = `https:${sectionTwelve[0].fields.image[3].fields.file.url}`;
    const mini_image5Url = `https:${sectionTwelve[0].fields.image[4].fields.file.url}`;
    const mini_image6Url = `https:${sectionTwelve[0].fields.image[5].fields.file.url}`;
    const mini_image7Url = `https:${sectionTwelve[0].fields.image[6].fields.file.url}`;
    const mini_image8Url = `https:${sectionTwelve[0].fields.image[7].fields.file.url}`;
    const mini_image9Url = `https:${sectionTwelve[0].fields.image[8].fields.file.url}`;
    const mini_image10Url = `https:${sectionTwelve[0].fields.image[9].fields.file.url}`;
    const mini_image11Url = `https:${sectionTwelve[0].fields.image[10].fields.file.url}`;
    const mini_image12Url = `https:${sectionTwelve[0].fields.image[11].fields.file.url}`;
    const mini_image13Url = `https:${sectionTwelve[0].fields.image[12].fields.file.url}`;
    return (
        <div className="landing_page">
            <section className='section-container'>
                <div className='image-container'>
                <Image
                        src={logoUrl}
                        alt={webTitleLogo[0].fields.logo.fields.title} width={50} height={50} />
                </div>
                <div className='text-container'>
                   <p className='heading-title'>{webTitleLogo[0].fields.title}</p>
                <p className='heading-small'>{webTitleLogo[0].fields.miniTitle}</p>
                 </div>
            </section>

            <section className="py-8 top_banner">
                <div id="main">
                    <div className='box box_1'>

                        <div className=' banner_innerbox'>
                            <div className='textContainer '>
                                <div className='contant_wrapper'>

                                    <h1 className=" large-text ">{sectionOne[0].fields.paraheading}</h1>
                                    <h2 className="mt-4 text-gray-600 small-text-main">
                                      {sectionOne[0].fields.detail}
                                    </h2>
                                    <button className='button'>{sectionOne[0].fields.buttontext}</button>
                                    <div className='icons'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width={20}
                                            height={20}
                                        >
                                            <path
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                fill="yellow"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width={20}
                                            height={20}
                                        >
                                            <path
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                fill="yellow"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width={20}
                                            height={20}
                                        >
                                            <path
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                fill="yellow"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width={20}
                                            height={20}
                                        >
                                            <path
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                fill="yellow"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            width={20}
                                            height={20}
                                        >
                                            <path
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                fill="yellow"
                                            />
                                        </svg>
                                        | <p className='rateing'>AI- driven</p> | <p className='rateing'>Comprehensive solution</p>
                                    </div>
                                    <p className='comment'>
                                        “HrPro has revolutionised our HR operations. It saves us time and allows us to focus on strategic HR initiatives. - HR Manager”
                                    </p>
                                    <div className='image-container profile_image_wrapper'>
                                    <Image src={sectionOneBloggerImageUrl}
                        alt={sectionOne[0].fields.blogerImage.fields.title} width={40} height={40} />  
                        <p className='comment_by'>
                                       Bram Jansen
                                    </p>  
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='box box_2'>


                        <div className=' banner-img'>
                            <div className='banner_side_bg'></div>
                            <div className='dot_svg'>

                                <svg class="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0" width="404" height="400" fill="none"
                                    viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20"
                                        height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4"
                                            class="text-accent-500/20 dark:text-accent-800" fill="rgb(124 58 18 / 20%)"></rect></pattern></defs>
                                    <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>
                            </div>
                            <Image src={image1Url}
                        alt={sectionOne[0].fields.image[0].fields.title} width={1200} height={880} />
                        </div>
                    </div>


                </div>
            </section>

            <section className='key-feature-container key-feature'>
                <div className='key-feature-text-container'>
                    <p className='key-feature-heading-title'>{sectionSecond[0].fields.heading}</p>
                    <p className='key-feature-heading-small'>{sectionSecond[0].fields.description}</p>
                </div>
            </section>

            <section className="py-8">
                <div className='bg-white shadow-lg p-8 rounded-lg ai_recruitment_container'>
                    <div className='ai_imageContainer'>
                        <Image src={image2Url}
                        alt={sectionThree[0].fields.image[0].fields.title} width={650} height={365} />
                    </div>
                    <div className='ai_portal_rapper'>
                        <h2 className='recruitment-portal-heading'>{sectionThree[0].fields.heading}</h2>
                        <p className="mt-0 text-gray-600 small-text">
                           {sectionThree[0].fields.description}
                        </p>
                        <hr></hr>
                        <div className='ai_blog_wrapper'>
                            <p className='ai_potal_blog'>
                                “Recruitment Portal: Transparent, supportive, and top-notch. Highly recommended!”
                            </p>
                            <p><span className="ai_potal_bloger_name">Anouk de Boer </span> <span className="ai_bloger_designation">(Business Owner)</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Cloud-Based">
                <div className='bg-white shadow-lg p-8 rounded-lg section_five_wrapper'>
                    <div className='section_five_wrapper_textContainer'>
                        <h1 className='section_five_heading'>{sectionFour[0].fields.heading}</h1>
                        <p className="mt-4 text-gray-600 small-text">
                        {sectionFour[0].fields.description}
                        </p>
                        <hr></hr>
                        <div></div>
                        <p className='comment'>
                            “HrPro&apos;s Cloud Software: Efficient, integrated, and indispensable for modern businesses.”
                        </p>
                        <p className='comment_by'>
                            Pieter de Vries (SME Owner)
                        </p>
                    </div>
                    <div className='section_five_imageContainer'>
                        <Image src={image3Url}
                        alt={sectionFour[0].fields.image[0].fields.title}
                        width={650.5} height={365.91} />
                    </div>
                </div>
            </section>

            <section className="Academic_sec">
                <div className='bg-white shadow-lg p-8 rounded-lg container'>
                    <div className='imageContainer'>
                        <Image src={image4Url}
                        alt={sectionFive[0].fields.image[0].fields.title} width={600} height={400} />
                    </div>
                    <div className='textContainer'>
                        <h1 className='recruitment-portal-heading'>{sectionFive[0].fields.heading}</h1>
                        <p className="mt-4 text-gray-600 small-text">
                          {sectionFive[0].fields.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 Choose_HrPro">
                <div className='bg-white shadow-lg p-8 rounded-lg container'>
                    <div className='textContainer'>
                        <h1 className='recruitment-portal-heading'>{sectionSix[0].fields.heading}</h1>
                        <p className="mt-4 text-gray-600 small-text">
                            {sectionSix[0].fields.description}
                        </p>
                        <p className='comment'>
                            
                        {sectionSix[0].fields.point1.split(':')[0]}: <span>{sectionSix[0].fields.point1.split(':')[1]}</span>
                        </p>
                        <p className='comment'>
                        {sectionSix[0].fields.point2.split(':')[0]}: <span>{sectionSix[0].fields.point2.split(':')[1]}</span>
                        </p>
                        <p className='comment'>
                        {sectionSix[0].fields.point3.split(':')[0]}: <span>{sectionSix[0].fields.point3.split(':')[1]}</span>
                        </p>
                        <p className='comment'>
                        {sectionSix[0].fields.point4.split(':')[0]}: <span>{sectionSix[0].fields.point4.split(':')[1]}</span>
                        </p>
                        <p className='comment'>
                        {sectionSix[0].fields.point5.split(':')[0]}: <span>{sectionSix[0].fields.point5.split(':')[1]}</span>
                        </p>
                        <hr></hr>
                        <p className='comment'>
                            “Simplified and user-friendly. The cloud-based HR software has proven to be a straightforward solution for our SME.”
                        </p>
                        <p className='comment_by'>
                            Lars van der Berg (Business Owner)
                        </p>
                    </div>
                    <div className='mobile'>
                        <Image src={image5Url}
                        alt = {sectionSix[0].fields.image[0].fields.title} width={600} height={600} />
                    </div>
                </div>
            </section>

            <section className=" Interactive_sec Interactive_Demo">
                <div className='bg-white shadow-lg p-8 rounded-lg container'>
                    <div className=' img_wrapper'>
                        <Image src={image6Url}
                        alt = {sectionSeven[0].fields.image[0].fields.title} width={600} height={600} />
                    </div>
                    <div className='text_wrapper  '>
                        <h1 className='recruitment-portal-heading'>{sectionSeven[0].fields.heading}</h1>
                        <p className="mt-4 text-gray-600 small-text">
                          {sectionSeven[0].fields.description}
                        </p>
                        <button className='button'>{sectionSeven[0].fields.buttontext}</button>
                    </div>
                </div>
            </section>

            <section className="py-8 Interactive_sec About_HrPro">
                <div className='bg-white shadow-lg p-8 rounded-lg container'>
                    <div className='text_wrapper'>
                        <h1 className='recruitment-portal-heading'>{sectionEight[0].fields.heading}</h1>
                        <p className="mt-4 text-gray-600 small-text">
                            {sectionEight[0].fields.description}
                        </p>
                        <button className='button'>{sectionEight[0].fields.buttontext}</button>
                    </div>
                    <div className='img_wrapper'>
                        <Image src={image7Url} 
                        alt={sectionEight[0].fields.image[0].fields.title}
                        width={800} height={600} />
                    </div>
                </div>
            </section>

            <section className="Get_in_Touch Interactive_sec">
                <div className='bg-white shadow-lg p-8 rounded-lg container'>
                    <div className='img_wrapper'>
                        <Image src={image8Url}
                        alt={sectionNine[0].fields.image[0].fields.title}
                        width={600} height={400} />
                    </div>
                    <div className='text_wrapper'>
                        <h1 className='recruitment-portal-heading'>{sectionNine[0].fields.heading}</h1>
                        <p className="mt-4 text-gray-600 small-text">
                            {sectionNine[0].fields.description}
                        </p>
                        <button className='button'>{sectionNine[0].fields.buttontext}</button>
                    </div>
                </div>
            </section>

            <section className=' slider_slider'>
                <div className='dot_svg'>

                    <svg class="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0" width="404" height="400" fill="none"
                        viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20"
                            height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4"
                                class="text-accent-500/20 dark:text-accent-800" fill="red"></rect></pattern></defs>
                        <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>
                </div>
                <div className='key-feature-text-container'>
                    <p className='key-feature-heading-title'>{sectionTen[0].fields.blog}</p>
                    <div className='image-container profile_image_wrapper'>
                        <Image src="/assets/images/profile_pic.jpg" alt="Description of the image" width={50} height={50} />
                        <div className='img_txt'>
                            <h3>{sectionTen[0].fields.blogername.split('(')[0]}</h3>
                            <p>({sectionTen[0].fields.blogername.split('(')[1]}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 Questions_sec">
                <div className='key-feature-text-container'>
                    <div className='ques_heading'>
                        <h1 className='recruitment-portal-heading'>{sectionEleven[0].fields.heading}</h1>
                    </div>
                    <div className='border_bottom'>

                        <p className='comment'>
                            {sectionEleven[0].fields.que1}
                        </p>
                        <p className='comment_by'>
                        {sectionEleven[0].fields.ans1}
                        </p>
                    </div>
                    <div className='border_bottom'>

                    <p className='comment'>
                            {sectionEleven[0].fields.que2}
                        </p>
                        <p className='comment_by'>
                        {sectionEleven[0].fields.ans2}
                        </p>
                    </div>
                    <div className='border_bottom'>

                    <p className='comment'>
                            {sectionEleven[0].fields.que3}
                        </p>
                        <p className='comment_by'>
                        {sectionEleven[0].fields.ans3}
                        </p>
                    </div>
                </div>
            </section>

            <section className='get_start_wrapper'>
                <div className='banner_side_bg'></div>

                <div className='dot_svg'>
                    <svg class="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0" width="404" height="400" fill="none"
                        viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20"
                            height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4"
                                class="text-accent-500/20 dark:text-accent-800" fill="rgb(124 58 18 / 20%)"></rect></pattern></defs>
                        <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>
                </div>
                <div className='key-feature-container get_start'>

                    <div className='key-feature-text-container'>
                        <div style={{ marginBottom: "4rem" }} className='multi-img'>
                            <div className='image-container image_wrapper'>
                                <Image src={mini_image1Url}
                                alt={sectionTwelve[0].fields.image[0].fields.title} width={50} height={50} />
                                <Image src={mini_image2Url}
                                alt={sectionTwelve[0].fields.image[1].fields.title} width={50} height={50} />
                                 <Image src={mini_image3Url}
                                alt={sectionTwelve[0].fields.image[2].fields.title} width={50} height={50} />
                                 <Image src={mini_image4Url}
                                alt={sectionTwelve[0].fields.image[3].fields.title} width={50} height={50} />
                                 <Image src={mini_image5Url}
                                alt={sectionTwelve[0].fields.image[4].fields.title} width={50} height={50} />
                                 <Image src={mini_image6Url}
                                alt={sectionTwelve[0].fields.image[5].fields.title} width={50} height={50} />
                                 <Image src={mini_image7Url}
                                alt={sectionTwelve[0].fields.image[6].fields.title} width={50} height={50} />
                            </div>
                            <div className='image-container image_wrapper second_wreapper'>
                            <Image src={mini_image8Url}
                                alt={sectionTwelve[0].fields.image[7].fields.title} width={50} height={50} />
                                 <Image src={mini_image9Url}
                                alt={sectionTwelve[0].fields.image[8].fields.title} width={50} height={50} />
                                 <Image src={mini_image10Url}
                                alt={sectionTwelve[0].fields.image[9].fields.title} width={50} height={50} />
                                 <Image src={mini_image11Url}
                                alt={sectionTwelve[0].fields.image[10].fields.title} width={50} height={50} />
                                 <Image src={mini_image12Url}
                                alt={sectionTwelve[0].fields.image[11].fields.title} width={50} height={50} />
                                 <Image src={mini_image13Url}
                                alt={sectionTwelve[0].fields.image[12].fields.title} width={50} height={50} />

                            </div>
                        </div>
                        <p className='key-feature-heading-title'>{sectionTwelve[0].fields.heading}</p>
                        <p className='key-feature-heading-small'>{sectionTwelve[0].fields.description}</p>
                        <button className='button'>{sectionTwelve[0].fields.buttontext}</button>
                        <div className='bg_left'></div>
                        <div className='bg_right'></div>
                    </div>
                </div>
            </section>
            <section className='Pioneering'>
                <div className='key-feature-container '>
                    <div className='key-feature-text-container'>
                        <p className='key-feature-heading-title'>{sectionThirteen[0].fields.heading}</p>
                        <div className='profile_wrapper'>
                            <p className='key-feature-heading-small'>{sectionThirteen[0].fields.description}</p>
                            <div className='image-container profile_image_wrapper'>
                                <Image src={image9Url}
                                 alt={sectionThirteen[0].fields.blogerImage.fields.title} width={50} height={50} />
                                <div className='img_txt'>
                                    <h3>{sectionThirteen[0].fields.blogerName}</h3>
                                    <p>{sectionThirteen[0].fields.bloger_Designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='footer '>
                <div className='key-feature-container '>
                    <div className='text-container' style={{ paddingTop: "5rem" }}>
                        <small className=''>{footer[0].fields.link1}</small>
                        <small className='' style={{ marginLeft: "2rem" }}>{footer[0].fields.link2}</small>
                    </div>
                    <div style={{ margin: " 3rem 0px " }} className='social_media_icon'>
                        <svg width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="h-6 w-6">
                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"></path></svg>
                        <span style={{ marginLeft: 30 }}>

                            <svg width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="h-6 w-6"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"></path></svg>
                        </span>
                    </div>
                    <div className='input_wrapper'>
                        <input className='input_field' type='text' placeholder='Enter your mail' />
                        <button className='button'>{footer[0].fields.buttontext}</button>


                    </div>
                    <div className='text-container' style={{ paddingTop: "2rem" }}>
                        <small className='' style={{ color: "#64748b" }}>{footer[0].fields.lowerText}</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Mainpro