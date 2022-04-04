import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h2>What Is Context API.?</h2>
            <p>
                Ans: Context API is a very powerful new feature in react application. Normally in React application, data is passed from grandparent to parent to child via props and required by many components within react application. But context api is the alternative of prop drilling or moving props from grandparent to parent to child. If we declare a function in grandparent, by using context api we use this function directly in child from grandparent by skipping parent. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children.
            </p>
            <br />
            <br />

            <h2>What Is Semantic Tag.?</h2>
            <p>
                Ans: In programming, Semantic tags are clearly define the purpose of the HTML element. It has meaningful names which tells about which type of the content it is. Such as header, article, main, nav, section, footer...etc are clearly describe their purpose and the type of content they should enclose.Semantic tags also help search engines to parse the webpage correctly and find accurate information. It is much easier to read and has a greater accessibility. Using semantic tags it gives many more hooks for styling the content.
            </p>
        </div>
    );
};

export default Blogs;