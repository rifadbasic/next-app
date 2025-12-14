import React from 'react'

export default async function AboutSlugPages( {params} ) {


    const p = await params;

    console.log(p);

  return (
    <div>
        <h1>About Slug Page</h1>
        <h1>{p.slugs}</h1>
    </div>
  )
}
