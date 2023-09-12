"use client";
import React from 'react'

export default function Invoice() {
    let funprint = () => {
        window.print()
    }
 
    return (
        <div className='bg-white p-2 rounded'>
            <h5>Invoice Detail...</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, pariatur nisi suscipit culpa beatae quisquam quod sed doloremque maxime impedit ipsum reiciendis dignissimos eum porro iusto quam aliquam molestias laudantium autem. Inventore tempore ullam hic iste quisquam adipisci et quo nisi ad dolore! Deleniti labore id doloremque. Mollitia ullam facere reiciendis delectus minus odit optio reprehenderit repudiandae. Nam excepturi quae doloribus non totam quisquam veritatis. Accusamus numquam neque ipsum fugiat quo. Pariatur tempore fuga culpa non eveniet voluptas id, quas alias vel doloribus ullam aliquam omnis officia deserunt, tenetur similique veritatis repellendus quibusdam minus et distinctio, illum ratione possimus. Voluptatem necessitatibus laboriosam sunt non officia architecto ratione eveniet fugiat vero at voluptas reiciendis autem odit molestiae consectetur aut, ullam quasi rerum. Expedita omnis quia accusamus inventore. Quo, sapiente eaque, laboriosam quibusdam dolore hic aut autem, possimus similique corporis laborum nostrum porro incidunt deleniti itaque accusantium veritatis! Quasi necessitatibus magni neque fugit eum est voluptates voluptate sed qui explicabo delectus a amet nesciunt, accusantium ipsam mollitia deserunt. Rerum obcaecati natus odit modi quibusdam delectus commodi quis optio? Tenetur, cum, laboriosam dignissimos impedit voluptatum, natus ex laudantium quibusdam eaque consequatur autem quisquam! Quae ab repellendus unde, inventore doloribus adipisci enim optio facere.</p>

            <div id='printablediv'>

                <table className='table'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Phone</td>
                            <td width={200} className='text-center'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Khouayue</td>
                            <td>020-78149878</td>
                            <td className='flex justify-center gap-2'>SSS
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Khouayue</td>
                            <td>020-78149878</td>
                            <td className='flex justify-center gap-2'>SSS
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Khouayue</td>
                            <td>020-78149878</td>
                            <td className='flex justify-center gap-2'>SSS
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <button className='btn btn-secondary my-2' onClick={funprint} >
                    <i className='fa fa-print'></i>
                    Print
                </button>
            </div>
        </div>
    )
}
