import React from 'react';

const Blogs = () => {
    return (
        <div className='m-16'>
            <div className='p-4 m-4 bg-slate-200'>
            <h1 className='text-3xl font-bold p-3 pl-0'>What is Context API</h1>
            <p className='text-xl '>Context API replace the 'prop drill'. context api provide global variable that can acces all around the child components.</p>
            </div>
            <div className='p-4 m-4 bg-slate-200'>
            <h1 className='text-3xl font-bold p-3 pl-0'>What is Symentic Tag</h1>
            <p className='text-xl '>Semantic tag can describe the content that inclueds in the tag. such as: form tag, table tag etc.</p>
            </div>
            <div className='p-4 m-4 bg-slate-200'>
            <h1 className='text-3xl font-bold p-3 pl-0'>Difference Between Inline and Inline Block Elements</h1>
            <p className='text-xl '>Inline Elements allow to sit other Elements on the behind. On the otherhand, inline block elements not allow to sit in the behind others elements.</p>
            </div>
        </div>
    );
};

export default Blogs;